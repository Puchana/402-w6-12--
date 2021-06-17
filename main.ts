radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("P")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(randint(5, 9))
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (receivedString))
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("J")
})
radio.setTransmitPower(1)
radio.setGroup(12)
basic.showIcon(IconNames.Asleep)
