import trackA2 from '../../assets/audio/CP3_A2_5.mp3';
import trackA2_int from '../../assets/audio/catA2intrudaction.mp3';

export const QuizA2_5 = {
    tracks:[trackA2_int, trackA2],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1,
        iterate:2,
        pH:'Z tego dialogu dowiadujemy się, że mężczyzna',
        p:[
            {word:'rozmawia z doktor Lisiecką.',cls:''},
            {word:'właśnie wyszedł od doktor Lisieckiej.',cls:''},
            {word:'szuka gabinetu doktor Lisieckiej.',cls:'bold'}
        ]    
    },
        card:[
            {
                pH:'Z tego dialogu dowiadujemy się, że mężczyzna',
                p:[
                    {word:'idzie do hotelu.' ,cls:'' ,answer:false},
                    {word:'zatrzymuje taksówkę.' ,cls:'' ,answer:false},
                    {word:'jedzie w złym kierunku.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Z tego dialogu dowiadujemy się, że',
                p:[
                    {word:'kobieta studiuje i zajmuje się domem.' ,cls:'' ,answer:true},
                    {word:'mąż robi wszystko w domu.' ,cls:'' ,answer:false},
                    {word:'kobiecie nikt nie pomaga.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Z tego dialogu dowiadujemy się, że mężczyzna',
                p:[
                    {word:'jest autorem projektu.' ,cls:'' ,answer:false},
                    {word:'krytykuje projekt.' ,cls:'' ,answer:false},
                    {word:'nie mówi, co myśli.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Z tego dialogu dowiadujemy się, że mężczyzna',
                p:[
                    {word:'chce wydać nową płytę.' ,cls:'' ,answer:false},
                    {word:'jest za stary na kolejną płytę.' ,cls:'' ,answer:true},
                    {word:'komponuje muzykę do nowej płyty.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Z tego dialogu dowiadujemy się, że mężczyzna',
                p:[
                    {word:'jeździ na rowerze z dzieckiem.' ,cls:'' ,answer:false},
                    {word:'dostał rower od dziecka.' ,cls:'' ,answer:false},
                    {word:'jeździł na rowerze już w dzieciństwie.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Z tego dialogu dowiadujemy się, że uczestnicy kursu',
                p:[
                    {word:'są pracownikami urzędu miasta.' ,cls:'' ,answer:false},
                    {word:'biorą w nim udział bezpłatnie.' ,cls:'' ,answer:true},
                    {word:'muszą zapłacić za zajęcia.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Z tego dialogu dowiadujemy się, że w sobotę kobieta i mężczyzna',
                p:[
                    {word:'mają inne plany na wieczór.' ,cls:'' ,answer:true},
                    {word:'spędzą razem wieczór.' ,cls:'' ,answer:false},
                    {word:'idą wieczorem na mecz.' ,cls:'' ,answer:false}
                ]
            }
            
        ]
}