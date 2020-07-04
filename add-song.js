var https = require('https')
    ,URL = require('url')
    ,fs = require('fs')
    ,path = require('path')
    ,request = require('request');

let url = 'https://www.myinstants.com/media/sounds/surprise-motherfucker.mp3';

let fileStream = fs.createWriteStream('file.mp3');

request(url)
    .pipe(fileStream)       // Write encrypted data to a file
    .on('finish', function() {
        console.log('Done downloading, encrypting, and saving!');
    });