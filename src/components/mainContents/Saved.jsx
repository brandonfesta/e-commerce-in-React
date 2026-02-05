import { Link } from "react-router-dom"
import { useContext } from "react"
import { SavedContext } from "../../SavedContext"
import SavedArticle from "./contentsComponents/SavedArticle"

export default function Saved(){
   const savedNews = useContext(SavedContext)

   return (

      <div className="saved">
        <h2>Saved News</h2>

        <div className="news-container">
            {savedNews.savedArr.length === 0 ? (<p>No saved news</p>) : (savedNews.savedArr.map((article) => (<SavedArticle data={article}></SavedArticle>) ) )}
        </div>
      </div>
   )
};

