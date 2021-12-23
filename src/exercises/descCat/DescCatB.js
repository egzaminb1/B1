import { useState } from "react"
import { Modal, ModalBody, ModalHeader } from "reactstrap"

export const DescCatB=()=>{
    const[open, setOpen]=useState(true)
    return(
        <Modal isOpen={open} toggle={() => setOpen(false)}>
            <ModalHeader>
                Część B 
                <button  type="button" className="btn-close" onClick={() => setOpen(false)}  ></button>
            </ModalHeader>
            <ModalBody>
            <div>
            <h5>Maksymalna liczba punktów — 40</h5>
            <h5>Czas przeznaczony na wykonanie zadań - 60 min</h5>
            <h5>Warunkiem zdania egzaminu jest uzyskanie pozytywnego wyniku (minimum 60%, czyli 24p.) z każdej części egzaminu</h5>
            <h4>Ogólny opis umiętności</h4>
            <p>Zdający powinni umieć rozpoznawać i stosować poprawne gramatycznie formy językowe, pozwalające na wyrażanie intencji mówiącego w zakresie sprecyzowanym w standardach wymagań egzaminacyjnych. Błędy gramatyczne popełniane przez zdających w wypowiedziach mówionych i tekstach pisanych nie powinny uniemożliwiać zrozumienia treści i intencji wypowiedzi.</p>
            <h4>Wskazówki dla przygotowujących się do egzaminu</h4>
            <p>Sukces w tej części egzaminu zależy od wcześniejszego przyswojenia wiedzy gramatycznej i wykonania odpowiedniej liczby ćwiczeń. Ważną rzeczą jest uporządkowanie przed egzaminem (w formie tabel czy zestawień) trudniejszych zagadnień, np. rekcji czasowników, wzorów tworzenia poszczególnych form.</p>
            <p>Każde z zadań bada inny problem gramatyczny, np.: stopniowanie przymiotnika, aspekt czasownika, odmianę rzeczownika i przymiotnika. Zadania oparte są na krótkich tekstach, których należy utworzyć poprawną formę gramatyczną wyrazów w nawiasie lub wybrać spośród podanych tę prawidłową. Mogą pojawić się też zdania izolowane.</p>
            <p>Egzamin certyfikacyjny zawiera od 8 do 11 zadań. Decyzja o kolejności wykonywania zadań należy do zdającego. Warto z tego skorzystać i na początku przejrzeć cały test, żeby rozpocząć od zadań, które wydają się najłatwiejsze. Do tych sprawiających kłopoty można wrócić na końcu.</p>
            <p>Jeśli okaże się, że jakaś forma gramatyczna, która powinna pojawić się w danym kontekście, stanowi trudność, nie należy się poddawać — lepiej wpisać cokolwiek, niż zostawić puste miejsce. Ta uwaga dotyczy wszystkich zadań: za złą odpowiedź nie traci się punktów. W miarę możliwości czasowych dobrze jest po rozwiązaniu wszystkich zadań przeczytać je jeszcze raz.</p>
            <h4>Uwaga! Zawsze należy uważnie przeczytać polecenie i przykład, ponieważ tam znajdują się ważne wskazówki!</h4>
        </div>
            </ModalBody>
        </Modal>
        
    )
    
}