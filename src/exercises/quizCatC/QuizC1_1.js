

export const QuizC1_1 = {
    header:['Po przeczytaniu podanych napisów proszę zaznaczyć właściwą odpowiedź.',
            ''],
    template:{  point:0.5,
                iterate:1,
                pH:'Proszę pukać',
                pQ:'Ten napis można spotkać:',
                p:[
                    {word:'na oknie',cls:''},
                    {word:'na drzwiach',cls:'bold'},
                    {word:'na biurku',cls:''}
                ]    
            },
        card:[
            {
                pH:'Bogata baza turystyczna',
                pQ:'Ten napis oznacza:',
                p:[
                    {word:'wielu turystów' ,cls:'' ,answer:false},
                    {word:'wiele hoteli i restauracji' ,cls:'' ,answer:true},
                    {word:'wiele pociągów i autobusów' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'PLN',
                pQ:'Ten skrót oznacza:',
                p:[
                    {word:'polską ztotówkę' ,cls:'' ,answer:true},
                    {word:'polski portfel' ,cls:'' ,answer:false},
                    {word:'polski bank' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Uwaga piesi',
                pQ:'Ten napis oznacza, że:',
                p:[
                    {word:'tu chodzą psy' ,cls:'' ,answer:false},
                    {word:'tu chodzą ludzie' ,cls:'' ,answer:true},
                    {word:'tu biegną ludzie' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Nieupoważnionym wstęp wzbroniony',
                pQ:'Ten napis oznacza, że:',
                p:[
                    {word:'każdy może wchodzić' ,cls:'' ,answer:false},
                    {word:'nikt nie może wychodzić' ,cls:'' ,answer:false},
                    {word:'nie wszyscy mogą wchodzić' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Po odejściu od kasy reklamacje nie będą uwzględniane',
                pQ:'Ten napis można spotkać:',
                p:[
                    {word:'w sklepie' ,cls:'' ,answer:true},
                    {word:'w szkole' ,cls:'' ,answer:false},
                    {word:'w kościele' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Kobiety ciężarne poza kolejnością',
                pQ:'Ten napis oznacza, że:',
                p:[
                    {word:'kobiety z ciężkimi zakupami nie muszą stać w kolejce' ,cls:'' ,answer:false},
                    {word:'kobiety w ciąży muszą stać w kólejce' ,cls:'' ,answer:false},
                    {word:'kobiet w ciąży nie obowiązuje kolejka' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ostrożnie, szkło!',
                pQ:'Ten napis oznacza, że tu:',
                p:[
                    {word:'jest dużo szklanek' ,cls:'' ,answer:false},
                    {word:'są naczynia' ,cls:'' ,answer:false},
                    {word:'są szklane rzeczy' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'WC dla personelu',
                pQ:'Ten napis oznacza:',
                p:[
                    {word:'toaletę dla pracowników' ,cls:'' ,answer:true},
                    {word:'sanitariat dla klientów' ,cls:'' ,answer:false},
                    {word:'łazienkę dla dyrektorów' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Zakaz wstępu',
                pQ:'Ten napis oznacza, że:',
                p:[
                    {word:'nie wolno wchodzić' ,cls:'' ,answer:true},
                    {word:'nie wolno wychodzić' ,cls:'' ,answer:false},
                    {word:'można wchodzić' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Parkowanie zabronione',
                pQ:'Ten napis można spotkać:',
                p:[
                    {word:'w garażu' ,cls:'' ,answer:false},
                    {word:'na parkingu' ,cls:'' ,answer:false},
                    {word:'na ulicy' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Dawkowanie i sposób stosowania',
                pQ:'Ten napis można spotkać na:',
                p:[
                    {word:'tabletkach' ,cls:'' ,answer:true},
                    {word:'kosmetykach' ,cls:'' ,answer:false},
                    {word:'owocach' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Przed praniem odwrócić na lewą stronę',
                pQ:'Ten napis nie dotyczy:',
                p:[
                    {word:'butów' ,cls:'' ,answer:true},
                    {word:'spodni' ,cls:'' ,answer:false},
                    {word:'bluzki' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Spis treści',
                pQ:'Ten napis można spotkać w:',
                p:[
                    {word:'menu' ,cls:'' ,answer:false},
                    {word:'książce' ,cls:'' ,answer:true},
                    {word:'kalendarzu' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Repertuar',
                pQ:'Ten napis dotyczy:',
                p:[
                    {word:'kin i teatrów' ,cls:'' ,answer:true},
                    {word:'restauracji i kawiarni' ,cls:'' ,answer:false},
                    {word:'sklepów i szkół' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Cisza, nagranie!',
                pQ:'Ten napis oznacza, że:',
                p:[
                    {word:'nie można zachowywać się głośno' ,cls:'' ,answer:true},
                    {word:'należy słuchać' ,cls:'' ,answer:false},
                    {word:'zaraz usłyszymy muzykę' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Dostawa gratis w wyznaczonej strefie',
                pQ:'Tego napisu nie można spotkać:',
                p:[
                    {word:'w pizzerii' ,cls:'' ,answer:false},
                    {word:'w taksówce' ,cls:'' ,answer:true},
                    {word:'w sklepie' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Wyjście ewakuacyjne',
                pQ:'Ten napis ożnacza:',
                p:[
                    {word:'dodatkowe wejście' ,cls:'' ,answer:false},
                    {word:'wyjście w przypadku niebezpieczeństwa' ,cls:'' ,answer:true},
                    {word:'wyjście dla inwalidów' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Zmiana organizacji ruchu',
                pQ:'Ten napis oznacza, że:',
                p:[
                    {word:'samochody będą jechać inaczej niż dotąd' ,cls:'' ,answer:true},
                    {word:'samochody muszą jechać szybciej' ,cls:'' ,answer:false},
                    {word:'samochody mają poruszać się z określoną prędkością' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'W kinach od września',
                pQ:'Ten napis oznacza, że film można zobaczyć:',
                p:[
                    {word:'później niż we wrześniu' ,cls:'' ,answer:false},
                    {word:'tylko we wrześniu' ,cls:'' ,answer:false},
                    {word:'nie wcześniej niż we wrześniu' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Warto spróbować',
                pQ:'Ten napis to:',
                p:[
                    {word:'zachęta' ,cls:'' ,answer:true},
                    {word:'propozycja' ,cls:'' ,answer:false},
                    {word:'sprzeciw' ,cls:'' ,answer:false}
                ]
            }
        ]
}