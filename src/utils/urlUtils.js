// src/utils/urlUtils.js

// ✅ Generate a random shortcode (alphanumeric, 8 chars)
export const generateRandomShortcode = (length = 8) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

// ✅ Check if a given URL is valid
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

// ✅ Check if a shortcode is valid (4–12 alphanumeric characters)
export const isValidShortcode = (code) => {
  const regex = /^[a-zA-Z0-9]{4,12}$/;
  return regex.test(code);
};

// ✅ Get expiry date from current time + minutes
export const getExpiryTimestamp = (minutes = 30) => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + minutes);
  return now.toISOString(); // ISO format is best for storage
};

// ✅ Check if a link is expired
export const isExpired = (expiryDate) => {
  return new Date(expiryDate).getTime() < Date.now();
};
