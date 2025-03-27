import Layout from "../components/Layout";
import beulah from '../assets/images/beulah.png'
import handyman from '../assets/images/handyman.png'
import portfolio from '../assets/images/portfolio.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";

function Project (){
    return(
        <Layout>
            <div className="project-parent parent">

                <div className="project-box" data-aos="fade-up" data-aos-easing='ease-in-out'>

                    <div className="screenshot-img h-[200px] bg-[#801B36]">
                        <img src={handyman} alt="handyman" className="w-full h-full"/>
                    </div>

                    <h3 className="text-[30px] font-semibold py-[15px]">Myhandyman</h3>
                    <p>MyHandyman is a Flask-based service marketplace for hiring professionals, featuring service listings, user authentication, and booking. Hosted on PythonAnywhere.</p>
                    <ul className="tech-stack flex flex-wrap gap-3 mt-[10px]">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python(Flask)</li>
                        <li>Mysql</li>
                    </ul>

                    <div className="links-div h-[50px] w-full flex gap-10 items-center mt-[10px]">
                    <a href="https://github.com/oloruntobi-grace-ayomide/handyman" target="_blank" rel="noopener noreferrer"className="inline-block"><FontAwesomeIcon icon={faGithub}/>GitHub</a>
                    <a href="https://myhandyman.pythonanywhere.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} />Visit Website</a>
                    </div>
                </div>

                <div className="project-box" data-aos="fade-up" data-aos-easing='ease-in-out'>

                    <div className="screenshot-img h-[200px] bg-[#801B36]">
                    <img src={beulah} alt="beulah" className="w-full h-full"/>
                    </div>

                    <h3 className="text-[30px] font-semibold py-[15px]">Beulah</h3>
                    <p>Beulah is a Flask-powered church ministry website for sharing resources, audio messages, and event updates. It includes an admin dashboard and a modern, welcoming design. Hosted on GoDaddy.</p>
                    <ul className="tech-stack flex flex-wrap gap-3 mt-[10px]">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python(Flask)</li>
                        <li>Mysql</li>
                    </ul>

                    <div className="links-div h-[50px] w-full flex gap-10 items-center mt-[10px]">
                        {/* <a href="#" className="inline-block" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/>GitHub</a> */}
                        <a href="https://beulah.pythonanywhere.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} />Visit Website</a>
                    </div>
                </div>

                <div className="project-box" data-aos="fade-up" data-aos-easing='ease-in-out'>
                    <div className="screenshot-img h-[200px] bg-[#801B36]">
                        <img src={portfolio} alt="portfolio" className="w-full h-full"/>
                    </div>
                    <h3 className="text-[30px] font-semibold py-[15px]">My.Portfolio</h3>
                    <p>A sleek, interactive portfolio built with React and Tailwind for a smooth user experience. Hosted on Render.</p>
                    <ul className="tech-stack flex flex-wrap gap-3 mt-[10px]">
                        <li>React</li>
                        <li>Tailwind</li>
                    </ul>
                    <div className="links-div h-[50px] w-full flex gap-10 items-center mt-[10px]">
                    <a href="https://github.com/oloruntobi-grace-ayomide/my_portfolio" className="inline-block" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/>GitHub</a>
                    <a href="https://my-portfolio-uy10.onrender.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} />Visit Website</a>
                    </div>
                </div>
                
            </div>
        </Layout>  
        
    )
}

export default Project;