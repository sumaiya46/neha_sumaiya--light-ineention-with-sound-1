while (true) {
    console.log("Room temperature: " + input.temperature(TemperatureUnit.Fahrenheit) + "°F" + " - " + input.temperature(TemperatureUnit.Celsius) + "°C")
    if (input.temperature(TemperatureUnit.Fahrenheit) > 65 && input.soundLevel() > 10) {
        light.setAll(light.rgb(255, 0, 0))
        music.setVolume(100)
        music.playMelody("C4 A E2 D F5 G1", 70)
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 50 && input.soundLevel() < 5) {
        light.setAll(light.rgb(0, 255, 255))
        music.setVolume(100)
        music.powerDown.play()
    } else {
        light.setAll(light.rgb(255, 255, 0))
    }
    
}
