import trackA1 from '../../assets/audio/CP2_A1_8.mp3';

export const QuizA1_8 = {
    tracks:[trackA1],
    header:['Proszę uważnie słuchać tego nagrania i zaznaczyć właściwe odpowiedzi.',
            'Uwaga! Nagranie zostanie odtworzone tylko jeden raz.'],
    template:{  point:0.5,
                iterate:1,
                pH:'To zdanie może wypowiedzieć',
                p:[
                    {word:'policjant.',cls:'bold'},
                    {word:'kierowca.',cls:''},
                    {word:'ksiądz.',cls:''}
                ]    
            },
        card:[
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w kinie.' ,cls:'' ,answer:false},
                    {word:'w bibliotece.' ,cls:'' ,answer:true},
                    {word:'w księgarni.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to fragment',
                p:[
                    {word:'wizyty u lekarza.' ,cls:'' ,answer:false},
                    {word:'egzaminu na prawo jazdy.' ,cls:'' ,answer:false},
                    {word:'rozmowy o pracę.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza',
                p:[
                    {word:'odmowę.' ,cls:'' ,answer:false},
                    {word:'niepewność.' ,cls:'' ,answer:true},
                    {word:'komplement.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'u fryzjera.' ,cls:'' ,answer:true},
                    {word:'w drogerii.' ,cls:'' ,answer:false},
                    {word:'u lekarza.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza',
                p:[
                    {word:'radę.' ,cls:'' ,answer:true},
                    {word:'prośbę.' ,cls:'' ,answer:false},
                    {word:'ofertę.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w księgarni.' ,cls:'' ,answer:false},
                    {word:'u optyka.' ,cls:'' ,answer:false},
                    {word:'w kwiaciarni.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w banku.' ,cls:'' ,answer:true},
                    {word:'w kinie.' ,cls:'' ,answer:false},
                    {word:'w kantorze.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to fragment',
                p:[
                    {word:'diagnozy lekarza.' ,cls:'' ,answer:false},
                    {word:'prognozy pogody.' ,cls:'' ,answer:true},
                    {word:'rozmowy o pracę.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to',
                p:[
                    {word:'życzenia ślubne.' ,cls:'' ,answer:true},
                    {word:'kondolencje.' ,cls:'' ,answer:false},
                    {word:'życzenia urodzinowe.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to fragment audycji',
                p:[
                    {word:'o podróżach.' ,cls:'' ,answer:false},
                    {word:'o sporcie.' ,cls:'' ,answer:true},
                    {word:'o religii.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź oznacza',
                p:[
                    {word:'prośbę.' ,cls:'' ,answer:false},
                    {word:'propozycję.' ,cls:'' ,answer:false},
                    {word:'zakaz.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź jest typowa:',
                p:[
                    {word:'w tramwaju.' ,cls:'' ,answer:false},
                    {word:'w kasie biletowej.' ,cls:'' ,answer:false},
                    {word:'w taksówce.' ,cls:'' ,answer:true}
                ]
            },
            {
                pH:'Ta wypowiedź dotyczy',
                p:[
                    {word:'ubioru.' ,cls:'' ,answer:true},
                    {word:'fryzury.' ,cls:'' ,answer:false},
                    {word:'makijażu.' ,cls:'' ,answer:false}
                ]
            },
            {
                pH:'Ta wypowiedź to fragment',
                p:[
                    {word:'relacji sportowej.' ,cls:'' ,answer:false},
                    {word:'charakterystyki.' ,cls:'' ,answer:false},
                    {word:'komunikatu policji.' ,cls:'' ,answer:true}
                ]
            }
           
        ]
}