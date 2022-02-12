
import trackA6 from '../../assets/audio/CP2_A6_6.mp3';
import trackA6_int from '../../assets/audio/catA6intrudaction.mp3';
import img0 from '../../assets/img/CP2_A6_6_A.jpg';
import img1 from '../../assets/img/CP2_A6_6_B.jpg';
import img2 from '../../assets/img/CP2_A6_6_C.jpg';
import img3 from '../../assets/img/CP2_A6_6_D.jpg';
import img4 from '../../assets/img/CP2_A6_6_E.jpg';
import img5 from '../../assets/img/CP2_A6_6_F.jpg';
import img6 from '../../assets/img/CP2_A6_6_G.jpg';
import img7 from '../../assets/img/CP2_A6_6_H.jpg';
import img8 from '../../assets/img/CP2_A6_6_I.jpg';
import img9 from '../../assets/img/CP2_A6_6_J.jpg';
import img10 from '../../assets/img/CP2_A6_6_K.jpg';

export const QuizA6_6 = {
    tracks:[trackA6_int, trackA6],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1, iterate:2, headQuestion:'Proszę dopasować kolejne teksty do podanych fotografii.' },
        image:[img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
        answer:['0', '6', '7', '5', '1', '9', '10', '3', '4', '8', '2']
}