// Validators

export const nameValidate = (name) => {
  if (name || name.length > 3) return true;
  else return false;
};

export const emailValidate = (email) => {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return regex.test(email);
};

export const passwordValidate = (password, confirmPassword) => {
  if (password === confirmPassword) return true;
  else return false;
};