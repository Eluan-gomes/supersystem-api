import { response, type Request, type Response } from 'express'
import { AddPessoaService } from '../services/pessoas/add_funcionarios_services'
import { UpdatePessoaService } from '../services/pessoas/update_funcionarios_services'
import { BuscarPessoasService } from '../services/pessoas/buscar_funcionarios_services'
import { ListarPessoaService } from '../services/pessoas/listar_funcionarios_services'

export class PessoaController {
  async salvarPessoa (request: Request, reponse: Response): Promise<Response> {
    const addPessoasService = new AddPessoaService()
    const { nome, email, cpf, numeroTelefone } = request.body
    await addPessoasService.add(nome, email, cpf, numeroTelefone)
    return reponse.json().status(201)
  }

  async listarPessoa (request: Request, response: Response): Promise<Response> {
    const listarPessoaService = new ListarPessoaService()
    const list = await listarPessoaService.load()
    return response.json(list)
  }

  async BuscarPessoaPorId (request: Request, reponse: Response): Promise<Response> {
    const buscarPessoasService = new BuscarPessoasService()
    const buscar = await buscarPessoasService.findById(parseInt(request.params.id))
    return response.json(buscar)
  }

  async atualizarPessoa (request: Request, reponse: Response): Promise<Response> {
    const atualizarPessoaService = new UpdatePessoaService()
    atualizarPessoaService
      .update(parseInt(request.params.id), request.body.nome, request.body.email, request.body.cpf)
    return reponse.json().sendStatus(204)
  }
}
