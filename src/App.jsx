import { useNavigate } from "react-router-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App(){

   return (
      <div className="page-container">
         <Header></Header>
         <Main></Main>
         <Footer></Footer>
      </div>
   )
};

