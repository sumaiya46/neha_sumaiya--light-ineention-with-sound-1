while True:
    print("Room temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) + "°F" + " - " + input.temperature(TemperatureUnit.CELSIUS) + "°C")
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 65 and input.sound_level()>10:
        light.set_all(light.rgb(255,0,0))
        music.set_volume(100)
        music.play_melody("C4 A E2 D F5 G1", 70)
    elif input.temperature(TemperatureUnit.FAHRENHEIT) <50 and input.sound_level()<5 :
        light.set_all(light.rgb(0,255,255))
        music.set_volume(100)
        music.power_down.play()
    else:
        light.set_all(light.rgb(255,255,0))
