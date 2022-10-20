class CountDown {
    constructor(expiredDate, onRender, onComplete) {
        this.onRender = onRender;
        this.onComplete = onComplete;
        this.setExpiredDate(expiredDate);
    }

    setExpiredDate(expiredDate) {
        const currentTime = new Date().getTime();

        this.timeRemaining = expiredDate.getTime() - currentTime;

        this.timeRemaining > 0 ? this.start() : this.complete();
    }

    complete() {
        if (typeof this.onComplete === "function") {
            onComplete();
        }
    }

    start() {
        this.update();
        const intervalId = setInterval(() => {
            this.timeRemaining -= 1000;
            if (this.timeRemaining < 0) {
                complete();
                clearInterval(intervalId);
            } else {
                this.update();
            }
        }, 1000);
    }

    getTime() {
        return {
            days: Math.floor(this.timeRemaining / 1000 / 60 / 60 / 24),
            hours: Math.floor(this.timeRemaining / 1000 / 60 / 60) % 24,
            minutes: Math.floor(this.timeRemaining / 1000 / 60) % 60,
            seconds: Math.floor(this.timeRemaining / 1000) % 60,
        };
    }

    update() {
        if (typeof this.onRender === "function") {
            this.onRender(this.getTime());
        }
    }
}
