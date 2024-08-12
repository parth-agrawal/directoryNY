import type { User } from "@prisma/client";

export interface IUserService {
    getAllUsers(): Promise<User[]>
    getUserById({ userId }: { userId: string }): Promise<User | null>
    createUser({ newUser }: { newUser: User }): Promise<User>
    updateUser({ updatedUser }: { updatedUser: User }): Promise<User>
    deleteUser({ userId }: { userId: string }): Promise<User>
}