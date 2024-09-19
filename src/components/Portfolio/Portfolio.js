import React from 'react';

function Portfolio() {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<section classname="portfolio" id="portfolio">
<div classname="container">
<h2>Our Portfolio</h2>
<div classname="portfolio-tabs">
<button classname="tablink active" data-tab="websites">Websites</button>
<button classname="tablink" data-tab="photography">Photography</button>
<button classname="tablink" data-tab="graphic-design">Graphic Design</button>
</div>
<div classname="portfolio-content">
<!-- Websites Subsection -->
<div classname="tabcontent active" id="websites">
<div classname="portfolio-grid">
<div classname="portfolio-item">
<img alt="Three Penn Project" src="images/three-penn.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="projects/three-penn.html">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Eastern Seal Project" src="images/eastern-seal.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="projects/eastern-seal.html">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Blissfull Existence Project" src="images/blissfull-existence-healing-acres.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="projects/blissfull-existence-healing-acres.html">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Fairbridge Project" src="images/fairbridge.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="projects/fairbridge.html">View Project</a>
</div>
</div>
</div>
</div>
<!-- Photography Subsection -->
<div classname="tabcontent" id="photography">
<div classname="portfolio-grid">
<!-- Repeat similar blocks for photo1.jpg to photo8.jpg -->
<div classname="portfolio-item">
<img alt="Photography Project 1" src="images/photo1.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Photography Project 2" src="images/photo2.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Photography Project 3" src="images/photo3.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Photography Project 4" src="images/photo4.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Photography Project 5" src="images/photo5.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Photography Project 6" src="images/photo6.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Photography Project 7" src="images/photo7.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Photography Project 8" src="images/photo8.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
</div>
</div>
<!-- Graphic Design Subsection -->
<div classname="tabcontent" id="graphic-design">
<div classname="portfolio-grid">
<!-- Repeat similar blocks for graphic1.jpg to graphic22.jpg -->
<div classname="portfolio-item">
<img alt="Graphic Design Project 1" src="images/graphic1.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 2" src="images/graphic2.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 3" src="images/graphic3.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 4" src="images/graphic4.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 5" src="images/graphic5.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 6" src="images/graphic6.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 7" src="images/graphic7.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 8" src="images/graphic8.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 9" src="images/graphic9.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 10" src="images/graphic10.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 11" src="images/graphic11.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 12" src="images/graphic12.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 13" src="images/graphic13.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 14" src="images/graphic14.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 15" src="images/graphic15.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 16" src="images/graphic16.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 17" src="images/graphic17.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 18" src="images/graphic18.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 19" src="images/graphic19.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 20" src="images/graphic20.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 21" src="images/graphic21.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
<div classname="portfolio-item">
<img alt="Graphic Design Project 22" src="images/graphic22.jpg"/>
<div classname="portfolio-overlay">
<a classname="portfolio-link" href="#">View Project</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>` }} />
    );
}

export default Portfolio;