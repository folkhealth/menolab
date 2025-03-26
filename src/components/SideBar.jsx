import "./styles/sidebar.css"
import { FormattedMessage } from "react-intl";
import EnglishMessages from "../locales/en/translations.json"
import RomanianMessages from "../locales/ro/translations.json";

const messages = {
  en: EnglishMessages,
  ro: RomanianMessages,
};
export default function SideBar({scoreSummary}) {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://evrbloom.ro/cdn/shop/files/evrbloom_logo.svg?v=1742998418&width=100" alt="EvrBloom" />
      </div>
      <div className="dashboardMenu">
        {scoreSummary.stageTitle && (
          <button className="menuLink"
                  onClick={() => document.getElementById(scoreSummary.stageTitle).scrollIntoView({behavior: "smooth"})}>
            {scoreSummary.stageTitle}
          </button>
        )}
        {scoreSummary.scoreTitle && (
          <button className="menuLink"
                  onClick={() => document.getElementById(scoreSummary.scoreTitle).scrollIntoView({behavior: "smooth"})}>
            {scoreSummary.scoreTitle}
          </button>
        )}
        {scoreSummary.symptomsTitle && (
          <button className="menuLink active"
                  onClick={() => document.getElementById('symptoms').scrollIntoView({behavior: "smooth"})}>{scoreSummary.symptomsTitle}</button>
        )}
        {scoreSummary.recommendationsTitle && (
          <button className="menuLink"
                  onClick={() => document.getElementById('recommendations').scrollIntoView({behavior: "smooth"})}>
            {scoreSummary.recommendationsTitle}
          </button>
        )}
        <button className="menuLink"
                onClick={() => document.getElementById('whats_next').scrollIntoView({behavior: "smooth"})}>
          <FormattedMessage id="whats_next_sidebar_title"/>
        </button>
        <button className="menuLink"
                onClick={() => document.getElementById('book_call').scrollIntoView({behavior: "smooth"})}>
          <FormattedMessage id="book_call_sidebar_title"/>
        </button>
      </div>
    </div>
  );
}