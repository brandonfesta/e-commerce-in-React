import { Link } from "react-router-dom"
const KEY = "f09c60c908c1450daa8e00ab65dd1f8c"
import { useEffect, useState } from "react"
import ScienceArticle from "./contentsComponents/ScienceArticle"


export default function Science(){
   const [science, setScience] = useState([])

   useEffect(() => {
      async function getScienceData(){
         const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey="+KEY)
         const data = await response.json()  
         setScience(data.articles)
      }
      getScienceData()
   }, [])


   return (
      <div className="science">
        <div className="science-container">
            <h2>Science</h2>
            {science.length === 0 ? (<p>loading...</p>) : (science.map((article) => (<ScienceArticle data={article}></ScienceArticle>) ) )}
         </div>

         <div className="technology-container">
            <h2>Techonology</h2>
            {science.length === 0 ? (<p>loading...</p>) : (science.map((article) => (<ScienceArticle data={article}></ScienceArticle>) ) )}
         </div>
      </div>
   )
};
