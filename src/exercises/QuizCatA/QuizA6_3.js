import trackA6_3 from '../../assets/audio/catA6_3.mp3';
import trackA6_int from '../../assets/audio/catA6intrudaction.mp3';
import img0 from '../../assets/img/imgA6_3_0.jpg';
import img1 from '../../assets/img/imgA6_3_1.jpg';
import img2 from '../../assets/img/imgA6_3_2.jpg';
import img3 from '../../assets/img/imgA6_3_3.jpg';

export const QuizA6_3 = {
    tracks:[trackA6_int, trackA6_3],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1, iterate:2, headQuestion:'Proszę dopasować kolejne teksty do podanych fotografii.' },
        image:[img0, img1, img2, img3],
        answer:['0', '3', '2', '1']
}