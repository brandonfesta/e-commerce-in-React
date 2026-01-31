import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import LateralSection from "./components/LateralSection"

export default function App(){

   const [visible, setVisible] = useState(false)

   return (
      <div className="page-container">
         <Header setVisible={setVisible}></Header>
         <LateralSection setVisible={setVisible} visible={visible}></LateralSection>
         <Main></Main>
         <Footer></Footer>
      </div>
   )
};

