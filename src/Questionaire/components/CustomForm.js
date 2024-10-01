import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../styles/customForm.css';
import ActionArea from "./ActionArea.tsx";
export default function CustomForm({ question, helper, fields, currentPage, next, back }) {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");
    const handleFocus = () => setFocused(true);
    const handleBlur = () => {
        if (!value) {
            setFocused(false);
        }
    };
    return (_jsxs("div", { className: "custom-form", children: [_jsxs("div", { className: "heading-container", children: [_jsx("h2", { children: question }), _jsx("p", { className: "helper", children: helper })] }), _jsx("div", { className: "main-content-container", children: _jsx("div", { className: "fields", children: fields.map((field) => {
                        return (_jsxs("div", { className: "custom-field", children: [(field.type == 'numeric' || field.type == 'alphanumeric') ? (_jsxs("div", { className: `input-field floating-input ${focused || value ? "focused" : ""}`, children: [_jsx("input", { type: field.type === 'numeric' ? 'number' : 'text', id: field.info?.replace(' ', '-'), value: value, onFocus: handleFocus, onBlur: handleBlur, onChange: (e) => setValue(e.target.value), "data-name": "{{ id }}", "data-q": field.label, "data-mandatory": field.mandatory }), _jsx("label", { children: field.label }), _jsx("div", { className: "input-error", children: field.error_message })] })) : (_jsxs("div", { className: "input-field", children: [_jsx("textarea", { id: field.label?.replace(' ', '-'), placeholder: field.label, "data-name": "{{ id }}", "data-q": question, "data-mandatory": field.mandatory }), _jsx("div", { className: "input-error", children: field.error_message })] })), field.type !== 'textarea' && (_jsx("div", { className: "measurement", children: field.measurement }))] }, field.label));
                    }) }) }), _jsx(ActionArea, { currentPage: currentPage, back: back, next: next })] }));
}
