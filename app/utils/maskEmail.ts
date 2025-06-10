export const maskEmail = (email?: string): string => {
  if (!email) {
    return "";
  }
  const [local, domain] = email.split("@");

  const maskedLocal = local.replace(
    /^(.)(.*)(.)$/,
    (_, first, middle, last) => {
      return first + "*".repeat(middle.length) + last;
    }
  );

  return `${maskedLocal}@${domain}`;
};