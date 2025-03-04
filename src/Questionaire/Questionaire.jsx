import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockData } from './mockData';
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
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const mq = window.matchMedia("(hover:none)");
  // const previousTouchY = useRef(0);
  // const nextTouchY = useRef(0);
  // const originalHeights = window.innerHeight; // Assuming originalHeight is the viewport height

  // useEffect(() => {
  //   const handleWheel = (e) => {
  //     setScrollPosition((prev) => {
  //       let newPosition = e.wheelDeltaY < 0
  //         ? Math.max(prev + e.wheelDeltaY / 3, -48)
  //         : Math.min(prev + e.wheelDeltaY / 3, 0);
  //       updateStyles(newPosition);
  //       return newPosition;
  //     });
  //   };
  //
  //   const handleTouchMove = (e) => {
  //     const currentTouchY = e.touches[0].clientY;
  //
  //     // Reset nextTouchY when direction changes
  //     if (
  //       (currentTouchY > previousTouchY.current && nextTouchY.current < 0) ||
  //       (currentTouchY < previousTouchY.current && nextTouchY.current > 0)
  //     ) {
  //       nextTouchY.current = 0;
  //     }
  //
  //     if (currentTouchY > previousTouchY.current) {
  //       nextTouchY.current += 1;
  //       setScrollPosition((prev) => {
  //         let newPosition = Math.min(prev + nextTouchY.current, 0);
  //         updateStyles(newPosition);
  //         return newPosition;
  //       });
  //     } else {
  //       nextTouchY.current -= 1;
  //       setScrollPosition((prev) => {
  //         let newPosition = Math.max(prev + nextTouchY.current, -48);
  //         updateStyles(newPosition);
  //         return newPosition;
  //       });
  //     }
  //
  //     previousTouchY.current = currentTouchY;
  //   };
  //
  //   const updateStyles = (position) => {
  //     const h = document.getElementById("topic-page-container");
  //     if (h && currentPage?.position !== 1) {
  //
  //       document.querySelectorAll(".topic-header")[0].style.top = `${position}px`;
  //       h.style.top = `${position}px`;
  //       h.style.height = `${originalHeights - position - 102}px`;
  //     }
  //   };
  //
  //   if (!mq.matches) {
  //     window.addEventListener("wheel", handleWheel);
  //   } else {
  //     window.addEventListener("touchmove", handleTouchMove);
  //   }
  //
  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //     window.removeEventListener("touchmove", handleTouchMove);
  //   };
  // }, [mq.matches]);
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
    // console.log(mockData)
    // setSubmissionId(mockData.SubmissionID)
    // setQuestionnaire(mockData.questionnaire);
    // setCurrentPage(mockData.questionnaire.info[0])
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
    return (<h1></h1>)
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
                    language={language}
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