import { useState, useEffect } from "react";
import ScoreCircle from "./ScoreCircle.jsx";
import "./menoscore.css";
import 'swiper/css';
import { FormattedMessage, createIntl } from "react-intl";
import virginiaImage from '../assets/virginia-lazar.png';
import EnglishMessages from "../locales/en/translations.json"
import RomanianMessages from "../locales/ro/translations.json";

const messages = {
  en: EnglishMessages,
  ro: RomanianMessages,
};

export default function Menoscore({scoreJson}) {
  const [arrowPosition, setArrowPosition] = useState(0);
  const [index, setIndex] = useState(-1);
  const [currentTab, setCurrentTab] = useState("high");
  const language = localStorage.getItem('language').toLowerCase();
  function getTranslatedMessage(id, values = {}) {
    const intl = createIntl(
      {
        locale: language,
        messages: messages[language],
      },
    );
    return intl.formatMessage({ id }, values);
  }
  const stages = [getTranslatedMessage("premenopause", {}), getTranslatedMessage("perimenopase", {}),  getTranslatedMessage("menopause", {}), getTranslatedMessage("postmenopause", {})];

  useEffect(() => {
    setTimeout(() => {
      const indexOfStage = stages.indexOf(scoreJson.menopauseStage.stage);
      setIndex(indexOfStage)
      setArrowPosition(27 + indexOfStage * 68)
    }, 500)
  }, [])
  const adjustMargin = () => {
    const bookCallSection = document.getElementById("book_call");
    if (bookCallSection) {
      const windowHeight = window.innerHeight;
      const sectionHeight = bookCallSection.offsetHeight;
      const marginBottom = windowHeight - sectionHeight - 64;
      bookCallSection.style.marginBottom = `${marginBottom}px`;
    }
  };
  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);
  return (
    <div className="results">
      <div className="topic-header">
        <a href="https://score.evrbloom.ro/dashboard">
          <img src="https://evrbloom.ro/cdn/shop/files/evrbloom_logo.svg?v=1742998418&width=100" alt="EvrBloom"
               className="logo"/>
        </a>
      </div>
      <div className="meno-score-container">
        <div className="meno-stage" id={scoreJson.menopauseStage.stagetitle}>
          <div className="meno-stage-main-content">
            {
              index > -1 && (
                <div className="meno-stage-scale-mobile">
                  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="32" height="32" rx="16" fill="#D8DBE4"/>
                    <circle cx="16.5" cy="16" r="8" fill="white"/>
                  </svg>
                  <div className="bubble">
                    {stages[index]}
                  </div>

                </div>
              )
            }
            <div className="meno-stage-scale">
              <div className={`arrow ${index === -1 ? 'd-none' : ''}`}
                   style={{bottom: arrowPosition, transitionDuration: `${(index + 1) * 500}ms`}}>
                <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.5 3.13364C7.16667 3.51854 7.16667 4.48079 6.5 4.86569L1.5 7.75244C0.833332 8.13734 9.86826e-08 7.65621 8.95028e-08 6.88641L2.06545e-08 1.11291C1.14747e-08 0.343109 0.833333 -0.138015 1.5 0.246885L6.5 3.13364Z"
                    fill="#3D497A"/>
                </svg>
              </div>
              <div className="top-arrow">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M6 0C6.62915 0 7.22768 0.221812 7.64198 0.608512L11.4601 4.17232C12.2536 4.91294 12.1617 6.03868 11.2549 6.68673C10.3502 7.33324 8.97617 7.26007 8.18181 6.52433V22.2181C8.18181 23.2022 7.20498 24 6 24C4.79502 24 3.81819 23.2022 3.81819 22.2181V6.52433C3.02383 7.26007 1.64981 7.33324 0.745107 6.68673C-0.161732 6.03868 -0.253624 4.91294 0.53986 4.17232L4.35802 0.608512C4.77232 0.221812 5.37085 0 6 0Z"
                        fill="#D8DBE4"/>
                </svg>
              </div>
              <div className={`item item4 ${index > 2 ? 'active' : ''}`}>
                <FormattedMessage id="postmenopause"/>
              </div>
              <div className="line-big">
                <span className={index > 2 ? 'active' : ''} style={{transitionDelay: "1500ms"}}></span>
              </div>
              <div className={`item item3 ${index > 1 ? 'active' : ''}`}>
                <FormattedMessage id="menopause"/>
              </div>
              <div className="line-big"><span className={index > 1 ? 'active' : ''}
                                              style={{transitionDelay: "1000ms"}}></span></div>
              <div className={`item item2 ${index > 0 ? 'active' : ''}`}>
                <FormattedMessage id="perimenopase"/>
              </div>
              <div className="line-big">
                <span className={index > 0 ? 'active' : ''} style={{transitionDelay: "250ms"}}></span>
              </div>
              <div className={`item item1 ${index >= 0 ? 'active' : ''}`}>
                <FormattedMessage id="premenopause"/>
              </div>
              <div className="line-small">
                <span className={index >= 0 ? 'active' : ''}></span>
              </div>
            </div>
            <div className="meno-stage-text">
              <div className="meno-stage-title">
                {scoreJson.menopauseStage.stage}
              </div>
              <div className="meno-stage-description"
                   dangerouslySetInnerHTML={{__html: scoreJson.menopauseStage.description}}/>
            </div>
          </div>
          <div className="meno-stage-explanation"
               dangerouslySetInnerHTML={{__html: getTranslatedMessage("menopause_stage_determination", {})}}
          />
        </div>
        <div className="meno-score" id={scoreJson.menoScore.scoretitle}>
          <div className="meno-stage-main-content">
            {
              index > -1 && (
                <ScoreCircle
                  score={scoreJson.menoScore.score}
                  size={128}
                  strokeWidth={8}
                />
              )
            }
            <div className="meno-stage-text">
              <div className="meno-stage-title">
                {scoreJson.menoScore.scorename}
              </div>
              <div className="meno-stage-description"
                   dangerouslySetInnerHTML={{__html: scoreJson.menoScore.description}}/>
            </div>
          </div>
          <div className="meno-stage-explanation"
               dangerouslySetInnerHTML={{__html: getTranslatedMessage("score_explanation", {})}}/>
        </div>
        <div className="simptoms-recommendations" id="symptoms">
          <div className="intro">
            <h2><FormattedMessage id="symptomsTitle"/></h2>
            <div className="intro-text">
              <FormattedMessage id="symptomsDescription"/>
            </div>
          </div>
          {(scoreJson.keySymptoms.mostImpactful.length > 0 && scoreJson.keySymptoms.moderateImpact.length > 0) && (
            <div className="action-buttons">
              <button
                className={`button ${currentTab === 'high' ? 'button--primary' : 'button--secondary'}`}
                onClick={() => {setCurrentTab('high')}}
              >
                <FormattedMessage id="high_impact"/>
              </button>
              <button
                className={`button ${currentTab === 'moderate' ? 'button--primary' : 'button--secondary'}`}
                onClick={() => {setCurrentTab('moderate')}}
              >
                <FormattedMessage id="low_impact"/>
              </button>
            </div>
          )}
          {
            scoreJson.keySymptoms.mostImpactful && scoreJson.keySymptoms.mostImpactful.map((s, index) => (
              <div className={`symptom high symptom${index} ${s.isMentalHealth ? '' : ''} ${currentTab === 'high' ? '' : 'd-none'}`} id="high_impact"
                   key={s.name}>
                <div className="name">
                  {s.isMentalHealth && false ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.9998 9.00023V13.0002M11.9998 17.0002H12.0098M10.6151 3.89195L2.39019 18.0986C1.93398 18.8866 1.70588 19.2806 1.73959 19.6039C1.769 19.886 1.91677 20.1423 2.14613 20.309C2.40908 20.5002 2.86435 20.5002 3.77487 20.5002H20.2246C21.1352 20.5002 21.5904 20.5002 21.8534 20.309C22.0827 20.1423 22.2305 19.886 22.2599 19.6039C22.2936 19.2806 22.0655 18.8866 21.6093 18.0986L13.3844 3.89195C12.9299 3.10679 12.7026 2.71421 12.4061 2.58235C12.1474 2.46734 11.8521 2.46734 11.5935 2.58235C11.2969 2.71421 11.0696 3.10679 10.6151 3.89195Z"
                        stroke="#FF4589" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#3D497A" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"/>
                    </svg>
                  )}
                  {s.name}
                </div>
                <div className="description"
                     dangerouslySetInnerHTML={{__html: getTranslatedMessage(`${s.dataPointName?.replaceAll(" ", "")}_description`, {})}}/>
                <a href={getTranslatedMessage(`${s.dataPointName?.replaceAll(" ", "")}_link`, {})} target="_blank">
                  <FormattedMessage id="symptom_link_text"/>
                </a>
              </div>
            ))
          }
          {
            scoreJson.keySymptoms.moderateImpact && scoreJson.keySymptoms.moderateImpact.map(s => (
              <div className={`symptom moderate ${currentTab === 'moderate' ? '' : 'd-none'}`} id="low_impact" key={s.name}>
                <div className="name">{s.name}</div>
                <div className="description"
                     dangerouslySetInnerHTML={{__html: getTranslatedMessage(`${s.dataPointName?.replaceAll(" ", "")}_description`, {})}}/>
                <a href={getTranslatedMessage(`${s.dataPointName?.replaceAll(" ", "")}_link`, {})} target="_blank">
                  <FormattedMessage id="symptom_link_text"/>
                </a>
              </div>
            ))
          }
        </div>
        <div className="box" id="whats_next">
          <div className="content">
            <div className="title"
                 dangerouslySetInnerHTML={{__html: getTranslatedMessage("whats_next_content_title", {})}}/>
            <div className="description"
                 dangerouslySetInnerHTML={{__html: getTranslatedMessage("whats_next_content_description", {})}}/>
            <div className="actions">
              <a href="https://evrbloom.ro/pages/program-menopauza" target="_blank"
                 className="button button--primary">
                <FormattedMessage id="get_started"/>
              </a>
              <a href="https://evrbloom.ro/pages/program-menopauza" target="_blank"
                 className="button button--secondary">
                <FormattedMessage id="learn_more"/>
              </a>
            </div>
          </div>
          <div className="info-box">
            <div className="stats">70%</div>
            <div className="stats-desc"><FormattedMessage id="whats_next_info_content"/></div>
          </div>
        </div>
        <div className="box" id="book_call">
          <div className="content">
            <div className="title"
                 dangerouslySetInnerHTML={{__html: getTranslatedMessage("book_call_content_title", {})}}/>
            <div className="description"
                 dangerouslySetInnerHTML={{__html: getTranslatedMessage("book_call_content_description", {})}}/>
            <div className="actions">
              <a href="https://www.drvirginialazar.life/appointment" target="_blank"
                 className="button button--primary"><FormattedMessage id="book_call"/></a>
            </div>
          </div>
          <div className="info-box-dr">
            <img src={virginiaImage}/>
            <div className="dr-info">
              <div className="dr-name">Dr. Virginia Lazar</div>
              <div className="dr-desc"><FormattedMessage id="book_call_dr_info"/></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}