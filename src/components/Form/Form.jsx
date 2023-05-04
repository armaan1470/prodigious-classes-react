import React, { useState, useEffect, useRef  } from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Form.css";

function Form({onCloseModal}) {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    
    const MySwal = withReactContent(Swal)

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = 'https://docs.google.com/forms/d/e/1FAIpQLSfwdggFu9uKwCt1zmpoB3K0qTHZw2z6Sb9s-sLe10DUlwOcIA/formResponse';

        const data = new FormData();
        data.append('entry.872632858', firstname);
        data.append('entry.476034856', lastname);
        data.append('entry.691059052', email);
        data.append('entry.891414799', number);
        data.append('entry.1057841380', message);

        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: data,
        })
            .then(() => {
                alert('Form submitted successfully!');
                setName('');
                setNumber('');
            })
            .catch((error) => {
                onCloseModal();
                MySwal.fire({
                    title: <strong className='font_family'>Congratulations</strong>,
                    html: <i className='font_family'>Submited Successfully!</i>,
                    icon: 'success',
                    iconColor: '#FF6800',
                    confirmButtonColor: '#00A0FF',
                    confirmButtonText: 'Okay',
                    confirmButtonTextSize: '10'

            
                    
                })
            });
        
            
    };


  return (
    <div className="contact_form_container">
                <div className="contact_form_heading">Book a Demo / Enquiry</div>
                <form onSubmit={handleSubmit} className='form_container'>

                    <div className="form_input_container">
                        <input className='form_input_field'
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='Enter First Name'
                            required
                        />



                        <input className='form_input_field'
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Enter Last Name'
                            required
                        />



                        <input className='form_input_field'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter Email'
                            required
                        />



                        <input className='form_input_field'
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder='Enter Phone number'
                            required
                        />
                    </div>
                    <div className="form_textarea_container">
                        <textarea className='form_input_field' name="" id="" style={{ height: "200px" }} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Write your message'></textarea>
                    </div>
                    <div className="form_btn_container">
                        <button type='submit' className='sub_btn'>Submit</button>
                    </div>



                </form>
            </div>
  )
}

export default Form