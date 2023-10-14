import React from "react";
import Navigation from "../Components/navbar";
import Buttonf from "../Components/button";
import { Link } from 'react-router-dom';
import Footer from "../Components/footer";

const About = () => {
    return (
        <div>
            <Navigation />
            <header className="App-header">
                    <h1>
                        Hello, I am Kevin He.
                    </h1>
                    <div className="bouton">
                    <Link to="/CV">
                        <Buttonf buttonText="EXPLORE CV" />
                    </Link>
                    </div>
            </header>
            <div className="bg-gradient-to-r from-cyan-300 to-blue-300">
                <div className="container">
                    <div className="row">
                        <div className="WhoKevinHe1">
                        </div>
                        <div className="WhoKevinHe2">
                            <h1> About Me </h1>
                            <p className="text-lg">Hi ! <br/>My name is Kevin He and I am excited to introduce myself and share my qualifications. I am known for my strong leadership skills, creativity, outgoing personality, and ability to bring joy to others. I have a high-spirited character that allows me to make friends easily and to contribute to a positive atmosphere in any environment. I find joy in making other people laugh and I am confident that my outgoing personality is my best asset.
                            This website is created to showcase my background and accomplishments, and I invite you to explore it at your convenience. <br/><br/> Enjoy, <br/>Kevin He.
                            </p>
                        </div>  
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;
