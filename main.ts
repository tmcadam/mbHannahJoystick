joystickbit.initJoystickBit()
radio.setGroup(1)
joystickbit.Vibration_Motor(100)
basic.showIcon(IconNames.StickFigure)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        radio.sendNumber(4)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        radio.sendNumber(3)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendNumber(2)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendNumber(1)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendNumber(5)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(6)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendNumber(7)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendNumber(8)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(9)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(10)
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(11)
    }
})
