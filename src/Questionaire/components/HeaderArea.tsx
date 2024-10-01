export default function HeaderArea({currentPage, progressPages, qLength}) {
  return(
    <>
      <a href="/">
        <img src="https://cdn.shopify.com/s/files/1/0761/6112/2639/files/folk_logo.svg?v=1689765174" alt="Folk"
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