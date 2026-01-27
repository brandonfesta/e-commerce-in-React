import { Link } from "react-router-dom"
const KEY = "f09c60c908c1450daa8e00ab65dd1f8c"
import { useEffect, useState } from "react"
import ScienceArticle from "./contentsComponents/ScienceArticle"
import NasaArticle from "./contentsComponents/NasaArticle"


export default function Science(){
   const [science, setScience] = useState([])
   const [tech, setTech] = useState([])
   const [nasa, setNasa] = useState([])

   useEffect(() => {
      async function getScienceData(){
         const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey="+KEY)
         const data = await response.json()  
         setScience(data.articles)
      }
      getScienceData()
      async function getTechData(){
         const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey="+KEY)
         const data = await response.json()  
         setTech(data.articles)
      }
      getTechData()
      async function getNasaData(){
         const response = await fetch("https://api.nasa.gov/planetary/apod?start_date=2026-01-05&end_date=2026-01-20&api_key=N42TYEWrulkPCwleleuuDi2AWa0tSgZ8pf3ZUr4W")
         const data = await response.json()  
         setNasa(data)
      }
      getNasaData()

   }, [])


   return (
      <div className="science">
        <div className="science-container">
            <h2>Science</h2>
            {science.length === 0 ? (<p>loading...</p>) : (science.map((article) => (<ScienceArticle data={article}></ScienceArticle>) ) )}
         </div>

         <div className="technology-container">
            <h2>Techonology</h2>
            {tech.length === 0 ? (<p>loading...</p>) : (tech.map((article) => (<ScienceArticle data={article}></ScienceArticle>) ) )}
         </div>

         <div className="nasa-container">
            <h2>Nasa Photos</h2>
            <div className="photo-container">
               {nasa.length === 0 ? (<p>loading...</p>) : (nasa.map((article) => (<NasaArticle data={article}></NasaArticle>) ) )}
            </div>
            
         </div>
      </div>
   )
};
