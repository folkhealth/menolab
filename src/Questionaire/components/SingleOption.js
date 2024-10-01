import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/singleOption.css';
import ActionArea from "./ActionArea.tsx";
export default function SingleOption({ type, options, question, helper, jump, id, next, back, currentPage }) {
    return (_jsxs("div", { className: "single-option question-container", children: [_jsxs("div", { className: "heading-container", children: [_jsx("h2", { children: question }), _jsx("p", { className: "helper", children: helper })] }), _jsx("div", { className: "options-container main-content-container", children: options.map((option, index) => {
                    const answer = option.text.replace('ț', 't').replace('î', 'i').replace('ă', 'a').replace('â', 'a').replace('Î', 'I').replace('ș', 's');
                    let nextPage = id + 1;
                    if (option.jump) {
                        nextPage = option.jump;
                    }
                    else if (jump) {
                        nextPage = jump;
                    }
                    return (_jsxs("div", { className: `option ${option.image_url ? 'with-image' : ''}`, role: "button", tabIndex: 0, onClick: () => next(nextPage, question, answer), "data-question": id, children: [option.image_url && (_jsx("img", { src: option.image_url, width: "48", height: "48" })), type === 'scale' && (_jsx("div", { className: "scale-no", children: _jsx("span", { children: index - 1 }) })), _jsxs("div", { className: "text-container", children: [_jsx("div", { className: "q-text", children: option.text }), option.helper && (_jsx("div", { className: "helper", children: option.helper }))] })] }, option.text));
                }) }), _jsx(ActionArea, { currentPage: currentPage, back: back, next: next })] }));
}
