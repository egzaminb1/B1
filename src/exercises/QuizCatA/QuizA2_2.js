import trackA2_2 from '../../assets/audio/catA2_2.mp3';
import trackA2_int from '../../assets/audio/catA2intrudaction.mp3';

export const QuizA2_2 = {
    tracks:[trackA2_int, trackA2_2],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1,
        iterate:2,
        pH:'2_1 Dziennikarz przeprowadza wywiad z: ',
        p:[
            {word:'lekarzem',cls:'bold'},
            {word:'kierowcą',cls:''},
            {word:'podróżnikiem',cls:''}
        ]    
    },
        card:[
            {
                pH:'Lekarz udziela rad na temat:',
                p:[
                    {word:'pomysłu na dobry urlop' ,cls:'' ,answer:false},
                    {word:'kondycji kierowcy podczas podróży' ,cls:'' ,answer:true},
                    {word:'różnych chorób kierowców' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Na stan kierowców mogą źle wpływać:',
                p:[
                    {word:'różne dolegliwościi stosowane lekarstwa',cls:'' ,answer:true},
                    {word:'zbyt długi sen i silna alergia',cls:'' ,answer:false},
                    {word:'bezsenność i stosowane na nią leki',cls:'' ,answer:false}
                ]
            },
            {
                pH:'Najwięcej wypadków zdarza się w godzinach:',
                p:[
                    {word:'wieczornych i przed północą',cls:'' ,answer:false},
                    {word:'nocnych i rannych',cls:'' ,answer:true},
                    {word:'przedpołudniowych',cls:'' ,answer:false}
                ]
            },
            {
                pH:'Najlepszą radą na zmęczenie jest:',
                p:[
                    {word:'tylko długi sen',cls:'' ,answer:false},
                    {word:'nawet 20 minut snu',cls:'' ,answer:true},
                    {word:'nawet 10 minut snu',cls:'' ,answer:false}
                ]
            },
            {
                pH:'Pełną koncentrację uzyskuje się:',
                p:[
                    {word:'po krótkim śnie',cls:'' ,answer:false},
                    {word:'po 20 minutach snu ',cls:'' ,answer:false},
                    {word:'po 10 minutach od przebudzenia',cls:'' ,answer:true}
                ]
            }

        ]
}