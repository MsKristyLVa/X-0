class Board {
    constructor() {
        this.gameTableElement = document.getElementById('game');
    }

    init(game, status) {
        this.game = game;
        this.status = status;
    }
    
    renderMap() {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    }

    initEventHandlers() {
        this.gameTableElement.addEventListener('click', event => this.game.cellClickHandler(event));
    }

    isClickByCell(event) {
        return event.target.tagName == 'TD';
    }
    
    isCellEmpty(event) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
        return this.status.mapValues[row][col] === '';
    }

    fillCell(event) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
        this.status.mapValues[row][col] = this.status.phase;
        event.target.textContent = this.status.phase;
    }
}