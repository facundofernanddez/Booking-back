type UserRole = "admin" | "user" | undefined;

export interface IUser {
  _id: string | undefined;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
}
