export interface RecaptchaVerificationResult {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export async function verifyRecaptcha(token: string): Promise<{
  valid: boolean;
  score?: number;
  error?: string;
}> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('[RECAPTCHA] Secret key not configured');
    return { valid: false, error: 'reCAPTCHA not configured' };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data: RecaptchaVerificationResult = await response.json();

    if (!data.success) {
      console.error('[RECAPTCHA] Verification failed:', data['error-codes']);
      return { 
        valid: false, 
        error: `reCAPTCHA verification failed: ${data['error-codes']?.join(', ')}` 
      };
    }

    // For reCAPTCHA v3, check the score (0.0 to 1.0)
    // Score < 0.5 is likely a bot
    const score = data.score || 0;
    const isValid = score >= 0.5;

    console.log(`[RECAPTCHA] Verification successful. Score: ${score}`);

    return {
      valid: isValid,
      score,
      error: isValid ? undefined : `Low confidence score: ${score}`
    };
  } catch (error) {
    console.error('[RECAPTCHA] Error during verification:', error);
    return { 
      valid: false, 
      error: 'reCAPTCHA verification request failed' 
    };
  }
}