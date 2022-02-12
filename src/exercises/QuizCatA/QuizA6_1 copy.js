
import trackA6 from '../../assets/audio/catA6_1.mp3';
import trackA6_int from '../../assets/audio/catA6intrudaction.mp3';
import img0 from '../../assets/img/imgA6_1_0.jpg';
import img1 from '../../assets/img/imgA6_1_1.jpg';
import img2 from '../../assets/img/imgA6_1_2.jpg';
import img3 from '../../assets/img/imgA6_1_3.jpg';
import img4 from '../../assets/img/imgA6_1_4.jpg';
import img5 from '../../assets/img/imgA6_1_5.jpg';

export const QuizA6_1 = {
    tracks:[trackA6_int, trackA6],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1, iterate:2, headQuestion:'Proszę dopasować kolejne teksty do podanych fotografii.' },
        image:[img0, img1, img2, img3, img4, img5],
        answer:['', '', '', '', '', '']
}