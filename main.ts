let flag = 1
basic.showIcon(IconNames.Yes)
function_()
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    basic.showIcon(IconNames.No)
    let flag = 0
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    basic.showIcon(IconNames.Yes)
    let flag = 1
    function_()
})
let digit = grove.createDisplay(DigitalPin.P8, DigitalPin.P14)
function function_() {
    while (flag != 0) {
        digit.show(grove.measureInCentimeters(DigitalPin.P16))
    }
    if (grove.measureInCentimeters(DigitalPin.P16) < 30) {
        music.ringTone(5000)
    }
    
    if (30 < grove.measureInCentimeters(DigitalPin.P16) && grove.measureInCentimeters(DigitalPin.P16) < 50) {
        music.ringTone(2000)
    }
    
    if (50 < grove.measureInCentimeters(DigitalPin.P16) && grove.measureInCentimeters(DigitalPin.P16) < 100) {
        music.ringTone(500)
    }
    
    if (100 < grove.measureInCentimeters(DigitalPin.P16) && grove.measureInCentimeters(DigitalPin.P16) < 300) {
        music.ringTone(100)
    }
    
    if (300 < grove.measureInCentimeters(DigitalPin.P16)) {
        music.ringTone(0)
    }
    
}

