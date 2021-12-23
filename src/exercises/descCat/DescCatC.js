import { useState } from "react"
import { Modal, ModalBody, ModalHeader } from "reactstrap"

export const DescCatC=()=>{
    const[open, setOpen]=useState(true)
    return(
        <Modal isOpen={open} toggle={() => setOpen(false)}>
            <ModalHeader>
                Część C 
                <button  type="button" className="btn-close" onClick={() => setOpen(false)}  ></button>
            </ModalHeader>
            <ModalBody>
            <div>
            <h5>Maksymalna liczba punktów — 40</h5>
            <h5>Czas przeznaczony na wykonanie zadań - 45 min</h5>
            <h5>Warunkiem zdania egzaminu jest uzyskanie pozytywnego wyniku (minimum 60%, czyli 24p.) z każdej części egzaminu</h5>
            <h4>Ogólny opis umiętności</h4>
            <p>Zdający powinni rozumieć pojedyncze napisyi ogłoszenia, fragmenty tekstów długości jednego akapitu oraz kompletne krótkie teksty (160-250 słów) o tematyce zgodnej z wymaganiami zawartymi w Standardach wymagań egzaminacyjnych. Kandydaci powinni rozumieć ogólny sens tekstu oraz konkretnych informacji w nim zawartych.</p>
            <h4>Wskazówki dla przygotowujących się do egzaminu</h4>
            <p>W tej części, podobnie jak w części A (rozumienieze słuchu), oczekuje się od zdającego globalnego i/lub szczegółowego rozumienia tekstu — tym razem pisanego. Różnica polega na tym, że w części C zdający może wielokrotnie wracać do zadania. W odniesieniu do obydwu sprawności można zastosować podobne strategie — przede wszystkim podkreślanie istotnych informacji w tekście. Jeśli to nie jest konieczne, lepiej nie tracić czasu na dokładną analizę całego tekstu i zastanawianie się nad znaczeniem każdego słowa, ponieważ niezrozumienie pojedynczych słów zwykle nie utrudnia wykonania zadania. Należy skoncentrować się na fragmentach wyznaczanych przez pytania lub na kontekście wyrazów usuniętych z tekstu. W tej części powinno znaleźć się nie więcej niż 5 zadań. Najczęściej spotykane rodzaje tekstów to: pojedyncze napisy, ogłoszenia, fragmenty oryginalnych tekstów prasowych, listy prywatne i oficjalne, ulotki oraz notatki.</p>
            
        </div>
            </ModalBody>
        </Modal>
        
    )
    
}