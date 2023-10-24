import { type Router } from 'express'
import { PessoaController } from '../controllers/pessoa_controller'

const pessoaController = new PessoaController()

export default (router: Router): void => {
  router.post('/formulario', pessoaController.salvarPessoa)
  router.get('/carregar', pessoaController.listarPessoa)
  router.get('/buscar/:id', pessoaController.BuscarPessoaPorId)
  router.put('/atualizar/:id', pessoaController.atualizarPessoa)
}
