/**
 * Interface para declarar como será enviados os dados entre as camadas da aplicação.
 *
 */

export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
}
