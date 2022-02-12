import trackA2 from '../../assets/audio/test2_A2_2.mp3';
import trackA2_int from '../../assets/audio/catA2intrudaction.mp3';

export const QuizA2_2 = {
    tracks:[trackA2_int, trackA2],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1,
        iterate:2,
        pH:'Prawnicy znajdują zatrudnienie:',
        p:[
            {word:'w każdej firmie.',cls:'bold'},
            {word:'w firmach prawniczych.',cls:''},
            {word:'w kancelariach prawniczych.',cls:''}
        ]    
    },
        card:[
            {
                pH:'Pracodawcy chętnie przyjmują prawników, ponieważ są:',
                p:[
                    {word:'potrzebni i dobrze wykwalifikowani.' ,cls:'' ,answer:false},
                    {word:'to ludzie konkretni i zdyscyplinowani.' ,cls:'' ,answer:true},
                    {word:'to ludzie pracowici i zdyscyplinowani.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ukończenie ekonomii gwarantuje dobrą pracę, ponieważ:',
                p:[
                    {word:'ściśle wiąże się z wiedzą o świecie.' ,cls:'' ,answer:false},
                    {word:'daje światowe wykształcenie i wiedzę o świecie.' ,cls:'' ,answer:false},
                    {word:'jest kierunkiem ścisłym i daje konkretną wiedzę o świecie.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Do studiowania pedagogiki może zniechęcać:',
                p:[
                    {word:'niskie wynagrodzenie.' ,cls:'' ,answer:true},
                    {word:'niskie wykształcenie.' ,cls:'' ,answer:false},
                    {word:'niska emerytura.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Studia medyczne dla studenta są:',
                p:[
                    {word:'początkiem drogi w zawodzie przedstawiciela medycznego.' ,cls:'' ,answer:false},
                    {word:'gwarancją kariery lekarskiej.' ,cls:'' ,answer:false},
                    {word:'początkiem drogi lekarskiej.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Absolwent medycyny, żeby zostać lekarzem, musi:',
                p:[
                    {word:'zdać egzaminy lekarskie na stażu.' ,cls:'' ,answer:false},
                    {word:'ukończyć specjalizację i kilka staży.' ,cls:'' ,answer:true},
                    {word:'wybrać dobrą specjalizację i odbyć staż.' ,cls:'' ,answer:false}
                ]
            }
            
        ]
}