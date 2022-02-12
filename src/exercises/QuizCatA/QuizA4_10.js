import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';
import trackA4 from '../../assets/audio/CP1_A4_10.mp3';

export const QuizA4_10 = {
    tracks:[trackA4_int, trackA4],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            ['To już ostatnie wydanie konkursu radiowego.',true],
            ['Konkurs mogą wygrać dwie osoby.',false],
            ['Nagrodą w konkursie jest wyjazd do Sosnowca.',false],
            ['Wycieczka będzie trwać kilka dni.',true],
            ['Współorganizatorem konkursu jest Telewizja Polska.',false],
            ['Pytania dotyczą Unii Europejskiej.',true],
            ['Według redaktora pytania konkursowe są dość trudne.',true]
        ]
}
