import { useState } from 'react';
import '../styles/multipleOptions.css';
import ActionArea from "./ActionArea.tsx";
export default function MultipleOptions({
  question,
  helper,
  options,
  id,
  next,
  back,
  currentPage
}){
  const [answersArray, setAnswersArray] = useState([]);
  const selectOption = (a) => {
    setAnswersArray((prevItems) => {
      if (prevItems.includes(a)) {
        return prevItems.filter(i => i !== a);
      } else {
        return [...prevItems, a];
      }
    });
    console.log(answersArray)
  }
  return (
    <div className="multiple-option question-container">
      <div className="heading-container">
        <h2>{question}</h2>
        <p className="helper">{helper}</p>
      </div>
      <div className="options-container main-content-container">
        {options.map((option) => {
          const answer = option.text.replace('ț', 't').replace('î', 'i').replace('ă', 'a').replace('â', 'a').replace('Î', 'I').replace('ș','s');
          return (
            <div
              className={`option-multiple ${answersArray.includes(answer) ? 'selected' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => {selectOption(answer)}}
              key={option.text}
              data-question={ id }
            >
              <div className="text-container">
                <div className="q-text">{option.text}</div>
              </div>
              <div className="check">&nbsp;</div>
            </div>
          )
        })
        }
      </div>
      <ActionArea
        currentPage={currentPage}
        back={back}
        next={next}
        q={question}
        a={answersArray}
      />
    </div>
  )
}
