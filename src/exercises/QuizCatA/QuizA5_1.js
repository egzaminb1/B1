
import trackA5_1 from '../../assets/audio/catA5_1.mp3';
import trackA5_int from '../../assets/audio/catA5intrudaction.mp3';

export const QuizA5_1 = {
    tracks:[trackA5_int, trackA5_1],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1, iterate:2, headQuestion:'DO KOGO DZWONIĄ TE OSOBY?'},
        row:[
           ['','do lekarza'],
           ['','do domu rodzinnego'],
           ['','do Urzędu Miasta'],
           ['','do apteki'],
           ['','do przedszkola'],
           ['','do architekta']
        ],
        answer:['A', 'F', 'B', 'D', 'E', 'C']
}