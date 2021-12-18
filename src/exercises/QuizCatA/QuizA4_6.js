import trackA4_6 from '../../assets/audio/catA4_6.mp3';
import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';

export const QuizA4_6 = {
    tracks:[trackA4_int, trackA4_6],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            [`Córka sułtana Brunei wyszła za mąż.`,true],
            [`Sułtan Brunei ma jedenaścioro dzieci.`,true],
            [`Na ślubie gościło prawie dwa tysiące osób.`,false],
            [`Uroczystości weselne trwały dwa tygodnie.`,true],
            [`Pan młody miał na sobie tradycyjny strój malajski.`,false],
            [`Podczas przejazdu przez miasto państwu młodym gratulowały tysiące
            ludzi z flagami narodowymi.`,true],
            [`Księżniczka i jej mąż pracują razem.`,false],
            [`Przyjęcie dla nowożeńców organizuje ojciec panny młodej.`,true],
            [`Sułtan Brunei ożenił się z 33-letnią dziennikarką telewizyjną.`,false],
            [`Ślub sułtana nie był typowy dla rodziny królewskiej.`,true],
            [`Rodzina królewska panuje w sułtanacie Brunei od XV wieku.`,true]
        ]
}
