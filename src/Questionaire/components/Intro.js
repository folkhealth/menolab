import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/intro.css';
import ActionArea from "./ActionArea.tsx";
export default function Intro({ type, intro_text, next, back, currentPage }) {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "intro-page", children: type === 'intro' ? (_jsx("h1", { dangerouslySetInnerHTML: { __html: intro_text } })) : (_jsx("h2", { dangerouslySetInnerHTML: { __html: intro_text } })) }), _jsx(ActionArea, { currentPage: currentPage, back: back, next: next })] }));
}
