import React from "react";

export default function EditHabit({ habit, frequency, habitArea, checkColor}) {
    function handleEdit(){
        console.log("Editado")
    }

    function handleCheck(){
        console.log("Check do $(habitArea)")
    };
}