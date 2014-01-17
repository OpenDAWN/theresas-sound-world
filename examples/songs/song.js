var drumMachine = new DrumMachine(tsw.context),
    synth = new Synth(tsw.context),
    sequencer = new Sequencer(tsw.context);

var kit808 = {
        kitName: '808',
        path: '/instruments/drum-machine/samples/808/',
        samples: {
            kick: 'kick.ogg',
            snare: 'snare.ogg',
            clap: 'clap.ogg',
            hiHat: 'chh.ogg'
        }
    };

var song = {
    meta: {
        title: 'My first song',
        author: 'Stuart Memo'
    },
    settings: {
        bpm: 120,
        beatsPerBar: 4,
        muted: false
    },
    patterns: {
        drumIntro: {
            steps: 8,
            sequence: [
                ['kick', '*', ['*', 'snare'], '*', '*', '*', ['*', 'snare'], 'kick'],
                ['hiHat', 'hiHat', '*', '*', '*', '*', '*', '*', ]
            ]
        },
        drumVerse: {
            sequence: [
                ['kick', '*', '*', '*']
            ] 
        },
        synthIntro: {
            length: 16,
            steps: 8,
            sequence: [
                ['A2', 'B2','C3', 'D3' ]
            ]
        }
    },
    tracks: {
        drums: {
            instrument: drumMachine,
            pan: -23,
            sequence: {
                drumIntro: [0, 1, 2, 3],
                drumVerse: [4, 5]
            },
            volume: 0.8 
        },
        synth: {
            instrument: synth,
            pan: +24,
            sequence: {
                synthIntro: [2]
            },
            volume: 0.2
        }
    }
};

drumMachine.loadKit(kit808, function () {
    sequencer.loadSong(song, function () {
        this.playSong();
    });
});