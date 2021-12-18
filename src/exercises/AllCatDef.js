
import  SubCatA1  from "../components/quizesComponents/SubCatA1";
import  SubCatA3  from "../components/quizesComponents/SubCatA3";
import  SubCatA4  from "../components/quizesComponents/SubCatA4";
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
        catAHeader:['Część A','Rozumienie ze słuchu'],
        subCatA:[
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
        subCatB1:{},
        subCatB2:{},
        subCatB3:{}
    }

    export const catC={
        subCatC1:{},
        subCatC2:{},
        subCatC3:{}
    }

    export const catD={
        catAHeader:['Część D','Pisanie'],
        quizes:[QuizD1, QuizD1, QuizD2, QuizD3, QuizD4, QuizD5, QuizD6] 
    }

    export const catE={
        catAHeader:['Część E','Mówienie'],
        quizes:[QuizE1, QuizE1, QuizE2, QuizE3, QuizE4, QuizE5, QuizE6] 
    }
