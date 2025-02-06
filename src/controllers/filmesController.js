const Filme = require("../models/filmes");
const FilmeList = require("../models/filmesList");

const lista = new FilmeList();

const filme1 = new Filme('Maze Runner: Morrer ou correr','James Dashner', '1:53', 2 );
lista.addFilme(filme1);

listaAddFilme( new Filme('Cinderela', 'Charles Perrault', '1:45', 5));

const router = {
    addFilme: (req, res) => {
        try {
            const { title, author, duration, plays } = req.body;
            if(!title || !author || !duration) {
                throw new Error('Preencher todos os campos!')
            }
            const movie = new Filme (title, author, duration, plays)
            lista.addFilme(movie);
            res.status(200).json({message: "Criado com sucesso ;)"});
        } catch (error) {
            res.status(400).json({message: "Erro ao criar filme :(", error});
        }
    },

    getAllFilmes: (req, res) => {
        try {
            const filmes = lista.getAllFilmes();
            res.status(200).json(filmes);
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar filmes',error});
        }
    },

    getFilmeById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getFilmeById(id));
        } catch (error) {
            res.status(404).json({
                message: 'Erro ao buscar filme por id!',
                error
            });
        }
    },

    updateFilme: (req, res) => {
        try {
            res.status(200).json(lista.updateFilme(req.params.id, req.body));
        } catch (error) {
            res.status(404).json('Erro ao atualizar :(', error)
        }
    },

    deleteFilme: (req, res) => {
        try {
            lista.deleteFilme(req.params.id);
            res.status(200).json({
                message: 'Filme deletada com sucesso!!'
            })
        } catch (error) {
            res.status(404).json('Erro ao deletar filme :(', error);
        }
    },

    getTop10Filmes: (req, res) => {
        try {
            const filmes = lista.getTop10Filmes();
            res.status(200).json(filmes);
        } catch (error) {
            res.status(404).json('Erro ao buscar Top10 :(', error);
        }
    }
};

module.exports = router;