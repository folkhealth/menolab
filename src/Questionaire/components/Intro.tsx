import '../styles/intro.css';
export default function Intro({type, intro_text}) {
  return(
    <div className="intro-page">
      {
        type === 'intro' ? (
          <h1>{intro_text}</h1>
        ) : (
          <h2>{intro_text}</h2>
        )
      }
    </div>
  )
}