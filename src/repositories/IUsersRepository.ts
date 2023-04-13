import { User } from "../entities/User";

/**
 * Interface que implementa as ações que o ocorrem no banco de dados
 */

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
