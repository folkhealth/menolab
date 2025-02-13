import { useState } from 'react';
import '../styles/customForm.css'
import ActionArea from "./ActionArea.jsx";
export default function CustomForm({
  question,
  helper,
  fields,
  type,
  currentPage,
  next,
  back,
  dataPointId,
  dataPointName
}){
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const userName = localStorage.getItem("userName");
  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if(value !== ''){
        next(currentPage.jump ? currentPage.jump : currentPage.position + 1, dataPointId, dataPointName, value, type)
      }

    }
  };
  return (
    <>
      <div className="custom-form">
        <div className="heading-container">
          <h2>{question.replace("{first_name}", userName)}</h2>
          <p className="helper">{helper}</p>
        </div>
        <div className="main-content-container">
          <div className="fields">
            {
              type === "first_name" ? (
                <div className="custom-field">
                  <div className={`input-field ${focused || value ? "focused" : ""}`}>
                    <input
                      type="text"
                      className="full-radius"
                      value={value}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      onChange={(e) => setValue(e.target.value)}
                      data-name="{{ id }}"
                      onKeyPress={handleKeyPress}
                    />
                    <label>First name</label>
                  </div>
                </div>
              ) : (
                <>
                  {
                    fields?.map((field) => {
                      return (
                        <div className="custom-field" key={field?.label}>
                          {(field?.type === 'numeric' || field?.type === 'alphanumeric') ? (
                            <div className={`input-field floating-input ${focused || value ? "focused" : ""}`}>
                              <input
                                type={field?.type === 'numeric' ? 'number' : 'text'}
                                id={field?.label?.replace(' ', '-')}
                                value={value}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={(e) => setValue(e.target.value)}
                                data-name="{{ id }}"
                                data-q={field?.label}
                                data-mandatory={field.mandatory}
                                onKeyPress={handleKeyPress}
                              />
                              <label>{field?.label}</label>
                              <div className="input-error">{field?.error_message}</div>
                            </div>
                          ) : (
                            <div className="input-field">
                              <textarea
                                id={field?.label?.replace(' ', '-')}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder={field?.label}
                                data-name="{{ id }}"
                                data-q={question}
                                data-mandatory={field?.mandatory}
                              ></textarea>
                              <div className="input-error">{field?.error_message}</div>
                            </div>
                          )}
                          {field?.type !== 'textarea' && (
                            <div className="measurement">
                              {field?.measurement}
                            </div>
                          )}
                        </div>
                      )
                    })
                  }
                </>
              )
            }
          </div>
        </div>
      </div>
      <ActionArea
        currentPage={currentPage}
        back={back}
        next={next}
        dataPointId={dataPointId}
        dataPointName={dataPointName}
        a={value}
        isAvailable={value !== ''}
        type={type}
      />
    </>
  )
}