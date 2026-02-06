import { Link } from "react-router-dom"
import NewsArticle from "./contentsComponents/NewsArticle"
import CurrencyContainer from "./contentsComponents/CurrencyContainer"
const KEY = "f09c60c908c1450daa8e00ab65dd1f8c"
import { useEffect, useState } from "react"

const categories = {
    general: "general",
    business: "business",
    entertainment: "entertainment"
}

export default function News(){
    const [news, setNews] = useState([])
    const [businessNews, setBusinessNews] = useState([])
    const [currencies, setCurrencies] = useState([])
    const [entertainment, setEntertainment] = useState([])

    useEffect(() => {
        async function getGeneralData(){
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category="+categories.general+"&apiKey="+KEY)
            const data = await response.json()  
            setNews(data.articles)
        }
        async function getBusinessData(){
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category="+categories.business+"&apiKey="+KEY)
            const data = await response.json()  
            setBusinessNews(data.articles)
        }
        // async function getCurrenciesData(){
        //     const response = await fetch("https://api.fastforex.io/fetch-multi?from=USD&to=EUR,GBP,CHF,RUB,JPY,AUD,INR&api_key=ec518cca13-e63538e63b-t9hia5")
        //     const data = await response.json()
        //     const arrayResults = Object.entries(data.results).map(([key, value]) => {
        //         return { [key.toLowerCase()]: value };
        //     });
        //     setCurrencies(arrayResults)
        // }
        async function getEntertainmentData(){
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category="+categories.entertainment+"&apiKey="+KEY)
            const data = await response.json()
            setEntertainment(data.articles)
        }
        getEntertainmentData()
        // getCurrenciesData()
        getBusinessData()
        getGeneralData()
    }, [])

   return (
        <div className="news">
            <div className="news-container">
                <h2>US News</h2>
                {news.length === 0 ? (<p>loading...</p>) : (news.map((article) => (<NewsArticle data={article}></NewsArticle>) ) )}
            </div>
            
            <div className="business-news-container">
                <h2>Business</h2>
                {businessNews.length === 0 ? (<p>loading...</p>) : (businessNews.map((article) => (<NewsArticle data={article}></NewsArticle>) ) )}
            </div>

            {/* <div className="forex-container">
                <h2>World Currencies from USD</h2>
                <div className="currencies-articles">
                    {currencies.length === 0 ? (<p>loading...</p>) : (currencies.map((article) => (<CurrencyContainer data={article}></CurrencyContainer>) ) )}
                </div>
            </div> */}

            <div className="text-container">
                <h2>You dose of daily news here</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempora culpa, esse error quam nam repellendus eligendi vitae consequatur nesciunt fugit, aspernatur harum asperiores quasi! Optio exercitationem deleniti asperiores! Deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident, sequi velit vel doloribus aliquam neque. Vero laboriosam dignissimos architecto dolorem fugiat quia dolores, culpa dolore aliquid aliquam! Soluta, tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, exercitationem? At, maxime aut maiores quia odio quas minus deserunt eveniet! Qui sed, debitis laborum accusantium unde iusto commodi quia error.</h3>
            </div>

            <div className="entertainment-container">
                <h2>Enteratinment</h2>
                <div className="entertainment-articles">
                    {entertainment.length === 0 ? (<p>loading...</p>) : (entertainment.map((article) => (<NewsArticle data={article}></NewsArticle>) ))}
                </div>
            </div>
        </div>
   )
};

