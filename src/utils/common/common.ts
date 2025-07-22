import bcrypt from "bcrypt";

/**
 * Dùng để mã hóa password
 * @param password
 * @returns
 */
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);

  return bcrypt.hash(password, salt);
};

/**
 * Hàm so sánh password
 * @param password
 * @param hashedPassword
 * @returns
 */
export const comparePassword = (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
