import trackA4_3 from '../../assets/audio/catA4_3.mp3';
import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';

export const QuizA4_3 = {
    tracks:[trackA4_int, trackA4_3],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            [`Santorini to wyspa, która jest odwiedzana przez tysiące turystów.`,true],
            [`Wyspa istnieje 1500 lat.`,false],
            [`Najczęściej na widokówkach z Grecji pojawia się widok Akropolu.`,false],
            [`Wyspa nie słynie ze swego piękna dzięki unikalnej przyrodzie, ale dzięki architekturze.`,true],
            [`Na wyspie turyści uwielbiają spacerować wzdłuż brzegu morza.`,false],
            [`Uliczki miasta tworzą labirynt.`,true],
            [`Część hotelu to zmodernizowane domy rybackie.`,true],
            [`Hotel stanowi kompleks budynków.`,true],
            [`Hotel jest pomalowany na biało, żeby chronić turystów przed ostrym słońcem.`,false],
            [`Meble w hotelu są wykonane z metalu.`,false],
            [`W hotelu znajduje się wiele nowoczesnych urządzeń, których nie widać.`,true]
        ]
}
