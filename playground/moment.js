const moment = require('moment')

console.log(moment().format())

// January 1st 1970 @ 12:00am = 0
// January 1st 1970 @ 12:00am = 1

let now = moment()

console.log('Current timestamp', now.unix())

let timestamp = 1517096319
let currentMoment = moment.unix(timestamp)

console.log('Current moment', currentMoment.format('MMM D, YY @ h:mm:ss A'))

// January 3rd, 2018 @ 12:13 AM
challengeFormat = 'MMMM Do, YYYY @ h:mm A'

console.log('Challenge Moment ', currentMoment.format(challengeFormat))