import Intro from "./Intro";
import SingleOption from "./SingleOption";
import MultipleOptions from "./MultipleOptions";
import Steps from "./Steps";
import CustomForm from "./CustomForm";
import Contact from "./Contact";
import RegisterForm from "./RegisterForm";
export default function Page({page}) {
  switch (page.type) {
    case 'intro':
      return (
        <Intro
          intro_text={page.settings.intro_text}
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
        />
      )
    case 'multiple_option':
      return (
        <MultipleOptions
          options={page.settings.options}
          question={page.settings.question}
          helper={page.settings.helper}
          id={page.id}
        />
      )
    case 'custom_form':
      return (
        <CustomForm
          question={page.settings.question}
          helper={page.settings.helper}
          fields={page.settings.fields}
        />
      )
    case 'steps':
      return (
        <Steps
          heading={page.settings.heading}
          helper={page.settings.helper}
          steps={page.settings.steps}
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
        />
      )
  }

  return(
    <div>
      <h2>{page.type}</h2>
    </div>
  )
}