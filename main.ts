radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(13)
