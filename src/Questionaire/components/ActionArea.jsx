export default function ActionArea({currentPage, next, back, q, a, isAvailable}) {
  return (
    <div className={`action-area ${currentPage.position === 1 ? 'justify-end' : 'justify-between'}`}>
      {
        currentPage.position !== 1 && (
          <button className="button button--secondary" onClick={() => {
            back()
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8327 10.0001H4.16602M4.16602 10.0001L9.99935 15.8334M4.16602 10.0001L9.99935 4.16675"
                    stroke="#1E3723" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Înapoi
          </button>
        )
      }
      {
        (currentPage.QuestionType !== 'single_option' && currentPage.QuestionType !== 'single_option_image' && currentPage.QuestionType !== 'scale') && (
          <button
            className="button button--primary"
            disabled={!isAvailable}
            onClick={() => next(currentPage.jump ? currentPage.jump : currentPage.position + 1, q, a)}
          >
            Continuă
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.66602 9.99996H16.3327M16.3327 9.99996L10.4993 4.16663M16.3327 9.99996L10.4993 15.8333"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )
      }
    </div>
  )
}