import trackA1 from '../../assets/audio/CP1_A1_7.mp3';

export const QuizA1_7 = {
    tracks:[trackA1],
    header:['Proszę uważnie słuchać tego nagrania i zaznaczyć właściwe odpowiedzi.',
            'Uwaga! Nagranie zostanie odtworzone tylko jeden raz.'],
    template:{  point:0.5,
                iterate:1,
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'na dworcu autobusowym.',cls:''},
                    {word:'na dworcu kolejowym.',cls:'bold'},
                    {word:'w kolejce górskiej.',cls:''}
                ]    
            },
        card:[
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w tramwaju.' ,cls:'' ,answer:true},
                    {word:'w kinie.' ,cls:'' ,answer:false},
                    {word:'w muzeum.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w sklepie.' ,cls:'' ,answer:false},
                    {word:'u dentysty.' ,cls:'' ,answer:false},
                    {word:'w aptece.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w salonie Bingo.' ,cls:'' ,answer:false},
                    {word:'w punkcie LOTTO.' ,cls:'' ,answer:false},
                    {word:'w szatni.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w autobusie.' ,cls:'' ,answer:false},
                    {word:'w taksówce.' ,cls:'' ,answer:true},
                    {word:'w pociągu.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa podczas',
                p:[
                    {word:'zakupów.' ,cls:'' ,answer:false},
                    {word:'posiłku.' ,cls:'' ,answer:true},
                    {word:'zebrania.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza:',
                p:[
                    {word:'Tak!' ,cls:'' ,answer:true},
                    {word:'Nie!' ,cls:'' ,answer:false},
                    {word:'Nigdy!' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza, że',
                p:[
                    {word:'mam jutro czas.' ,cls:'' ,answer:false},
                    {word:'spotkamy się jutro.' ,cls:'' ,answer:false},
                    {word:'muszę to zrobić do jutra.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza:',
                p:[
                    {word:'Nie wiem, dokąd idziesz.' ,cls:'' ,answer:false},
                    {word:'Nie rozumiem.' ,cls:'' ,answer:true},
                    {word:'Chodź ze mną.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza, że',
                p:[
                    {word:'nic nie wiem na ten temat.' ,cls:'' ,answer:false},
                    {word:'nie chcę o tym mówić.' ,cls:'' ,answer:true},
                    {word:'nie rozumiem tego tematu.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza, że',
                p:[
                    {word:'rozmawiam z dyrektorem.' ,cls:'' ,answer:false},
                    {word:'proszę o rozmowę z dyrektorem.' ,cls:'' ,answer:true},
                    {word:'wołam dyrektora.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza, że kupuję bilet',
                p:[
                    {word:'w obie strony.' ,cls:'' ,answer:true},
                    {word:'tylko powrotny.' ,cls:'' ,answer:false},
                    {word:'w jedną stronę.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza:',
                p:[
                    {word:'Dokąd idziesz?' ,cls:'' ,answer:true},
                    {word:'Co wybrałeś?' ,cls:'' ,answer:false},
                    {word:'Jakie są wyniki wyborów?' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to',
                p:[
                    {word:'odmowa.' ,cls:'' ,answer:false},
                    {word:'zaproszenie.' ,cls:'' ,answer:true},
                    {word:'zawiadomienie.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Tę wypowiedź można najczęściej usłyszeć',
                p:[
                    {word:'w sklepie.' ,cls:'' ,answer:true},
                    {word:'przy stole.' ,cls:'' ,answer:false},
                    {word:'nad morzem.' ,cls:'' ,answer:false}
                ]
            }
            
        ]
}