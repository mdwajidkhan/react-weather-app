import React, {useState} from 'react'

const InputSection = ({locationBtn, requestApi, infoTxt}) => {
  const [text, setText] = useState('')

  const inputField = (e) => {
    if(e.key === "Enter" && text!== ""){ 
     requestApi(text);
     setText('');
    }
  }

  let classNames;
  if (infoTxt === "Getting weather details...") {
    classNames = "info-txt pending"
  }
  else if (infoTxt === "Something went wrong") {
    classNames = "info-txt error"
  }
  else if (infoTxt === "This isn't a valid city name"){
    classNames = "info-txt error"
  }
  else if (infoTxt === ""){
    classNames = "info-txt"
  }
  else{
    classNames = "info-text"
  }
  return (
    <section class="input-part">
        <p className={classNames}>{infoTxt}</p>
        <div className="content">
          <input type="text" value={text} onChange={e => setText(e.target.value)} spellcheck="false" placeholder="Enter city name" required onKeyUp={(inputField)}/>
          <div className="separator"></div>
          <button onClick={locationBtn}>Get Device Location</button>
        </div>
      </section>
  )
}

export default InputSection