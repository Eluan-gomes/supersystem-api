import { AppDataSource } from '../../config/app_data_source'
import { Pessoa } from '../../models/pessoa'

export class ListarPessoaService {
  async load (): Promise<Pessoa[]> {
    const pessoaRepository = AppDataSource.getRepository(Pessoa)
    const list = await pessoaRepository.find({})
    return list
  }
}
