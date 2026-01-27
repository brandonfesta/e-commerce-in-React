

export default function NasaArticle({data}){
   return (
      <div className="nasa-article">
        <img src={data.url} alt="" className="nasa-img"/>
        <h4>{data.title}</h4>
      </div>
   )
};

