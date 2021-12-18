import { useState } from "react"
import { Modal, ModalBody, ModalHeader } from "reactstrap"

export const DescCatE=()=>{
    const[open, setOpen]=useState(true)
    return(
        <Modal isOpen={open} toggle={() => setOpen(false)}>
            <ModalHeader>
                Część E 
                <button  type="button" className="btn-close" onClick={() => setOpen(false)}  ></button>
            </ModalHeader>
            <ModalBody>
            <div>
            <h5>Maksymalna liczba punktów — 40</h5>
            <h5>Czas przeznaczony na wykonanie zadań - 15 min</h5>
            <h5>Warunkiem zdania egzaminu jest uzyskanie pozytywnego wyniku (minimum 60%, czyli 24p.) z każdej części egzaminu</h5>
            <h4>Ogólny opis umiętności</h4>
            <p>Zdający na poziomie B1 powinni umieć posługiwaćsię językiem polskim w typowych sytuacjach komunikacyjnych w sposób płynny, nieutrudniający komunikacji. Muszą spełniać wymagania zawarte w Standardach wymagań egzaminacyjnych".</p>
            <h4>Zdający powinni umieć:</h4>
            <ul>
                <li>rozpoczynać i kończyć rozmowę, a także brać w niej udział (wyrażać własne opinie, wymieniać informacje na znane i związane z zainteresowaniami tematy);</li>
                <li>stosować podstawowe zasady prowadzenia rozmów telefonicznych;</li>
                <li>tworzyć proste, spójne wypowiedzi na temat własnych zainteresowań, doświadczeń, marzeń i planów;</li>
                <li>wyrażać i uzasadniać własne poglądy;</li>
                <li>opisywać i relacjonować zdarzenia oraz streszczać w prosty sposób przeczytany tekst;</li>
                <li>kontrolować przebieg rozmowy, prosząc, gdy zachodzi potrzeba, o powtórzenie, wyjaśnienie, przeliterowanie itp.;</li>
                <li>upewnić się, czy są właściwie rozumiani i czy używają odpowiednich słów i form;</li>
                <li>operować formami stylu oficjalnego i nieoficjalnego, odpowiednio do sytuacji;</li>
                <li>stosować zasady wymowy i intonacji pozwalające na właściwe zrozumienie wyrażanych intencji oraz treści wypowiedzi (wpływ zasad wymowy języka rodzimego może być odczuwalny, ale nie powinien zakłócać zrozumienia wypowiedzi).</li>
            </ul>
            <h4>Wskazówki dla przygotowujących się do egzaminu</h4>
            <h5>Budowa egzaminu ustnego i typy zadań</h5>
            <p>Komisja składa się zwykle z trzech osób, ale ze zdającym rozmawia tylko jedna z nich, chociaż w interakcję włącza się jeszcze jeden z egzaminatorów. Wypowiedzi oceniają niezależnie od siebie dwie osoby. Oceniane są: sprawność komunikacyjna, wykonanie zadania, poprawność gramatyczna, słownictwo, wymowa i intonacja.</p>
            <p>Przed przystąpieniem do egzaminu zdający może przygotować swoją wypowiedź — ma na to kilka minut. Na początku egzaminator zadaje kilka pytań „rozgrzewających” i służących nawiązaniu kontaktu. Dotyczyć one mogą np. zainteresowania językiem polskim czy wykonywanego zawodu. Ta część wypowiedzi nie podlega ocenie. Egzamin ustny polega nawylosowaniu zestawu, w którym znajdują się trzy zadania (należy wykonać wszystkie trzy w dowolnej kolejności):</p>
            <ol>
                <li>opis fotografii (sytuacji na niej przedstawionej);</li>
                <li>monolog (wypowiedź na podany temat);</li>
                <li>sytuacja komunikacyjna (dialog z egzaminatorem).</li>
            </ol>
        </div>
            </ModalBody>
        </Modal>
        
    )
    
}