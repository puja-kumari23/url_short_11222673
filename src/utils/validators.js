export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

export const isValidShortcode = (code) => /^[a-zA-Z0-9]{4,12}$/.test(code);
