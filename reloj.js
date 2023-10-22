simplyCountdown('#cuenta', {
    year: 2023, // required
    month: 11, // required
    day: 10, // required
    hours: 22, // Default is 0 [0-23] integer //tres (3) HORA MENOS QUE https://dateful.com/time-zone-converter
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'DIA', plural: 'DIAS' },
        hours: { singular: 'HORA', plural: 'HS' },
        minutes: { singular: 'MIN', plural: 'MIN' },
        seconds: { singular: 'SEG', plural: 'SEG' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC or not - default : false
    onEnd: function() { 
        //alert('SON LAS 22 HORAS COMIENZA LA FIESTA!!!');
        return;
     }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});