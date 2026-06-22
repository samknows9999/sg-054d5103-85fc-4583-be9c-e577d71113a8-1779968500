import { RateLimiterMemory } from 'rate-limiter-flexible';

// Rate limiter: 3 requests per 15 minutes per IP
const rateLimiterByIP = new RateLimiterMemory({
  points: 3,
  duration: 15 * 60, // 15 minutes
  blockDuration: 60 * 60, // Block for 1 hour if exceeded
});

// Rate limiter: 2 requests per hour per email
const rateLimiterByEmail = new RateLimiterMemory({
  points: 2,
  duration: 60 * 60, // 1 hour
  blockDuration: 2 * 60 * 60, // Block for 2 hours if exceeded
});

export interface RateLimitResult {
  allowed: boolean;
  reason?: string;
  retryAfter?: number;
}

export async function checkRateLimit(
  ip: string,
  email?: string
): Promise<RateLimitResult> {
  try {
    // Check IP rate limit
    await rateLimiterByIP.consume(ip);
    
    // Check email rate limit if provided
    if (email) {
      await rateLimiterByEmail.consume(email.toLowerCase());
    }
    
    return { allowed: true };
  } catch (rateLimiterRes: any) {
    const retryAfter = Math.round(rateLimiterRes.msBeforeNext / 1000) || 60;
    return {
      allowed: false,
      reason: 'Too many requests. Please try again later.',
      retryAfter
    };
  }
}

export async function getRemainingPoints(ip: string): Promise<number> {
  try {
    const res = await rateLimiterByIP.get(ip);
    return res ? res.remainingPoints : 3;
  } catch {
    return 3;
  }
}