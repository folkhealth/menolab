import "./styles/sidebar.css"
import { FormattedMessage } from "react-intl";
import mixpanel from "mixpanel-browser";

export default function SideBar({scoreSummary}) {
  console.log(scoreSummary)
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://evrbloom.ro/cdn/shop/files/evrbloom_logo.svg?v=1742998418&width=100" alt="EvrBloom" />
      </div>
      <div className="dashboardMenu">
        {scoreSummary.stageTitle && (
          <button className="menuLink"
                  onClick={() => {
                    mixpanel.track(`Click on "${scoreSummary.stageTitle}"`, {source: 'SideBar'})
                    document.getElementById(scoreSummary.stageTitle).scrollIntoView({behavior: "smooth"})}
                  }
          >
            {scoreSummary.stageTitle}
          </button>
        )}
        {scoreSummary.scoreTitle && (
          <button className="menuLink"
                  onClick={() => {
                    mixpanel.track(`Click on "${scoreSummary.scoreTitle}"`, {source: 'SideBar'})
                    document.getElementById(scoreSummary.scoreTitle).scrollIntoView({behavior: "smooth"})
                  }}
          >
            {scoreSummary.scoreTitle}
          </button>
        )}
        {scoreSummary.symptomsTitle && (
          <button className="menuLink"
                  onClick={() => {
                    mixpanel.track(`Click on "${scoreSummary.symptomsTitle}"`, {source: 'SideBar'})
                    document.getElementById('symptoms').scrollIntoView({behavior: "smooth"})
                  }}
          >
            {scoreSummary.symptomsTitle}
          </button>
        )}
        {scoreSummary.recommendationsTitle && (
          <button className="menuLink"
                  onClick={() => {
                    mixpanel.track(`Click on "${scoreSummary.recommendationsTitle}"`, {source: 'SideBar'})
                    document.getElementById('recommendations').scrollIntoView({behavior: "smooth"})
                  }}
          >
            {scoreSummary.recommendationsTitle}
          </button>
        )}
        <button className="menuLink"
                onClick={() => {
                  mixpanel.track(`Click on "What's next"`, {source: 'SideBar'})
                  document.getElementById('whats_next').scrollIntoView({behavior: "smooth"})
                }}
        >
          <FormattedMessage id="whats_next_sidebar_title"/>
        </button>
        <button className="menuLink"
                onClick={() => {
                  mixpanel.track(`Click on "Book a call"`, {source: 'SideBar'})
                  document.getElementById('book_call').scrollIntoView({behavior: "smooth"})
                }}
        >
          <FormattedMessage id="book_call_sidebar_title"/>
        </button>
      </div>
    </div>
  );
}