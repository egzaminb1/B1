import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';
import trackA4 from '../../assets/audio/catA4_1.mp3';

export const QuizA4_1 = {
    tracks:[trackA4_int, trackA4],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            ['',],
            ['',],
            ['',],
            ['',],
            ['',],
            ['',],
            ['',],
            ['',],
            ['',],
            ['',],
            ['',]
        ]
}
