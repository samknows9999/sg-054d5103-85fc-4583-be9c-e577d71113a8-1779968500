// Expanded disposable email domains list
const disposableEmailDomains = [
  '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'tempmail.com',
  'throwaway.email', 'yopmail.com', 'trashmail.com', 'getnada.com',
  'temp-mail.org', 'fakeinbox.com', 'maildrop.cc', 'sharklasers.com',
  'guerrillamail.info', 'grr.la', 'guerrillamail.biz', 'guerrillamail.de',
  'spam4.me', 'tempr.email', 'minutemail.com', 'emailondeck.com',
  'mohmal.com', 'crazymailing.com', 'dispostable.com', 'emailtemporario.com.br',
  'mailcatch.com', 'mintemail.com', 'mytempemail.com', 'spamgourmet.com',
  'mailnesia.com', 'mailnull.com', 'mvrht.com', '33mail.com',
  'armyspy.com', 'cuvox.de', 'dayrep.com', 'einrot.com', 'fleckens.hu',
  'gustr.com', 'jourrapide.com', 'rhyta.com', 'superrito.com', 'teleworm.us',
  'jourrapide.com', 'rhyta.com', 'superrito.com', 'teleworm.us',
  'mailforspam.com', 'spambox.us', 'spamfree24.org', 'spamgourmet.com',
  'temporaryemail.net', 'throwawaymail.com', 'trashymail.com', 'wegwerfmail.de',
  'wegwerfemail.de', 'zehnminuten.de', 'zxcv.com', 'zxcvbnm.com',
  'mailtemporaire.fr', 'tmail.ws', 'tmailinator.com', 'no-spam.ws',
  'anonbox.net', 'anonymbox.com', 'beefmilk.com', 'binkmail.com',
  'bobmail.info', 'boun.cr', 'casualdx.com', 'cell-base.com',
  'chammy.info', 'chogmail.com', 'cool.fr.nf', 'correotemporal.com',
  'dandikmail.com', 'deadaddress.com', 'despam.it', 'devnullmail.com',
  'discardmail.com', 'discardmail.de', 'disposableaddress.com', 'disposableemailaddresses.com',
  'disposeamail.com', 'disposemail.com', 'dodgeit.com', 'dodgit.com',
  'donemail.ru', 'dontreg.com', 'dumpandjunk.com', 'dumpmail.de',
  'e4ward.com', 'email60.com', 'emaildienst.de', 'emailias.com',
  'emaillime.com', 'emailsensei.com', 'emailtemporanea.com', 'emailtemporanea.net',
  'emailtemporar.ro', 'emailtemporario.com.br', 'emailthe.net', 'emailtmp.com',
  'emailto.de', 'emailwarden.com', 'emailx.at.hm', 'emailxfer.com',
  'emz.net', 'enterto.com', 'ephemail.net', 'fakeinbox.com'
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

/**
 * Check if a string contains a random character sequence longer than 10 chars with no vowels
 */
function hasRandomStringWithoutVowels(text: string): boolean {
  if (!text) return false;
  
  // Split by spaces and check each word
  const words = text.split(/\s+/);
  
  for (const word of words) {
    // Clean word (remove special chars)
    const cleanWord = word.replace(/[^a-zA-Z]/g, '');
    
    // If word is longer than 10 characters and has no vowels, it's likely random
    if (cleanWord.length > 10) {
      const hasVowels = /[aeiouAEIOU]/.test(cleanWord);
      if (!hasVowels) {
        return true;
      }
      
      // Also check for very low vowel ratio (< 20% vowels in long strings)
      const vowelCount = (cleanWord.match(/[aeiouAEIOU]/g) || []).length;
      const vowelRatio = vowelCount / cleanWord.length;
      if (vowelRatio < 0.2) {
        return true;
      }
    }
  }
  
  return false;
}

/**
 * Check if message appears random or nonsensical
 */
function isRandomMessage(message: string): boolean {
  if (!message || message.trim().length < 10) return true;
  
  const cleanMessage = message.replace(/[^a-zA-Z\s]/g, '').trim();
  
  // Check vowel ratio for entire message
  const vowels = (cleanMessage.match(/[aeiouAEIOU]/g) || []).length;
  const totalLetters = cleanMessage.replace(/\s/g, '').length;
  
  if (totalLetters > 0) {
    const vowelRatio = vowels / totalLetters;
    // Normal English text has ~38-40% vowels, flag if < 20% or > 70%
    if (vowelRatio < 0.2 || vowelRatio > 0.7) {
      return true;
    }
  }
  
  // Check for excessive consecutive consonants (likely random)
  const hasExcessiveConsonants = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{8,}/.test(cleanMessage);
  if (hasExcessiveConsonants) {
    return true;
  }
  
  return false;
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

  // Check for random strings in names (>10 chars with no vowels)
  if (data.contactName) {
    const nameParts = data.contactName.split(/\s+/);
    for (const part of nameParts) {
      if (hasRandomStringWithoutVowels(part)) {
        reasons.push(`Random character string in name: ${part.substring(0, 15)}...`);
        score += 30;
      }
    }
  }

  // Check company name for random strings
  if (data.companyName && hasRandomStringWithoutVowels(data.companyName)) {
    reasons.push('Random character string in company name');
    score += 25;
  }

  // Check message length and randomness
  if (data.financialConcerns) {
    if (data.financialConcerns.trim().length < 10) {
      reasons.push('Message too short (less than 10 characters)');
      score += 30;
    } else if (isRandomMessage(data.financialConcerns)) {
      reasons.push('Message appears random or nonsensical');
      score += 25;
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

  // CRITICAL: Block anything with spam score > 10
  return {
    isSpam: score > 10,
    reasons,
    score
  };
}

export function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return domain ? disposableEmailDomains.includes(domain) : false;
}