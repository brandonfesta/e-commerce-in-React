import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ScienceArticle from "./contentsComponents/ScienceArticle"
const KEY = "f09c60c908c1450daa8e00ab65dd1f8c"

export default function Health(){
   const [health, setHealth] = useState([])

   useEffect(() => {
      async function getHealthData(){
         const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey="+KEY)
         const data = await response.json()  
         setHealth(data.articles)
      }
      getHealthData()
   }, [])

   return (
      <div className="health">
         <div className="health-container">
            <h2>Health</h2>
            {health.length === 0 ? (<p>loading...</p>) : (health.map((article) => (<ScienceArticle data={article}></ScienceArticle>) ) )}
         </div>
      </div>
   )
};

