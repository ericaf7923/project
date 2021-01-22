while True: 

    if input.light_level() >5:
        music.ba_ding.play_until_done()

    if input.sound_level() > 540:
        light.set_all(1,1,1)