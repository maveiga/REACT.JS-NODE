import Produto from '../Modelo/Produto.js';
import conectar from './Conexao.js';

export default class ProdutoBD{

    async incluir(produto){

        if (produto instanceof Produto){
            const conexao = await conectar();
            const sql="INSERT INTO produtos(cod,descricao,validade,generico,fabricante,contato,indicado \
                                           ) \
                                           VALUES(?,?,?,?,?,?,?)";
            const valores = [produto.cod,produto.descricao,produto.validade, 
                             produto.generico, produto.fabricante,produto.contato, produto.indicado
                             ];                                        
            await conexao.query(sql,valores);
        }

    }

    async alterar(produto){
        
        if (produto instanceof Produto){
            const conexao = await conectar();
            const sql="UPDATE produtos SET descricao=?, validade = ?, generico = ?, \
                                      fabricante = ?, contato =?, indicado= ? \
                       WHERE cod=?";
            const valores = [produto.descricao,produto.validade, 
                             produto.generico, produto.fabricante,produto.contato, produto.indicado,
                            produto.cod];                                        
            await conexao.query(sql,valores);
        }
    }

    async excluir(produto){

        if (produto instanceof Produto){
            const conexao = await conectar();
            const sql="DELETE FROM produtos WHERE cod=?";
            const valores = [produto.cod];                                        
            await conexao.query(sql,valores);
        } 

    }

    async consultar(termo){
        const conexao = await conectar();
        const sql = "SELECT * FROM produtos WHERE descricao LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        const listaProdutos = [];
        for(const row of rows){
            const produto = new Produto(row['cod'],row['descricao'],
            row['validade'],row['generico'],row['fabricante'],row['contato'],row['indicado']);
            listaProdutos.push(produto);
        }
        return listaProdutos;
    }

    async consultarcod(cod){
        const conexao = await conectar();
        const sql = "SELECT * FROM produtos WHERE cod = ?";
        const valores = [cod]
        const [rows] = await conexao.query(sql, valores);
        const listaProdutos = [];
        for(const row of rows){
            const produto = new Produto(row['cod'],row['descricao'],
            row['validade'],row['generico'],row['fabricante'],row['contato'],row['indicado']);
            listaProdutos.push(produto);
        }
        return listaProdutos;
    }
}