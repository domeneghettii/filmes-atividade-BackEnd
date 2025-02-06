class FilmeList {
    constructor() {
        this.filmes = [];     
    }
    addFilme(filme) {
        this.filmes.push(filme);
    }
    getAllFilmes(){
        return this.filmes;
    }

    getFilmeById(id){
        const filme = this.filmes.find(filme => filme.id == id);
        if(!filme) {
            throw new Error("filme não encontrado!");
        }
        return filme;
    }

    updateFilme(id, updateData) {
        const filme = this.getFilmeById(id);
        Object.assign(song, updateData);
        return filme;
    }

    deleteFilme(id) {
        this.filme = this.filmes.filter(filme => filme.id != id);
    }

    getTotalFilme(){
        return this.filmes.length;
    }
}

module.exports = FilmeList;