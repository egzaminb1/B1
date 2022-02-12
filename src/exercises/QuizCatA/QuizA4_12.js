import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';
import trackA4 from '../../assets/audio/CP3_A4_12.mp3';

export const QuizA4_12 = {
    tracks:[trackA4_int, trackA4],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            ['prowadzi międzynarodową firmę turystyczną.', false],
            ['w dzieciństwie podróżowała po Europie.', true],
            ['w szkole średniej wyjeżdżała z rodzicami do Anglii.', false],
            ['obecnie podróżuje z grupą przyjaciół.', false],
            ['wybiera środek transportu w zależności od miejsca, w którym jest.', true],
            ['boi się kłopotów z powodu braku znajomości języków obcych.', false]
        ]
}
