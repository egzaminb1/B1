import { useState } from "react"
import { Modal, ModalBody, ModalHeader } from "reactstrap"

export const DescCatD=()=>{
    const[open, setOpen]=useState(true)
    return(
        <Modal isOpen={open} toggle={() => setOpen(false)}>
            <ModalHeader>
                Część D 
                <button  type="button" className="btn-close" onClick={() => setOpen(false)}  ></button>
            </ModalHeader>
            <ModalBody>
            <div>
            <h5>Maksymalna liczba punktów — 40</h5>
            <h5>Czas przeznaczony na wykonanie zadań - 90 min</h5>
            <h5>Warunkiem zdania egzaminu jest uzyskanie pozytywnego wyniku (minimum 60%, czyli 24p.) z każdej części egzaminu</h5>

            <h4>Ogólny opis umiętności</h4>
            <p>Zdający powinni opanować relacje głoska - litera, podstawowe zasady ortografii i interpunkcji oraz zasady kompozycji tekstów pisanych, ze zwróceniem uwagi na styl oficjalny i nieoficjalny, zgodnie z wymaganiami zawartymi w Standardach wymagań egzaminacyjnych.</p>
            
            <h4>Wskazówki dla przygotowujących się do egzaminu</h4>
            {/* <h5>Budowa egzaminu ustnego i typy zadań</h5> */}
            <p>Ta część egzaminu polega na napisaniu dwóch tekstów. Należy wybrać jeden zestaw spośród trzech i wykonać obydwa polecenia (punkt a i b). Pierwsze zadanie to zredagowanie krótkiego tekstu o określonej formie (np. życzenia, pozdrowienia, ogłoszenie). Warto przypomnieć sobie, jaką strukturą charakteryzuje się konkretna forma, np. zaproszenie to nagłówki, zwroty do adresata, daty czy dane adresowe. W drugim zadaniu należy napisać dłuższy tekst,np.list oficjalny lub nieoficjalny, opis, tekst argumentacyjny lub opowiadanie, podstawową formą życiorysu lub podania.</p>
            <h5>Uwaga! Długość napisanego tekstu powinna być zgodna z liczbą słów podanych w poleceniu. W zadaniu <i>'a'</i> jest to najczęściej 20—30 słów, w zadaniu <i>'b'</i> 170—180 słów.</h5>
            <p>Warto poświęcić kilka minut na dokładne przemyślenie wyboru zestawu.</p>
            <p>Przed rozpoczęciem pisania dobrze jest sporządzić ramowy plan do każdego z dwóch tekstów. Powinien on zawierać wypunktowane informacje i argumenty. Aby nie tracić czasu na liczenie wyrazów podczas egzaminu, można wcześniej w domu wykonać „próbę ilościową”: zapisać odręcznie na arkuszu A4 około sześciu linijek, potem policzyć, ile słów zawiera ten tekst, a następnie wyliczoną liczbę słów podzielić przez liczbę linijek. Uzyskany w ten sposób wynik będzie średnią słów, które zwykle mieszczą się w jednej linijce. Można wtedy na egzaminie liczyć linijki, a nie słowa.</p>
            <p>Niektóre osoby pierwszą wersję tekstu zapisują w brudnopisie. Egzaminatorzy oceniają jednak wyłącznie czystopis. Zatem należy tak rozplanować czas, aby wystarczyło go jeszcze na przepisanie tekstu na arkusze do tego przeznaczone.</p>
            <p>Wypowiedź pisemna oceniana jest niezależnie przez dwie osoby. Wynik testu to suma punktów obu egzaminatorów. Oceniane są: wykonanie zadania(treść, długość, forma, kompozycja), poprawność gramatyczna, słownictwo, styl, ortografia i interpunkcja.</p>
        </div>
            </ModalBody>
        </Modal>
        
    )
    
}