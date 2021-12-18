import trackA3_2 from '../../assets/audio/catA3_2.mp3';
import trackA3_int from '../../assets/audio/catA3intrudaction.mp3';

export const QuizA3_2 = {
    tracks:[trackA3_int, trackA3_2],
    header:['Słuchając informacji, proszę uzupełnić brakujące słowa','Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1, iterate:2 },
    text:[
        `- Proszę .... , znajdujemy się przed kościołem Świętej Elżbiety. Zaczęto go .... w XIII wieku. Kościelna wieża, która mierzy 130 metrów, .... w XV wieku i kiedyś była jedną z najwyższych budowli na .... Kościół znany był również z .... organów, które w 1976 roku spłonęły w potężnym pożarze. Był to ostatni z trzech wielkich pożarów tego kościoła. .... palił się już w 1960 i 1975 roku. Odbudowa kościoła zaczęła się 5 lat po ostatnim pożarze i została .... w 1997 roku. Odbudowany kościół odwiedził podczaś swojej wizyty we Wrocławiu papież Jan Paweł II. Obecnie wieża jest niższa niż kiedyś — ma .... 90 metrów, ale i tak jest jedną z najwyższych budowli w okolicy. Jest na niej taras widokowy .... dla zwiedzających, na który zaraz wejdziemy. Jednak ostrzegam — na górę prowadzi 365 schodów! Po wizycie w tym kościele .... do katedry, która też może pochwalić się dwoma wysokimi wieżami. Ale proszę się nie martwić: w jednej z nich jest .... i my z niej skorzystamy. A teraz zapraszam państwa do
        wspinaczki!`],
        
    answer:['państwa', 'budować', 'powstała', 'świecie', 'ogromnych', 'Wcześniej', 'zakończona', 'tylko', 'otwarty', 'pójdziemy', 'winda' ]
}