const { v4: uuid4 } = require("uuid");

class Filme {
    constructor(title, author, duration, plays = 0 ) {
        this.id = uuid4();
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.plays = plays;
    }

    play() {
        // quantas vezes o filme foi reproduzido.
        this.plays += 1;
    }
}

module.exports = Filme;