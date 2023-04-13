import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { UsersRepositoryInMemory } from "../../repositories/implementations/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

/**
 * Criação das Instancias do Repositorio e Provider
 */

const mailtrapMailProvider = new MailtrapMailProvider();
const usersRepositoryInMemory = new UsersRepositoryInMemory();

const createUserUseCase = new CreateUserUseCase(
  usersRepositoryInMemory,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
