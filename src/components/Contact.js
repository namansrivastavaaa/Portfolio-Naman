import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔐 OTP states
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  // ✅ Email format check
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 📩 Send OTP
  const sendOtp = () => {
    if (!isValidEmail(formData.email)) {
      Swal.fire('Invalid Email', 'Please enter a valid email address', 'warning');
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);

    emailjs.send(
      'service_655mg9c',
      'template_otp',
      { to_email: formData.email, otp },
      'K34YWs3fe407eAfCX'
    ).then(() => {
      setOtpSent(true);
      Swal.fire('OTP Sent', 'Check your email', 'success');
    }).catch((err) => {
      console.error(err);
      Swal.fire('Error', 'Failed to send OTP', 'error');
    });
  };

  // ✅ Verify OTP
  const verifyOtp = () => {
    if (enteredOtp === generatedOtp) {
      setIsVerified(true);
      Swal.fire('Verified', 'Email verified successfully', 'success');
    } else {
      Swal.fire('Invalid OTP', 'Please try again', 'error');
    }
  };

  // ✉️ Send Message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) return;

    setIsSubmitting(true);

    emailjs.send(
      'service_655mg9c',
      'template_jo7ezml',
      formData,
      'K34YWs3fe407eAfCX'
    ).then(() => {
      setIsSubmitting(false);
      Swal.fire('Message Sent!', 'I will get back to you soon.', 'success');

      setFormData({ name: '', email: '', message: '' });
      setOtpSent(false);
      setIsVerified(false);
      setEnteredOtp('');
    }).catch(() => {
      setIsSubmitting(false);
      Swal.fire('Oops!', 'Something went wrong.', 'error');
    });
  };

  return (
    <div id="contact-section">
      <div className="contact-container">
        <div className="contact-content">

          {/* LEFT */}
          <div className="contact-left-col premium">
            <h2 className="premium-heading">Get In Touch</h2>
            
            <div className="premium-contact-info">
              <div className="info-block">
                <h4>EMAIL</h4>
                <p>namansrivastava0104@gmail.com</p>
              </div>

              <div className="info-block">
                <h4>PHONE</h4>
                <p>+91 (Available on Request)</p>
              </div>
            </div>

            <div className="premium-socials">
              <h4>SOCIALS</h4>
              <div className="social-icons-minimal">
                <a href="https://linkedin.com/in/namansrivastavaaa" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/namansrivastavaaa" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://x.com/n_a_m_a_n_16" target="_blank" rel="noreferrer">Twitter</a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-wrapper premium">
            <form className="contact-form premium" onSubmit={handleSubmit}>
              
              <div className="form-group premium-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* 📧 Email + Verify */}
              <div className="form-group premium-group">
                <label>Email</label>
                <div className="email-row">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isVerified}
                    required
                  />

                  {!isVerified && (
                    <button
                      type="button"
                      className="verify-btn"
                      onClick={sendOtp}
                      disabled={!isValidEmail(formData.email)}
                    >
                      Verify
                    </button>
                  )}

                  {isVerified && <span className="verified-badge">✔</span>}
                </div>
              </div>

              {/* 🔢 OTP */}
              {otpSent && !isVerified && (
                <div className="form-group premium-group">
                  <label>Enter OTP</label>
                  <div className="email-row">
                    <input
                      type="text"
                      value={enteredOtp}
                      onChange={(e) => setEnteredOtp(e.target.value)}
                      placeholder="6-digit OTP"
                    />
                    <button
                      type="button"
                      className="verify-btn"
                      onClick={verifyOtp}
                    >
                      Verify OTP
                    </button>
                  </div>
                </div>
              )}

              <div className="form-group premium-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={!isVerified || isSubmitting}
              >
                {isSubmitting
                  ? <span className="spinner"></span>
                  : <><FaPaperPlane /> Send Message</>
                }
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
