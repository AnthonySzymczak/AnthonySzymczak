import React from 'react';
import coverImage from '../../assets/images/Heroes/Winter-Hero.jpg';
import Snowfall from 'react-snowfall';
function About() {
  return (
    <section className="my-5">
      {/* <h1 id="about">Anthony Szymczak, a developer for the people</h1> */}
      <Snowfall snowflakeCount={500}/>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Born in 1993 Worcester, Massachusetts to a Polish-immigrant Mother and a Polish-American Father. 
        Moved to Florida in 2017, and has been residing in Volsuia County.
        Went to college at Fitchburg state university, class of 2015. Bachelors of science in computer science and computer information systems.
        Has extensive knowledge in multiple coding languages such as: C++, CSS, javascript, java, Html, and Basic.
        MERN Stack certified*, excels in React.
        </p>
      </div>
    </section>
  );
}

export default About;