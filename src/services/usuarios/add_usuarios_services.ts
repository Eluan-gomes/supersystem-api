import { AppDataSource } from '../../config/app_data_source'
import { Pessoa } from '../../models/pessoa'

export class AddPessoaService {
  async add (nome: string, email: string, cpf: string, numeroTelefone: string): Promise<void> {
    const pessoaRepository = AppDataSource.getRepository(Pessoa)
    await pessoaRepository.save({ nome, email, cpf, numeroTelefone })
  }
}
