joystickbit.init_joystick_bit()
radio.set_group(1)
joystickbit.Vibration_Motor(100)
basic.show_icon(IconNames.STICK_FIGURE)

def on_forever():
    if joystickbit.get_rocker_value(joystickbit.rockerType.X) < 200:
        radio.send_number(4)
    elif joystickbit.get_rocker_value(joystickbit.rockerType.X) > 800:
        radio.send_number(3)
    elif joystickbit.get_rocker_value(joystickbit.rockerType.Y) < 200:
        radio.send_number(2)
    elif joystickbit.get_rocker_value(joystickbit.rockerType.Y) > 800:
        radio.send_number(1)
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P12):
        radio.send_number(5)
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P13):
        radio.send_number(6)
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P14):
        radio.send_number(7)
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P15):
        radio.send_number(8)
    elif input.button_is_pressed(Button.A):
        radio.send_number(9)
    elif input.button_is_pressed(Button.B):
        radio.send_number(10)
    elif input.button_is_pressed(Button.AB):
        radio.send_number(11)
    else:
        radio.send_number(0)
basic.forever(on_forever)
