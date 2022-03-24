// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    const sec=seconds===0?'00':(seconds%60)<10?'0'+seconds%60:seconds%60;
    const min=((seconds-seconds%60)/60)%60<10?'0'+((seconds-seconds%60)/60)%60:((seconds-seconds%60)/60)%60;
    const h=Math.floor(seconds/3600);
    const hours=(h<10?'0'+h:h);
    return hours+':'+min+':'+sec;
  }