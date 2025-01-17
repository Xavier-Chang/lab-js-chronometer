class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {
        this.currentTime ++;     
        if(typeof printTimeCallback === 'function'){   
          printTimeCallback();
        }
    }, 1000);

    return this.intervalId = intervalId;
  }

  getMinutes() {
    /*
    if (!this.start()) {
      return 0;
    }*/
    const minute = Math.floor(this.currentTime / 60);
    return minute;
  }

  getSeconds() {
    if (!this.start()) {
      return 0;
    }
    const second = this.currentTime % 60
    return second;
  }

  computeTwoDigitNumber(value) {
    let firstNo = Math.floor(value / 10);
    let secondNo = value % 10;
    if (firstNo === 0) {
      return `0${secondNo}`
    } 

    return value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minute = this.computeTwoDigitNumber(this.getMinutes());
    let second = this.computeTwoDigitNumber(this.getSeconds());
    let time = minute + ':' + second;
    return time;
  }
}
