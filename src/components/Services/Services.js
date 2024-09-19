import React from 'react';

function Services() {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<section classname="services" id="services">
<div classname="container">
<h2>Our Services</h2>
<div classname="service-grid">
<div classname="service-item">
<i classname="fas fa-paint-brush"></i>
<h3>Graphic Design</h3>
<p>Creating visually compelling graphics that communicate your brand message effectively.</p>
</div>
<div classname="service-item">
<i classname="fas fa-code"></i>
<h3>Web Design</h3>
<p>Designing responsive and user-friendly websites tailored to your business needs.</p>
</div>
<div classname="service-item">
<i classname="fas fa-briefcase"></i>
<h3>Business Consulting</h3>
<p>Providing strategic insights to help your business grow and thrive in the market.</p>
</div>
<div classname="service-item">
<i classname="fas fa-share-alt"></i>
<h3>Social Media Marketing</h3>
<p>Enhancing your online presence through targeted social media campaigns.</p>
</div>
</div>
</div>
</section>` }} />
    );
}

export default Services;