export type PasswordOptions = {
  length?: number;
  lowercase?: boolean;
  uppercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
};

export function generatePassword(options: PasswordOptions = {}): string {
  const {
    length = 16,
    lowercase = true,
    uppercase = true,
    numbers = true,
    symbols = true,
  } = options;

  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const syms = "!@#$%^&*()-_=+[]{};:,.<>/?";

  let charset = "";
  if (lowercase) charset += lower;
  if (uppercase) charset += upper;
  if (numbers) charset += nums;
  if (symbols) charset += syms;

  if (!charset) throw new Error("No character types selected.");

  let pwd = "";
  for (let i = 0; i < length; i++) {
    pwd += charset[Math.floor(Math.random() * charset.length)];
  }

  return pwd;
}
