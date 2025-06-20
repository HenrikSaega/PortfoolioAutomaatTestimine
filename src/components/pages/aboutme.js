import "../styles/aboutme.css"
import "../styles/global.css"
import OtherSkillsToggle from "../functions/otherSkills";
import certNameCheap from "../pics/How to Make a Website with NameCheap Course.PNG";
import certLearmHTML from "../pics/Learn HTML Course.PNG"
import certJSFundamental from "../pics/JS - Fundamentals Course.PNG";
import certJSFunctions from "../pics/JS - Functions and Scope Course.png";

import pilt from "../pics/2.png";

const Aboutme = () => {
    return (
        <>
            <div className="aboutme-row">
                <div className="text-container">
                    <div className="text-content-width">
                        <h1 className="no-select">ABOUT ME</h1><hr/>
                        <h2 className="no-select">HENRIK SAEGA</h2>
                        <p className="no-select">I am a 20 years old student in Tartu Vocational College and currently studying software development.</p>
                    </div>
                </div>
                <div className="aboutme-picture-placeholder-container">
                    <div className="aboutme-picture-placeholder">
                        <img className="no-select" src={pilt} alt="Picture of Henrik, watching sunset."/>
                    </div>
                </div>
            </div>

            <hr className="aboutme-hr"/>

            <div className="aboutme-main-content">
                <div className="text-section">
                    <p>
                        Choosing between software development and IT system specialist was tough, but my early interest in programming led me to software development.
                    </p>
                </div>
                <div className="text-section">
                    <p>
                        In gymnasium, I signed up for a programming course at the University of Tartu, where I learned Python for a year. In my second year of gymnasium, I did my final project on a topic that combined my interests: programming, 3D modeling, IoT, and virtual reality.
                    </p>
                </div>
                <div className="text-section">
                    <p>
                        I am calm and thoughtful and work well under pressure - a mindset shaped further by military service in Kuperjanov Infantry Batallion. I take the initiative of tasks and see them through with discipline and teamwork.
                    </p>
                </div>
            </div>

            <hr className="aboutme-hr"/>

            <div className="skills">
                <h2 className="no-select">SKILLS</h2>
                <div className="skills-item-container">
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                        <p className="no-select">HTML</p>
                    </div>
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                        <p className="no-select">CSS</p>
                    </div>
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                        <p className="no-select">JavaScript</p>
                    </div>
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"/>
                        <p className="no-select">GitHub</p>
                    </div>
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"/>
                        <p className="no-select">WordPress</p>
                    </div>
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
                        <p className="no-select">React</p>
                    </div>
                    <div className="skills-item">
                        <svg viewBox="0 0 128 128">
                            <path fill="#fff" d="M127.403 22.767a1.824 1.824 0 0 0-1.24-.414c-1.236 0-2.833.838-3.693 1.287l-.34.175a11.721 11.721 0 0 1-4.612 1.16 64.756 64.756 0 0 0-4.896.34c-10.91 1.121-15.777 9.484-20.464 17.57-2.552 4.399-5.188 8.969-8.802 12.46-.747.724-1.541 1.4-2.378 2.02-3.74 2.78-8.435 4.765-12.088 6.17-3.518 1.345-7.359 2.553-11.066 3.722-3.4 1.07-6.609 2.082-9.56 3.178-1.144.422-2.299.823-3.459 1.205-2.688.872-4.626 1.54-7.458 3.49a47.949 47.949 0 0 0-2.963 2.183 31.255 31.255 0 0 0-5.913 6.227 36.767 36.767 0 0 1-4.966 5.961c-.598.584-1.659.872-3.248.872-1.86 0-4.115-.384-6.501-.79-2.462-.435-5.006-.85-7.188-.85-1.771 0-3.13.29-4.141.873 0 0-1.708.995-2.427 2.282l.707.32a14.493 14.493 0 0 1 3.02 2.181 15.153 15.153 0 0 0 3.141 2.234c.365.134.695.344.97.616-.296.436-.734.999-1.193 1.6-2.517 3.296-3.987 5.377-3.145 6.511.404.21.855.312 1.31.297 5.49 0 8.44-1.426 12.17-3.233 1.082-.522 2.182-1.06 3.491-1.615 2.182-.946 4.531-2.456 7.022-4.054 3.26-2.124 6.668-4.306 9.976-5.358a27.188 27.188 0 0 1 8.391-1.179c3.492 0 7.167.466 10.71.92 2.641.342 5.377.69 8.06.852a50.27 50.27 0 0 0 2.946.092 34.127 34.127 0 0 0 3.757-.196l.3-.105c1.883-1.158 2.765-3.64 3.618-6.04.551-1.546 1.014-2.933 1.747-3.814.043-.043.09-.082.14-.117a.175.175 0 0 1 .213.034v.07c-.435 9.387-4.215 15.348-8.038 20.646l-2.552 2.736s3.573 0 5.607-.786c7.42-2.217 13.018-7.104 17.093-14.899a63.583 63.583 0 0 0 2.693-6.15c.07-.172.712-.496.65.407-.021.267-.04.563-.061.874 0 .182 0 .37-.035.558-.104 1.31-.414 4.076-.414 4.076l2.29-1.227c5.525-3.49 9.784-10.533 13.015-21.491 1.344-4.566 2.33-9.1 3.197-13.093 1.039-4.801 1.935-8.915 2.96-10.512 1.61-2.506 4.067-4.2 6.445-5.844.323-.222.65-.437.97-.673 2.988-2.098 5.96-4.52 6.616-9.037v-.1c.474-3.37.073-4.228-.384-4.621z"></path></svg>
                        <p className="no-select">MariaDB</p>
                    </div>
                </div>
                <OtherSkillsToggle/>
            </div>
            
            <hr className="aboutme-hr"/>

            <div className="certifiactions">
                <p className="no-select main-p">CodeCademy</p>
                <h2 className="no-select">CERTIFICATIONS</h2>
                
                <div className="cert-container">
                    <div className="cert">
                        <p className="no-select">How to make a Website with NameCheap</p>
                        <div className="cert-pic">
                            <img src={certNameCheap} alt=""/>
                        </div>
                    </div>
                    <div className="cert">
                        <p className="no-select">LearnHTML</p>
                        <div className="cert-pic">
                            <img src={certLearmHTML} alt=""/>
                        </div>
                    </div>
                    <div className="cert">
                        <p className="no-select">Learn JavaScript: Functions and Scope Course</p>
                        <div className="cert-pic">
                            <img src={certJSFunctions} alt=""/>
                        </div>
                    </div>
                    <div className="cert">
                        <p className="no-select">Learn JavaScript: Fundamentals Course</p>
                        <div className="cert-pic">
                            <img src={certJSFundamental} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="aboutme_footer">
                <p>&copy; 2025 All rights reserved</p>
            </footer>
        </>
      );
}
export default Aboutme