import trackA4_2 from '../../assets/audio/catA4_2.mp3';
import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';

export const QuizA4_2 = {
    tracks:[trackA4_int, trackA4_2],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            [`Regionalne Forum Edukacyjne odbyło się we Wrocławiu.`,true],
            [`Regionalne Forum Edukacyjne trwało tydzień.`,false],
            [`Uczestnikami Forum byli twórcy regionalni.`,false],
            [`W Forum uczestniczyły przede wszystkim osoby z południa Polski.`,true],
            [`Program Równać Szanse prowadzą dwie organizacje.`,true],
            [`Program Równać Szanse przeznaczony jest dla młodzieży ze wszystkich
            miast Polski.`,false],
            [`Program Równać Szanse zapewnia pieniądze na rozwój środowisk z małych miast.`,true],
            [`Forum przeznaczone jest dla uczniów, nauczycieli, władz miast i oświaty.`,true],
            [`Przy organizacji wrocławskiego Forum aktywnie pomagali tylko nauczyciele.`,false]
        ]
}
