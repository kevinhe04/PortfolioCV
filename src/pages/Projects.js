import React from "react";
import Navigation from "../Components/navbar";
import Footer from "../Components/footer";
import Buttonf from "../Components/button";

const Projects = () => {
    return (
        <div className="bg-gradient-to-r from-blue-900 to to-black">
            <Navigation />
            <h1 className="text-center mt-10 text-3xl md:text-6xl text-indigo-400 underline decoration-white">Projects</h1>
            <div className="container mx-auto p-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                        <img src="/Images/Ukulele.JPG" class="card-img-top" alt="Ukulele Website"/>
                        <div class="card-body">
                            <h5 class="card-title"> Build Your Own Ukulele</h5>
                            <p class="card-text">
                            HTML website as part of the Arts and Sciences Integrating Activity Project.
                            Website documenting the process of making a cardboard ukulele from scratch and how to play the ukulele with the help of self-made music lessons.
                            </p>
                            <Buttonf buttonText="CHECK WEBSITE" onClick={() => window.open('https://kevinhe04.github.io/Arts-and-Science-IA-Project', '_blank')} />
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="/Images/Web Portfolio.JPG" class="card-img-top" alt="Web Portfolio"/>
                        <div class="card-body">
                            <h5 class="card-title">Web Portfolio</h5>
                            <p class="card-text">
                            Web Portfolio made in React.js with the use of Tailwind CSS, React Bootstrap and Material UI library.
                            </p>
                            <br></br><br></br><br></br>
                            <Buttonf buttonText="CHECK WEBSITE" onClick={() => window.open('https://kevinhe.vercel.app/', '_blank')} />
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="/Images/cheri.png" class="card-img-top" alt="Web Portfolio"/>
                        <div class="card-body">
                            <h5 class="card-title"> Chéri E-Commerce</h5>
                            <p class="card-text">
                            Led the development of a responsive e-commerce in website in <b>React.js</b> to promote and sell Chéri's clothing line. My
                            contributions were pivotal in achieving <b>$10,000</b> in sales within the first week of launch.

                            </p>
                            <br></br>
                            <Buttonf buttonText="CHECK WEBSITE" onClick={() => window.open('https://www.cherimtl.com/', '_blank')} />
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="/Images/pomodoro.png" class="card-img-top" alt="Web Portfolio"/>
                        <div class="card-body">
                            <h5 class="card-title"> Pomodoro </h5>
                            <p class="card-text">
                            Created a Pomodoro timer website, incorporating <b>Spotify's API</b> to boost study efficiency. This site combines the focused work sessions of the Pomodoro technique with personalized Spotify playlists, enhancing concentration and making study sessions more enjoyable and productive.

                            </p>
                            <br></br>
                            <Buttonf buttonText="CHECK WEBSITE" onClick={() => window.open('https://studypomodoro.vercel.app/', '_blank')} />
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="/Images/danger.jpg" class="card-img-top" alt="Web Portfolio"/>
                        <div class="card-body">
                            <h5 class="card-title"> ConUHacks Danger Detection </h5>
                            <p class="card-text">
                            Engineered an AI model for real-time <b>firearm and fire detection</b> during, mimicking surveillance camera operations. Utilized a 
                            pre-trained machine learning framework using Google Jupyter Notebook for high-accuracy identification of various firearms
                            and recognition of fire.
                            </p>
                            <br></br>
                            <Buttonf buttonText="CHECK DEVPOST" onClick={() => window.open('https://devpost.com/software/danger-det', '_blank')} />
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="/Images/loadboard.jpg" class="card-img-top" alt="Web Portfolio"/>
                        <div class="card-body">
                            <h5 class="card-title"> CodeJam 123LoadBoard Challenge </h5>
                            <p class="card-text">
                            Led the integration of real-time front-end and back-end systems for a logistics platform at CodeJam. Utilized <b>WebSocket </b> 
                            technology for live server-client communication, enabling dynamic updates of truck and load information and instant matching
                            notifications for truckers.

                            </p>
                            <br></br>
                            <Buttonf buttonText="CHECK DEVPOST" onClick={() => window.open('https://devpost.com/software/loadboard', '_blank')} />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-blue-900 to to-black">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            <Footer/>
        </div>
    );
};

export default Projects;