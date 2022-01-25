
import trackA6_2 from '../../assets/audio/catA6_2.mp3';
import trackA6_int from '../../assets/audio/catA6intrudaction.mp3';
import img0 from '../../assets/img/imgA6_2_0.jpg';
import img1 from '../../assets/img/imgA6_2_1.jpg';
import img2 from '../../assets/img/imgA6_2_2.jpg';
import img3 from '../../assets/img/imgA6_2_3.jpg';

export const QuizA6_2 = {
    tracks:[trackA6_int, trackA6_2],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1, iterate:2, headQuestion:'Proszę dopasować kolejne teksty do podanych fotografii.' },
        image:[img0, img1, img2, img3],
        answer:['0', '2', '3', '1']
}