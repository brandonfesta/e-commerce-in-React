import FooterButton from "./buttons/FooterButton"
import { routerPaths } from "../features/header/navigationSlice"


export default function LateralSection({setVisible, visible}){

    function closeLateral(){
        setVisible(false)
    }

    return (
        <section className={`lateral ${visible ? "visible" : "not-visible"}`}>
        <button className="lateral-close" onClick={() => closeLateral()}>x</button>
        <ul className="lateral-ul">
            <li><FooterButton content={routerPaths.news}></FooterButton></li>
            <li><FooterButton content={routerPaths.science}></FooterButton></li>
            <li><FooterButton content={routerPaths.health}></FooterButton></li>
            <li><FooterButton content={routerPaths.about}></FooterButton></li>
        </ul>
        </section>
    )
};

