import trackA4_5 from '../../assets/audio/catA4_5.mp3';
import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';

export const QuizA4_5 = {
    tracks:[trackA4_int, trackA4_5],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            [`Kemping Pod Świerkami odwiedzają dziś rodzice.`,true],
            [`Plan dnia został zmieniony z powodu odwiedzin rodziców.`,true],
            [`Dzieci i rodzice mogą opuścić teren kempingu o dziesiątej.`,true],
            [`Istnieje możliwość kąpieli w basenie.`,true],
            [`Tylko rodzice-wegetarianie muszą wpisać się na listę zostających na obiedzie.`,false],
            [`Na czwartą po południu zaplanowano gry sportowe.`,true],
            [`Rodzice nie mogą wziąć udziału w zawodach sportowych.`,false],
            [`Ognisko będzie przy bramie głównej kempingu.`,false],
            [`Drogę na ognisko pokażą opiekunowie.`,true],
            [`Brama kempingu jest cały czas otwarta.`,false],
            [`Rodzice, którzy przywiozą dzieci po 20.00, powinni zatelefonować na kemping, żeby o tym uprzedzić.`,true]
        ]
}
