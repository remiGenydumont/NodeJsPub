var pubService = require('./services/pubs.service');

console.log(pubService.listAllPub());
console.log("----------------------------------");
console.log(pubService.listOpenPub("Sunday"));
module.exports = {
    services: {
        pubService : pubService
    }
}