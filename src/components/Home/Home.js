import React from 'react';

function Home() {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<section classname="hero" id="home">
<video autoplay="" id="hero-video" loop="" muted="">
<source src="assets/videos/hero-background.mp4" type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
<div classname="hero-content">
<h1>Welcome to Multimedium Design</h1>
<p>Creative Solutions for Your Business</p>
<a classname="btn" href="#portfolio">View Portfolio</a>
<a classname="btn btn-primary" href="#contact">Get in Touch</a>
</div>
</section>` }} />
    );
}

export default Home;