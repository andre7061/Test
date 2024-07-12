class AlarmClock {
  constructor() {
    (this.intervalId = null), (this.alarmCollection = []);
  }
  addClock(time, calbeck) {
    if (!time || !calbeck) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    for (const obj of this.alarmCollection) {
      if (obj.time === time) {
        console.warn("Уже присутствует звонок на это же время");
      }
    }
    this.alarmCollection.push({ time, calbeck, canCall: true });
  }
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (el) => el.time !== time
    );
  }
  getCurrentFormattedTime() {
    const data = new Date();
    return `${String(data.getHours()).padStart(2, "0")}:${String(
      data.getSeconds()
    ).padStart(2, "0")}`;
  }
  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((obj) => {
        if (obj.time === this.getCurrentFormattedTime && obj.canCall) {
          obj.canCall = false;
          obj.calbeck();
        }
      });
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetAllCalls() {
    this.alarmCollection.forEach((obj) => (obj.canCall = true));
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

const time = new AlarmClock();
time.addClock("sdf", "sdfsd");
time.addClock("sdfd", "sdfsd");
time.removeClock("sdf");
console.log(time.getCurrentFormattedTime());
