import trackA3_3 from '../../assets/audio/catA3_3.mp3';
import trackA3_int from '../../assets/audio/catA3intrudaction.mp3';

export const QuizA3_3 = {
    tracks:[trackA3_int, trackA3_3],
    header:['Słuchając informacji, proszę uzupełnić brakujące słowa','Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1, iterate:2 },
    text:[
        `To był styczeń 2001 roku. Na dworze było zimno i .... . Izabela Szafranowska i jej mąż Leszek wysiedli z ciepłego wnętrza auta i niepewnie rozglądali się .... . Miasteczko Nora, leżące w centrum Szwecji, wyglądało na wyludnione. Po chwili zobaczyli .... ludzi, którzy machali do nich z daleka. W rękach trzymali polską flagę i .... z napisem: „Witamy polskich lekarzy w naszym ośrodku .... ” .`,

        `Oboje z mężem mieli wtedy po 31 lat. Ona pracowała jako internistka w Ełku, on był .... . Byli zmęczeni codzienną pracą i brakiem .... .
        Kiedy zobaczyli ogłoszenie o pracy dla lekarzy w Szwecji, rozmawiali pól nocy i postanowili wysłać .... . Bez żadnych nadziei. Odpowiedź nadeszła szybko. Przeszli .... etap rekrutacji. Pomyśleli, że spróbują nauczyć się szwedzkiego. Egzamin zdali .... i w końcu wyjechali. Teraz Szwecja to ich .... dom.`],
        
    answer:['ciemno', 'dookoła', 'grupę', 'transparent', 'zdrowia','chirurgiem','pieniędzy', 'zgłoszenie', 'pierwszy','pomyślnie','drugi']
}