import questions from "@/components/forms/questions.json"

import {useRef, useState} from "react";
import Image from "next/image";

import FormInput from "@/components/forms/Form-input";

import {PointsOfTest, PointsOfTestDefaults} from "@/components/contexts/PointsOfTest";
import {AnsweredQuestions, AnsweredQuestionsDefaults} from "@/components/contexts/AnweredQuestions";
import FormDisplay from "@/components/forms/Form-display";

export default function Form(props) {

    const [points, setPoints] = useState(PointsOfTestDefaults.value);
    const [answeredQuestions, setAnsweredQuestions] = useState(AnsweredQuestionsDefaults.value);
    const [displayed, setDisplayed] = useState(false);

    const rightImage = useRef();
    const leftImage = useRef();

    return (<>

            <h1 className="text-center"> {props.value} kérdéses MBTI teszt</h1>
            <div className="row">
                <div className="col-lg-3 d-none d-lg-block position-relative site-image-container">
                    <Image id="left-image"  alt="side image" title="side image"  className="hidden-side-image" ref={leftImage}/>
                </div>
                <div className="col-12 col-lg-6">
                    <PointsOfTest.Provider value={{points, setPoints}}>
                        <AnsweredQuestions.Provider value={{answeredQuestions, setAnsweredQuestions}}>

                            {
                                questions[props.value].questions.map((question, index) => {
                                        return <FormInput quantity={props.value} value={question} key={index + " " + props.value} displaysetter={setDisplayed}/>
                                    }
                                )
                            }
                        <FormDisplay images={{right: rightImage, left: leftImage}} maxpoint={questions[props.value].maximum_points} displayed={displayed}/>
                        </AnsweredQuestions.Provider>
                    </PointsOfTest.Provider>
                    <p className="text-center mt-5">Forrás: {questions[props.value].copyright}</p>
                </div>
                <div className="col-lg-3 d-none d-lg-block position-relative site-image-container">
                    <Image id="right-image" alt="side image" title="side image" className="hidden-side-image" ref={rightImage}/>
                </div>
            </div>
        </>
    );


}