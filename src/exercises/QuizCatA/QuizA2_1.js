import trackA2_1 from '../../assets/audio/catA2_2.mp3';
import trackA2_int from '../../assets/audio/catA2intrudaction.mp3';

export const QuizA2_1 = {
    tracks:[trackA2_int, trackA2_1],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1,
        iterate:2,
        pH:'Ta osoba poleca bar Dym, ponieważ: ',
        p:[
            {word:'jest tu dużo alkoholu',cls:''},
            {word:'jest tu duży wybór nietypowych alkoholi',cls:'bold'},
            {word:'nie ma tu egzotycznych wódek',cls:''}
        ]    
    },
        card:[
            {
                pH:'Ta osoba lubi Carpe diem, ponieważ tu:',
                p:[
                    {word:'świetnie gotują' ,cls:'' ,answer:false},
                    {word:'można posłuchaćtylko starego rocka' ,cls:'' ,answer:false},
                    {word:'każdy znajdzie muzykędla siebie' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Klub muzyczny Cień przeznaczony jest:',
                p:[
                    {word:'tylko dla sportowców',cls:'' ,answer:false},
                    {word:'dla osób w każdym wieku',cls:'' ,answer:true},
                    {word:'tylko dla osób starszych',cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta osoba poleca klub Atmosfera, ponieważ:',
                p:[
                    {word:'przychodzą tu interesujący ludzie i piwo jest tanie',cls:'' ,answer:true},
                    {word:'trzeba mieć nietypowy strój',cls:'' ,answer:false},
                    {word:'piwo jest drogie i jest świetny wystrój',cls:'' ,answer:false}
                ]
            },
            {
                pH:'Klub Boogie to miejsce, gdzie można:',
                p:[
                    {word:'posłuchać jazzu',cls:'' ,answer:false},
                    {word:'dobrze zjeść',cls:'' ,answer:true},
                    {word:'posłuchać koncertu fortepianowego',cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta osobalubi Grotę solną, ponieważ:',
                p:[
                    {word:'można tu prowadzić miłe rozmowy',cls:'' ,answer:true},
                    {word:'lepiej rozmawiać w ogródku ',cls:'' ,answer:false},
                    {word:'często tam grilluje',cls:'' ,answer:false}
                ]
            }

        ]
}