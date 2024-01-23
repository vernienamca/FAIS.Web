export interface ISettings {
    id: number;
    companyName: string;
    phoneNumber: string;
    emailAddress: string;
    website: string;
    address: string;
    smtpFromEmail: string;
    smtpPassword: string;
    smtpServerName: string;
    smtpPort?: number;
    smtpEnableSSL: string;
    smtpDisplayName: string;
    minPasswordLength: number;
    minSpecialCharacters: number;
    passwordExpiry: number,
    idleTime: number,
    enforcePasswordHistory: number;
    maxSignOnAttempts: number
    baseUrl: string;
    auditLogsFilePath: string
}
  