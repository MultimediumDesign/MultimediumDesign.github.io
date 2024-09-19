import React from 'react';

function About() {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<section classname="about" id="about">
<div classname="container">
<h2>About Us</h2>
<p>Multimedium Design is a creative agency dedicated to providing top-notch graphic and web design, business consulting, and social media marketing services. Our mission is to empower businesses with innovative design solutions that drive growth and engagement.</p>
<div classname="about-content">
<img alt="Profile Picture" classname="profile-picture" src="images/profile-picture.jpg"/>
<div classname="about-text">
<h3>Our Story</h3>
<p>With years of experience in the creative industry, I have helped numerous clients transform their brands and online presence. My vision is to blend creativity with strategy to deliver results that exceed expectations.</p>
</div>
</div>
</div>
</section>` }} />
    );
}

export default About;