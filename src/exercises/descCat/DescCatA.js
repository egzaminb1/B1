import { useState } from "react"
import { Modal, ModalBody, ModalHeader } from "reactstrap"

export const DescCatA=()=>{
    const[open, setOpen]=useState(true)
    return(
        <Modal isOpen={open} toggle={() => setOpen(false)}>
            <ModalHeader>
                Część A 
                <button  type="button" className="btn-close" onClick={() => setOpen(false)}  ></button>
            </ModalHeader>
            <ModalBody>
            <div>
            <h5>Maksymalna liczba punktów — 40</h5>
            <h5>Czas przeznaczony na wykonanie zadań - 30 min</h5>
            <h5>Warunkiem zdania egzaminu jest uzyskanie pozytywnego wyniku (minimum 60%, czyli 24p.) z każdej części egzaminu</h5>
            <h4>Ogólny opis umiętności</h4>
            <p>Zdający powinni rozumieć pojedyncze wypowiedzi, wypowiedzi w ramach dialogu i rozmowy z udziałem kilku osób, dłuższe wypowiedzi monologowe (w tym informacje, prezentacje, ogłoszenia i instrukcje) w zakresie wskazanym w Standardach wymagań egzaminacyjnych. Zdający powinni umieć upewnićsię, czy właściwie zrozumieli treśći intencję wypowiedzi, oraz potrafić poprosić o powtórzenie, wyjaśnienie fragmentu wypowiedzi lub zapisanie niezrozumiałego słowa.</p>
            <h4>Wskazówki dla przygotowujących się do egzaminu</h4>
            <p>Ta część egzaminu składa się z 4 lub 5 zadań. Zawarte tu teksty to krótkie komunikaty, fragmenty rozmów, nagrania programów radiowych i telewizyjnych oraz teksty preparowane na użytek egzaminu. Do każdego nagrania należy wykonać zadanie. Uwaga! Zwykle nagrania odtwarzanesą dwarazy, ale jedno — tylko jeden raz. Teksty do wysłuchania prezentowane są z płyty CD lub kasety i niemożliwe jest zatrzymanie lub ponowne odtworzenie płyty (kasety). W związku z tym w tej części egzaminu zadania muszą być wykonane we wskazanej kolejności, a aktywność egzaminatora ogranicza się do rozdania testów oraz do włączenia nagrania. Dlatego wszystkie pytania i ewentualne wątpliwości należy rozstrzygać tuż po otrzymaniu testu — w czasie słuchania nie jest to możliwe. Przed każdym nagraniem pojawia się moment ciszy. Należy go wykorzystać na przeczytanie zadania, żeby wiedzieć, które z usłyszanych informacji będą ważne. Natomiast podczas chwili przerwy przed drugim odtworzeniem tego samego tekstu należy zrobić korektę zapisanych już słów (zdań) i zastanowić się nad brakującymi informacjami.</p>
        </div>
            </ModalBody>
        </Modal>
        
    )
    
}