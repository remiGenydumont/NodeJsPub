const _ = require('lodash');
var list = require("../mocks/mock.json")

function listAllPub(){
    return list ;

}
function listOpenPub(){
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    listOpen = [];
    list.forEach(function (p){
        if(_.includes(p.openDays, weekday[d.getDay()])){
            listOpen.push(p);
        }
    })
    return listOpen;
}


module.exports = {
    listAllPub:listAllPub,
    listOpenPub:listOpenPub
}