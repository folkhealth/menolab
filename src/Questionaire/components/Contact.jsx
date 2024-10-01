import '../styles/contact.css'
export default function Contact({
  heading,
  helper,
  contacts,
}){
  return (
    <div className="contact-container">
      <div className="heading-container">
        <h2>{heading}</h2>
        {helper && (
          <p className="helper">{{helper}}</p>
        )}
      </div>
      <div className="contact-methods main-content-container">
        {contacts.map((method) => {
          return (
            <div className="contact" data-option={ method.text } key={method.text}>
              <input type="radio" name="contact_method"
                     value={ method.text.replace('Ș','S').replace('ț','t').replace('ă','a') }
                     className="hs_contact hidden"/>
              <img src={ method.image_url } alt="Contact Folk" width="100%" height="auto"/>
              <div className="contact-text">
                {method.text}
              </div>
              <div className="contact-description">
                {method.description}
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}