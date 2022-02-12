
import trackA5 from '../../assets/audio/test3_A5_4.mp3';
import trackA5_int from '../../assets/audio/catA5intrudaction.mp3';

export const QuizA5_4 = {
    tracks:[trackA5_int, trackA5],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1, iterate:2, headQuestion:'GDZIE ZNAJDUJE SIĘ TA AUTOMATYCZNA SEKRETARKA?'},
        row:[
           ['','w szkole językowej'],
           ['','w biurze tłumaczeń'],
           ['','w gabinecie lekarskim'],
           ['','w domu pewnego małżeństwa'],
           ['','w salonie fryzjerskim'],
           ['','w mieszkaniu studenckim']
        ],
        answer:['A', 'C', 'F', 'E', 'D', 'B']
}