import trackA1 from '../../assets/audio/test1_A1_4.mp3';

export const QuizA1_4 = {
    tracks:[trackA1],
    header:['Proszę uważnie słuchać tego nagrania i zaznaczyć właściwe odpowiedzi.',
            'Uwaga! Nagranie zostanie odtworzone tylko jeden raz.'],
    template:{  point:0.5,
                iterate:1,
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'wyrażenie opinii',cls:'bold'},
                    {word:'rada',cls:''},
                    {word:'krytyka',cls:''}
                ]    
            },
        card:[
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w zaproszeniu' ,cls:'' ,answer:false},
                    {word:'w liście' ,cls:'' ,answer:true},
                    {word:'.w CV' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź informuje o:',
                p:[
                    {word:'pracy' ,cls:'' ,answer:false},
                    {word:'wynagrodzeniu' ,cls:'' ,answer:false},
                    {word:'urlopie' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w biurze' ,cls:'' ,answer:true},
                    {word:'w sklepie' ,cls:'' ,answer:false},
                    {word:'w restauracji' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'na uniwersytecie' ,cls:'' ,answer:true},
                    {word:'podczas rozmowy o pracę' ,cls:'' ,answer:false},
                    {word:'w kasie' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'obawa' ,cls:'' ,answer:true},
                    {word:'nadzieja' ,cls:'' ,answer:false},
                    {word:'niezadowolenie' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w teatrze' ,cls:'' ,answer:false},
                    {word:'w kinie' ,cls:'' ,answer:false},
                    {word:'w tramwaju' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'u mechanika' ,cls:'' ,answer:false},
                    {word:'u dentysty' ,cls:'' ,answer:true},
                    {word:'na poczcie' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'prośba' ,cls:'' ,answer:false},
                    {word:'rozkaz' ,cls:'' ,answer:true},
                    {word:'niezadowolenie' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa w sklepie:',
                p:[
                    {word:'RTV' ,cls:'' ,answer:false},
                    {word:'spożywczym' ,cls:'' ,answer:false},
                    {word:'obuwniczym' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa z okazji:',
                p:[
                    {word:'urodzin' ,cls:'' ,answer:false},
                    {word:'narodzin dziecka' ,cls:'' ,answer:true},
                    {word:'świąt' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'zdziwienie' ,cls:'' ,answer:true},
                    {word:'niezadowolenie' ,cls:'' ,answer:false},
                    {word:'współczucie' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'u mechanika' ,cls:'' ,answer:false},
                    {word:'w informacji' ,cls:'' ,answer:false},
                    {word:'w biurze napraw' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w kawiarni' ,cls:'' ,answer:false},
                    {word:'w sklepie' ,cls:'' ,answer:false},
                    {word:'u lekarza' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa w sklepie:',
                p:[
                    {word:'papierniczym' ,cls:'' ,answer:false},
                    {word:'odzieżowym' ,cls:'' ,answer:true},
                    {word:'spożywczym' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'propozycja' ,cls:'' ,answer:true},
                    {word:'przypuszczenie' ,cls:'' ,answer:false},
                    {word:'rada' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w kinie' ,cls:'' ,answer:true},
                    {word:'w tramwaju' ,cls:'' ,answer:false},
                    {word:'w restauracji' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'na lotnisku' ,cls:'' ,answer:false},
                    {word:'na dworcu kolejowym' ,cls:'' ,answer:true},
                    {word:'na postoju taksówek' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w sklepie' ,cls:'' ,answer:true},
                    {word:'u lekarza' ,cls:'' ,answer:false},
                    {word:'w teatrze' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to:',
                p:[
                    {word:'prośba' ,cls:'' ,answer:false},
                    {word:'pochwała' ,cls:'' ,answer:false},
                    {word:'zachęta' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'u lekarza' ,cls:'' ,answer:false},
                    {word:'w sklepie' ,cls:'' ,answer:true},
                    {word:'w restauracji' ,cls:'' ,answer:false}
                ]
            }
        ]
}