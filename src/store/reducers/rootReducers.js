import { combineReducers } from "redux";
import { QuizCatAReducer } from "./QuizCatAReducer";
import { QuizCatDReducer } from "./QuizCatDReducer";
import { QuizCatEReducer } from "./QuizCatEReducer";
import { StatisticReducer } from "./StatisticReducer";

export default combineReducers({
    QuizCatA:QuizCatAReducer,
    //QuizCatB:QuizCatAReducer,
    QuizCatD:QuizCatDReducer,
    QuizCatE:QuizCatEReducer,
     Statistic:StatisticReducer
})