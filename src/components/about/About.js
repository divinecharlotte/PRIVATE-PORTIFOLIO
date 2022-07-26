import { BsCalendar2Date } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CV from '../../assets/resume/CV.pdf';
import './about.scss';

const About = ({ menu }) => {
  Aos.init({ duration: 1000 });
  return (
    <section className={`about ${menu && 'open'}`}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text">
                <h3 data-aos="fade-in">
                  I'm Charlotte Divine Dusenge, a
                  {' '}
                  <span>Web Developer</span>
                </h3>
                <p data-aos="fade-in">
                  I'm a complex problem-solver with an analytical and driven
                  mindset and yet an organized and cooperative team worker
                  dedicated to achieving demanding development objectives
                  according to tight schedules while producing impeccable code.
                  I'm currently enrolled in a remote web development school
                  called "Microverse" where I code with a diverse group of
                  developers from all over the world, usually via pair
                  programming.In my free time, I find joy in listenning to music and love
                  solving problems for fun
                </p>
              </div>
            </div>
            <div className="row" data-aos="fade-in">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Name :
                      {' '}
                      <span>Diva</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Age :
                      {' '}
                      <span>As old as the Universe</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Website :
                      {' '}
                      <span>github.com/divinecharlotte</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Email :
                      {' '}
                      <span>divinemaina@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Degree :
                      {' '}
                      <span>Electrical Engineering</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Certifications :
                      {' '}
                      <span>Full Stack Developer</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Phone :
                      {' '}
                      <span>+250-782-971-842</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Hobbies :
                      {' '}
                      <span>Music $ praying</span>
                    </p>
                  </div>
                </div>
                <div className="row" data-aos="fade-in">
                  <div className="buttons">
                    <a
                      href={CV}
                      download
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item" data-aos="fade-in">
                    <h3>React</h3>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: '80%' }}
                      />
                      <div className="skill-percent">80%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>Rails</h3>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: '75%' }}
                      />
                      <div className="skill-percent">75%</div>
                    </div>
                  </div>

                  <div className="skill-item" data-aos="fade-in">
                    <h3>ES6</h3>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: '95%' }}
                      />
                      <div className="skill-percent">95%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>Tailwind</h3>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: '70%' }}
                      />
                      <div className="skill-percent">70%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15" data-aos="fade-in">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">

                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>2021-2022</i>
                        </h3>
                        <h4 className="timeline-title">
                          Full Stack Web Development Certification
                        </h4>
                        <p className="timeline-text">
                          - Spent 1300+ hours mastering algorithms, data
                          structures, and full-stack development while
                          simultaneously developing projects with Ruby, Rails,
                          JavaScript, React, and Redux.
                        </p>
                        <p className="timeline-text">
                          - Developed skills in remote pair-programming using
                          GitHub, industry-standard git-flow, and daily standups
                          to communicate and collaborate with international
                          remote developers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15" data-aos="fade-in">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>2021-Ongoing</i>
                        </h3>
                        <h4 className="timeline-title">
                          Code Reviewer & Mentor at Microverse
                        </h4>
                        <p className="timeline-text">
                          - Performing code reviews for HTML, Ruby &
                          Javascript-based projects for over 50+ junior
                          developers to ensure their projects comply with style
                          and functionality guidelines and deliver the best code
                          quality.
                        </p>
                        <p className="timeline-text">
                          - Providing specialized technical advice and guidance
                          to multiple junior developers over 1:1 zoom calls.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
