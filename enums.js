var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var DialogMessage;
(function (DialogMessage) {
    DialogMessage["DONE"] = "DONE";
    DialogMessage["PENDING"] = "PENDING";
})(DialogMessage || (DialogMessage = {}));
var mySeat = SeatChoice.AISLE;
console.log(mySeat);
console.log(DialogMessage.PENDING);
