import React, { useState, useRef } from 'react';
import './portfolio.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import js from '../../assets/images/jsreal1.png';
import meals from '../../assets/images/mealswbst.png';
import space from '../../assets/images/spacetravel.png';
import bookme from '../../assets/images/bookme.png';
import Modal from '../modal/Modal';

const Portfolio = ({ menu }) => {
  const [currentFilter, setCurrentFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const currentProjectRef = useRef(undefined);
  Aos.init({ duration: 1000 });

  const projects = useRef([
    {
      name: 'Tourify',
      description:
        "'Tourify'This is an app in wich you can reserve a tour, create a tour, delete a tour and show all your reserved tours. This app was created separating the Fron-End and the Back-End in two repositories. This is the repository of the front-end API",
      techs: ['React & Redux', 'CSS3', 'Ruby on Rails'],
      image: bookme,
      linkToLiveVersion: 'https://book-tours.netlify.app/',
      linkToSource: 'https://github.com/ABDULALI3468/bookMe-frontend',
    },

    {
      name: 'Space Travellers',
      description:
        '"Space Travelers" is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
      techs: ['React & Redux', 'CSS3'],
      image: space,
      linkToLiveVersion: 'https://frolicking-bienenstitch-f9dcce.netlify.app/',
      linkToSource: 'https://github.com/aliatayee/Space-Travelers-Hub',
    },
    {
      name: 'Get the best meals',
      description:
        '`Get the best meals` is a simple Vanilla JS website for reserving meals where a user can make reservations, add comments & likes or just get details about meals that they like',
      techs: ['HTML', 'CSS3', 'JavaScript'],
      image: meals,
      linkToLiveVersion: 'https://divinecharlotte.github.io/javascript-capstone/',
      linkToSource: 'https://github.com/divinecharlotte/javascript-capstone',
    },
    {
      name: 'DCD fashion page',
      description:
        "`DCD fashion` is based on an annually worldwide. It's an extravaganza of concerts, arts and other fun fashion related activities. Users can use this website to checkout the different activities available and get to know the rich history behind modeling",
      techs: ['CSS', 'HTML', 'JavaScript'],
      image: js,
      linkToLiveVersion: 'https://divinecharlotte.github.io/divnecharlotte.github.io/',
      linkToSource: 'https://github.com/divinecharlotte/PRIVATE-PORTIFOLIO',
    },
  ]);

  const setFilter = (e) => {
    setCurrentFilter(e.target.textContent);
  };

  const openModal = (current) => {
    currentProjectRef.current = current;
    setShowModal(true);
  };

  let filtered = [];

  if (currentFilter === 'All') {
    filtered = projects.current;
  } else {
    filtered = projects.current.filter((project) => project.techs.includes(currentFilter));
  }

  return (
    <>
      <section className={`portfolio ${menu && 'open'}`}>
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading padd-15">
              <h2>My Latest Projects: </h2>
            </div>
          </div>
          <div className="projects">
            <div className="project-filter">
              <button
                type="button"
                className={`${
                  currentFilter === 'All' ? 'filter-active' : 'list-item'
                }`}
                onClick={setFilter}
              >
                All
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === 'Ruby on Rails'
                    ? 'filter-active'
                    : 'list-item'
                }`}
                onClick={setFilter}
              >
                Ruby on Rails
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === 'React & Redux'
                    ? 'filter-active'
                    : 'list-item'
                }`}
                onClick={setFilter}
              >
                React & Redux
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === 'JavaScript' ? 'filter-active' : 'list-item'
                }`}
                onClick={setFilter}
              >
                JavaScript
              </button>
            </div>
            <div className="projects-row">
              {filtered?.map((pro) => (
                <div key={pro.name} className="portfolio-item padd-15">
                  <div
                    data-aos="fade-right"
                    className="portfolio-item-inner shadow-dark"
                  >
                    <div className="portfolio-img">
                      <img src={pro.image} alt="" />
                    </div>
                    <h3>{pro.name}</h3>
                    <ul className="techs">
                      {pro.techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => {
                        openModal(pro);
                      }}
                      className="btn project-button"
                    >
                      See Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currentProject={currentProjectRef.current}
      />
    </>
  );
};

export default Portfolio;
