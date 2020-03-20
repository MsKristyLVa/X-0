class Status {
    constructor() {
        this.status = 'playing';
        this.mapValues = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        this.phase = 'X';
    }

    isStatusPlaying() {
        return this.status === 'playing';
    }

    setStatusStopped() {
        this.status = 'stopped';
    }

    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    }
}