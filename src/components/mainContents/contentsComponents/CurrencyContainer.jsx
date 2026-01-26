export default function CurrencyContainer({data}){
   return (
      <article className="currency-article">
        <h3>USD - {Object.keys(data)[0].toUpperCase()}</h3>
        <h2>{data[Object.keys(data)[0]]}</h2>
      </article>
   )
};

