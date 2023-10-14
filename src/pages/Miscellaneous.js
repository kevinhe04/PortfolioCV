import Navigation from "../Components/navbar";
import Footer from "../Components/footer";
import React, { useState } from 'react';

const YouTubeCarousel = ({ videoIds }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % videoIds.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + videoIds.length) % videoIds.length);
  };

  const embedUrl = (videoId) => `https://www.youtube.com/embed/${videoId}`;

  const videosToDisplay = videoIds.map((videoId, index) => (
    <iframe
      key={videoId}
      title={`youtube-iframe-${videoId}`}
      width={index === currentIndex ? 660 : 280}
      height="315"
      src={embedUrl(videoId)}
      allowFullScreen
      className="rounded-lg shadow-lg transition-transform transform-gpu duration-500"
      style={{
        transform: `translateX(${(index - currentIndex) * 100}px)`, // Adjust the width here
      }}
    />
  ));

  return (
    <div className="youtube-carousel relative flex items-center justify-center">
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        onClick={prevSlide}
      >
        Previous
      </button>
      <div className="flex">
        {videosToDisplay}
      </div>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

const App = () => {
  const videoIds1 = [
    'F6ltmzZIBr0?si=Eap0XcV-WFrtAHAN',
    '4c6-RWXE7A4?si=M_XEEOCxVYuI4O7e',
    'aeNudRAfBUs?si=JLDh9E7nDkX-Xkul',
    'zr4vTFbdGLU?si=nhDpDL6WEBIa9pmX',
    'me07ubrfHMQ?si=jqAhstBzq3FJ5Hcg'
  ];
  const videoIds2 = [
    'ZVd_2s64PGU?si=17_jXuMgdWJBT0bl',
    'qED5_Bsa8s0?si=4e7q4FQP_sCGBu4B',
    '5zJc9HbCGms?si=LlChLxxUCQfLYsGF',
    '8w4x-t58m9w?si=rUMkJBoycb2ghfVL',
    'n4NjFmF60bE?si=Cp9PMgKJW1XY35h4',
    'l9CCIczkW5A?si=Hvarq1zfeOsNLEPf',
    '5U3u4wlhNY4?si=0MzPdlvMn0aaS_lN'
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 to to-black">
        <Navigation/>
        <h1 className="text-center text-white mt-20">Some Videos and Projects You Can Explore and Enjoy</h1>
        <div className="mt-20">
            <YouTubeCarousel videoIds={videoIds1} />
        </div>
        <h1 className="text-center text-white mt-20">Music !</h1>
        <div className="mt-20">
            <YouTubeCarousel videoIds={videoIds2} />
        </div>
        <Footer/>
    </div>
  );
};

export default App;
