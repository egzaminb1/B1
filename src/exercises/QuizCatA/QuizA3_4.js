import trackA3_4 from '../../assets/audio/catA3_4.mp3';
import trackA3_int from '../../assets/audio/catA3intrudaction.mp3';

export const QuizA3_4 = {
    tracks:[trackA3_int, trackA3_4],
    header:['Słuchając informacji, proszę uzupełnić brakujące słowa','Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1, iterate:2 },
    text:[
        `— Panie doktorze, nadeszła .... , sezon kataru i przeziębień. Co może pan .... naszym pacjentom, żeby nie musieli spędzać najbliższych .... w łóżku?`,
        `— Przede wszystkim muszę powiedzieć, że to naprawdę trudny okres dla naszego organizmu.
        Po lecie — .... słońca i naturalnych witamin pochodzących z warzyw i owoców, nasz organizm musi się przestawić na deszcz, chłód, coraz .... dzień i walkę z infekcjami. Dlatego musimy wzmacniać nasz organizm. Przyjmować dużo witaminy - C ale i pamiętać, że tabletki są tylko ostatecznością. Kapusta kiszona czy nawet zwykłe
        ziemniaki to dobre .... tej witaminy. Poza tym polecam spacery. Godzina szybkiego marszu wpływa korzystnie na pracę .... , płuc, na naszą cerę, ale także na pracę układu odpornościowego. Musimy tylko pamiętać, żeby ubrać się .... do pogody. Wiele osób nie nosi .... , bo źle w niej wyglądają. Przecież przez głowę tracimy nawet czterdzieści procent ciepła, a w sklepach jest teraz tak duży .... nakryć głowy, że na pewno każdy znajdzie coś dla siebie. Kiedy pada deszcz, nie rezygnujmy ze spaceru — wystarczy .... kalosze i wziąć ze sobą parasol.`],
        
    answer:['jesień', 'poradzić', 'tygodni', 'okresie','krótszy','żródło', 'serca', 'odpowiednio','czapki','wybór','włożyć']
}