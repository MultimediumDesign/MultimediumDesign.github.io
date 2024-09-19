import React from 'react';

function Footer() {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<footer>
<div classname="container">
<div classname="footer-links">
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#portfolio">Portfolio</a>
<a href="#blog">Blog</a>
<a href="#contact">Contact</a>
</div>
<div classname="newsletter">
<form id="newsletter-form">
<input placeholder="Subscribe to our newsletter" required="" type="email"/>
<button type="submit"><i classname="fas fa-paper-plane"></i></button>
</form>
</div>
<div classname="footer-social">
<a href="#" target="_blank"><i classname="fab fa-facebook-f"></i></a>
<a href="#" target="_blank"><i classname="fab fa-twitter"></i></a>
<a href="#" target="_blank"><i classname="fab fa-instagram"></i></a>
<a href="#" target="_blank"><i classname="fab fa-linkedin-in"></i></a>
</div>
<p>© 2024 Multimedium Design. All rights reserved.</p>
</div>
</footer>` }} />
    );
}

export default Footer;