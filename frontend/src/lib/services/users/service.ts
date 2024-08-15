import { Response, IUserService, User } from "./types";
import api, { EP } from "../../../../network/api";

export const UserService = (): IUserService => ({
  getAll: (): Response<{ users: User[] }> => api.get(EP.users.getAllUsers),
  getById: (userId: string): Response<{ user: User }> => api.get(EP.users.getUserById(userId)),
  create: (user: User): Response<{ user: User }> => api.post(EP.users.createUser, user),
  update: (userId: string, user: User): Response<{ user: User }> => api.put(EP.users.updateUser(userId), user),
  delete: (userId: string): Response<{ user: User }> => api.delete(EP.users.deleteUser(userId)),
  getCurrentUser: (): Response<User> => api.get(EP.users.getCurrentUser),
})