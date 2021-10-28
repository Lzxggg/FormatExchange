var fs = require('fs')
var liner = require('./liner')
var source = fs.createReadStream('../data/FEM_RHS_matrix.dat')
var fWrite = fs.createWriteStream('../data/RHS.dat')
source.pipe(liner)
liner.on('readable', function () {
    var line
    while (line = liner.read()) {
        var temp = line.trim().split(/\s+/);

        if(temp[1] == undefined){
            console.log(temp[0]);
            fWrite.write(temp[0] + '\n');
        }else{
            if(temp[0] == 0.000000000000000E+000){
                temp[0] = '0.0'
            }
            if(temp[1] == 0.000000000000000E+000){
                temp[1] = '0.0'
            }
            var templine =  '(' + temp[0] + "," + temp[1] + ')' + '\n';
            fWrite.write(templine);
        }


    }
})