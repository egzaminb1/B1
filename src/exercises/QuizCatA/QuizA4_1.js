import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';
import trackA4_1 from '../../assets/audio/catA4_1.mp3';

export const QuizA4_1 = {
    tracks:[trackA4_int, trackA4_1],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            ['Wśród młodzieży przeprowadzono ankietę o ostatnio przeczytanych książkach.',true],
            ['Ankietowani musieli podać autorów i tytuły książek, które ostatnio przeczytali.', true],
            ['8% młodych ludzi od dawna nie przeczytało żadnej książki.', true],
            ['Badanie przeprowadzono wśród 160 osób.', false],
            ['Młodzież wymieniła ponad sto różnych tytułów.', false],
            ['Uczniowie czytają książki dla przyjemności.', false],
            ['Wszyscy wymienili minimum 1 tytuł lektury, szkolnej.', true],
            ['Duża grupa przeczytanych książek to fantastyka.', true],
            ['Młodzież czyta głównie książki o Harrym Potterze.', true],
            ['Przy czytaniu książek o Harrym Potterze można się tylko śmiać.', false],
            ['Młodzież czyta książki o dojrzewaniu.', true]
        ]
}
