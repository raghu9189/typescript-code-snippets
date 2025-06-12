enum SeatChoice {
    AISLE = 10,
    MIDDLE,
    WINDOW
}

enum DialogMessage {
    DONE = "DONE",
    PENDING = "PENDING"
}

const mySeat = SeatChoice.AISLE;
console.log(mySeat);
console.log(DialogMessage.PENDING)