import '../styles/customForm.css'
export default function CustomForm({
  question,
  helper,
  fields
}){
  return (
    <div className="custom-form">
      <div className="heading-container">
        <h2>{question}</h2>
        <p className="helper">{helper}</p>
      </div>
      <div className="main-content-container">
        {fields[0].type === 'option' ? (
          <div className="options">
            {
              fields.map((option) => {
                return (
                  <div
                    className="option"
                    key={option.option}
                    data-question="{{ id }}"
                    data-q={ question }
                    data-answer={ option?.option?.replace('ț', 't').replace('î', 'i').replace('ă', 'a').replace('â', 'a').replace('Î', 'I').replace('ș','s')}
                    data-jump="{% if o.jump != blank %}{{- o.jump-}}{% elsif jump != blank %}{{- jump -}}{% else %}{{- id |  plus: 1 -}}{% endif %}"
                  >
                    <div className="text-container">
                      <div className="q-text">{option.option}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        ) : (
            <div className="fields">
              {
                fields.map((field) => {
                  return (
                    <div className="custom-field" key={field.label}>
                      {(field.type == 'numeric' || field.type == 'alphanumeric') ? (
                      <div className="input-field">
                        <input
                          type={field.type === 'numeric'? 'number' : 'text'}
                          id={ field.info?.replace(' ', '-')}
                          data-name="{{ id }}"
                          data-q={ field.label }
                          data-mandatory={ field.mandatory }
                        />
                        <label>{field.label}</label>
                        <div className="input-error">{field.error_message}</div>
                      </div>
                        ) : (
                      <div className="input-field">
                        <textarea
                          id={ field.label?.replace(' ', '-')}
                          placeholder={ field.label }
                          data-name="{{ id }}"
                          data-q={ question }
                          data-mandatory={ field.mandatory }
                        ></textarea>
                        <div className="input-error">{field.error_message}</div>
                      </div>
                      )}
                      { field.type !== 'textarea' && (
                        <div className="measurement">
                          {field.measurement}
                        </div>
                      )}
                    </div>
                  )
                })
              }
            </div>
        )}
      </div>
    </div>

  )
}