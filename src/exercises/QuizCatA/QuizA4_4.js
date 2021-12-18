import trackA4_4 from '../../assets/audio/catA4_4.mp3';
import trackA4_int from '../../assets/audio/catA4intrudaction.mp3';

export const QuizA4_4 = {
    tracks:[trackA4_int, trackA4_4],
    header:['Proszę wysłuchać nagrania i zaznaczyć, czy podane zdania są prawdziwe(P), czy fałszywe(F).',
            'Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    template:{  point:1,
                iterate:2   
            },
        rows:[
            [`Mężczyzna szuka jakiejś interesującej oferty turystycznej.`,true],
            [`Mężczyzna nie może jechać w góry, bo lekarze mu na to nie pozwalają.`,false],
            [`W zeszłym roku mężczyzna był na urlopie nad morzem.`,true],
            [`W Kołobrzegu była deszczowa pogoda.`,true],
            [`Mężczyzna był już we Włoszech z narzeczoną trzy lata temu.`,false],
            [`Klient poleciał do Włoch samolotem.`,false],
            [`Narzeczona mężczyzny nie może podróżować samolotem, bo oczekuje dziecka.`,true],
            [`Oferta agroturystyczna nie zainteresowała klienta.`,true],
            [`Klient jest uczulony na zwierzęta.`,true],
            [`Mężczyzna nie kupuje żadnej wycieczki.`,true],
            [`Klient pomylił biura.`,false]
        ]
}
