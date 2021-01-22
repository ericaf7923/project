// while True
// print("sound level :" +input.sound_level())
// if input.sound_level()>5
// lights.set_all(lights.rgb(255, 0, 255))
// else: 
// light.set_all(light.rgb(255, 0, 255))
while (true) {
    console.log("light level: " + ("" + input.lightLevel()))
    if (input.lightLevel() > 11) {
        music.playMelody("G E G GE G GE AGG E G E G GE G GE AGG E", 60)
        music.setVolume(10)
    } else {
        music.stopAllSounds()
    }
    
}
