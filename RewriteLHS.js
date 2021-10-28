var fs = require('fs')
var liner = require('./liner')
var source = fs.createReadStream('../data/kim2.mtx')
var fWrite = fs.createWriteStream('../data/kim2-LHS.mtx')
source.pipe(liner)
liner.on('readable', function () {
    var line

    while (line = liner.read()) {
        var temp = line.trim().split(/\s+/);


             var templine = temp[0] + " " + temp[1] + " " +'(' + temp[2] + "," + temp[3] + ')' + '\n';
              fWrite.write(templine);
        



    }
    // console.log(tempnum)
})