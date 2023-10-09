import React, { useState } from 'react';
import { emailValidation } from '../../utils/helpers';

function ContactFormHandler() {

    const [formState, setFormState] = useState({ employerName: '', employerEmail: '', employerMessage: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { employerName, employerEmail, employerMessage } = formState;

    function handleInput(e) {
        if (e.target.name === 'employerEmail') {
            const isValid = employerEmail.emailValidation(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

return (
    <section className="container">
        <h2 data-testid='h1tag' className="top-title">Contact Form</h2>
        <hr></hr>
        <form class="justify-content-center" id="contact-form">
            <div class="mt-5" >
                <label htmlFor="employerName">Name:</label>
                <input class="form-control" type="text" name="employerName"  defaultValue={employerName} onBlur={handleInput}/>
            </div>
            <div class="mt-5" >
                <label htmlFor="employerEmail">Email Address:</label>
                <input class="form-control" type="email"  name="employerEmail" defaultValue={employerEmail} onBlur={handleInput} />
            </div>
            <div class="mt-5" >
                <label htmlFor="employerMessage">Message:</label>
                <textarea class="form-control" name="employerMessage" defaultValue={employerMessage} onBlur={handleInput} rows="7" />
            </div> 
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}

            <div class="mt-5 mb-5" >
            <button data-testid='button' class="btn btn-outline-dark " type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>
    );
}
    
export default ContactFormHandler;