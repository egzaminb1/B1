import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';
import trackA4 from '../../assets/audio/test3_A4_9.mp3';

export const QuizA4_9 = {
    tracks:[trackA4_int, trackA4],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            ['Nietypowy autobus wyruszy w trasę z Krakowa.', true],
            ['Podróż będzie trwać czternaście dni.',true],
            ['Podróżni będą mogli zobaczyć azjatyckie i europejskie stolice.',false],
            ['Autobus zacznie i skończy trasę w Krakowie.',true],
            ['W pierwszą podróż pojedzie grupa przyjaciół.',true],
            ['Miejsca dla pierwszych podróżnych są za darmo.',false],
            ['Ceny biletów są takie same niezależnie od trasy.',false],
            ['W autobusie może spać siedemnastu pasażerów.',true],
            ['Podczas podróży można skorzystać z kuchni i łazienki.',true],
            ['W unikatowym hostelu pokoje są jedno- i dwuosobowe.',false],
            ['Co kilkaset kilometrów podróżni będą zmieniać miejsce noclegu.',false]
        ]
}
