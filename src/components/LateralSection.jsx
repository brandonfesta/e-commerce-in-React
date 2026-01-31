import { useState } from "react"


export default function LateralSection({setVisible, visible}){

    function closeLateral(){
        setVisible(false)
    }

    return (
        <section className={`lateral ${visible ? "visible" : "not-visible"}`}>
        <button className="lateral-close" onClick={() => closeLateral()}>x</button>
        </section>
    )
};

