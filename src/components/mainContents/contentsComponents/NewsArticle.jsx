

export default function NewsArticle({data}){
   return (
      <article>
        <img src={data.urlToImage} alt="" />
        <div>
            <h2>{data.title}</h2>
        </div>
      </article>
   )
};

