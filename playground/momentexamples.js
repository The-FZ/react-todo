var moment  = require('moment');
console.log(moment().format());

var now = moment();

console.log('Current Time Stamp', now.unix());

var timeStamp = 1511602498;
var currentMoment = moment.unix(timeStamp);
// console.log('Current Moment ' + currentMoment.format('MMM D, YYYY @ h:mm a'));

console.log('Current Moment' + currentMoment.format('MMMM Do, YYYY @ h:mm A'));
