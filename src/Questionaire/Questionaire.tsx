import { mockData } from './mockData.tsx';
import Page from "./components/Page.tsx";
export default function Questionaire() {
  return (
    <div>
      <h1>Questionaire</h1>
      {
        mockData.info.map((page) => {
          return (
            <Page
              key={page.id}
              page={page}
            />
          );
        })
      }
    </div>
  );
}