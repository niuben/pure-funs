export function duration() {
    const startTime = new Date();
    return function () {
      return new Date().getTime() - startTime.getTime();
    };
  }
  