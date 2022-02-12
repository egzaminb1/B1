import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';
import trackA4 from '../../assets/audio/test1_A4_8.mp3';

export const QuizA4_8 = {
    tracks:[trackA4_int, trackA4],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            ['Przykład: Pielgrzymka biegaczy z Bytowa trwała 5 dni.',true],
            ['Pielgrzymka biegaczy z Bytowa odbyła się po raz pierwszy.', false],
            ['Większość biegnących pielgrzymów miała ponad 70 lat.', false],
            ['Na Jasną Górę biegło 17 zawodników.', true],
            ['Trasa z Bytowa na Jasną Górę miała 100 kilometrów.', false],
            ['Z Bytowa wyruszyła też pielgrzymka rowerowa.', true],
            ['Pielgrzymka rowerowa trwała dobę.', true],
            ['Pielgrzymi-rowerzyści tylko raz zatrzymali się, żeby zjeść.', false],
            ['Pielgrzymi jeżdżą na rowerach tylko amatorsko.', true],
            ['Pielgrzymi-rowerzyści jechali w deszczu.', false],
            ['Wszyscy pielgrzymi-rowerzyści dotarli do Częstochowy.', true]
        ]
}
