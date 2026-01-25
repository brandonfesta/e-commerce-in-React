import { TiThMenu  } from "react-icons/ti";
import HeaderButton from "./buttons/HeaderButton";
import { routerPaths } from "../features/header/navigationSlice";

export default function Header(){
   return (
      <header className="header">
        <h1>Discovery</h1>
        <ul>
            <li><HeaderButton content={routerPaths.news}/></li>
            <li><HeaderButton content={routerPaths.science}/></li>
            <li><HeaderButton content={routerPaths.health}/></li>
            <li><HeaderButton content={routerPaths.about}/></li>
        </ul>
        <button className="menu-btn"><TiThMenu></TiThMenu></button>
      </header>
   )
};

