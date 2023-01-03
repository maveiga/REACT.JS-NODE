import Produto from "../Modelo/Produto.js";


export default class ProdutoCTRL {

    gravar(requisicao, resposta) {
        resposta.type('application/json');

        if (requisicao.method === "POST" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const cod = dados.cod;
            const descricao = dados.descricao;           
            const validade = dados.validade;
            const generico = dados.generico;
            const fabricante = dados.fabricante;
            const contato = dados.contato;
            const indicado = dados.indicado;
            
            
            if (cod && descricao && validade && generico && fabricante && contato && indicado) {

                const produto = new Produto(cod, descricao, validade,
                    generico, fabricante, contato, indicado);
                produto.gravar().then(() => {
                    resposta.json({
                        status: true,
                        mensagem: "Remedio adicionado com sucesso!"
                    });
                }).catch((erro) => { 
                    resposta.json({
                        status: false,
                        mensagem: "Não foi possível gravar o Remedio: " + erro.message
                    });
                });
            }
            else { 
                resposta.json({
                    status: false,
                    mensagem: "Informe todos os dados do Remedio. Verifique a documentação da API."
                });
            }
        } 
        else {
            resposta.json({
                status: false,
                mensagem: "Método não permitido. Verifique a documentação da API."
            })
        }
    }

    atualizar(requisicao, resposta) {
        resposta.type('application/json');

        if (requisicao.method === "PUT" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const cod = dados.cod;
            const descricao = dados.descricao;            
            const validade = dados.validade;
            const generico = dados.generico;
            const fabricante = dados.fabricante;
            const contato = dados.contato;
            const indicado = dados.indicado;
            
            if (cod && descricao && validade && generico && fabricante && contato && indicado) {

                const produto = new Produto(cod, descricao, validade,
                    generico, fabricante, contato, indicado);
                produto.atualizar().then(() => {
                    resposta.json({
                        status: true,
                        mensagem: "Remedio atualizado com sucesso!"
                    });
                }).catch((erro) => { 
                    resposta.json({
                        status: false,
                        mensagem: "Não foi possível atualizar o Remedio: " + erro.message
                    });
                });
            }
            else { 
                resposta.json({
                    status: false,
                    mensagem: "Informe todos os dados do Remedio. Verifique a documentação da API."
                });
            }
        } 
        else {
            resposta.json({
                status: false,
                mensagem: "Método não permitido. Verifique a documentação da API."
            })
        }
    }

   
    excluir(requisicao, resposta) {
        resposta.type('application/json');
      
        if (requisicao.method === "DELETE" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const cod = dados.cod;
            if (cod) {

                const produto = new Produto(cod);
                produto.removerDoBancoDados().then(() => {
                    resposta.json({
                        status: true,
                        mensagem: "Remedio excluído com sucesso!"
                    });
                }).catch((erro) => { 
                    resposta.json({
                        status: false,
                        mensagem: "Não foi possível excluir o Remedio: " + erro.message
                    });
                });
            }
            else { 
                resposta.json({
                    status: false,
                    mensagem: "Informe o cod do produto. Verifique a documentação da API."
                });
            }
        } 
        else {
            resposta.json({
                status: false,
                mensagem: "Método não permitido. Verifique a documentação da API."
            })
        }
    }

    consultar(requisicao, resposta) {
        resposta.type('application/JSON');
        if (requisicao.method === "GET") {
            const produto = new Produto();
            produto.consultar("").then((listaProdutos) => {
                resposta.json(listaProdutos);
            }).catch((erro) => {
                resposta.json({
                    status: "false",
                    mensagem: "Falha ao obter Remedio: " + erro.message
                });
            });
        }
        else {
            resposta.json({
                status: false,
                mensagem: "Método não permitido. Verifique a documentação da API."
            })
        }
    }

    consultarcod(requisicao, resposta) {
 
        const cod = requisicao.params.cod;
        if (cod) {
            if (requisicao.method === "GET") {
                const produto = new Produto();
                produto.consultarcod(cod).then((produto) => {
                    resposta.json(produto);
                }).catch((erro) => {
                    resposta.json({
                        status: "false",
                        mensagem: "Falha ao obter o Remedio: " + erro.message
                    });
                });
            }
            else {
                resposta.json({
                    status: false,
                    mensagem: "Método não permitido. Verifique a documentação da API."
                })
            }
        }
    }
}
