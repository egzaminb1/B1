
import  SubCatA1  from "../components/quizesComponents/SubCatA1";
import  SubCatA3  from "../components/quizesComponents/SubCatA3";
import  SubCatA4  from "../components/quizesComponents/SubCatA4";
import  SubCatB1  from "../components/quizesComponents/SubCatB1";
import SubCatB2 from "../components/quizesComponents/SubCatB2";
import  SubCatC1  from "../components/quizesComponents/SubCatC1";
import SubCatC2 from "../components/quizesComponents/SubCatC2";
import { QuizA1_1 } from "./QuizCatA/QuizA1_1";
import { QuizA1_2 } from "./QuizCatA/QuizA1_2";
import { QuizA1_3 } from "./QuizCatA/QuizA1_3";
// import { QuizA2_1 } from "./QuizCatA/QuizA2_1";
import { QuizA2_2 } from "./QuizCatA/QuizA2_2";
import { QuizA3_1 } from "./QuizCatA/QuizA3_1";
import { QuizA3_2 } from "./QuizCatA/QuizA3_2";
import { QuizA3_3 } from "./QuizCatA/QuizA3_3";
import { QuizA3_4 } from "./QuizCatA/QuizA3_4";
import { QuizA3_5 } from "./QuizCatA/QuizA3_5";
import { QuizA4_1 } from "./QuizCatA/QuizA4_1";
import { QuizA4_2 } from "./QuizCatA/QuizA4_2";
import { QuizA4_3 } from "./QuizCatA/QuizA4_3";
import { QuizA4_4 } from "./QuizCatA/QuizA4_4";
import { QuizA4_5 } from "./QuizCatA/QuizA4_5";
import { QuizA4_6 } from "./QuizCatA/QuizA4_6";
import { QuizA4_7 } from "./QuizCatA/QuizA4_7";
import { QuizB1_1 } from "./quizCatB/QuizB1_1";
import { QuizB1_10 } from "./quizCatB/QuizB1_10";
import { QuizB1_11 } from "./quizCatB/QuizB1_11";
import { QuizB1_12 } from "./quizCatB/QuizB1_12";
import { QuizB1_13 } from "./quizCatB/QuizB1_13";
import { QuizB1_14 } from "./quizCatB/QuizB1_14";
import { QuizB1_15 } from "./quizCatB/QuizB1_15";
import { QuizB1_2 } from "./quizCatB/QuizB1_2";
import { QuizB1_3 } from "./quizCatB/QuizB1_3";
import { QuizB1_4 } from "./quizCatB/QuizB1_4";
import { QuizB1_5 } from "./quizCatB/QuizB1_5";
import { QuizB1_6 } from "./quizCatB/QuizB1_6";
import { QuizB1_7 } from "./quizCatB/QuizB1_7";
import { QuizB1_8 } from "./quizCatB/QuizB1_8";
import { QuizB1_9 } from "./quizCatB/QuizB1_9";
import { QuizB2_1 } from "./quizCatB/QuizB2_1";
import { QuizB2_2 } from "./quizCatB/QuizB2_2";
import { QuizB2_3 } from "./quizCatB/QuizB2_3";
import { QuizC1_1 } from "./quizCatC/QuizC1_1";
import { QuizC1_2 } from "./quizCatC/QuizC1_2";
import { QuizC1_3 } from "./quizCatC/QuizC1_3";
import { QuizC1_4 } from "./quizCatC/QuizC1_4";
import { QuizC2_1 } from "./quizCatC/QuizC2_1";
import { QuizC2_2 } from "./quizCatC/QuizC2_2";
import { QuizC2_3 } from "./quizCatC/QuizC2_3";
import { QuizD1 } from "./quizCatD/QuizD1";
import { QuizD2 } from "./quizCatD/QuizD2";
import { QuizD3 } from "./quizCatD/QuizD3";
import { QuizD4 } from "./quizCatD/QuizD4";
import { QuizD5 } from "./quizCatD/QuizD5";
import { QuizD6 } from "./quizCatD/QuizD6";
import { QuizE1 } from "./quizCatE/QuizE1";
import { QuizE2 } from "./quizCatE/QuizE2";
import { QuizE3 } from "./quizCatE/QuizE3";
import { QuizE4 } from "./quizCatE/QuizE4";
import { QuizE5 } from "./quizCatE/QuizE5";
import { QuizE6 } from "./quizCatE/QuizE6";


    export const catA={
        catHeader:['Część A','Rozumienie ze słuchu'],
        subCat:[
            {
                headQuiz:['Zadania z jednostkami wyboru wielokrotnego','Taki typ ćwiczenia może mieć różne formy. Jedną z nich jest zadanie, które odtwarzane jest tylko jeden raz. Zdający wysłuchuje krótkiego komunikatu, a następnie musi zdecydować, co oznacza wypowiedź lub gdzie jest możliwa do usłyszenia. Warto przeczytać wszystkie odpowiedzi przed usłyszeniem komunikatu. Wybiera się spośród trzech możliwości: jedna z nich jest nieprawdopodobna, druga możliwa, a tylko jedna prawidłowa.'],
                component:<SubCatA1/>,
                quizes:[QuizA1_1,QuizA1_2,QuizA1_3] },
            {
                headQuiz:['Zadania z wyborem wielokrotnym','Inną formą zadania z wyborem wielokrotnym są dłuższe wypowiedzi jednej lub kilku osób. Przed wysłuchaniem nagrania należy przeczytać tylko pierwsze części zdań i pominąć warianty odpowiedzi, aby nie wprowadzały w błąd'],
                component:<SubCatA1></SubCatA1>,
                quizes:[QuizA2_2] 
                // quizes:[QuizA2_1,QuizA2_2] 
            },
            {
                headQuiz:['Zadania z lukami do uzupełnienia',`Zadanie polega na uzupełnieniu usłyszanymi wyrazami luk w tekście, który zdający
                w niepełnej wersji ma przed sobą. Przed wysłuchaniem nagrania warto się zastanowić,
                czego brakuje [np. rzeczownika, czasownika], a także z jakim tematem mogą być związane
                wyrazy, które należy wpisać.`],
                component:<SubCatA3></SubCatA3>,
                quizes:[QuizA3_1, QuizA3_2, QuizA3_3, QuizA3_4, QuizA3_5] 
            },
            {
                headQuiz:['Zadania z jednostkami prawda/fałsz (P/F)',`Przed wysłuchaniem nagrania należy przeczytać tekst zadania i podkreślić słowa kluczowe
                (np. imiona, nazwiska, miejsca czy daty), co pomoże zaznaczyć dobre odpowiedzi.
                Należy wykonywać zadanie już w trakcie słuchania, a po zakończeniu nagrania
                przyjrzeć się swoim odpowiedziom.`],
                component:<SubCatA4></SubCatA4>,
                quizes:[QuizA4_1, QuizA4_2, QuizA4_3, QuizA4_4, QuizA4_5, QuizA4_6, QuizA4_7] 
            }
        ]
    }

   export const catB={
        catHeader:['Część B','Poprawność gramatyczna'],
        subCat:[
            {
                headQuiz:['Transformacje',`To najczęściej spotykany typ zadania. W nawiasie podane są formy podstawowe rzeczowników, czasowników, zaimków, przymiotników, liczebników, przysłówków należy utworzyć poprawną formę tych wyrazów.`],
                component:<SubCatB1></SubCatB1>,
                quizes:[QuizB1_1, QuizB1_2, QuizB1_3, QuizB1_4, QuizB1_5, QuizB1_6, QuizB1_7, QuizB1_8, QuizB1_9, QuizB1_10, QuizB1_11, QuizB1_12, QuizB1_13, QuizB1_14, QuizB1_15] 
            },
            {
                headQuiz:['Transformacje',`Tym typem transformacji jest przekształcenie zdań przy użyciu podanych wyrazów. W poleceniu znajduje się wzór, według którego powinno się przekształcać zdania, np. wszystkie transformacje należy utworzyć w formie trybu przypuszczającego. Trzeba pamiętać o dodatkowych operacjach, np. zamianie czasownika na rzeczownik, zamianie rzeczowników na odpowiednie zaimki.`],
                component:<SubCatB2></SubCatB2>,
                quizes:[QuizB2_1, QuizB2_2, QuizB2_3] 
            }
        ]
    }

    export const catC={
        catHeader:['Część C','Rozumienie tekstów pisanych'],
        subCat:[
            {
                headQuiz:['Zadania z jednostkami wyboru wielokrotnego',`Wybór informacyjny - pojedyncze napisy`],
                component:<SubCatC1></SubCatC1>,
                quizes:[QuizC1_1, QuizC1_2, QuizC1_3, QuizC1_4] 
            },
            {
                headQuiz:['Zadania z jednostkami wyboru wielokrotnego',`Wybór informacyjny - pojedyncze napisy`],
                component:<SubCatC2></SubCatC2>,
                quizes:[QuizC2_1, QuizC2_2, QuizC2_3] 
            }
        ]
    }

    export const catD={
        catHeader:['Część D','Pisanie'],
        quizes:[QuizD1, QuizD1, QuizD2, QuizD3, QuizD4, QuizD5, QuizD6] 
    }

    export const catE={
        catHeader:['Część E','Mówienie'],
        quizes:[QuizE1, QuizE1, QuizE2, QuizE3, QuizE4, QuizE5, QuizE6] 
    }
