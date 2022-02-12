

export const QuizC1_5 = {
    header:['Po przeczytaniu podanych napisów proszę zaznaczyć właściwą odpowiedź.',
            ''],
    template:{  point:0.5,
                iterate:1,
                pH:'Wejście',
                pQ:'Ten napis oznacza, że:',
                p:[
                    {word:'tu wychodzimy',cls:''},
                    {word:'tu wchodzimy',cls:'bold'},
                    {word:'tu wchodzimy i wychodzimy',cls:''}
                ]    
            },
        card:[
            {
                pH:'Dla niepalących',
                pQ:'Ten napis oznacza, że:',
                p:[
                    {word:'tu nie wolno palić' ,cls:'' ,answer:true},
                    {word:'tu można palić' ,cls:'' ,answer:false},
                    {word:'tylko tu się pali' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'PKP',
                pQ:'Ten skrót oznacza:',
                p:[
                    {word:'autobusy' ,cls:'' ,answer:false},
                    {word:'pociągi' ,cls:'' ,answer:true},
                    {word:'tramwaje' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Zaraz wracam',
                pQ:'Ten napis na drzwiach oznacza, że:',
                p:[
                    {word:'dziś wyjątkowo jest zamknięte' ,cls:'' ,answer:false},
                    {word:'jest nieczynne z powodu awarii' ,cls:'' ,answer:false},
                    {word:'jest chwilowo zamknięte' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Szatnia obowiązkowa',
                pQ:'Ten napis oznacza, że:',
                p:[
                    {word:'każdy musi skorzystać z szatni' ,cls:'' ,answer:true},
                    {word:'nikt nie może korzystaćz szatni' ,cls:'' ,answer:false},
                    {word:'nie wszyscy mogą korzystaćz szatni' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Stara architektura, garaż, blisko stacja metra',
                pQ:'Ten napis to:',
                p:[
                    {word:'reklama sklepu' ,cls:'' ,answer:false},
                    {word:'oferta mieszkaniowa' ,cls:'' ,answer:true},
                    {word:'ogłoszenie matrymonialne' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Wejście służbowe',
                pQ:'Ten napis oznacza:',
                p:[
                    {word:'wstęp dla inwalidów' ,cls:'' ,answer:false},
                    {word:'wejście dla klientów' ,cls:'' ,answer:false},
                    {word:'drzwi dla pracowników' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Świeżo malowane',
                pQ:'Ten napis można spotkać:',
                p:[
                    {word:'na samochodzie, autobusie' ,cls:'' ,answer:false},
                    {word:'na drzewie, krzaku' ,cls:'' ,answer:false},
                    {word:'na ławce, drzwiach' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Przejście podziemne',
                pQ:'Ten napis oznacza przejście:',
                p:[
                    {word:'przez ulice' ,cls:'' ,answer:false},
                    {word:'korytarzem' ,cls:'' ,answer:false},
                    {word:'pod ulicą' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Data ważności',
                pQ:'Ten napis oznacza:',
                p:[
                    {word:'kiedy coś zostało zrobione' ,cls:'' ,answer:false},
                    {word:'do kiedy można czegoś używać' ,cls:'' ,answer:true},
                    {word:'od kiedy należy z czegoś korzystać' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Odprawa celna',
                pQ:'Ten napis można spotkać:',
                p:[
                    {word:'na lotnisku' ,cls:'' ,answer:true},
                    {word:'na parkingu' ,cls:'' ,answer:false},
                    {word:'na dworcu' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Wymagane prawojazdy kat. B',
                pQ:'Ten napis można spotkać:',
                p:[
                    {word:'w CV' ,cls:'' ,answer:false},
                    {word:'w zaproszeniu' ,cls:'' ,answer:false},
                    {word:'w ogłoszeniu' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Wyprzedaż',
                pQ:'Ten napis oznacza:',
                p:[
                    {word:'niższe ceny' ,cls:'' ,answer:true},
                    {word:'wyższe ceny' ,cls:'' ,answer:false},
                    {word:'podwyżkę cen' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Sprzedaż nieletnim zakazana',
                pQ:'Ten napis oznacza, że:',
                p:[
                    {word:'tu nie mogą sprzedawać dzieci' ,cls:'' ,answer:false},
                    {word:'można sprzedawać dzieciom' ,cls:'' ,answer:false},
                    {word:'kupować mogą tylko dorośli' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Wstęp wolny',
                pQ:'Ten napis oznacza, że:',
                p:[
                    {word:'można wejść tylko z biletem' ,cls:'' ,answer:false},
                    {word:'nie trzeba mieć biletu' ,cls:'' ,answer:true},
                    {word:'należy kupić specjalny bilet' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Poczekalnia',
                pQ:'Ten napis można spotkać:',
                p:[
                    {word:'w sklepie' ,cls:'' ,answer:false},
                    {word:'u lekarza' ,cls:'' ,answer:true},
                    {word:'na poczcie' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Roboty drogowe',
                pQ:'Ten napis oznacza:',
                p:[
                    {word:'prace na drodze' ,cls:'' ,answer:true},
                    {word:'automatyczne drogi' ,cls:'' ,answer:false},
                    {word:'automaty na drodze' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Do wynajęcia',
                pQ:'Ten napis nie dotyczy:',
                p:[
                    {word:'samochodu' ,cls:'' ,answer:false},
                    {word:'mieszkania' ,cls:'' ,answer:false},
                    {word:'zakupów' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Chronić przed dziećmi',
                pQ:'Ten napis można spotkać:',
                p:[
                    {word:'na środkach czystości' ,cls:'' ,answer:true},
                    {word:'na artykułach spożywczych' ,cls:'' ,answer:false},
                    {word:'na produktach papierniczych' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Uwaga! stopień',
                pQ:'Ten napis oznacza, że:',
                p:[
                    {word:'należy uważać na głowę' ,cls:'' ,answer:false},
                    {word:'powinno się zamknąć oczy' ,cls:'' ,answer:false},
                    {word:'trzeba patrzeć pod nogi' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Zajęte',
                pQ:'Ten napis oznacza, że ktoś:',
                p:[
                    {word:'dużo pracuje' ,cls:'' ,answer:false},
                    {word:'jest w środku' ,cls:'' ,answer:true},
                    {word:'nie może wyjść' ,cls:'' ,answer:false}
                ]
            }
            
        ]
}