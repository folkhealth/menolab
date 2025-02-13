export default function HeaderArea({currentPage, progressPages, qLength}) {
  return(
    <>
      <a href="/">
        <img src="https://menoqueens.ro/cdn/shop/files/menoqueens_logo.svg?v=1733922052&width=600" alt="Menoqueens"
             className="logo"/>
      </a>
      {
        currentPage.id !== 1 && (
          <div className="progress-bar-container" id="progress-bar-container">
            <div className="progress-bar">
              <span id="progress" style={{ width: (progressPages.length * 100 / qLength) + '%'}}></span>
            </div>
          </div>
        )
      }
    </>
  )
}