
import trackA5 from '../../assets/audio/test1_A5_3.mp3';
import trackA5_int from '../../assets/audio/catA5intrudaction.mp3';

export const QuizA5_3 = {
    tracks:[trackA5_int, trackA5],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1, iterate:2, headQuestion:'JAKIE MASZ HOBBY?'},
        row:[
           ['Piotr','Wędkarstwo to na początku woda, stołek i patrzenie w jakiś punkt przed sobą. Jeździłem z ojcem nad staw, rzucaliśmy wędki i czekaliśmy. Za jakiś czas zrozumiałem, że w letnią noc woda ładniej pachnie, a przyroda jest niezwyczajna.'],
           ['Adam','Moim hobby jest kolekcjonerstwo. W dzieciństwie moje zbiory to znaczki, monety, banknoty, karty telefoniczne; potem zainteresowały mnie militaria i historia wojskowości.'],
           ['Basia','Moje hobby to krawiectwo. Przygoda z szyciem zaczęła się dla mnie już w dzieciństwie. Zajmuję się głównie bluzkami, spodniami, spódnicami, ubiorami dziecięcymi, strojami kąpielowymi i swetrami.'],
           ['Tomek  ','Moim hobby są robótki ręczne. Potrafię zrobić prawie wszystko od ciekawych i oryginalnych bluzek, czapek, szalików i rękawiczek po torebki. Polecam także piękne ubranka dla najmłodszych, które mogą stać się ciekawym prezentem.'],
           ['Anna','Moim hobby jest fotografia. Wielu ludzi w obecnych czasach ma aparat cyfrowy, jednak nie chodzi tylko o to, żeby utrwalić wspomnienia z wakacji.'],
           ['','Moje hobby to koszykówka. Każdego dnia zostaję po lekcjach i gram z kolegami. Nie jestem jeszcze bardzo dobrym graczem, ale chcę nim być, więc codziennie dużo ćwiczę.']
        ],
        answer:['A', 'F', 'E', 'B', 'D']
}