import SideBar from "../components/SideBar.jsx";
import LeadQuestionAnswer from "../LeadQuestionAnswer/LeadQuestionAnswer.jsx";
import './dashboard.css'
export default function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />
      <div className="pageContent">
        <LeadQuestionAnswer />
      </div>
    </div>
  );
}