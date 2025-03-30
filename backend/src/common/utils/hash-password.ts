import bcrypt from 'bcryptjs';

/**
 * Hash mật khẩu
 * @param {string} password - Mật khẩu cần hash
 * @returns {string} - Mật khẩu đã hash
 */
export const hashPassword = (password: string): string => {
  return bcrypt.hashSync(password, 10);
};

/**
 * Kiểm tra mật khẩu có đúng không
 * @param {string} passwordHash - Mật khẩu đã được hash
 * @param {string} passwordInput - Mật khẩu người dùng nhập vào
 * @returns {Promise<boolean>} - True nếu mật khẩu đúng, False nếu sai
 */
export const comparePassword = (
  passwordInput: string,
  passwordHash: string,
): boolean => {
  return bcrypt.compareSync(passwordInput, passwordHash);
};
