import trackA2 from '../../assets/audio/CP1_A2_3.mp3';
import trackA2_int from '../../assets/audio/catA2intrudaction.mp3';

export const QuizA2_3 = {
    tracks:[trackA2_int, trackA2],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1,
        iterate:2,
        pH:'Ten tekst mówi o podróży',
        p:[
            {word:'balonem.',cls:'bold'},
            {word:'samolotem.',cls:''},
            {word:'statkiem.',cls:''}
        ]    
    },
        card:[
            {
                pH:'W podróży uczestniczyły',
                p:[
                    {word:'dwie studentki.' ,cls:'' ,answer:false},
                    {word:'starsze panie.' ,cls:'' ,answer:true},
                    {word:'chińskie uczennice.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Podróż została zorganizowana przez',
                p:[
                    {word:'firmę transportową.' ,cls:'' ,answer:false},
                    {word:'jedną ze stacji telewizyjnych.' ,cls:'' ,answer:false},
                    {word:'producenta herbaty.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Kobiety są w dobrej kondycji fizycznej, bo',
                p:[
                    {word:'uprawiają sport.' ,cls:'' ,answer:false},
                    {word:'piją herbatę.' ,cls:'' ,answer:true},
                    {word:'jedzą zdrowo.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Lot trwał',
                p:[
                    {word:'30 minut.' ,cls:'' ,answer:true},
                    {word:'50 minut.' ,cls:'' ,answer:false},
                    {word:'godzinę.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Kobiety całe życie',
                p:[
                    {word:'wiele podróżowały.' ,cls:'' ,answer:false},
                    {word:'ciężko pracowały.' ,cls:'' ,answer:true},
                    {word:'latały samolotem.' ,cls:'' ,answer:false}
                ]
            }
            
        ]
}