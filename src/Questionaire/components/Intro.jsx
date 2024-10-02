import '../styles/intro.css';
import ActionArea from "./ActionArea.jsx";
export default function Intro({type, intro_text, next, back, currentPage}) {
  return(
    <>
      <div className="intro-page">
        {
          type === 'intro' ? (
            <h1 dangerouslySetInnerHTML={{ __html: intro_text }} />
          ) : (
            <h2  dangerouslySetInnerHTML={{ __html: intro_text }} />
          )
        }
      </div>
      <ActionArea
        currentPage={currentPage}
        back={back}
        next={next}
        isAvailable
      />
    </>

  )
}