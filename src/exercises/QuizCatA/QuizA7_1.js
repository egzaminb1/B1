import trackA7_1 from '../../assets/audio/catA7_1.mp3';
import trackA6_int from '../../assets/audio/catA6intrudaction.mp3';

import img0A from '../../assets/img/imgA7_1_0A.jpg';
import img0B from '../../assets/img/imgA7_1_0B.jpg';
import img0C from '../../assets/img/imgA7_1_0C.jpg';
import img1A from '../../assets/img/imgA7_1_1A.jpg';
import img1B from '../../assets/img/imgA7_1_1B.jpg';
import img1C from '../../assets/img/imgA7_1_1C.jpg';
import img2A from '../../assets/img/imgA7_1_2A.jpg';
import img2B from '../../assets/img/imgA7_1_2B.jpg';
import img2C from '../../assets/img/imgA7_1_2C.jpg';
import img3A from '../../assets/img/imgA7_1_3A.jpg';
import img3B from '../../assets/img/imgA7_1_3B.jpg';
import img3C from '../../assets/img/imgA7_1_3C.jpg';
import img4A from '../../assets/img/imgA7_1_4A.jpg';
import img4B from '../../assets/img/imgA7_1_4B.jpg';
import img4C from '../../assets/img/imgA7_1_4C.jpg';
import img5A from '../../assets/img/imgA7_1_5A.jpg';
import img5B from '../../assets/img/imgA7_1_5B.jpg';
import img5C from '../../assets/img/imgA7_1_5C.jpg';

export const QuizA7_1 = {
    tracks:[trackA6_int, trackA7_1],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.','Proszę zaznaczyć właściwą odpowiedź.'],
    template:{  point:1,
                iterate:2,
                pH:'Na jakim instrumencie Basia gra najlepiej ?',
                p:[
                    {img:img0A, cls:''},
                    {img:img0B, cls:'bold'},
                    {img:img0C, cls:''}
                ]    
            },
        card:[
            // {
            //     pH:'Na jakim instrumencie Basia gra najlepiej ?',
            //     p:[
            //         {img:img0A, cls:'' , answer:false},
            //         {img:img0B, cls:'' , answer:true},
            //         {img:img0C, cls:'' , answer:false}
            //     ]
            // },
            {
                pH:'Jakie zwierzę powinien kupić ten mężczyzna ?',
                p:[
                    {img:img1A, cls:'' , answer:true},
                    {img:img1B, cls:'' , answer:false},
                    {img:img1C, cls:'' , answer:false}
                ]
            },
            {
                pH:'Czego nie lubi ta kobieta, kiedy odpoczywa pod namiotem ?',
                p:[
                    {img:img2A, cls:'' , answer:false},
                    {img:img2B, cls:'' , answer:true},
                    {img:img2C, cls:'' , answer:false}
                ]
            },
            {
                pH:'Co oferuje to biuro podróży ?',
                p:[
                    {img:img3A, cls:'' , answer:false},
                    {img:img3B, cls:'' , answer:false},
                    {img:img3C, cls:'' , answer:true}
                ]
            },
            {
                pH:'Gdzie złamał nogę ten mężczyzna ?',
                p:[
                    {img:img4A, cls:'' , answer:true},
                    {img:img4B, cls:'' , answer:false},
                    {img:img4C, cls:'' , answer:false}
                ]
            },
            {
                pH:'Jaka praca interecuje tego mężczyzne',
                p:[
                    {img:img5A, cls:'' , answer:false},
                    {img:img5B, cls:'' , answer:false},
                    {img:img5C, cls:'' , answer:true}
                ]
            }
        ]
}