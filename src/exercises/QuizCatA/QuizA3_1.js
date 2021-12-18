import trackA3_1 from '../../assets/audio/catA3_1.mp3';
import trackA3_int from '../../assets/audio/catA3intrudaction.mp3';

export const QuizA3_1 = {
    tracks:[trackA3_int, trackA3_1],
    header:['Słuchając informacji, proszę uzupełnić brakujące słowa','Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1, iterate:2 },
    text:[
        `Południowokoreański milioner, który szuka .... dla swej córki, „niskiego .... i w zaawansowanym wieku”, otrzymał w ciągu czterech dni ponad 200 .... od potencjalnych kandydatów na .... — podaje prasa seulska.`,
        `Około 70-letni ojciec, którego nazwiska nie ujawniono dysponować ma fortuną w .... ponad 100 milionów dolarów. Córka jest jego jedyną spadkobierczynią. W zamieszczonym przez ojca internetowym ogłoszeniu .... podano, że przyszła .... jest chrześcijanką, ma 38 lat, zdobyła .... w Stanach Zjednoczonych i mimo wieku oraz niskiego wzrostu ma bardzo dobry charakter.`,
        `Na ogłoszenie .... bardzo wielu młodych ludzi. Jeden z kandydatów, 20-letni Koreańczyk cytowany przez telewizję, powiedział: .... „Sto milionów to znaczna suma, a .... do takiej rodziny jest warte poświęceń”.`],
        
    answer:['męża', 'wzrostu', 'zgłoszeń', 'zięcia','wysokości','matrymonialnym', 'narzeczona', 'wykształcenie','odpowiedziało','wprost','wejście']
}