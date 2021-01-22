while (true) {
    if (input.lightLevel() > 5) {
        music.baDing.playUntilDone()
    }
    
    if (input.soundLevel() > 540) {
        light.setAll(1)
    }
    
}
