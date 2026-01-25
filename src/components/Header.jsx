import { TiThMenu  } from "react-icons/ti";
import HeaderButton from "./buttons/HeaderButton";

const buttonContent = {
    news: "News",
    science: "Science",
    health: "Health",
    about: "About"
}

export default function Header(){
   return (
      <header className="header">
        <h1>Discovery</h1>
        <ul>
            <li><HeaderButton content={buttonContent.news}/></li>
            <li><HeaderButton content={buttonContent.science}/></li>
            <li><HeaderButton content={buttonContent.health}/></li>
            <li><HeaderButton content={buttonContent.about}/></li>
        </ul>
        <button className="menu-btn"><TiThMenu></TiThMenu></button>
      </header>
   )
};

