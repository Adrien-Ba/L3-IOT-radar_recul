flag = 1

basic.show_icon(IconNames.YES)

function()

def on_button_pressed_a():
    pass
    basic.show_icon(IconNames.NO)
    flag = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
    basic.show_icon(IconNames.YES)
    flag = 1
    function()
input.on_button_pressed(Button.B, on_button_pressed_b)





digit = grove.create_display(DigitalPin.P8, DigitalPin.P14)

def function() :
    while flag != 0 :
        digit.show(grove.measure_in_centimeters(DigitalPin.P16))

    if grove.measure_in_centimeters(DigitalPin.P16) < 30 :
        music.ring_tone(5000)

    if 30 < grove.measure_in_centimeters(DigitalPin.P16) < 50 :
        music.ring_tone(2000)

    if 50 < grove.measure_in_centimeters(DigitalPin.P16) < 100 :
        music.ring_tone(500)

    if 100 < grove.measure_in_centimeters(DigitalPin.P16) < 300 :
        music.ring_tone(100)

    if 300 < grove.measure_in_centimeters(DigitalPin.P16) :
        music.ring_tone(0)




        
 
        
        






    
