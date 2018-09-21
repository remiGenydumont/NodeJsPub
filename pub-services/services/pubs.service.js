const _ = require('lodash');
var list = require("../mocks/mock.json")

function listAllPub(){
    return list ;

}
function listOpenPub(day){
    var listOpen = [];
    list.forEach(function (p){
        if(_.includes(p.openDays, day)){
            listOpen.push(p);
        }
    })
    return listOpen;
}


module.exports = {
    listAllPub:listAllPub,
    listOpenPub:listOpenPub
}