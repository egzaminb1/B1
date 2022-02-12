import trackA2 from '../../assets/audio/CP2_A2_4.mp3';
import trackA2_int from '../../assets/audio/catA2intrudaction.mp3';

export const QuizA2_4 = {
    tracks:[trackA2_int, trackA2],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1,
        iterate:2,
        pH:'SMS informuje o',
        p:[
            {word:'niebezpieczeństwie.',cls:'bold'},
            {word:'zamkniętych szpitalach.',cls:''},
            {word:'innych mieszkańcach.',cls:''}
        ]    
    },
        card:[
            {
                pH:'Wiadomości alarmowe',
                p:[
                    {word:'przesyła policja i straż pożarna.' ,cls:'' ,answer:false},
                    {word:'powstają w Centrum Bezpieczeństwa.' ,cls:'' ,answer:true},
                    {word:'przygotowują operatorzy komórkowi.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Aby otrzymać wiadomość,',
                p:[
                    {word:'należy wpisać się na specjalną listę.' ,cls:'' ,answer:false},
                    {word:'trzeba zarejestrować się na stronie internetowej.' ,cls:'' ,answer:false},
                    {word:'nie trzeba robić niczego szczególnego.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'System nie ostrzega przed',
                p:[
                    {word:'silnymi wiatrami.' ,cls:'' ,answer:false},
                    {word:'zmianami temperatury.' ,cls:'' ,answer:false},
                    {word:'niebezpiecznymi drogami.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Po przeczytaniu wiadomości należy',
                p:[
                    {word:'zrobić to, co jest w niej napisane.' ,cls:'' ,answer:true},
                    {word:'zadzwonić na numer nadawcy.' ,cls:'' ,answer:false},
                    {word:'uciekać tak szybko, jak to tylko możliwe.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'System alarmowy',
                p:[
                    {word:'działa w Polsce od wielu lat.' ,cls:'' ,answer:false},
                    {word:'od niedawna źle funkcjonuje.' ,cls:'' ,answer:false},
                    {word:'może być oceniany przez Polaków.' ,cls:'' ,answer:true}
                ]
            }
            
        ]
}