export const VALID_EXPIRATIONS = [3600, 86400, 604800];
export const MAX_SECRET_LENGTH = process.env.MAX_SECRET_LENGTH
  ? process.env.MAX_SECRET_LENGTH
  : 10000;

export const MAX_FILE_LENGTH = process.env.MAX_FILE_LENGTH
  ? process.env.MAX_SECRET_LENGTH
  : MAX_SECRET_LENGTH;
