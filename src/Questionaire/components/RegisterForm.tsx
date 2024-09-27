export default function RegisterForm({
  heading,
  helper,
  first_name_label,
  text_error_message,
  last_name_label,
  email_label,
  email_error_message,
}){
  return (
    <div className="register-container">
      <div className="heading-container">
        <h2>{heading}</h2>
        {helper && (
          <p className="helper">{helper}</p>
        )}
      </div>
      <div className="register-form main-content-container">
        <div className="form-row w-half">
          <div className="input-field">
            <input type="text" id="first_name" name="firstname"/>
            <label>{first_name_label}</label>
            <div className="input-error">{text_error_message}</div>
          </div>
          <div className="input-field">
            <input type="text" id="last_name" name="lastname"/>
            <label>{last_name_label}</label>
            <div className="input-error">{text_error_message}</div>
          </div>
        </div>
        <div className="form-row w-full">
          <div className="input-field">
            <input type="email" id="email_address" name="email"/>
            <label>{email_label}</label>
            <div className="input-error">{email_error_message}</div>
          </div>
        </div>
        <textarea id="teste" name="questionnaire" className="hidden"></textarea>
      </div>
    </div>
  )
}