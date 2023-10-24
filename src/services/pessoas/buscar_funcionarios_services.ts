import { AppDataSource } from '../../config/app_data_source'
import { Pessoa } from '../../models/pessoa'

export class BuscarPessoasService {
  async findById (idPessoa: number): Promise<Pessoa | null> {
    const pessoaRepository = AppDataSource.getRepository(Pessoa)
    return await pessoaRepository.findOneBy({ id: idPessoa })
  }
}
