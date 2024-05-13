import React, { useState } from "react";
import "./Question3.css";

const Question3 = () => {
    const [fullName, setFullName] = useState("")
    const [displayName, setDisplayName] = useState('')
    const [errorMsg, setErrorMsg] = useState("")
    const [count, setCount] = useState(0)
    // chu bá tuấn => Chu bá tuấn

    const capitalize = (fullName) => {
        return String(fullName).charAt(0).toUpperCase() + String(fullName).slice(1)
    }

    const onFullNameChange = (event) => {
        setFullName(event.target.value)
        // setFullName(capitalize(event.target.value))
    }

    const capitalizeSentence = (sentence) => {
        // đào tuấn anh

        let words = sentence.split(' ')
        // ["đào", "tuấn", "anh"]

        for(let i = 0; i < words.length; i++){
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
        }

        // ["Đào", "Tuấn", "Anh"]
        return words.join(' ')

        // "Đào Tuấn Anh"

    }

    const onSubmit = () => {
        if(!fullName.length){
            setErrorMsg("This field is required!")
        }else{
            setDisplayName(capitalizeSentence(fullName))
            setErrorMsg('')
        }
    }

    const onKeyDown = (event) => {
        if(event.key === "Enter"){
            onSubmit()
        }
    }
    const handleCopy = (event) => {
        event.preventDefault()
        alert("Don't copy it!")
        setCount(previousCount => previousCount + 1)
    }

    const handleImageError = (event) => {
        event.target.src = 'https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image.png'
    }
    
    return (
        <div className="question3">
            <h1>3: Event - Question 3</h1><br />
            <h4>{displayName}</h4>
            <div className="question3__textfield">
                <input className="question3__input" type="text" name="fullName" id="fullName" placeholder="Enter your full name..." 
                value={fullName} onChange={onFullNameChange} 
                onKeyDown={onKeyDown} />
                <button type="button" className="question3__btn" onClick={onSubmit}>Submit</button>
            </div>
            <div className="question3__msg">{errorMsg}</div>

            <div>---------------------------------------</div>
            <h1>Question 2</h1><br />
            <p onCopy={handleCopy}>Copy me!</p>
            <h1>Count: {count}</h1>

            <br />
            <div>------------------------------------</div>
            <h1>Question 6</h1>
            <div>
                <img width={300} height={300} src="https://vtieducation.vn/upload/images/ceo-noi-gi-ve-vti-education.jpg" alt="Image Alternative" onError={handleImageError} />
            </div>
        </div>
    )
}

export default Question3