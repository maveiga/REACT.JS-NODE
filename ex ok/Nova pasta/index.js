
import express from 'express';
import rotaProduto from './Rotas/rotaProduto.js';
import cors from 'cors';



const porta=4000;
const hostname='localhost';

const app = express(); 
app.use(cors())

app.use(express.json());
app.use('/produtos', rotaProduto);


app.listen(porta,hostname, ()=>{
    console.log('Servidor em execução em http://'+hostname+":"+porta);
});