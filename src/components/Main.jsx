import { Routes, Route } from "react-router-dom"
import News from "./mainContents/News"
import Science from "./mainContents/Science"
import Health from "./mainContents/Health"
import Saved from "./mainContents/Saved"
import About from "./mainContents/About"

export default function Main(){
   return (
      <main className="main">
        <Routes>
            <Route path="/" element={<News></News>}></Route>
            <Route path="/news" element={<News></News>}></Route>
            <Route path="/science" element={<Science></Science>}></Route>
            <Route path="/health" element={<Health></Health>}></Route>
            <Route path="/saved" element={<Saved></Saved>}></Route>
            <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </main>
   )
};

