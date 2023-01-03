CREATE TABLE Produtos (
     cod INT (8) AUTO_INCREMENT NOT NULL primary key,
    descricao varchar(100) not null,
    validade date(100) not null,
    generico varchar(500) not null,
    fabricante varchar(100) not null,
    contato varchar(100) not null,
    indicado varchar(100) not null);