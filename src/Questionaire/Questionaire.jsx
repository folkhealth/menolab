import { useState, useEffect, useRef } from 'react';
import Page from "./components/Page.jsx";
import './Questionaire.css'
import HeaderArea from "./components/HeaderArea.jsx";
export default function Questionaire() {
  const [questionnaire, setQuestionnaire] = useState(null);
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const [progressPages, setProgressPages] = useState([1]);
  const [currentPage, setCurrentPage] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(localStorage.getItem('userId'));
  const topicPageRef = useRef(null);
  const headerRef = useRef(null);
  const originalHeight = useRef(0);

  useEffect(() => {
    const userParam = '&userId=' + currentUserId;
    if (topicPageRef.current) {
      originalHeight.current = topicPageRef.current.clientHeight;
    }
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "UoLl0hqxiJ5HN15Xd6HMqat9WDMK8fi57JtNIGBF");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    fetch(`${import.meta.env.VITE_API_URL}/default/generateQuestionnaire?leadQuestionId=1001${currentUserId ? userParam : ''}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setQuestionnaire(result);
        setCurrentPage(result.info[0])
        if (result.userId) {
          localStorage.setItem('userId', result.userId);
          setCurrentUserId(result.userId)
        }
      })
      .catch((error) => console.error(error));

  }, []);
  const next = async (pageNo, dataPointId, dataPointName, a, type) => {
    if (type === "first_name") {
      setUserName(a)
      localStorage.setItem('userName', a)
    }
    setProgressPages([...progressPages, pageNo])
    setCurrentPage(questionnaire.info?.find((page) => page.position === pageNo));
    const data = {
      "userId": parseInt(currentUserId, 10),
      "dataPointId": dataPointId,
      "dataPointName": dataPointName,
      "answer": a
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/default/updateUserDataPoint`, {
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
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error; // Rethrow error to be handled outside
    }
  }

  const back = () => {
    setCurrentPage(questionnaire.info.find(page => page.position === progressPages[progressPages.length - 2]));
    setProgressPages(prevItems => prevItems.slice(0, -1));
  }
  // useEffect(() => {
  //   console.log("Progress Steps:", progressPages, "Current Page:", currentPage)
  // }, [progressPages, currentPage]);
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
                <div key={page.position} className={`page page-width ${currentPage.position === page.position ? 'active' : ''}`}
                     id={`page${page.position}`}>
                  <Page
                    page={page}
                    next={next}
                    back={back}
                    currentPage={currentPage}
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