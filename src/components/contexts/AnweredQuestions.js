import React from "react";

export const AnsweredQuestionsDefaults = {
    value: 0,
    setValue: () => { }
}



export const AnsweredQuestions = React.createContext(AnsweredQuestionsDefaults);