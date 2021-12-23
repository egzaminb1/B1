import { combineReducers } from "redux";
import { QuizCatAReducer } from "./QuizCatAReducer";
import { QuizCatBReducer } from "./QuizCatBReducer";
import { QuizCatCReducer } from "./QuizCatCReducer";
import { QuizCatDReducer } from "./QuizCatDReducer";
import { QuizCatEReducer } from "./QuizCatEReducer";
import { StatisticReducer } from "./StatisticReducer";

export default combineReducers({
    QuizCatA:QuizCatAReducer,
    QuizCatB:QuizCatBReducer,
    QuizCatC:QuizCatCReducer,
    QuizCatD:QuizCatDReducer,
    QuizCatE:QuizCatEReducer,
     Statistic:StatisticReducer
})