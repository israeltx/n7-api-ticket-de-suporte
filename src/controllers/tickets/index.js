/**
 * Nomes padrão de arquivos
 * CREATE - criar
 * INDEX - listar
 * REMOVE - deletar
 * UPDATE - atualizar
 * SHOW - exibir um único registro 
 */

export function index({request, response, database}) {
  const tickets = database.select('tickets')
  return response.end(JSON.stringify(tickets))
}