export default function SingleOption({
  question,
  helper,
  options,
  id
}){
  return (
    <div className="multiple-option question-container">
      <div className="heading-container">
        <h2>{question}</h2>
        <p className="helper">{helper}</p>
      </div>
      <div className="options-container main-content-container">
        {options.map((option, index) => {
          return (
            <div
              className="option-multiple"
              key={option.text}
              data-question={ id }
              data-q={ question }
              data-answer="{{ o.text | replace: 'ț', 't' |  replace: 'î', 'i' | replace: 'ă', 'a' | replace: 'â', 'a' |  replace: 'Î', 'I' | replace: 'ș','s' }}"
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
    </div>
  )
}
