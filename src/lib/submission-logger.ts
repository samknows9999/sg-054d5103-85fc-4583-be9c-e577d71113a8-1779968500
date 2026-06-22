import fs from 'fs';
import path from 'path';

export interface SubmissionLog {
  timestamp: string;
  ip: string;
  email: string;
  companyName: string;
  contactName: string;
  status: 'success' | 'blocked' | 'error';
  blockReason?: string;
  spamScore?: number;
  recaptchaScore?: number;
}

const LOG_DIR = path.join(process.cwd(), 'logs');
const SPAM_LOG_FILE = path.join(LOG_DIR, 'blocked-submissions.log');
const SUCCESS_LOG_FILE = path.join(LOG_DIR, 'successful-submissions.log');

// Ensure logs directory exists
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

export function logSubmission(log: SubmissionLog): void {
  const logLine = JSON.stringify(log) + '\n';
  const logFile = log.status === 'blocked' ? SPAM_LOG_FILE : SUCCESS_LOG_FILE;
  
  try {
    fs.appendFileSync(logFile, logLine);
  } catch (error) {
    console.error('[LOGGER] Failed to write log:', error);
  }
}

export function logBlockedSubmission(
  ip: string,
  email: string,
  data: any,
  reason: string,
  spamScore?: number,
  recaptchaScore?: number
): void {
  logSubmission({
    timestamp: new Date().toISOString(),
    ip,
    email,
    companyName: data.companyName || 'N/A',
    contactName: data.contactName || 'N/A',
    status: 'blocked',
    blockReason: reason,
    spamScore,
    recaptchaScore
  });
}

export function logSuccessfulSubmission(
  ip: string,
  email: string,
  data: any,
  recaptchaScore?: number
): void {
  logSubmission({
    timestamp: new Date().toISOString(),
    ip,
    email,
    companyName: data.companyName || 'N/A',
    contactName: data.contactName || 'N/A',
    status: 'success',
    recaptchaScore
  });
}