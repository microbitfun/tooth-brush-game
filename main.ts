input.onButtonPressed(Button.A, function () {
    zprevious = input.acceleration(Dimension.Z)
    start = 1
    count = 0
    game.startCountdown(1000)
    starttime = control.millis()
    basic.showString("S")
})
let z = 0
let starttime = 0
let count = 0
let zprevious = 0
let start = 0
radio.setTransmitPower(7)
radio.setGroup(1)
start = 0
basic.showString("S")
basic.forever(function () {
    if (game.isGameOver()) {
        game.setScore(count)
        basic.pause(20000)
        control.reset()
    } else {
        if (start == 1) {
            zprevious = z
            z = input.acceleration(Dimension.Z)
            if (z < -950) {
                if (zprevious > -950) {
                    count += 1
                }
            } else {
                if (zprevious < -1050) {
                    count += 1
                }
            }
            radio.sendValue("z", z)
            radio.sendValue("count", count)
            radio.sendValue("time", (control.millis() - starttime) / 1000)
            basic.pause(100)
            led.toggle(2, 2)
        }
    }
})
