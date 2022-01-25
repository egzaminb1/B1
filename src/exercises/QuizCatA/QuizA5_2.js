
import trackA5_2 from '../../assets/audio/catA5_2.mp3';
import trackA5_int from '../../assets/audio/catA5intrudaction.mp3';

export const QuizA5_2 = {
    tracks:[trackA5_int, trackA5_2],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1, iterate:2, headQuestion:'JAKIE GAZETY CZYTAJĄ?' },
        row:[
           ['Kasia','moda, makijaż, luźny styl bycia'],
           ['Krystyna','nowości kosmetyczne, porady dotyczące wizażu, baza modnych sklepów, trendy, nowości, informacje o gwiazdach'],
           ['Piotr','informacje z kraju i ze świata, artykuły z życia politycznego i społecznego, kultura, sport, gospodarka'],
           ['Adam','diety, chorobyi uzależnienia, informacje i porady lekarzy specjalistów, przewodnik medyczny'],
           ['Bożena','magazyny opiniotwórcze, reportaże z całego świata, artykuły popularnonaukowe i literackie,  felietony'],
           ['Zygmunt','problemy techniczne internautów, prezentacja ciekawych stron, programów antywirusowych, tematyka internetowa']
        ],
        answer:['A', 'D', 'F', 'C', 'B', 'E']
}