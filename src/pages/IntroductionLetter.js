import React from "react";
import Navigation from "../Components/navbar";
import Footer from "../Components/footer";


const IntroductionLetter = () => {
    return (
        <div>
            <Navigation />
            <div className="App">
                <header className="LetterHeader">
                    <h1 className='BigText'>
                        Hi !
                    </h1>
                </header>
            </div>
            <div className="intro">
                <h1>Who is Kevin He? <br/><br/></h1>
                <p1> As a devoted Software Engineering Co-op student at McGill University and a recipient of the prestigious <b>Schulich Leaders Scholarship</b>, my academic and professional path is characterized by a relentless pursuit of excellence, leadership, and a profound fascination with the convergence of technology and mankind. Being recognized as <b>one</b> of <b>100</b> Schulich Leaders across Canada from my year distinguishes me as part of an elite network of students who are not only academically gifted but also possess the vision, drive, and ethical framework to lead and innovate in the STEM fields, underscoring my readiness to contribute significantly to pioneering projects. 
                <br/><br/> My journey is enriched not only by the rigorous McGill curriculum covering <b>Java, C, Python, and Bash</b> but also by my initiative to venture beyond it. During numerous hackathons, I embraced the opportunity to experiment extensively with <b>React.js, JavaScript, HTML, and Python</b>, enhancing my versatility in software development.
                <br/><br/> Moreover, my previous role as <b>Vice President of External Affairs</b> on the Student Council at John Abbott College honed my diplomatic, negotiation, and leadership skills. Acting as a key representative in intercollegiate matters through <b>CASAQ</b>, the Coalition of Anglophone CEGEPs in Quebec, I learned the crucial role of effective communication and collaboration in achieving shared goals. In this capacity, I represented not just the voice of my school, but the voice of all students across Montreal.
                <br/><br/> My tenure with the <b>Canadian Air Cadets</b> and my various leadership roles in student governance have endowed me with a robust set of skills and values, including discipline, teamwork, leadership, and a sense of responsibility towards technological and sustainable advancements. These experiences have not only emphasized the importance of precision and critical thinking but have also prepared me to tackle the challenges encountered in software engineering and beyond.
                <br/><br/> I am enthusiastic about the opportunity to bring my dynamic, growth-oriented mindset to your company. I am confident that my diverse skill set, combined with my proactive approach and my background in various leadership roles, will allow me to make a significant contribution to your team.</p1>
            </div>
            <Footer/>
        </div>
    );
};

export default IntroductionLetter;