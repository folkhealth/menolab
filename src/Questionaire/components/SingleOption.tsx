import '../styles/singleOption.css';
import ActionArea from "./ActionArea.tsx";
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
  return(
    <div className="single-option question-container">
      <div className="heading-container">
        <h2>{question}</h2>
        <p className="helper">{helper}</p>
      </div>
      <div className="options-container main-content-container">
        {
          options.map((option, index) => {
            const answer = option.text.replace('ț', 't').replace('î', 'i').replace('ă', 'a').replace('â', 'a').replace('Î', 'I').replace('ș', 's')
            let nextPage = id + 1;
            if(option.jump){
              nextPage = option.jump;
            } else if(jump){
              nextPage = jump;
            }
            return (
              <div
                className={`option ${option.image_url ? 'with-image' : ''}`}
                role="button"
                tabIndex={0}
                onClick={() => next(nextPage, question, answer)}
                key={option.text}
                data-question={id}
              >
                {option.image_url && (
                  <img src={option.image_url} width="48" height="48"/>
                )}

                {type === 'scale' && (
                  <div className="scale-no">
                    <span>{index - 1}</span>
                  </div>
                )}
                <div className="text-container">
                  <div className="q-text">{option.text}</div>
                  {option.helper && (
                    <div className="helper">{option.helper}</div>
                  )}
                </div>
              </div>
            )
          })
        }

      </div>
      <ActionArea
        currentPage={currentPage}
        back={back}
        next={next}
      />
    </div>
  )
}