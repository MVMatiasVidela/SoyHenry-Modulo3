import { AppDataSource } from "../config";
import { User } from "../entities/User";
import { UserDto } from "../types/user";

export const userRepository = AppDataSource.getRepository(User).extend({
  async getAllUsers() {
    const users = await this.find();
    return users;
  },

  async getUserById(id: number) {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  },

  async createUser(userDto: UserDto) {
    const existingUser = await this.findOne({ where: { name: userDto.username } });
    if (existingUser) {
      throw new Error("Username already exists");
    }

    const newUser = this.create(userDto);
    await this.save(newUser);
    return newUser;
  },

  async updateUser(id: number, userDto: Partial<UserDto>) {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new Error("User not found");
    }

    await this.update(id, userDto);
    const updatedUser = await this.findOne({ where: { id } });
    return updatedUser;
  },

  async deleteUser(id: number) {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new Error("User not found");
    }

    await this.delete(id);
    return { message: "User deleted successfully" };
  },
});
