/**
 * Uses New Unreleased ( as of 12 oct 2022 ) codal version|
 * 
 * Demo by Bill Sievers 
 * 
 * https://github.com/bsiever/microbit-pxt-rotate
 */
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -800) {
        display.rotateTo(display.Direction.LogoToLeft)
    } else if (input.acceleration(Dimension.X) > 800) {
        display.rotateTo(display.Direction.LogoToRight)
    } else if (input.acceleration(Dimension.Y) < -800) {
        display.rotateTo(display.Direction.UpsideDown)
    } else if (input.acceleration(Dimension.Y) > 800) {
        display.rotateTo(display.Direction.Normal)
    }
    basic.pause(500)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showString("Hello World!")
})
