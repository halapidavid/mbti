import React from "react";

export const PointsOfTestDefaults = {
    value: {"E": 0, "N": 0, "T": 0, "J": 0},
    setValue: () => { }
}



export const PointsOfTest = React.createContext(PointsOfTestDefaults);