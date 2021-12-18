import trackA4_7 from '../../assets/audio/catA4_7.mp3';
import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';

export const QuizA4_7 = {
    tracks:[trackA4_int, trackA4_7],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            [`Szkolnictwo wyższe w Wielkiej Brytanii przyciąga polskich studentów.`,true],
            [`Liczba polskich studentów na uczelniach brytyjskich zwiększyła się
            w ubiegłym roku dwukrotnie.`,false],
            [`Polskie studentki wybijają się wśród słuchaczy brytyjskich szkół.`,true],
            [`Polscy studenci sa inteligentni, ale nie lubią pracować.`,false],
            [`Siatka studiów na brytyjskich uniwersytetach ma podobny charakter
            jak na polskich uczelniach.`,false],
            [`Brytyjskie uczelnie nie oferują zajęć praktycznych, dominuje teoria.`,false],
            [`Studenci mają dużo wolnego czasu, by studiować samodzielnie.`,true],
            [`Możliwości samodzielnej pracy są skromne.`,false],
            [`Biblioteka uniwersytecka jest czynna tylko parę godzin w ciągu doby.`,false],
            [`Studenci mogą wypożyczać filmy, przenośne komputery oraz korzystać
            z baz danych.`,true],
            [`Wykłady zamieszczone są na stronach internetowych.`,true]
        ]
}
