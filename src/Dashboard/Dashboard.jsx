import SideBar from "../components/SideBar.jsx";
import Menoscore from "../LeadQuestionAnswer/Menoscore.jsx";
import './dashboard.css'
import {useEffect, useState} from "react";
import {mockData} from "../LeadQuestionAnswer/mockData.jsx";
export default function Dashboard() {
  const [scoreJson, setScoreJson] = useState(null);
  const [scoreSummary, setScoreSummary] = useState({})
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", `${import.meta.env.VITE_API_KEY}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    setScoreJson(mockData)
    setScoreSummary({
      scoreTitle: mockData.menoScore?.scoretitle || null,
      stageTitle: mockData.menopauseStage?.stagetitle || null,
      symptomsTitle: mockData.keySymptoms?.length > 0 ? "Key Symptoms" : null,
      recommendationsTitle: (mockData.anxietyRecommendation || mockData.depressionRecommendation) ? "Recommendations" : null
    })
    // fetch(`${import.meta.env.VITE_API_URL}/default/generateMenoScore?submissionId=${localStorage.getItem('SubmissionID')}`, requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     const fullJson = JSON.parse(result.content)
    //     console.log(fullJson)
    //     setScoreSummary({
    //       scoreTitle: fullJson.menoScore?.scoretitle || null,
    //       stageTitle: fullJson.menopauseStage?.stagetitle || null,
    //       symptomsTitle: fullJson.keySymptoms?.length > 0 ? "Key Symptoms" : null,
    //       recommendationsTitle: (fullJson.anxietyRecommendation || fullJson.depressionRecommendation) ? "Recommendations" : null
    //     })
    //     setScoreJson(fullJson)
    //   })
    //   .catch((error) => console.error(error));
    // eslint-disable-next-line
  }, []);
  return (
    <div className="dashboard">
      {scoreJson ? (
        <>
          <SideBar scoreSummary={scoreSummary} />
          <div className="pageContent">
            <Menoscore scoreJson={scoreJson} />
          </div>
        </>
      ) : (
        <h1>Loading ...</h1>
      )}

    </div>
  );
}