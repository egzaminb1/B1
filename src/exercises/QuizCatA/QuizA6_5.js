
import trackA6 from '../../assets/audio/test3_A6_5.mp3';
import trackA6_int from '../../assets/audio/catA6intrudaction.mp3';
import img0 from '../../assets/img/test3_A6_5_A.jpg';
import img1 from '../../assets/img/test3_A6_5_B.jpg';
import img2 from '../../assets/img/test3_A6_5_C.jpg';
import img3 from '../../assets/img/test3_A6_5_D.jpg';
import img4 from '../../assets/img/test3_A6_5_E.jpg';
import img5 from '../../assets/img/test3_A6_5_F.jpg';

export const QuizA6_5 = {
    tracks:[trackA6_int, trackA6],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1, iterate:2, headQuestion:'Proszę dopasować kolejne teksty do podanych fotografii.' },
        image:[img0, img1, img2, img3, img4, img5],
        answer:['0', '5', '3', '4', '1', '2']
}