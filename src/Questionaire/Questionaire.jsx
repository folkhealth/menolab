import { useState, useEffect, useRef } from 'react';
import { mockData } from './mockData.tsx';
import Page from "./components/Page.jsx";
import './Questionaire.css'
import HeaderArea from "./components/HeaderArea.jsx";
export default function Questionaire() {
  const [questionaire, setQuestionaire] = useState(mockData);
  const [q2, setQ2] = useState(null);
  const [progressPages, setProgressPages] = useState([1]);
  const [currentPage, setCurrentPage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const topicPageRef = useRef(null);
  const headerRef = useRef(null);
  const originalHeight = useRef(0);
  const [previousTouchY, setPreviousTouchY] = useState(0);
  const [nextTouchY, setNextTouchY] = useState(0);
  const mq = window.matchMedia("(hover:none)");
  useEffect(() => {
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

    fetch("/api/default/generateQuestionnaire?leadQuestionId=1001", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setQ2(result);
        setCurrentPage(result.info[0])
      })
      .catch((error) => console.error(error));

  }, []);
  const next = (pageNo, q, a) => {
    setProgressPages([...progressPages, pageNo])
    setCurrentPage(q2.info?.find((page) => page.position === pageNo));
    console.log(q, ':', a)
  }

  const back = () => {
    setCurrentPage(q2.info.find(page => page.position === progressPages[progressPages.length - 2]));
    setProgressPages(prevItems => prevItems.slice(0, -1));
  }
  useEffect(() => {
    console.log("Progress Steps:", progressPages, "Current Page:", currentPage)
  }, [progressPages, currentPage]);
  if( !q2){
    return (<h1>Loading...</h1>)
  }
  return (
    <div className={`${currentPage.position === 1 ? 'active' : ''} no-scroll`} style={{height: `${currentPage.position === 1 ? '100dvh' : 'calc(100dvh + 48px)'}`}}>
      <div className="topic-header" ref={headerRef}>
        <HeaderArea
          currentPage={currentPage}
          progressPages={progressPages}
          qLength={q2.info.length}
        />
      </div>
      <div className="page-narrow" id="topic-page-container" ref={topicPageRef}>
        <div className="page-container">
          {
            q2?.info.map((page) => {
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