class Game {
    constructor() {
        this.clickCount = 0;
        this.clickToFiLlBoard = 9;
    }

    init(status, board) {
        this.status = status;
        this.board = board;
    }

    cellClickHandler(event) {
        if (!this.isCorrectClick(event)) {
            return
        }
        this.board.fillCell(event);
        this.clickCount++
        if (this.hasWon()) {
            this.status.setStatusStopped();
            this.sayWonPhrase();
            return;
        }
        if (this.clickCount === this.clickToFiLlBoard) {
            this.sayDeatHeatPhrase();
            return;
        }
        this.status.togglePhase();
    }

    sayDeatHeatPhrase() {
        let confirmRestart = confirm('Ничья');

        if (confirmRestart) {
            this.restartGame();
        }
    }

    isCorrectClick(event) {
        return this.status.isStatusPlaying() && this.board.isClickByCell(event) && this.board.isCellEmpty(event);
    }

    hasWon() {
        return this.isLineWon({x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}) ||
            this.isLineWon({x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}) ||
            this.isLineWon({x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}) ||

            this.isLineWon({x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}) ||
            this.isLineWon({x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}) ||
            this.isLineWon({x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}) ||

            this.isLineWon({x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}) ||
            this.isLineWon({x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0});
    }

    isLineWon(a, b, c) {
        let value = this.status.mapValues[a.y][a.x] + this.status.mapValues[b.y][b.x] + this.status.mapValues[c.y][c.x];
        return ((value === 'XXX') || (value === '000'));
    }

    sayWonPhrase() {
        let figure = this.status.phase === 'X' ? 'Крестики' : 'Нолики';
        let confirmRestart = confirm(`${figure} выиграли!`);

        if (confirmRestart) {
            this.restartGame();
        }
    }

    restartGame() {
        this.board.clearBoard();
        start();
    }
}

