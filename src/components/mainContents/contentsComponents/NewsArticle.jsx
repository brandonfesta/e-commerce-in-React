import { useContext } from "react"
import { SavedContext } from "../../../SavedContext"

export default function NewsArticle({data}){

   const savedNews = useContext(SavedContext)

   function saveNews(data){
      savedNews.dispatch({type: "addItem", item: data})
   }
   
   return (
      <article>
        <img src={data.urlToImage} alt="" />
        <div>
            <h2>{data.title}</h2>
            <h4>{data.description}</h4>
            <h6>{data.publishedAt}</h6>
            <button onClick={() => saveNews(data)}>Save</button>
        </div>
      </article>
   )
};

