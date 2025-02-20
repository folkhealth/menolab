import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from 'react-intl';
import App from "./App.jsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import EnglishMessages from "./locales/en/translations.json"
import RomanianMessages from "./locales/ro/translations.json";

const messages = {
  en: EnglishMessages,
  ro: RomanianMessages,
};

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <IntlProvider locale={localStorage.getItem('language')?.toLowerCase().replace('2','') ?? 'en'} messages={messages[localStorage.getItem('language')?.toLowerCase().replace('2','') ?? 'en']}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IntlProvider>
);
