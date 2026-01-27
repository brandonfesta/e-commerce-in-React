import { routerPaths } from "../features/header/navigationSlice";
import FooterButton from "./buttons/FooterButton";
import { FaGithub } from "react-icons/fa";

export default function Footer(){
   return (
      <footer>
        <ul>
            <li><FooterButton content={routerPaths.news}></FooterButton></li>
            <li><FooterButton content={routerPaths.science}></FooterButton></li>
            <li><FooterButton content={routerPaths.health}></FooterButton></li>
            <li><FooterButton content={routerPaths.about}></FooterButton></li>
        </ul>
        <ul>
            <li><a href="https://github.com/brandonfesta?tab=overview&from=2026-01-01&to=2026-01-26" target="_blank" rel="noopener noreferrer"><FaGithub className="github"></FaGithub> GitHub</a></li>
        </ul>
      </footer>
   )
};

