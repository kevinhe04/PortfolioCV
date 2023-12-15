import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Buttonf from '../Components/button';
import Footer from '../Components/footer';
import Navigation from '../Components/navbar';

export default function NoOppositeContent() {
  return (
    <div className='bg-gradient-to-r from-blue-900 to to-black'>
    <Navigation/>
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className="p-4 bg-white rounded-lg shadow-md">
                <h2 className="font-bold text-xl mb-2">Bachelor's in Software Engineering Co-op (2023-2027)</h2>
                <p className="text-gray-800">McGill University, Montreal, Quebec</p>
                <p className="text-gray-600 mt-2">Involvments: 
                  <ul>
                    <li>McGill Men's Volleyball Club</li>
                    <li>GameDev Club</li>
                  </ul>
                </p>
                <p className="text-gray-600 mt-2">Awards: 
                  <ul>
                    <li>McGill Entrance Scholarship</li>
                    <li>McGill Major Entrance Scholarship</li>
                    <li>Schulich Leaders Scholarship: Most Coveted STEM scholarship in Canada valued at $120,000</li>
                  </ul>
                </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="font-bold text-xl mb-2">DEC Arts and Sciences (2021-2023)</h2>
            <p className="text-gray-800">John Abbott College, Montreal, Quebec</p>
            <p className="text-gray-600 mt-2">
              Involvments: 
              <ul>
                <li>Student Union of John Abbott College (SUJAC), Vice-President of External Affairs 2022-2023</li>
                <li>Coalition of Anglophone CEGEPS Representative (COAC) 2022-2023</li>
                <li>Volleyball Team Captain 2022-2023</li>
                <li>SUJAC Secretary 2021-2022</li>
                <li>Men's Volleyball Varsity Team 2021-2023</li>
              </ul>
            </p>
            <p className="text-gray-600 mt-2">
              Awards and Recognitions: 
              <ul>
                <li>Highest Academic Achievement Award (Best Overall R-Score in Arts and Sciences Program)</li>
                <li>Service and Leadership Award (2023 as SUJAC VP-External, 2022 as SUJAC Secretary)</li>
              </ul>
            </p>
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> 
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="font-bold text-xl mb-2">DES International Baccalaureate (2016-2021) </h2>
          <p className="text-gray-800">Collège Jean-de-Brébeuf, Montreal, Quebec</p>
          <p className="text-gray-600 mt-2">
            Involvements: 
            <ul>
              <li>Student Council Vice-President 2020-2021</li>
              <li>Amnesty International Executive Member 2020-2021</li>
              <li>Stagestruck Productions Voice Actor 2020-2021</li>
              <li>Yearbook Committee Leader 2020-2021</li>
              <li>French Newspaper Committee Leader 2020-2021</li>
              <li>Community Trip to Spain 2019-2020</li>
              <li>Class President 2018-2019</li>
              <li>Men's Volleyball Varsity Team 2016-2021</li>
              <li>Secondaire en Spectacle 2018-2020</li>
            </ul>
          </p>
          <p className="text-gray-600 mt-2">
            Awards: 
            <ul>
              <li>Civility Scholarship 2021</li>
              <li>Jean-Bernard Jouthe Scholarship Nomination (destined to a Student-Athlete pursuing their studies at Collège Jean-de-Brébeuf) 2021</li>
              <li>Student Council Award of Recognition (2020-2021)</li>
              <li>Secondaire en Spectacle 2nd place 2019</li>
              <li>French Writing Contest Second Place 2019</li>
            </ul>
          </p>
        </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    <div>
    <div className="m-0 p-10">
          <h1 className="font-serif text-center text-4xl md:text-6xl text-white underline mb-10">Curriculum Vitae</h1>
          
          <div className="text-center">
            <Buttonf buttonText="VIEW CV PDF" onClick={() => window.open('https://drive.google.com/file/d/1jCVjQkVA7I-9LtPHYu9gzg7pT0uy7FYI/preview', '_blank')} />
          </div>

          <div className="iframe-container my-10">
            <iframe 
              className="responsive-iframe" 
              src="https://drive.google.com/file/d/1jCVjQkVA7I-9LtPHYu9gzg7pT0uy7FYI/preview"
              allow="autoplay">
            </iframe>
          </div>

          <div className="text-center mb-10">
            <Buttonf buttonText="VIEW CV PDF" onClick={() => window.open('https://drive.google.com/file/d/1jCVjQkVA7I-9LtPHYu9gzg7pT0uy7FYI/preview', '_blank')} />
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
}
