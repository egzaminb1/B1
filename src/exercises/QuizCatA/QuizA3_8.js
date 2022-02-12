import trackA3 from '../../assets/audio/test3_A3_8.mp3';
import trackA3_int from '../../assets/audio/catA3intrudaction.mp3';

export const QuizA3_8 = {
    tracks:[trackA3_int, trackA3],
    header:['Słuchając informacji, proszę uzupełnić brakujące słowa','Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1, iterate:2 },
    text:[
        `Polskie .... inwestują w luksusowe domy. Większośćz nich .... miejsc w modnych podwarszawskich miejscowościach. Na półtora miliona złotych .... jest inwestycja pewnej znanej aktorki serialowej. Niebawem przeprowadzi się ona do jednego z domów na prestiżowym .... w Konstancinie. Jego zamknięty teren pełni funkcję miasteczka, gdzie można zrobić zakupy, .... konno czy pójść do restauracji. Powoli Konstancin staje się polskim Beverly Hills ze .... na liczbę gwiazd tam mieszkających. Aktorka będzie mieć wielu znanych sąsiadów — sportowców, .... , polityków czy dziennikarzy.`,
        `Sąsiedztwo tylu znanych ludzi sprawia, że ceny ziemi w .... Warszawy powoli doganiają ceny gruntu w stolicy. Większość sław ucieka z centrum stolicy na jej obrzeża, ale niewiele z nich ma .... na dobre rozstać się z Warszawą, gdzie pracują. Ci jednak, .... się na to zdobyli i przeprowadzili się do innej części Polski, mówią, że nie .... podjętej decyzji.`],
        
    answer:['gwiazdy', 'szuka', 'wyceniana', 'osiedlu', 'jeżdzić', 'wzgłędu', 'reżyserów', 'okolicach', 'odwagę', 'którzy', 'żałują']
}