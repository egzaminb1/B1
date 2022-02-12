import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';
import trackA4 from '../../assets/audio/CP2_A4_11.mp3';

export const QuizA4_11 = {
    tracks:[trackA4_int, trackA4],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            ['W ramach akcji klienci mogą pożyczyć torbę w sklepie.', true],
            ['Do tej pory niezbyt dużo sklepów bierze udział w akcji.', false],
            ['Akcja „Torby bumerangi” ma pomóc dbać o środowisko.', true],
            ['Włączenie się do projektu jest dosyć skomplikowane.', false],
            ['W projekcie wykorzystywane są tylko nowe torby.',false],
            ['Pomysł na zorganizowanie takiej akcji powstał poza Polską.', true],
            ['Czasami właściciele sklepów sami kontaktują się z organizatorami.', true],
            ['Przede wszystkim sklepy spożywcze zainteresowały się tą akcją.', true],
            ['Organizatorzy bali się, że torby nie będą wracały do koszy.', true]
        ]
}
