#while True
    #print("sound level :" +input.sound_level())
    #if input.sound_level()>5
    #lights.set_all(lights.rgb(255, 0, 255))
    #else: 
        #light.set_all(light.rgb(255, 0, 255))
while True: 
    print("light level: " + str(input.light_level()))
    if input.light_level() >11: 
        music.play_melody("G E G GE G GE AGG E G E G GE G GE AGG E", 60)
        music.set_volume(10)
    else : 
        music.stop_all_sounds()
        