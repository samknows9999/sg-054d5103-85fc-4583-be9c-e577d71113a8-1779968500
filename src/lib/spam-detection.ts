// Disposable email domains list (common ones)
const disposableEmailDomains = [
  '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'tempmail.com',
  'throwaway.email', 'yopmail.com', 'trashmail.com', 'getnada.com',
  'temp-mail.org', 'fakeinbox.com', 'maildrop.cc', 'sharklasers.com',
  'guerrillamail.info', 'grr.la', 'guerrillamail.biz', 'guerrillamail.de',
  'spam4.me', 'tempr.email', 'minutemail.com', 'emailondeck.com',
  'mohmal.com', 'crazymailing.com', 'dispostable.com', 'emailtemporario.com.br',
  'mailcatch.com', 'mintemail.com', 'mytempemail.com', 'spamgourmet.com',
  'mailnesia.com', 'mailnull.com', 'mvrht.com', '33mail.com'
];

// Common spam keywords
const spamKeywords = [
  'viagra', 'cialis', 'porn', 'xxx', 'casino', 'lottery', 'winner',
  'bitcoin', 'crypto', 'investment opportunity', 'earn money fast',
  'click here', 'buy now', 'limited time', 'act now', 'congratulations',
  'you have won', 'claim your prize', 'free money', 'work from home',
  'nigerian prince', 'inheritance', 'million dollars', 'enlarge',
  'weight loss', 'lose weight fast', 'make money online', 'get paid',
  'no credit check', 'debt consolidation', 'lowest price', 'special promotion'
];

// Suspicious patterns
const suspiciousPatterns = [
  /http:\/\//gi, // Unencrypted links (suspicious in forms)
  /\[url=/gi, // BBCode links
  /<a\s+href=/gi, // HTML links
  /\b(?:\d{1,3}\.){3}\d{1,3}\b/g, // IP addresses
  /(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+\.[a-z]{2,}/gi // Multiple URLs
];

export interface SpamCheckResult {
  isSpam: boolean;
  reasons: string[];
  score: number;
}

export function checkForSpam(data: {
  email?: string;
  companyName?: string;
  contactName?: string;
  financialConcerns?: string;
  phone?: string;
}): SpamCheckResult {
  const reasons: string[] = [];
  let score = 0;

  // Check disposable email
  if (data.email) {
    const emailDomain = data.email.split('@')[1]?.toLowerCase();
    if (emailDomain && disposableEmailDomains.includes(emailDomain)) {
      reasons.push('Disposable email provider detected');
      score += 50;
    }

    // Check for suspicious email patterns
    if (/^[a-z0-9]{20,}@/i.test(data.email)) {
      reasons.push('Suspicious email pattern (random characters)');
      score += 20;
    }
  }

  // Check spam keywords in all text fields
  const textContent = [
    data.companyName,
    data.contactName,
    data.financialConcerns
  ].filter(Boolean).join(' ').toLowerCase();

  for (const keyword of spamKeywords) {
    if (textContent.includes(keyword.toLowerCase())) {
      reasons.push(`Spam keyword detected: ${keyword}`);
      score += 30;
    }
  }

  // Check for suspicious patterns
  for (const pattern of suspiciousPatterns) {
    const matches = textContent.match(pattern);
    if (matches && matches.length > 2) {
      reasons.push('Multiple suspicious links detected');
      score += 25;
    }
  }

  // Check for excessive URLs
  const urlCount = (textContent.match(/https?:\/\//gi) || []).length;
  if (urlCount > 2) {
    reasons.push(`Excessive URLs detected (${urlCount})`);
    score += 20;
  }

  // Check for very short or nonsensical names
  if (data.contactName && data.contactName.length < 3) {
    reasons.push('Suspiciously short name');
    score += 15;
  }

  if (data.companyName && data.companyName.length < 2) {
    reasons.push('Suspiciously short company name');
    score += 15;
  }

  // Check for all caps (common spam tactic)
  if (data.financialConcerns && data.financialConcerns.length > 20) {
    const capsRatio = (data.financialConcerns.match(/[A-Z]/g) || []).length / data.financialConcerns.length;
    if (capsRatio > 0.5) {
      reasons.push('Excessive capital letters');
      score += 20;
    }
  }

  // Check phone number validity (basic check)
  if (data.phone && !/^[\d\s()+-]{7,}$/.test(data.phone)) {
    reasons.push('Invalid phone format');
    score += 10;
  }

  return {
    isSpam: score >= 50,
    reasons,
    score
  };
}

export function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return domain ? disposableEmailDomains.includes(domain) : false;
}