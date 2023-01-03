import ProdutoBD from '../Persistencia/ProdutoBD.js';

export default class Produto{

    #cod;  
    #descricao;
    #validade;
    #generico;
    #fabricante;
    #contato;
    #indicado;
 
    

    constructor(cod, descricao, validade, generico, fabricante, contato, indicado){
        this.#cod = cod;
        this.#descricao = descricao;
        this.#validade = validade;
        this.#generico = generico;
        this.#fabricante = fabricante;
        this.#contato = contato;
        this.#indicado = indicado;
      
        
    }

    get cod(){
        return this.#cod;
    }

    set cod(novocod){
        this.#cod = novocod;
    }

    get descricao(){
        return this.#descricao;
    }

    set descricao(novodescricao){
        if(novodescricao) 
            this.#descricao = novodescricao;
    }

    get validade() {
        return this.#validade;
    }

    set validade(novoSob){
        this.#validade = novoSob;
    }

    get generico(){
        return this.#generico;    
    }
    
    set generico(novogenerico){
        this.#generico = novogenerico;
    }

    get fabricante(){
        return this.#fabricante;
    }

    set fabricante(novafabricante){
        this.#fabricante = novafabricante;
    }

    get contato(){
        return this.#contato;
    }

    set contato(novacontato){
        this.#contato = novacontato;
    }

    
    get indicado(){
        return this.#indicado;
    }

    set indicado(novaindicado){
        this.#indicado = novaindicado;
    }

    
    

    toJSON(){
        return {
            "cod"      : this.#cod,
            "descricao"     : this.#descricao,
            "validade" : this.#validade,
            "generico"   : this.#generico,
            "fabricante"   : this.#fabricante,
            "contato" : this.contato,
            "indicado": this.indicado,


        }
    }

    async gravar(){
        const produtoDAO = new ProdutoBD();
        await produtoDAO.incluir(this);
    }

    async atualizar() {
        const produtoBD = new ProdutoBD();
        await produtoBD.alterar(this);
    }

    async removerDoBancoDados() {
        const produtoBD = new ProdutoBD();
        await produtoBD.excluir(this);
    }

    async consultar(termo){
        const produtoBD = new ProdutoBD();
        const produtos = await produtoBD.consultar(termo);
        return produtos;
    }

    async consultarcod(cod){
        const produtoBD = new ProdutoBD();
        const produtos = await produtoBD.consultarcod(cod);
        return produtos;
    }
}