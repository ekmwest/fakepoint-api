const year   = 31557600000;
const month  = 2629800000;
const week   = 604800016;
const day    = 86400000;
const hour   = 3600000;
const minute = 60000;
const second = 1000;

Number.prototype.yearsAgo       = function () { return Date.now() - this.valueOf() * year; }
Number.prototype.monthsAgo      = function () { return Date.now() - this.valueOf() * month; }
Number.prototype.weeksAgo       = function () { return Date.now() - this.valueOf() * week; }
Number.prototype.daysAgo        = function () { return Date.now() - this.valueOf() * day; }
Number.prototype.hoursAgo       = function () { return Date.now() - this.valueOf() * hour; }
Number.prototype.minutesAgo     = function () { return Date.now() - this.valueOf() * minute; }
Number.prototype.secondsAgo     = function () { return Date.now() - this.valueOf() * second; }

Number.prototype.yearsFromNow   = function () { return Date.now() + this.valueOf() * year; }
Number.prototype.monthsFromNow  = function () { return Date.now() + this.valueOf() * month; }
Number.prototype.weeksFromNow   = function () { return Date.now() + this.valueOf() * week; }
Number.prototype.daysFromNow    = function () { return Date.now() + this.valueOf() * day; }
Number.prototype.hoursFromNow   = function () { return Date.now() + this.valueOf() * hour; }
Number.prototype.minutesFromNow = function () { return Date.now() + this.valueOf() * minute; }
Number.prototype.secondsFromNow = function () { return Date.now() + this.valueOf() * second; }

Number.prototype.years          = function () { return this.valueOf() * year; }
Number.prototype.months         = function () { return this.valueOf() * month; }
Number.prototype.weeks          = function () { return this.valueOf() * week; }
Number.prototype.days           = function () { return this.valueOf() * day; }
Number.prototype.hours          = function () { return this.valueOf() * hour; }
Number.prototype.minutes        = function () { return this.valueOf() * minute; }
Number.prototype.seconds        = function () { return this.valueOf() * second; }