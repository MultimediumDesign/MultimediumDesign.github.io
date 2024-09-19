import React from 'react';

function Contact() {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<section classname="contact" id="contact">
<div classname="container">
<h2>Contact Me</h2>
<form id="contact-form">
<div classname="form-group">
<input id="name" name="name" placeholder="Your Name" required="" type="text"/>
</div>
<div classname="form-group">
<input id="email" name="email" placeholder="Your Email" required="" type="email"/>
</div>
<div classname="form-group">
<textarea id="message" name="message" placeholder="Your Message" required=""></textarea>
</div>
<button classname="btn btn-primary" type="submit">Send Message</button>
</form>
<div classname="contact-info">
<p><i classname="fas fa-phone"></i> +1 (555) 123-4567</p>
<p><i classname="fas fa-envelope"></i> email@multimediumdesign.com</p>
<p><i classname="fas fa-map-marker-alt"></i> 123 Creative Street, Design City, Country</p>
<div classname="map">
<iframe allowfullscreen="" src="https://www.google.com/maps/embed?..."></iframe>
</div>
</div>
<div classname="social-media">
<a href="#" target="_blank"><i classname="fab fa-facebook-f"></i></a>
<a href="#" target="_blank"><i classname="fab fa-twitter"></i></a>
<a href="#" target="_blank"><i classname="fab fa-instagram"></i></a>
<a href="#" target="_blank"><i classname="fab fa-linkedin-in"></i></a>
</div>
</div>
</section>` }} />
    );
}

export default Contact;