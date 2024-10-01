import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/steps.css';
import ActionArea from "./ActionArea.tsx";
export default function Steps({ heading, helper, steps, next, back, currentPage }) {
    return (_jsxs("div", { className: "steps-container", children: [_jsxs("div", { className: "heading-container", children: [_jsx("h2", { children: heading }), helper && (_jsx("p", { className: "helper", children: helper }))] }), _jsx("div", { className: "steps-wrapper main-content-container", children: _jsx("div", { className: "steps", children: steps.map((step, index) => {
                        const nextStepIndex = index + 1;
                        const nextStepStatus = steps[nextStepIndex]?.status;
                        return (_jsxs("div", { className: `step ${step?.status} ${nextStepStatus == 'unchecked' ? 'gradient' : ''}`, children: [_jsx("div", { className: "step-text", children: step.text }), step.helper && (_jsx("p", { className: "helper", children: step.helper }))] }, step.text));
                    }) }) }), _jsx(ActionArea, { currentPage: currentPage, back: back, next: next })] }));
}
