import React, { useState, useEffect, useRef  } from 'react';
import "./Contact.css"
import call from "../../assets/images/call.svg";
import mail from "../../assets/images/email.svg";
import wa from "../../assets/images/whatsapp.svg";
import Footer from "../..//components/Footer/Footer.jsx";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import telegram from "../../assets/images/telegram.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Contact() {

    // useEffect(() => {
    //     const contactDetailsContainer = document.querySelector('.contact_details_container');
    //     const contactBannerText = document.querySelector('.contact_banner_text');

    //     const handleMouseMove = () => {
    //         contactDetailsContainer.classList.add('animate');
    //         contactBannerText.classList.add('animate');
    //     };

    //     document.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);


    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const bannerText = useRef(null);
    const addressText = useRef(null);

    useEffect(() => {
      setTimeout(() => {
        bannerText.current.classList.add('slide_up');
        addressText.current.classList.add('slide_up');
      }, 700);
    }, []);

    const MySwal = withReactContent(Swal)

    const openLink = (link) => {window.location.href = link}

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
                MySwal.fire({
                    title: <strong className='font_family'>Congratulations</strong>,
                    html: <i className='font_family'>Submited Successfully!</i>,
                    icon: 'success'
                })
            });
    };

    return (
        <>
            <div className='contact_banner'>
                <div className='contact_banner_text' ref={bannerText}>Contact Us</div>
            </div>
            <div className='contact_details_container' ref={addressText}>
                <div className="contact_details_address">
                    <div className='primary_address'>Philomathean Career Institute Pvt. Ltd.</div>
                    <div className='secondary_address'>202, Abhishek Building, Hetal Park, Opp. Jangid Estate, Mira Road East, Thane - 401107</div>
                </div>
                <div className="contact_details_links">
                    <div className="contact_link">
                        <div className="contact_link_icon">
                            <img src={call} alt={call} onClick={() => openLink('tel:932416073')}/>
                        </div>
                        <div className="contact_link_text" onClick={() => openLink('tel:932416073')}>+91-9324164073</div>

                    </div>
                    <div className="contact_link">
                        <div className="contact_link_icon">
                            <img src={mail} alt={mail} onClick={() => openLink('mailto:philomathean22@gmail.com')} />
                        </div>
                        <div className="contact_link_text" onClick={() => openLink('mailto:philomathean22@gmail.com')}>philomathean22@gmail.com</div>
                    </div>
                    <div className="contact_link">
                        <div className="contact_link_icon">
                            <img src={wa} alt={wa} onClick={() => openLink('https://wa.me/919324164073')} />
                        </div>
                        <div className="contact_link_text" onClick={() => openLink('https://wa.me/919324164073')} >+91-9324164073</div>
                    </div>
                </div>
            </div>

            <div className="social_container">
                <div className='social_heading'>Connect with us</div>
                <div className='social_icons_container'>
                    <img src={facebook} alt={facebook} className='social_icon'  onClick={() => openLink('https://www.facebook.com/profile.php?id=100086078512350')}/>
                    <div className="divider_v"></div>
                    <img src={twitter} alt={twitter} className='social_icon' onClick={() => openLink('https://twitter.com/Prodigi69196135')}/>
                    <div className="divider_v"></div>
                    <img src={instagram} alt={instagram} className='social_icon' onClick={() => openLink('https://www.instagram.com/philomathean_2022/')}/>
                    <div className="divider_v"></div>
                    <img src={linkedin} alt={linkedin} className='social_icon' onClick={() => openLink('https://www.linkedin.com/in/prodigious-career-institute-35292a251/')}/>
                    <div className="divider_v"></div>
                    <img src={telegram} alt={telegram} className='social_icon' onClick={() => openLink('https://telegram.org/')}/>
                </div>

            </div>

            <div className="contact_form_container">
                <div className="contact_form_heading">Book a Demo / Enquiry</div>
                <form onSubmit={handleSubmit} className='form_container'>

                    <div className="form_input_container">
                        <input className='form_input_field'
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='Enter First Name'
                        />



                        <input className='form_input_field'
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Enter Last Name'
                        />



                        <input className='form_input_field'
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter Email'
                        />



                        <input className='form_input_field'
                            type="text"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder='Enter Phone number'
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



            <div className="map_container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.0201947501229!2d72.85101413266587!3d19.188144711175593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b74b6382b2e5%3A0xedaa0cac57eea62f!2sMalad%20Station!5e0!3m2!1sen!2sin!4v1683014520962!5m2!1sen!2sin"
                    style={{ width: '100%', height: '100%', border: "0" }}
                    loading="lazy"
                    title="map"></iframe>
            </div>

            <Footer />
        </>






    );
}

export default Contact;
