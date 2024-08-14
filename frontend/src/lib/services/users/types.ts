/*
Prisma schema:
model User {
  // metadata
  id             String         @id @default(cuid())
  createdAt      DateTime       @default(now())
  updatedAt      DateTime       @default(now()) @updatedAt
  // fields
  name           String
  clerkId        String         @unique
  referredId     String?
  referredByUser User?          @relation("Referrals", fields: [referredId], references: [id])
  Listing        SpaceListing[]
  ReferredUsers  User[]         @relation("Referrals")
  UserListing    UserListing[]
  HelpForm       HelpForm[]

  @@map("user")
}

*/

export type Response<T> = Promise<{ data: T; error: string }>;

export type User = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  clerkId: string;
  referredByUser?: string;
  twitterDisplay: string;
  twitterHandle: string;
  twitterPhoto: string;
};
export interface IUserService {
  getById: (userId: string) => Response<{ user: User }>;
  getAll: () => Response<{ users: User[] }>;
  create: (user: User) => Response<{ user: User }>;
  update: (userId: string, user: User) => Response<{ user: User }>;
  delete: (userId: string) => Response<{ user: User }>;
}
