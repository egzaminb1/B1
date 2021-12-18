import trackA1_2 from '../../assets/audio/catA1_2.mp3';

export const QuizA1_2 = {
    tracks:[trackA1_2],
    header:['Proszę uważnie słuchać tego nagrania i zaznaczyć właściwe odpowiedzi.',
            'Uwaga! Nagranie zostanie odtworzone tylko jeden raz.'],
    template:{  point:0.5,
                iterate:1,
                pH:'1_2 Ta wypowiedź jest typowa:',
                p:[
                    {word:'w samochodzie',cls:''},
                    {word:'w samolocie',cls:'bold'},
                    {word:'na promie',cls:''}
                ]    
            },
            card:[
                {
                    pH:'Ta wypowiedź to:',
                    p:[
                        {word:'zachęta' ,cls:'' ,answer:false},
                        {word:'potwierdzenie' ,cls:'' ,answer:false},
                        {word:'upomnienie' ,cls:'' ,answer:true}
                    ]
                },
                {
                    pH:'Ta wypowiedź jest typowa:',
                    p:[
                        {word:'na poczcie' ,cls:'' ,answer:true},
                        {word:'w banku' ,cls:'' ,answer:false},
                        {word:'w kiosku' ,cls:'' ,answer:false}
                    ]
                },
                {
                    pH:'Ta wypowiedź jest typowa:',
                    p:[
                        {word:'w aptece' ,cls:'' ,answer:true},
                        {word:'w gabinecie lekarskim' ,cls:'' ,answer:false},
                        {word:'w szpitalu' ,cls:'' ,answer:false}
                    ]
                },
                {
                    pH:'Ta wypowiedź to:',
                    p:[
                        {word:'skarga' ,cls:'' ,answer:false},
                        {word:'prośba' ,cls:'' ,answer:false},
                        {word:'zakaz' ,cls:'' ,answer:true}
                    ]
                },
                {
                    pH:'Ta wypowiedź jest typowa:',
                    p:[
                        {word:'u krawca' ,cls:'' ,answer:false},
                        {word:'u fryzjera' ,cls:'' ,answer:true},
                        {word:'u kosmetyczki' ,cls:'' ,answer:false}
                    ]
                },
                {
                    pH:'Ta wypowiedź jest typowa:',
                    p:[
                        {word:'u fotografa' ,cls:'' ,answer:true},
                        {word:'u kosmetyczki' ,cls:'' ,answer:false},
                        {word:'u dentysty' ,cls:'' ,answer:false}
                    ]
                },
                {
                    pH:'Ta wypowiedź jest typowa:',
                    p:[
                        {word:'na korcie' ,cls:'' ,answer:false},
                        {word:'na kręgielni' ,cls:'' ,answer:false},
                        {word:'na pływalni' ,cls:'' ,answer:true}
                    ]
                },
                {
                    pH:'Ta wypowiedź jest typowa:',
                    p:[
                        {word:'u mechanika' ,cls:'' ,answer:true},
                        {word:'w sklepie' ,cls:'' ,answer:false},
                        {word:'u księgowej' ,cls:'' ,answer:false}
                    ]
                },
                {
                    pH:'Ta wypowiedź to:',
                    p:[
                        {word:'komentarz' ,cls:'' ,answer:false},
                        {word:'prośba' ,cls:'' ,answer:true},
                        {word:'zakaz' ,cls:'' ,answer:false}
                    ]
                },
                {
                    pH:'Ta wypowiedź wyraża:',
                    p:[
                        {word:'zniechęcenie' ,cls:'' ,answer:false},
                        {word:'obojętność' ,cls:'' ,answer:false},
                        {word:'zadowolenie' ,cls:'' ,answer:true}
                    ]
                },
                {
                    pH:'Ta wypowiedź jest typowa:',
                    p:[
                        {word:'u piekarza' ,cls:'' ,answer:true},
                        {word:'u mechanika' ,cls:'' ,answer:false},
                        {word:'ukrawca' ,cls:'' ,answer:false}
                    ]
                },
                {
                    pH:'Ta wypowiedź jest typowa:',
                    p:[
                        {word:'na meczu' ,cls:'' ,answer:false},
                        {word:'na boisku' ,cls:'' ,answer:false},
                        {word:'na balu' ,cls:'' ,answer:true}
                    ]
                },
                {
                    pH:'Ta wypowiedź to:',
                    p:[
                        {word:'ostrzeżenie' ,cls:'' ,answer:false},
                        {word:'prośba' ,cls:'' ,answer:false},
                        {word:'obietnica' ,cls:'' ,answer:true}
                    ]
                },
                {
                    pH:'Ta wypowiedź to:',
                    p:[
                        {word:'pochwała' ,cls:'' ,answer:true},
                        {word:'nagana' ,cls:'' ,answer:false},
                        {word:'upomnienie' ,cls:'' ,answer:false}
                    ]
                },
                {
                    pH:'Ta wypowiedź jest typowa w sklepie:',
                    p:[
                        {word:'warzywnym' ,cls:'' ,answer:false},
                        {word:'obuwniczym' ,cls:'' ,answer:false},
                        {word:'odzieżowym' ,cls:'' ,answer:true}
                    ]
                },
                {
                    pH:'Ta wypowiedź jest typowa podczas:',
                    p:[
                        {word:'posiłku' ,cls:'' ,answer:true},
                        {word:'zakupów' ,cls:'' ,answer:false},
                        {word:'lekcji' ,cls:'' ,answer:false}
                    ]
                },
                {
                    pH:'Ta wypowiedź jest typowa:',
                    p:[
                        {word:'na ulicy' ,cls:'' ,answer:false},
                        {word:'na stadionie' ,cls:'' ,answer:true},
                        {word:'na basenie' ,cls:'' ,answer:false}
                    ]
                },
                {
                    pH:'Ta wypowiedź to:',
                    p:[
                        {word:'kondolencje' ,cls:'' ,answer:true},
                        {word:'życzenia' ,cls:'' ,answer:false},
                        {word:'ostrzeżenie' ,cls:'' ,answer:false}
                    ]
                },
                {
                    pH:'Ta wypowiedź to:',
                    p:[
                        {word:'protest' ,cls:'' ,answer:true},
                        {word:'rada' ,cls:'' ,answer:false},
                        {word:'nakaz' ,cls:'' ,answer:false}
                    ]
                },
                {
                    pH:'Ta wypowiedź to:',
                    p:[
                        {word:'zaproszenie' ,cls:'' ,answer:true},
                        {word:'prośba' ,cls:'' ,answer:false},
                        {word:'odmowa' ,cls:'' ,answer:false}
                    ]
                }
    
            ]
}