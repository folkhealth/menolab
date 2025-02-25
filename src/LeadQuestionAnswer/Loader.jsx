import {createIntl, FormattedMessage} from "react-intl";
import { useState, useEffect } from "react";
import "./loader.css"
import EnglishMessages from "../locales/en/translations.json"
import RomanianMessages from "../locales/ro/translations.json";

const messages = {
  en: EnglishMessages,
  ro: RomanianMessages,
};
export default function Menoscore() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < 5) {
      const timer = setTimeout(() => {
        setCurrentStep((prevStep) => prevStep + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);
  function getTranslatedMessage(id, values = {}) {
    const intl = createIntl(
      {
        locale: localStorage.getItem("language") ?? 'ro',
        messages: messages[localStorage.getItem("language") ?? 'ro'],
      },
    );
    return intl.formatMessage({ id }, values);
  }

  return (
    <div className="loader">
      <div className="topic-header">
        <a href="/">
          <img src="https://menoqueens.ro/cdn/shop/files/menoqueens_logo.svg?v=1733922052&width=600" alt="Menoqueens"
               className="logo"/>
        </a>
      </div>
      <div className="loader-content">
        <div className="title"><FormattedMessage id="loading_title"/></div>
        <div className="description" dangerouslySetInnerHTML={{__html: getTranslatedMessage("loading_description", {})}} />
        <div className="steps">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={`step ${index < currentStep ? "checked" : ""} ${index === currentStep ? "loading" : ""}`}
              style={{display: index <= currentStep ? "flex" : "none"}}
            >
              <FormattedMessage id={`loading_step_${index + 1}`}/>
              {index === currentStep && (
                <>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </>
              )}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#3D497A" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
              </svg>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}