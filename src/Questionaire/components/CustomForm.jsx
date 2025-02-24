import { useState, useRef, useEffect } from 'react';
import '../styles/customForm.css'
import ActionArea from "./ActionArea.jsx";
import {FormattedMessage} from "react-intl";
export default function CustomForm({
  question,
  helper,
  fields,
  type,
  currentPage,
  next,
  back,
  id,
  dataPointId,
  dataPointName,
  userName,
}){
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const [fullValue, setFullValue] = useState("");
  const user = localStorage.getItem("userName") ?? userName;
  const inputRef = useRef(null); // Reference for first input field
  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };
  useEffect(() => {
    if (currentPage?.position === id && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentPage?.position, id]);
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if(value !== ''){
        next(currentPage.jump ? currentPage.jump : currentPage.position + 1, dataPointId, dataPointName, fullValue, type)
      }

    }
  };
  const isButtonAvailable = () => {
    if(type === 'email'){
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value)
    }
    return value !== ''
  }
  return (
    <>
      <div className="custom-form">
        <div className="heading-container">
          <h2>{question.replace("{first_name}", user)}</h2>
          <p className="helper">{helper}</p>
        </div>
        <div className="main-content-container">
          <div className="fields">
            {
              type === "first_name" ? (
                <div className="custom-field">
                  <div className={`input-field ${focused || value ? "focused" : ""}`}>
                    <input
                      ref={inputRef}
                      type="text"
                      className="full-radius"
                      value={value}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      onChange={(e) => {setValue(e.target.value); setFullValue(e.target.value)}}
                      data-name="{{ id }}"
                      autoFocus={true}
                      onKeyDown={handleKeyPress}
                    />
                    <label><FormattedMessage id="first_name" /></label>
                  </div>
                </div>
              ) : (type === "email" ? (
                <div className="custom-field">
                  <div className={`input-field ${focused || value ? "focused" : ""}`}>
                    <input
                      ref={inputRef}
                      type="email"
                      className="full-radius"
                      value={value}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      onChange={(e) => {setValue(e.target.value); setFullValue(e.target.value)}}
                      data-email="{{ id }}"
                      autoFocus={true}
                      onKeyDown={handleKeyPress}
                    />
                    <label>Email</label>
                  </div>
                </div>
                ) : (
                <>
                  {
                    fields?.map((field, index) => {
                      return (
                        <div className="custom-field" key={field?.label}>
                          {(field?.type === 'numeric' || field?.type === 'alphanumeric') ? (
                            <div className={`input-field floating-input ${focused || value ? "focused" : ""}`}>
                              <input
                                ref={index === 0 ? inputRef : null}
                                type={field?.type === 'numeric' ? 'number' : 'text'}
                                id={field?.label?.replace(' ', '-')}
                                value={value}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                  setValue(e.target.value);
                                  setFullValue(field?.measurement && field?.measurement !== 'Year' && field?.measurement !== 'An' ? `${e.target.value}${field?.measurement}` : e.target.value)
                                }}
                                data-name="{{ id }}"
                                data-q={field?.label}
                                data-mandatory={field.mandatory}
                                onKeyDown={handleKeyPress}
                                autoFocus={true}
                              />
                              <label>{field?.label}</label>
                              <div className="input-error">{field?.error_message}</div>
                            </div>
                          ) : (
                            <div className="input-field">
                              <textarea
                                id={field?.label?.replace(' ', '-')}
                                value={value}
                                onChange={(e) => {setValue(e.target.value); setFullValue(e.target.value)}}
                                placeholder={field?.label}
                                data-name="{{ id }}"
                                data-q={question}
                                data-mandatory={field?.mandatory}
                                autoFocus={true}
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
              ))
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
        a={fullValue}
        isAvailable={isButtonAvailable()}
        type={type}
      />
    </>
  )
}