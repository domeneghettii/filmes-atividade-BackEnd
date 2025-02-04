const { v4: uuid4 } = require("uuid");

class Filme {
    constructor(title, singer, duration, play = 0 ) {
        this.id = uuid4();
        this.title = title;
        this.singer = singer;
        this.duration = duration;
        this.plays = plays;
    }

    play() {
        // quantas vezes o filme foi reproduzido.
        this.plays += 1;
    }
}

module.exports = Filme;