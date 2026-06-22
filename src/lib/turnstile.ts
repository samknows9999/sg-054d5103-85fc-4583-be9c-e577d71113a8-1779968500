/**
 * Cloudflare Turnstile server-side verification
 */

interface TurnstileResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
}

export async function verifyTurnstile(token: string): Promise<{
  valid: boolean;
  error?: string;
}> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.warn('[TURNSTILE] ⚠ Secret key not configured - allowing submission');
    return { valid: true }; // Allow form submission if not configured
  }

  if (!token) {
    console.log('[TURNSTILE] ✗ No verification token provided');
    return {
      valid: false,
      error: 'No verification token provided'
    };
  }

  try {
    console.log('[TURNSTILE] → Sending verification request to Cloudflare...');
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
      }),
    });

    const data: TurnstileResponse = await response.json();
    console.log('[TURNSTILE] ← Cloudflare response received:', JSON.stringify(data, null, 2));

    if (!data.success) {
      console.log('[TURNSTILE] ✗ Verification failed:', data['error-codes']);
      return {
        valid: false,
        error: `Verification failed: ${data['error-codes']?.join(', ') || 'Unknown error'}`
      };
    }

    console.log('[TURNSTILE] ✓ Verification successful!');
    console.log(`[TURNSTILE] Challenge timestamp: ${data.challenge_ts}`);
    console.log(`[TURNSTILE] Hostname: ${data.hostname}`);
    return { valid: true };
  } catch (error) {
    console.error('[TURNSTILE] ✗ Verification error:', error);
    return {
      valid: false,
      error: error instanceof Error ? error.message : 'Verification failed'
    };
  }
}