import { useState } from "react"


export default function NasaArticle({data}){
   const [enlarged, setEnlarged] = useState(false)
   function enlargeImage(){
      if(!enlarged){
         setEnlarged(true)
      } else{
         setEnlarged(false)
      }
   }

   return (
      <div className="nasa-article">
        <img src={data.url} alt="" className={enlarged === false? "nasa-img" : "nasa-big"} onClick={() => enlargeImage(data.title)}/>
        <h4>{data.title}</h4>
      </div>
   )
};

