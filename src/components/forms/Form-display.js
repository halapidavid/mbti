import {useContext} from "react";

import {PointsOfTest} from "@/components/contexts/PointsOfTest";


export default function FormDisplay(props) {

    const {points} = useContext(PointsOfTest);

    const resultCode = `${points["E"] > 0 ? "E" : "I"}${points["N"] > 0 ? "N" : "S"}${points["T"] > 0 ? "T" : "F"}${points["J"] > 0 ? "J" : "P"}`;

    if (props.displayed) {

        props.images.right.current.src = `/images/${resultCode.toLowerCase()}_right.png`;
        props.images.left.current.src = `/images/${resultCode.toLowerCase()}_left.png`;
        props.images.right.current.classList.remove('hidden-side-image');
        props.images.left.current.classList.remove('hidden-side-image');


        return (<div className="mt-2">
            <h3 className="text-center">Az eredményed: {resultCode} </h3>
            <div className="row justify-content-center">
            <div className="mt-2 w-50 row">
                <div className="col-6">
                    <div>{`${points["E"] > 0 ? "E - Extravertált" : "I - Introvertált"}`}</div>
                    <div>{`${points["N"] > 0 ? "N - Intuitív" : "S - Érzékelő"}`}</div>
                    <div>{`${points["T"] > 0 ? "T - Gondolkodó" : "F - Érző"}`}</div>
                    <div>{`${points["J"] > 0 ? "J - Megítélő" : "P - Észlelő"}`}</div>
                </div>
                <div className="col-6 text-end">
                    <div>{`${Math.round(Math.abs(points["E"] / (props.maxpoint * 2 ) * 100))+50}%` }</div>
                    <div>{`${Math.round(Math.abs(points["N"] / (props.maxpoint * 2 )  * 100))+50}%` }</div>
                    <div>{`${Math.round(Math.abs(points["T"] / (props.maxpoint * 2 ) * 100))+50}%` }</div>
                    <div>{`${Math.round(Math.abs(points["J"] / (props.maxpoint * 2 )  * 100))+50}%` }</div>
                </div>
            </div>
            </div>

        </div>)
    } else {

       if( props.images.right.current) props.images.right.current.src = ``;
        if( props.images.right.current)  props.images.left.current.src = ``;

        return null;
    }

}