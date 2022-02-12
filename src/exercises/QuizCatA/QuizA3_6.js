import trackA3 from '../../assets/audio/test1_A3_6.mp3';
import trackA3_int from '../../assets/audio/catA3intrudaction.mp3';

export const QuizA3_6 = {
    tracks:[trackA3_int, trackA3],
    header:['Słuchając informacji, proszę uzupełnić brakujące słowa','Uwaga! Nagranie zostanie odtworzone dwa razy.'],
    
    template:{  point:1, iterate:2 },
    text:[
        `Przed .... burzami, które mogą przejść wieczorem nad województwem mazowieckim, .... mieszkańców regionu wojewoda. Gwałtowne burze z .... deszczem i gradem mogą wystąpić głównie we wschodniej części regionu. Burzom towarzyszyć może silny i .... wiatr, dochodzący do 60-80 km/godz. — wynika z komunikatu przesłanego przez rzecznika wojewody mazowieckiego. W związku z burzami mogą wystąpić utrudnienia w komunikacji, .... pracy urządzeń elektrycznych oraz straty w .... rolnych. Jak informuje rzecznik, mazowieckie Centrum Zarządzania Kryzysowego zaleca w czasie burz .... od prądu urządzeń elektrycznych. Ponadto odradzane jest kąpanie się w wannie, .... do metalowych urządzeń i przedmiotów oraz korzystanie z telefonów komórkowych. Przebywającym na .... zalecane jest trzymanie się z dala od trakcji ....      tramwajowych oraz transformatorów i przewodów wysokiego .... . Nie należy stawać pod drzewami.`],
        
    answer:['gwałtownymi', 'ostrzega', 'intensywnym', 'porywisty', 'zakłócenia', 'uprawach', 'odłączenie', 'zbliżanie', 'dworze', 'kolejowych', 'napięcia']
}