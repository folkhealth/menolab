import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/contact.css';
export default function Contact({ heading, helper, contacts, }) {
    return (_jsxs("div", { className: "contact-container", children: [_jsxs("div", { className: "heading-container", children: [_jsx("h2", { children: heading }), helper && (_jsx("p", { className: "helper", children: { helper } }))] }), _jsx("div", { className: "contact-methods main-content-container", children: contacts.map((method) => {
                    return (_jsxs("div", { className: "contact", "data-option": method.text, children: [_jsx("input", { type: "radio", name: "contact_method", value: method.text.replace('Ș', 'S').replace('ț', 't').replace('ă', 'a'), className: "hs_contact hidden" }), _jsx("img", { src: method.image_url, alt: "Contact Folk", width: "100%", height: "auto" }), _jsx("div", { className: "contact-text", children: method.text }), _jsx("div", { className: "contact-description", children: method.description })] }, method.text));
                }) })] }));
}
