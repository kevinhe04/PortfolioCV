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
                        Hello
                    </h1>
                </header>
            </div>
            <div className="intro">
                <h1>Who is Kevin He? <br/><br/></h1>
                <p1> Despite my great leadership, communication skills and creativity, teachers and mentors often told me that my best asset is in fact my personality. It is my mother's constant support in my various interests that allowed me to develop a positively influential personality alongside a well-rounded set of skills. Her support has therefore been instrumental in developing this confident and outgoing individual. Furthermore, my ability to find humor in life and to make others smile is one of my greatest strengths, and it is something that will stick with me throughout my life. 
                <br/><br/> My leadership skills were polished through various roles occupied, such as serving as club president, as Flight Sergeant (Staff) in the Canadian Air Cadets Program, or as a student government executive. These positions helped me develop a wide range of skills, including the ability to motivate and guide others, to problem-solve and make decisions, and to manage my time and prioritize tasks effectively. 
                <br/><br/> During my seven years in the Royal Canadian Air Cadets program, becoming a leader and role model for others was a necessity. Consequently, sharing personal past mistakes and successes greatly contributed to the learning of others so that they could become dependable leaders. 
                <br/><br/> In addition to my leadership experience, music and sports remains one of my biggest passions. Music and instruments such as piano and clarinet grew up with me, as did my enjoyment performing for others or participating in music competitions. Volleyball has also been a big commitment throughout my life, being a member of varsity teams ever since the age of 12. Despite all of these pursuits, academics remain my top priority, which explains my record of being one of the top student athletes in the cohort. 
                <br/><br/> Finally, personal growth and learning are essential for success, which is why my goal is to improve myself and to expand my interests and skills, whether it is through taking on new challenges, pursuing new interests, or seeking out new experiences. Having lived through numerous failures and made numerous mistakes, learning that setbacks and challenges are inevitable was a crucial part of my growth. It was important for me to be resilient and to never give up, even in the face of seemingly insurmountable obstacles. All those experiences helped develop a strong sense of self-confidence and determination, making me better equipped to handle whatever challenges come my way. 
                <br/><br/> That is me. That is Kevin He.</p1>
            </div>
            <div className="videocv">
                <div className="video">
                    <h1 className="text-white text-6xl text-center pt-40 underline"> Video CV COMING SOON...</h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default IntroductionLetter;