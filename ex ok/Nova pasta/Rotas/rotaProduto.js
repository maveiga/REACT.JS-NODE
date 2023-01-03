
import { Router } from 'express';
import ProdutoCTRL from '../Controle/ProdutoCTRL.js';


const rotaProduto = new Router();
const controladorProduto = new ProdutoCTRL();



rotaProduto.get('/',controladorProduto.consultar)
.get('/:cod', controladorProduto.consultarcod)
.post('/',controladorProduto.gravar)
.put('/',controladorProduto.atualizar)
.delete('/',controladorProduto.excluir);

export default rotaProduto;