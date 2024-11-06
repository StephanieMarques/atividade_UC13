CREATE DATABASE IF NOT EXISTS cds;

USE cds;

CREATE TABLE IF NOT EXISTS GENERO (
    id_genero INT PRIMARY KEY
    AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS artista (
    id_artista INT AUTO_INCREMENT PRIMARY KEY,
    nome_artista VARCHAR(100) NOT NULL,
    id_genero INT, 
    FOREIGN KEY (id_genero) REFERENCES
    Genero(id_genero)
);

CRETAE TABLE IF NOT EXISTS CD (
    id_cd INT PRIMARY KEY
    AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    id_artista INT,
    id_genero INT,
    ano_lancamento YAER,
    FOREIGN KEY (id_artista) REFERENCES
    Artista(id_artista),
    FOREIGN KEY (id_genero) REFERENCES
    Genero(id_genero)
);


