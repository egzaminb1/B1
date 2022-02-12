import trackA3 from '../../assets/audio/CP1_A3_9.mp3';
import trackA3_int from '../../assets/audio/catA3intrudaction.mp3';

export const QuizA3_9 = {
    tracks:[trackA3_int, trackA3],
    header:['Słuchając informacji, proszę uzupełnić brakujące słowa','Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1, iterate:2 },
    text:[
        `Dzień dobry Państwu. Są tacy .... , którzy od dzieciństwa .... wiek dojrzały po starość mieszkają w jednej miejscowości, nieraz też i w jednym domu, natomiast są .... rzesze tych, którzy po osiągnięciu pewnego wieku zmieniają miejsce zamieszkania, mieszkają w internacie, uczą się, .... , później zawierają związek małżeński i gdzieś tam swoje pierwsze mieszkanie zaczynają meblować. Proszę chwilę pomyśleć o tym .... pierwszym mieszkaniu. Kiedy państwo tam zamieszkali, pewnie były świeżo pomalowane ściany, zawsze były pewne pomysły na takie czy inne umeblowanie, czy takie czy inne pomysły na to, co się ....  na ścianach. Bo oczywiście mijają lata, pięć, dziesięć, piętnaście lat i człowiek się zżywa z tymi czterema ścianami, ale zawsze był ten .... , kiedy po raz pierwszy zobaczyło się te cztery ściany, przysłowiowe, widok z okna, który nam .... przez tyle lat. Warto pomyśleć o tym miejscu, w którym mieszkamy.`],
        
    answer:['ludzie', 'przez', 'całe', 'studiują', 'swoim', 'Powiesi', 'moment', 'towarzyszy']
}