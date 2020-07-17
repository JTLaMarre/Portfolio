import React, {useState} from 'react'

const Email = () => {
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');



    const handleMailTo = (event) => {
        event.preventDefault()
        console.log(subject)
        console.log(message)
        window.open(`mailto:jacobtlamarre@gmail.com?subject=${subject}&body=${message}`)
    }
    

    return(

    <form>
        
        <div className="field">
            <label class="label">Subject</label>
            <div className="control">
                <input className="input" type="text" placeholder="Subject of email here" onChange={e=> setSubject(e.target.value)}></input>
            </div>
        </div>
        <div className="field">
            <label class="label">Message</label>
            <div className="control">
                <textarea className="textarea" type="textarea" placeholder="Type the body of your email message here"onChange={e=> setMessage(e.target.value)}></textarea>
            </div>
        </div>
        <button className="button is-dark" onClick={handleMailTo} >Submit</button>
    </form>

    )
}

export default Email