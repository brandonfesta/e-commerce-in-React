import { useContext, useEffect, useState } from "react"
import { SavedContext } from "../../../SavedContext"

export default function NewsArticle({data}){
   const [saved, setSaved] = useState(false)

   const savedNews = useContext(SavedContext)

   const savedArr = savedNews.savedArr

   useEffect(() => {
         let isSaved = savedArr.some(item => item.url === data.url)
         setSaved(isSaved)
   }, [savedArr])


   function saveNews(data){
      savedNews.dispatch({type: "addItem", item: data})
      setSaved(true)
   }
   
   return (
      <article>
        <img src={data.urlToImage} alt="" />
        <div>
            <h2>{data.title}</h2>
            <h4>{data.description}</h4>
            <h6>{data.publishedAt}</h6>
            <div className="bu-li">
               {saved ? (<button className={"disabled-btn"} disabled>Save</button>) : (<button onClick={() => saveNews(data)}>Save</button>)}
               {saved && <button>x</button>}
               <button><a href={data.url} target="_blank">Link</a></button>
            </div>
        </div>
      </article>
   )
};

