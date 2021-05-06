/**
 * Summary. Validates whether or not password meets requirements.
 * @param {string} password - password created by user to be checked.
 * Requirements:
 * - Length between 8 and 32 characters
 * - One or more uppercase letters
 * - One or more lowercase letters 
 * - One or more numbers
 * - One or more special characters (ASCII punctuation or space characters)
 * @returns {bool} - true if all requirements pass else false.
 */
export const validate = (password) => {
  let minMaxLength = /^[\s\S]{8,32}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    number = /[0-9]/,
    special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

  return (minMaxLength.test(password) 
    && upper.test(password) 
    && lower.test(password) 
    && number.test(password) 
    && special.test(password)
  ) 
}