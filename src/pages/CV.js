import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Cards from '../Components/card';
import Navigation from '../Components/navbar';
import Buttonf from '../Components/button';
import Footer from '../Components/footer';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function BasicTimeline() {
  return (
    <div className='bg-gradient-to-r from-blue-900 to to-black'>
    <Navigation />
    <h1 className='font-serif text-center mt-10 mb-5 text-white text-6xl underline'>Education</h1>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Cards year="2023-2027"/>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Cards title="Bachelor's in Software Engineering Co-op" 
        school="McGill University" 
        description="Montreal, Quebec" 
        inv="Involvments: &#x2022; McGill Men's Volleyball Club &#x2022; GameDev Club" 
        awards="Awards: &#x2022; McGill Entrance Scholarship &#x2022; McGill Major Entrance Scholarship &#x2022; Schulich Leaders Scholarship: Most Coveted STEM scholarship in Canada valued at 120,000$"/></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        <Cards title="DEC Arts and Sciences" 
        school ="John Abbott College" 
        description="Montreal, Quebec" 
        inv="Involvments: &#x2022; Student Union of John Abbott College (SUJAC)
        Vice-President of External Affairs 2022-2023
        &#x2022; Coalition of Anglophone CEGEPS Representative (COAC) 2022-2023 
        &#x2022; Volleyball Team Captain 2022-2023 
        &#x2022; SUJAC Secretary 2021-2022
        &#x2022; Men's Volleyball Varsity Team 2021-2023"
        awards="Awards and Recognitions: &#x2022; Highest Academic Achievement Award (Best Overall R-Score in Arts and Sciences Program) &#x2022; Service and Leadership Award (2023 as SUJAC VP-External, 2022 as SUJAC Secretary"/>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Cards year='2021-2023'/></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        <Cards year='2016-2021'/>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Cards title="DES International Baccalaureate" school ="Collège Jean-de-Brébeuf" description="Montreal, Quebec"
        inv="Involvements: &#x2022; Student Council Vice-President 2020-2021 &#x2022; Amnesty International Executive Member 2020-2021 &#x2022; Stagestruck Productions Voice Actor 2020-2021 &#x2022; Yearbook Committee Leader 2020-2021
        &#x2022; French Newspaper Committee Leader 2020-2021 &#x2022; Community Trip to Spain 2019-2020 &#x2022; Class President 2018-2019 &#x2022; Men's Volleyball Varsity Team 2016-2021
        &#x2022; Secondaire en Spectacle 2018-2020"
        awards="Awards:  &#x2022; Civility Scholarship 2021  &#x2022; Jean-Bernard Jouthe Scholarship Nomination (destined to a Student-Athlete pursuing their studies at Collège Jean-de-Brébeuf)
         2021  &#x2022; Student Council Award of Recognition (2020-2021)  &#x2022; Secondaire en Spectacle 2nd place 2019  &#x2022;French Writing Contest Second Place 2019"/></TimelineContent>
      </TimelineItem>
    </Timeline>
      <div>
            <div className="m-0 p-10">
                <div>
                    <h1 className="font-serif text-6xl text-white text-center underline"> <br /> Curriculum Vitae </h1>
                    <div className="mt-10"><center><Buttonf buttonText="Download CV PDF" onClick={() => { const link = document.createElement("a"); link.href = "C:\Users\Kevin\my-app\CV.pdf"; link.download = "C:\Users\Kevin\my-app\CV.pdf"; link.click(); }} /></center></div>
                </div>
                    <center><iframe className="mt-10" src="https://drive.google.com/file/d/1XqrgbQGZlPX5_UeoP4J6ANkeuGtDi3fk/preview" width="825" height="1050" allow="autoplay"></iframe></center>
                    <div className="mt-10 mb-10"><center><Buttonf buttonText="Download CV"  /></center></div>
            </div>
            <Footer/>
        </div>
    </div>
  );
}

