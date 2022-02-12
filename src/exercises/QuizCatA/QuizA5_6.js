
import trackA5 from '../../assets/audio/CP3_A5_6.mp3';
import trackA5_int from '../../assets/audio/catA5intrudaction.mp3';

export const QuizA5_6 = {
    tracks:[trackA5_int, trackA5],
    header:['Proszę uważnie słuchać tego nagrania i wykonywać zadanie zgodnie z podanym przykładem.',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1, iterate:2, headQuestion:''},
        row:[
           ['Hokej','sport tak samo popularny jak jazda na nartach.'],
           ['Łyżwy','dyscyplina, w której Polacy odnosili sukcesy.'],
           ['Sporty wodne','sport, który nie wymagał specjalnego stroju.'],
           ['Jazda konna','aktywność związana też z turystyką.'],
           ['Tenis','sport stosunkowo niedrogi.'],
           ['Gra w siatkówkę','dyscyplina związana z modą sportową.']
        ],
        answer:['A', 'E', 'D', 'B', 'F', 'C']
}