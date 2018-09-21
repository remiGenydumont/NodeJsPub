var program = require('commander');

program
    .version('1.0.0')
    .option('-l, --list', 'Get the pubs list')
    .option('-o, --opened', 'Get the opened pubs list')
    .parse(process.argv);

if(program.opened){
    var list  = require('../src/main').listOpenPub();
    console.log(list) ;
}
if (program.list) {
    var list  = require('../src/main').listAllPub();
    console.log(list) ;
}
