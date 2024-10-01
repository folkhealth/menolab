import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export default function HeaderArea({ currentPage, progressPages, qLength }) {
    return (_jsxs(_Fragment, { children: [_jsx("a", { href: "/", children: _jsx("img", { src: "https://cdn.shopify.com/s/files/1/0761/6112/2639/files/folk_logo.svg?v=1689765174", alt: "Folk", className: "logo" }) }), currentPage.id !== 1 && (_jsx("div", { className: "progress-bar-container", id: "progress-bar-container", children: _jsx("div", { className: "progress-bar", children: _jsx("span", { id: "progress", style: { width: (progressPages.length * 100 / qLength) + '%' } }) }) }))] }));
}
