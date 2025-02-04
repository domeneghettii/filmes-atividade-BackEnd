const Filme = require("../models/filmes");
const FilmeList = require("../models/filmesList");

const lista = new FilmeList();

const filme1 = new Filme('Maze Runner: Morrer ou correr','James Dashner', '1:53', 2 );
lista.addFilme(filme1);

listaAddFilme( new Filme('Cinderela', 'Charles Perrault', '1:45', 5));