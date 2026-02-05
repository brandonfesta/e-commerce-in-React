import { useContext } from "react"
import { SavedContext } from "../../../SavedContext"


export default function SavedArticle({data}){
    const savedNews = useContext(SavedContext)

    function deleteArt(content){
        savedNews.dispatch({type: "delete", content: content})
    }

    return (
        <article>
        <img src={data.urlToImage} alt="" />
        <div>
            <h2>{data.title}</h2>
            <h4>{data.description}</h4>
            <h6>{data.publishedAt}</h6>
            <button onClick={() => deleteArt(data.content)}>delete</button>
        </div>
        </article>
   )
};

