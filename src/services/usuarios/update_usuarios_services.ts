/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AppDataSource } from '../../config/app_data_source'
import { Pessoa } from '../../models/pessoa'

export class UpdatePessoaService {
  update (arg0: number, nome: any, email: any, cpf: any) {
    throw new Error('Method not implemented.')
  }

  async delete (id: number, nome: string, email: string, cpf: string, numeroTelefone: string): Promise<void> {
    const pessoaRepository = AppDataSource.getRepository(Pessoa)
    await pessoaRepository.createQueryBuilder()
      .delete()
      .where('id = id', { id })
      .execute()
  }
}
