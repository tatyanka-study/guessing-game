class GuessingGame {
    constructor() {
    this.min = 0;
    this.max = 0;
    this.currentNum = 0;   
    }
    
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        console.log(`Min - ${this.min}`, `Max - ${this.max}`)
        this.currentNum = Math.ceil((this.min + this.max) / 2);
        return this.currentNum;
    }

    lower() {
        this.max = this.currentNum;
    }

    greater() {
        this.min = this.currentNum;
    }
}

module.exports = GuessingGame;
