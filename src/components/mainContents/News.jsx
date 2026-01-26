import { Link } from "react-router-dom"
import NewsArticle from "./contentsComponents/NewsArticle"
import CurrencyContainer from "./contentsComponents/CurrencyContainer"
const KEY = "f09c60c908c1450daa8e00ab65dd1f8c"
import { useEffect, useState } from "react"

export default function News(){
    const [news, setNews] = useState([])
    const [businessNews, setBusinessNews] = useState([])
    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        async function getGeneralData(){
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="+KEY)
            const data = await response.json()  
            setNews(data.articles)
        }
        async function getBusinessData(){
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="+KEY)
            const data = await response.json()  
            setBusinessNews(data.articles)
        }
        async function getCurrenciesData(){
            const response = await fetch("https://api.fastforex.io/fetch-multi?from=USD&to=EUR,GBP,CHF,RUB,JPY,AUD,INR&api_key=ec518cca13-e63538e63b-t9hia5")
            const data = await response.json()
            const arrayResults = Object.entries(data.results).map(([key, value]) => {
                return { [key.toLowerCase()]: value };
            });
            setCurrencies(arrayResults)
        }
        getCurrenciesData()
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

            <div className="forex-container">
                <h2>World Currencies from USD</h2>
                <div className="currencies-articles">
                    {currencies.length === 0 ? (<p>loading...</p>) : (currencies.map((article) => (<CurrencyContainer data={article}></CurrencyContainer>) ) )}
                </div>
            </div>
        </div>
   )
};

