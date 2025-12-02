basic.forever(function () {
    if (input.temperature() < 22) {
        basic.showString("fred")
    } else {
        basic.showString("calor")
    }
})
basic.forever(function () {
    if (input.soundLevel() > 200) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    } else if (input.soundLevel() < 50) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.InBackground)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
