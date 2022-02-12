import trackA1 from '../../assets/audio/CP3_A1_9.mp3';

export const QuizA1_9 = {
    tracks:[trackA1],
    header:['Proszę uważnie słuchać tego nagrania i zaznaczyć właściwe odpowiedzi.',
            'Uwaga! Nagranie zostanie odtworzone tylko jeden raz.'],
    template:{  point:0.5,
                iterate:1,
                pH:'Ta wypowiedź to pytanie o',
                p:[
                    {word:'czas.',cls:'bold'},
                    {word:'drogę.',cls:''},
                    {word:'kierunek.',cls:''}
                ]    
            },
        card:[
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'na stacji benzynowej.' ,cls:'' ,answer:false},
                    {word:'w sklepie z meblami.' ,cls:'' ,answer:true},
                    {word:'w kinie przy kasie.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'siłowni.' ,cls:'' ,answer:false},
                    {word:'restauracji.' ,cls:'' ,answer:false},
                    {word:'hotelu.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'samolocie.' ,cls:'' ,answer:false},
                    {word:'taksówce.' ,cls:'' ,answer:false},
                    {word:'autobusie.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w aptece.' ,cls:'' ,answer:true},
                    {word:'u dentysty.' ,cls:'' ,answer:false},
                    {word:'w sekretariacie.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to fragment',
                p:[
                    {word:'komunikatu na dworcu.' ,cls:'' ,answer:false},
                    {word:'reklamy radiowej.' ,cls:'' ,answer:true},
                    {word:'instrukcji obsługi.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to fragment rozmowy',
                p:[
                    {word:'w dziekanacie.' ,cls:'' ,answer:false},
                    {word:'przez telefon.' ,cls:'' ,answer:true},
                    {word:'dwóch koleżanek.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to pytanie o',
                p:[
                    {word:'czas.' ,cls:'' ,answer:false},
                    {word:'miejsce.' ,cls:'' ,answer:false},
                    {word:'środek transportu.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza, że ta osoba',
                p:[
                    {word:'planuje wizytę u lekarza.' ,cls:'' ,answer:false},
                    {word:'dawno nie leczyła zębów.' ,cls:'' ,answer:true},
                    {word:'często odwiedza dentystę.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza',
                p:[
                    {word:'krytykę.' ,cls:'' ,answer:true},
                    {word:'życzenie.' ,cls:'' ,answer:false},
                    {word:'akceptację.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza',
                p:[
                    {word:'niepokój.' ,cls:'' ,answer:true},
                    {word:'radość.' ,cls:'' ,answer:false},
                    {word:'satysfakcję.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza, że',
                p:[
                    {word:'mamy dużo czasu.' ,cls:'' ,answer:false},
                    {word:'będziemy punktualnie.' ,cls:'' ,answer:false},
                    {word:'spóźnimy się.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza, że trzeba',
                p:[
                    {word:'włączyć światło.' ,cls:'' ,answer:true},
                    {word:'zamknąć okno.' ,cls:'' ,answer:false},
                    {word:'zgasić światło.' ,cls:'' ,answer:false}
                ]
            }
            
        ]
}