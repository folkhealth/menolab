import Intro from "./Intro.jsx";
import SingleOption from "./SingleOption.jsx";
import MultipleOptions from "./MultipleOptions.jsx";
import Steps from "./Steps.jsx";
import CustomForm from "./CustomForm.jsx";
import Contact from "./Contact.jsx";
import RegisterForm from "./RegisterForm.jsx";
export default function Page({page, next, back, currentPage}) {
  switch (page.type) {
    case 'intro':
      return (
        <Intro
          intro_text={page.settings.intro_text}
          next={next}
          back={back}
          currentPage={currentPage}
        />
      )
    case 'single_option':
      return (
        <SingleOption
          type={page.type}
          options={page.settings.options}
          question={page.settings.question}
          helper={page.settings.helper}
          jump={page.jump}
          id={page.id}
          next={next}
          back={back}
          currentPage={currentPage}
        />
      )
    case 'scale':
      return (
        <SingleOption
          type={page.type}
          options={page.settings.options}
          question={page.settings.question}
          helper={page.settings.helper}
          jump={page.jump}
          id={page.id}
          next={next}
          back={back}
          currentPage={currentPage}
        />
      )
    case 'single_option_image':
      return (
        <SingleOption
          type={page.type}
          options={page.settings.options}
          question={page.settings.question}
          helper={page.settings.helper}
          jump={page.jump}
          id={page.id}
          next={next}
          back={back}
          currentPage={currentPage}
        />
      )
    case 'multiple_option':
      return (
        <MultipleOptions
          options={page.settings.options}
          question={page.settings.question}
          helper={page.settings.helper}
          id={page.id}
          next={next}
          back={back}
          currentPage={currentPage}
        />
      )
    case 'custom_form':
      return (
        <CustomForm
          question={page.settings.question}
          helper={page.settings.helper}
          fields={page.settings.fields}
          next={next}
          back={back}
          currentPage={currentPage}
        />
      )
    case 'steps':
      return (
        <Steps
          heading={page.settings.heading}
          helper={page.settings.helper}
          steps={page.settings.steps}
          next={next}
          back={back}
          currentPage={currentPage}
        />
      )
    case 'contact':
      return (
        <Contact
          heading={page.settings.heading}
          helper={page.settings.helper}
          contacts={page.settings.contact}
        />
      )
    case 'register_form':
      return (
        <RegisterForm
          heading={page.settings.heading}
          helper={page.settings.helper}
          first_name_label={page.settings.first_name_label}
          last_name_label={page.settings.last_name_label}
          email_label={page.settings.email_label}
          text_error_message={page.settings.text_error_message}
          email_error_message={page.settings.email_error_message}
        />
      )
    case 'message':
      return (
        <Intro
          intro_text={page.settings.intro_text}
          type={page.type}
          next={next}
          back={back}
          currentPage={currentPage}
        />
      )
  }
}