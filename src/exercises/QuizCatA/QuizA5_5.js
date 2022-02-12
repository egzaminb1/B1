
import trackA5 from '../../assets/audio/CP1_A5_5.mp3';
import trackA5_int from '../../assets/audio/catA5intrudaction.mp3';

export const QuizA5_5 = {
    tracks:[trackA5_int, trackA5],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1, iterate:2, headQuestion:''},
        row:[
           ['Przykład: opłata paszportowa w wysokości 140 zł','paszport dla dorosłych na 10 lat'],
           ['opłata paszportowa w wysokości 30 zł','paszport tymczasowy dla dorosłych'],
           ['opłata paszportowa w wysokości 60 zł','paszport dla osób, które mają więcej niż 70 lat'],
           ['opłata paszportowa w wysokości 45 zł','paszport dla dzieci w wieku do 7 lat'],
           ['paszport bez opłaty','paszport dla emerytów i rencistów'],
           ['50% ulgi w opłacie paszportowej','paszport dla dzieci, które nie mają jeszcze 13 lat']
        ],
        answer:['A', 'D', 'F', 'B', 'C', 'E']
}