import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../styles/multipleOptions.css';
import ActionArea from "./ActionArea.tsx";
export default function MultipleOptions({ question, helper, options, id, next, back, currentPage }) {
    const [answersArray, setAnswersArray] = useState([]);
    const selectOption = (a) => {
        setAnswersArray((prevItems) => {
            if (prevItems.includes(a)) {
                return prevItems.filter(i => i !== a);
            }
            else {
                return [...prevItems, a];
            }
        });
        console.log(answersArray);
    };
    return (_jsxs("div", { className: "multiple-option question-container", children: [_jsxs("div", { className: "heading-container", children: [_jsx("h2", { children: question }), _jsx("p", { className: "helper", children: helper })] }), _jsx("div", { className: "options-container main-content-container", children: options.map((option) => {
                    const answer = option.text.replace('ț', 't').replace('î', 'i').replace('ă', 'a').replace('â', 'a').replace('Î', 'I').replace('ș', 's');
                    return (_jsxs("div", { className: `option-multiple ${answersArray.includes(answer) ? 'selected' : ''}`, role: "button", tabIndex: 0, onClick: () => { selectOption(answer); }, "data-question": id, children: [_jsx("div", { className: "text-container", children: _jsx("div", { className: "q-text", children: option.text }) }), _jsx("div", { className: "check", children: "\u00A0" })] }, option.text));
                }) }), _jsx(ActionArea, { currentPage: currentPage, back: back, next: next, q: question, a: answersArray })] }));
}
