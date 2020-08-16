const today = new Date();

module.exports = {
    today: today,
    year: today.getUTCFullYear(),
    month: today.getUTCMonth()+1,
    day: today.getUTCDate(),
    week: today.getUTCDay(),
    hour: today.getUTCHours(),
    minutes: today.getUTCMinutes(),
    seconds: today.getUTCSeconds(),
    ms: today.getUTCMilliseconds()
}