import trackA1 from '../../assets/audio/test2_A1_5.mp3';

export const QuizA1_5 = {
    tracks:[trackA1],
    header:['Proszę uważnie słuchać tego nagrania i zaznaczyć właściwe odpowiedzi.',
            'Uwaga! Nagranie zostanie odtworzone tylko jeden raz.'],
    template:{  point:0.5,
                iterate:1,
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w restauracji',cls:'bold'},
                    {word:'w sklepie',cls:''},
                    {word:'u lekarza',cls:''}
                ]    
            },
        card:[
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w punkcie ksero' ,cls:'' ,answer:true},
                    {word:'u krawca' ,cls:'' ,answer:false},
                    {word:'w restauracji' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'prośba' ,cls:'' ,answer:false},
                    {word:'przeprosiny' ,cls:'' ,answer:false},
                    {word:'reklamacja' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź to pytanie o:',
                p:[
                    {word:'miejsce' ,cls:'' ,answer:false},
                    {word:'cenę' ,cls:'' ,answer:true},
                    {word:'osobę' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa z okazji:',
                p:[
                    {word:'urodzin' ,cls:'' ,answer:false},
                    {word:'narodzin dziecka' ,cls:'' ,answer:false},
                    {word:'ślubu' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'na poczcie' ,cls:'' ,answer:true},
                    {word:'na lotnisku' ,cls:'' ,answer:false},
                    {word:'w biurze podróży' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to pytanie o:',
                p:[
                    {word:'miejsce' ,cls:'' ,answer:false},
                    {word:'drogę' ,cls:'' ,answer:true},
                    {word:'czas' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'powitanie' ,cls:'' ,answer:false},
                    {word:'przeprosiny' ,cls:'' ,answer:false},
                    {word:'pożegnanie' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w aptece' ,cls:'' ,answer:true},
                    {word:'w restauracji' ,cls:'' ,answer:false},
                    {word:'w hotelu' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'rozkaz' ,cls:'' ,answer:false},
                    {word:'pochwała' ,cls:'' ,answer:true},
                    {word:'krytyka' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w hotelu' ,cls:'' ,answer:false},
                    {word:'w restauracji' ,cls:'' ,answer:true},
                    {word:'w biurze podróży' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza:',
                p:[
                    {word:'nie wiem' ,cls:'' ,answer:false},
                    {word:'tak' ,cls:'' ,answer:true},
                    {word:'nie' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'krytyka' ,cls:'' ,answer:false},
                    {word:'sugestia' ,cls:'' ,answer:false},
                    {word:'pochwała' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'rada' ,cls:'' ,answer:true},
                    {word:'krytyka' ,cls:'' ,answer:false},
                    {word:'pochwała' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w sklepie' ,cls:'' ,answer:false},
                    {word:'w szatni' ,cls:'' ,answer:true},
                    {word:'u fryzjera' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w taksówce' ,cls:'' ,answer:false},
                    {word:'w samochodzie' ,cls:'' ,answer:false},
                    {word:'w samolocie' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź wyraża:',
                p:[
                    {word:'zaskoczenie' ,cls:'' ,answer:true},
                    {word:'zadowolenie' ,cls:'' ,answer:false},
                    {word:'zdenerwowanie' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'rada' ,cls:'' ,answer:true},
                    {word:'krytyka' ,cls:'' ,answer:false},
                    {word:'zakaz' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w sklepie' ,cls:'' ,answer:true},
                    {word:'w banku' ,cls:'' ,answer:false},
                    {word:'na hali produkcyjnej' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'prośba' ,cls:'' ,answer:false},
                    {word:'ostrzeżenie' ,cls:'' ,answer:true},
                    {word:'krytyka' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'podziękowanie' ,cls:'' ,answer:false},
                    {word:'przeprosiny' ,cls:'' ,answer:true},
                    {word:'rada' ,cls:'' ,answer:false}
                ]
            }
        ]
}