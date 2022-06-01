const emailPattern = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,6}/;
const passwordPattern = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

export const validateEmail = (email) => {
  return emailPattern.test(email);
};

export const validatePassword = (password) => {
  return passwordPattern.test(password);
};
