import { useState, useEffect, useRef } from 'react';
import '../styles/singleOption.css';
import ActionArea from "./ActionArea.jsx";
export default function SingleOption({
  type,
  options,
  question,
  helper,
  jump,
  id,
  next,
  back,
  currentPage
}) {
  const containerRef = useRef(null);
  const [headingContainer, setHeadingContainer] = useState(0);
  useEffect(() => {
    // Set the height after the component mounts
    if (containerRef.current) {
      setHeadingContainer(containerRef.current.offsetHeight + 144 + 48);
    }
  }, []);
  return(
    <>
      <div className="single-option question-container">
        <div className="heading-container" ref={containerRef}>
          <h2>{question}</h2>
          <p className="helper">{helper}</p>
        </div>
        <div className="options-container main-content-container" style={{ height: `calc(100% - ${headingContainer}px)` }}>
          {
            options.map((option, index) => {
              const answer = option.OptionText.replace('ț', 't').replace('î', 'i').replace('ă', 'a').replace('â', 'a').replace('Î', 'I').replace('ș', 's')
              let nextPage = id + 1;
              if (option.jump) {
                nextPage = option.jump;
              } else if (jump) {
                nextPage = jump;
              }
              return (
                <div
                  className={`option ${option.image_url ? 'with-image' : ''}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => next(nextPage, question, answer)}
                  key={option.OptionText}
                  data-question={id}
                >
                  {option.image_url && (
                    <img src={option.image_url} width="48" height="48"/>
                  )}

                  {type === 'scale' && (
                    <div className="scale-no">
                      <span>{index + 1}</span>
                    </div>
                  )}
                  <div className="text-container">
                    <div className="q-text">{option.OptionText}</div>
                    {option.helper && (
                      <div className="helper">{option.helper}</div>
                    )}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <ActionArea
        currentPage={currentPage}
        back={back}
        next={next}
      />
    </>
  )
}