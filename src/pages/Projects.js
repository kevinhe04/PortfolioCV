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
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHe9GqDMRaer9bnv-X47ECUdtgeb7y8Y6lEHccIEyqOtdJYeLC_zZXBZkGLI7vTov2DMi742v6Hz5K7YVHBDJ0yXx5aT0E4SjKSrmdm-TKRdv-4HYo0CeXDODLs92fXW5eK4a8E_WkHPTjcFn-ITC_LfNg=w1752-h893-s-no?authuser=0" class="card-img-top" alt="Ukulele Website"/>
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
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHct5eD-m8ZFnFZy5RjGO0_l1AlrI4qhOYsqvHCDn14c92vRL49BqbBI1jq7aPU95F8mnLwIjkxqkwzH_WyAseouvqowAxvhljB8xowe_6fhw1OHSGQBq3t15C1wpkkSiGOyZHSjRpuBxKwrrZuVsrAbUw=w1755-h893-s-no?authuser=0" class="card-img-top" alt="Web Portfolio"/>
                        <div class="card-body">
                            <h5 class="card-title">Web Portfolio</h5>
                            <p class="card-text">
                            Web Portfolio made in React.js with the use of Tailwind CSS, React Bootstrap and Material UI library.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-black">
                        <div class="card-body">
                            <h5 class="card-title text-white text-4xl"> Coming Soon ... </h5>
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