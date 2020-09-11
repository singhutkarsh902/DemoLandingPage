import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fname:"",
        phone:"",
        email:"",
        message:""
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const submitEvent = (e) => {
        e.preventDefault();
        alert(
            `Name: ${data.fname} Phone No: ${data.phone} Email: ${data.email} Message: ${data.message}`
        );
    }

    return (
        <>
        <div className="my-5">
            <h1 className="text-center"> Contact Us </h1>
        </div>
        <div className="container contact_div mb-5">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={submitEvent}>
                        <div class="form-group">
                            <label for="fullname">Full Name</label>
                            <input 
                            type="text" 
                            class="form-control" id="fullname" 
                            name="fname"
                            value={data.fname}
                            onChange={InputEvent}
                            />
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone No.</label>
                            <input 
                            type="number" class="form-control" 
                            id="phone" 
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent} 
                            />
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input 
                            type="email" 
                            class="form-control" 
                            id="email" aria-describedby="emailHelp"
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="messege">Message</label>
                            <textarea 
                            class="form-control" 
                            id="message" 
                            rows="3"
                            name="message"
                            value={data.message}
                            onChange={InputEvent}>
                        </textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;