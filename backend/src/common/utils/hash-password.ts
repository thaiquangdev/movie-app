import * as bcrypt from 'bcryptjs';

/**
 * Hash mật khẩu (async)
 * @param {string} password - Mật khẩu cần hash
 * @returns {Promise<string>} - Mật khẩu đã hash
 */
export const hashPassword = (password: string): string => {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};

/**
 * Kiểm tra mật khẩu có đúng không (async)
 * @param {string} passwordInput - Mật khẩu người dùng nhập vào
 * @param {string} passwordHash - Mật khẩu đã được hash
 * @returns {Promise<boolean>} - True nếu mật khẩu đúng, False nếu sai
 */
export const comparePassword = (
  passwordInput: string,
  passwordHash: string,
): boolean => {
  return bcrypt.compareSync(passwordInput, passwordHash);
};
