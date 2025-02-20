import { useState, useEffect } from "react";
import "./menoscore.css";
import 'swiper/css';
import { FormattedMessage, createIntl } from "react-intl";
import EnglishMessages from "../locales/en/translations.json"
import RomanianMessages from "../locales/ro/translations.json";

const messages = {
  en: EnglishMessages,
  ro: RomanianMessages,
};

export default function Menoscore({scoreJson}) {
  const [arrowPosition, setArrowPosition] = useState(0);
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    setTimeout(() => {
      const stages = [getTranslatedMessage("premenopause", {}), getTranslatedMessage("perimenopase", {}),  getTranslatedMessage("menopause", {}), getTranslatedMessage("postmenopause", {})];
      const indexOfStage = stages.indexOf(scoreJson.menopauseStage.stage);
      setIndex(indexOfStage)
      setArrowPosition(27 + indexOfStage * 68)
    }, 500)
  }, [])
  const language = localStorage.getItem('language');
  function getTranslatedMessage(id, values = {}) {
    const intl = createIntl(
      {
        locale: language,
        messages: messages[language],
      },
    );
    return intl.formatMessage({ id }, values);
  }
  return (
    <div className="meno-score-container">
      <div className="meno-stage">
        <div className="meno-stage-main-content">
          <div className="meno-stage-scale">
            <div className="arrow" style={{bottom: arrowPosition, transitionDuration: `${(index+1)*500}ms`}}>
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
            <div className="line-big"><span className={index > 1 ? 'active' : ''} style={{transitionDelay: "1000ms"}}></span></div>
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
        <div className="meno-stage-explanation">
          {scoreJson.menopauseStage.stageDeterminationExplanation}
        </div>
      </div>
    </div>
  );
}