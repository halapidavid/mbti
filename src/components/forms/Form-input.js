import {useContext, useState} from "react";

import {PointsOfTest} from "@/components/contexts/PointsOfTest";
import {AnsweredQuestions} from "@/components/contexts/AnweredQuestions";

export default function FormInput(props) {

    const [answeredState, setAnsweredState] = useState(false);
    const [answer, setAnswer] = useState(null);

    const {points, setPoints} = useContext(PointsOfTest);
    const {answeredQuestions, setAnsweredQuestions} = useContext(AnsweredQuestions);


    async function save(answer) {

        await setAnsweredState(true);
        await setAnswer(answer);
        await setPoints({
            ...points,
            [props.value.affected]: answer ? (points[props.value.affected] + parseInt(props.value.true)) : points[props.value.affected] + parseInt(0 - props.value.true)
        })
        await setAnsweredQuestions(answeredQuestions + 1);


        if (answeredQuestions >= props.quantity - 1) {
            props.displaysetter(true);

        }


    }

    async function reset(){
        await setAnsweredState(false);

        await setPoints({
            ...points,
            [props.value.affected]: answer ? (points[props.value.affected] - parseInt(props.value.true)) : points[props.value.affected] - parseInt(0 - props.value.true)
        })
        await setAnsweredQuestions(answeredQuestions + -1);

        props.displaysetter(false);
    }

    function editButton() {

        return answeredState ? <button className="btn btn-outline-dark w-100 d-block mt-2" onClick={reset}>Szerkeszt</button> : "";


    }


    return (<>
            <div className={`${answeredState ? "disabled" : ""} p-3 mt-3 rounded `}>
                <label className="h2">{props.value.title}</label>
                <div className="mt-3">
                    <button className={`btn btn-outline-dark d-block w-100 ${answer ? "selected" : ""}`}
                            onClick={function () {
                                save(true)
                            }}>Igen
                    </button>
                    <button className={`btn btn-outline-dark d-block w-100 mt-3 ${!answer ? "selected" : ""}`}
                            onClick={function () {
                                save(false)
                            }}>Nem
                    </button>
                </div>
            </div>
            {editButton()}</>
    );

}