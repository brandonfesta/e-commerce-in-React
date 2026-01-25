import { Link } from "react-router-dom"
import NewsArticle from "./contentsComponents/NewsArticle"
const KEY = "f09c60c908c1450daa8e00ab65dd1f8c"
import { useEffect, useState } from "react"

export default function News(){
    const [news, setNews] = useState([])
    const [businessNews, setBusinessNews] = useState([])

    useEffect(() => {
        async function getGeneralData(){
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="+KEY)
            const data = await response.json()  
            setNews(data.articles)
            console.log(news.articles)
        }
        async function getBusinessData(){
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="+KEY)
            const data = await response.json()  
            setBusinessNews(data.articles)
            console.log(news.articles)
        }
        getBusinessData()
        getGeneralData()
    }, [])

   return (
      <div className="news">
        
        <div className="news-container">
            {news.length === 0 ? (<p>loading...</p>) : (news.map((article) => (<NewsArticle data={article}></NewsArticle>) ) )}
        </div>
        
        <div className="business-news-container">
            {businessNews.length === 0 ? (<p>loading...</p>) : (businessNews.map((article) => (<NewsArticle data={article}></NewsArticle>) ) )}
        </div>
      </div>
   )
};

