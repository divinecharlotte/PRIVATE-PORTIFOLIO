import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaAngellist, FaGithub, FaMedium } from 'react-icons/fa';
import './contact.scss';

const Contact = ({ menu }) => (
  <section className={`contact ${menu && 'open'}`}>
    <div className="container">
      <div className="row">
        <div className="section-title padd-15">
          <h2>Contact Me</h2>
        </div>
      </div>
      <h3 className="contact-title padd-15">Do You Have Any Questions ?</h3>
      <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>
      <div className="row">
        <div className="contact-info-item padd-15">
          <div className="icon">
            <a href="https://github.com/divinecharlotte" target="_blank" rel="noreferrer">
              <FaGithub className="react-icon" />
            </a>
            <h4>GitHub</h4>
          </div>
        </div>
        <div className="contact-info-item padd-15">
          <div className="icon">
            <a href="https://medium.com/@divinemaina" target="_blank" rel="noreferrer">
              <FaMedium className="react-icon" />
            </a>
            <h4>Medium</h4>
          </div>
        </div>
        <div className="contact-info-item padd-15">
          <div className="icon">
            <a href="https://www.linkedin.com/in/charlotte-divine-dusenge/" target="_blank" rel="noreferrer">
              <AiOutlineLinkedin className="react-icon" />
            </a>
            <h4>LinkedIn</h4>
          </div>
        </div>
        <div className="contact-info-item padd-15">
          <div className="icon">
            <a href="https://angel.co/u/charlotte-divine-dusenge" target="_blank" rel="noreferrer">
              <FaAngellist className="react-icon" />
            </a>
            <h4>AngelList</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
