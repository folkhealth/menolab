import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { API } from '@aws-amplify/api';
import Page from "./components/Page.jsx";
import './Questionaire.css'
import HeaderArea from "./components/HeaderArea.jsx";
export default function Questionaire() {
  function getLanguageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('language');
  }
  const [questionnaire, setQuestionnaire] = useState(null);
  const [language] = useState(getLanguageFromURL() ?? 'RO');
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const [submissionId, setSubmissionId] = useState();
  const [progressPages, setProgressPages] = useState([1]);
  const [currentPage, setCurrentPage] = useState(null);
  const topicPageRef = useRef(null);
  const headerRef = useRef(null);
  const originalHeight = useRef(0);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("language", getLanguageFromURL()?.toLowerCase() ?? 'ro');
    if (topicPageRef.current) {
      originalHeight.current = topicPageRef.current.clientHeight;
    }
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", `${import.meta.env.VITE_API_KEY}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    fetch(`${import.meta.env.VITE_API_URL}/default/getMenoScoreQuestionnaire?language=${language}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSubmissionId(result.SubmissionID)
        setQuestionnaire(result.questionnaire);
        setCurrentPage(result.questionnaire.info[0])
        localStorage.setItem('SubmissionID', result.SubmissionID);
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line
  }, []);
  const next = async (pageNo, dataPointId, dataPointName, a, type) => {
    if (type === "first_name") {
      setUserName(a)
      localStorage.setItem('userName', a)
    }
    if(type !== "email"){
      setProgressPages([...progressPages, pageNo])
      setCurrentPage(questionnaire.info?.find((page) => page.position === pageNo));
    }
    if(type !== "intro") {
      const data = {
        "SubmissionID": submissionId,
        "language": language,
        "DataPointName": dataPointName,
        "Response": a
      }
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/default/updateMenoScoreResponse`, {
          method: 'POST', // Specify the method as POST
          headers: {
            "X-Api-Key": "UoLl0hqxiJ5HN15Xd6HMqat9WDMK8fi57JtNIGBF",
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        if(type === "email") {
          navigate('/dashboard')
        }
        return result;
      } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow error to be handled outside
      }
    }
  }

  const back = () => {
    setCurrentPage(questionnaire.info.find(page => page.position === progressPages[progressPages.length - 2]));
    setProgressPages(prevItems => prevItems.slice(0, -1));
  }
  if( !questionnaire){
    return (<h1>Loading...</h1>)
  }
  return (
    <div className={`${currentPage.position === 1 ? 'active' : ''} no-scroll`} style={{height: `${currentPage.position === 1 ? '100dvh' : 'calc(100dvh + 48px)'}`}}>
      <div className="topic-header" ref={headerRef}>
        <HeaderArea
          currentPage={currentPage}
          progressPages={progressPages}
          qLength={questionnaire.info.length}
        />
      </div>
      <div className="page-narrow" id="topic-page-container" ref={topicPageRef}>
        <div className="page-container">
          {
            questionnaire?.info.map((page) => {
              return (
                <div key={page.position} className={`page page-width ${currentPage.position === page.position ? 'active' : 'd-none'}`}
                     id={`page${page.position}`}>
                  <Page
                    page={page}
                    next={next}
                    back={back}
                    currentPage={currentPage}
                    userName={userName}
                    isActive
                  />
                </div>

              );
            })
          }
        </div>
      </div>
    </div>

  );
}