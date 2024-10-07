import { useState, useEffect, useRef } from 'react';
import { mockData } from './mockData.tsx';
import Page from "./components/Page.jsx";
import './Questionaire.css'
import HeaderArea from "./components/HeaderArea.jsx";
export default function Questionaire() {
  const [questionaire, setQuestionaire] = useState(mockData);
  const [progressPages, setProgressPages] = useState([1]);
  const [currentPage, setCurrentPage] = useState(mockData.info[0]);
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

    const handleScroll = (e) => {
      let newScrollPosition = scrollPosition;

      if (e.deltaY < 0) {
        newScrollPosition = Math.max(scrollPosition + e.deltaY / 3, -48);
      } else {
        newScrollPosition = Math.min(scrollPosition + e.deltaY / 3, 0);
      }

      if (progressPages[progressPages.length - 1] !== 1) {
        headerRef.current.style.top = `${newScrollPosition}px`;
        topicPageRef.current.style.top = `${newScrollPosition}px`;
        //topicPageRef.current.style.height = `${originalHeight.current - newScrollPosition}px`;
      }
      console.log(originalHeight.current)
      setScrollPosition(newScrollPosition);
    };

    const handleTouchMove = (e) => {
      const currentTouchY = e.touches[0].clientY;
      let newScrollPosition = scrollPosition;

      if (currentTouchY > previousTouchY) {
        setNextTouchY(nextTouchY + 1);
        newScrollPosition = Math.min(scrollPosition + nextTouchY, 0);
      } else {
        setNextTouchY(nextTouchY + 1);
        newScrollPosition = Math.max(scrollPosition - nextTouchY, -48);
      }

      if (progressPages[progressPages.length - 1] !== 1) {
        headerRef.current.style.top = `-${newScrollPosition}px`;
        topicPageRef.current.style.top = `${newScrollPosition}px`;
        //topicPageRef.current.style.height = `${originalHeight.current - newScrollPosition}px`;
      }

      setPreviousTouchY(currentTouchY);
      setScrollPosition(newScrollPosition);
    };

    // if (!mq.matches) {
    //   window.addEventListener('wheel', handleScroll);
    // } else {
    //   window.addEventListener('touchmove', handleTouchMove);
    // }
    //
    // return () => {
    //   if (!mq.matches) {
    //     window.removeEventListener('wheel', handleScroll);
    //   } else {
    //     window.removeEventListener('touchmove', handleTouchMove);
    //   }
    // };
  }, [scrollPosition, mq.matches, progressPages, previousTouchY, nextTouchY]);
  const next = (pageNo, q, a) => {
    setProgressPages([...progressPages, pageNo])
    setCurrentPage(questionaire.info?.find((page) => page.id === pageNo));
    console.log(q, ':', a)
  }

  const back = () => {
    setCurrentPage(questionaire.info.find(page => page.id === progressPages[progressPages.length - 2]));
    setProgressPages(prevItems => prevItems.slice(0, -1))
  }
  useEffect(() => {
    console.log("Progress Steps:", progressPages, "Current Page:", currentPage)
  }, [progressPages, currentPage]);
  return (
    <div className={`${currentPage.id === 1 ? '' : ''} no-scroll`} style={{height: `${currentPage.id === 1 ? '100dvh' : 'calc(100dvh + 48px)'}`}}>
      <div className="topic-header" ref={headerRef}>
        <HeaderArea
          currentPage={currentPage}
          progressPages={progressPages}
          qLength={questionaire.info.length}
        />
      </div>
      <div className="page-narrow" id="topic-page-container" ref={topicPageRef}>
        <div className="page-container">
          {
            questionaire.info.map((page) => {
              return (
                <div key={page.id} className={`page page-width ${currentPage.id === page.id ? 'active' : ''}`}
                     id={`page${page.id}`}>
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