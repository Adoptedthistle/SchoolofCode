function chase(policeSpeed, yourSpeed, escapeDistance, catchDistance);
let timeToEscape = escapeDistance/yourSpeed;

let policeTimeToCatch = policeSpeed/catchDistance;
if (policeTimeToCatch > timeToEscape) {
    return console.log("You've been caught!");
}   else if(policeTimeToCatch > timeToEscape){
    return console.log("You've got away!");

} else return console.log("stuck");


