import { jsx as _jsx } from "react/jsx-runtime";
import Intro from "./Intro";
import SingleOption from "./SingleOption";
import MultipleOptions from "./MultipleOptions";
import Steps from "./Steps";
import CustomForm from "./CustomForm";
import Contact from "./Contact";
import RegisterForm from "./RegisterForm";
export default function Page({ page, next, back, currentPage }) {
    switch (page.type) {
        case 'intro':
            return (_jsx(Intro, { intro_text: page.settings.intro_text, next: next, back: back, currentPage: currentPage }));
        case 'single_option':
            return (_jsx(SingleOption, { type: page.type, options: page.settings.options, question: page.settings.question, helper: page.settings.helper, jump: page.jump, id: page.id, next: next, back: back, currentPage: currentPage }));
        case 'scale':
            return (_jsx(SingleOption, { type: page.type, options: page.settings.options, question: page.settings.question, helper: page.settings.helper, jump: page.jump, id: page.id, next: next, back: back, currentPage: currentPage }));
        case 'single_option_image':
            return (_jsx(SingleOption, { type: page.type, options: page.settings.options, question: page.settings.question, helper: page.settings.helper, jump: page.jump, id: page.id, next: next, back: back, currentPage: currentPage }));
        case 'multiple_option':
            return (_jsx(MultipleOptions, { options: page.settings.options, question: page.settings.question, helper: page.settings.helper, id: page.id, next: next, back: back, currentPage: currentPage }));
        case 'custom_form':
            return (_jsx(CustomForm, { question: page.settings.question, helper: page.settings.helper, fields: page.settings.fields, next: next, back: back, currentPage: currentPage }));
        case 'steps':
            return (_jsx(Steps, { heading: page.settings.heading, helper: page.settings.helper, steps: page.settings.steps, next: next, back: back, currentPage: currentPage }));
        case 'contact':
            return (_jsx(Contact, { heading: page.settings.heading, helper: page.settings.helper, contacts: page.settings.contact }));
        case 'register_form':
            return (_jsx(RegisterForm, { heading: page.settings.heading, helper: page.settings.helper, first_name_label: page.settings.first_name_label, last_name_label: page.settings.last_name_label, email_label: page.settings.email_label, text_error_message: page.settings.text_error_message, email_error_message: page.settings.email_error_message }));
        case 'message':
            return (_jsx(Intro, { intro_text: page.settings.intro_text, type: page.type, next: next, back: back, currentPage: currentPage }));
    }
}
