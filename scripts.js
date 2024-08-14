document.addEventListener('DOMContentLoaded', () => {
    // Load More Button
    const loadMoreBtn = document.getElementById('load-more-graphics');
    const additionalGraphics = document.getElementById('additional-graphics');

    loadMoreBtn.addEventListener('click', () => {
        if (additionalGraphics.style.display === 'none') {
            additionalGraphics.style.display = 'block';
            loadMoreBtn.textContent = 'View Less';
        } else {
            additionalGraphics.style.display = 'none';
            loadMoreBtn.textContent = 'View More';
        }
    });

    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

    // Initialize GSAP for parallax effect
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".parallax-bg", {
        y: "-50%",
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // GSAP animations for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            }
        });
    });

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', e => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const templateParams = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Show loading message
        document.getElementById('form-status').textContent = 'Sending...';

        emailjs.send('default_service', 'contact_form', templateParams)
            .then(response => {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('form-status').textContent = 'Message sent successfully!';
                e.target.reset();
            }, error => {
                console.log('FAILED...', error);
                document.getElementById('form-status').textContent = 'Failed to send message. Please try again.';
            });
    });

    // Password protection for client access
    document.getElementById('submit-password').addEventListener('click', () => {
        const passwordInput = document.getElementById('password-input');
        if (passwordInput.value === 'correct-password') {  // Replace 'correct-password' with your actual password
            document.querySelector('.client-content').style.display = 'block';
            document.getElementById('password-form').style.display = 'none';
        } else {
            alert('Incorrect password. Please try again.');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navHeight = document.querySelector('nav').offsetHeight;
            
            window.scrollTo({
                top: targetElement.offsetTop - navHeight,
                behavior: 'smooth'
            });
        });
    });

    // Masonry Layout for Portfolio Items
    const elem = document.querySelector('.portfolio-grid');
    const msnry = new Masonry(elem, {
        itemSelector: '.portfolio-item',
        columnWidth: '.portfolio-item',
        percentPosition: true
    });
    
    // Dynamic Portfolio Item Loading
    const portfolioItems = {
        photography: [
            { title: 'Photo 1', description: 'Description of Photo 1', image: 'assets/images/portfolio/photo1.jpg' },
            { title: 'Photo 2', description: 'Description of Photo 2', image: 'assets/images/portfolio/photo2.jpg' },
            { title: 'Photo 3', description: 'Description of Photo 3', image: 'assets/images/portfolio/photo3.jpg' },
            { title: 'Photo 4', description: 'Description of Photo 4', image: 'assets/images/portfolio/photo4.jpg' },
            { title: 'Photo 5', description: 'Description of Photo 5', image: 'assets/images/portfolio/photo5.jpg' },
            { title: 'Photo 6', description: 'Description of Photo 6', image: 'assets/images/portfolio/photo6.jpg' },
            { title: 'Photo 7', description: 'Description of Photo 7', image: 'assets/images/portfolio/photo7.jpg' },
            { title: 'Photo 8', description: 'Description of Photo 8', image: 'assets/images/portfolio/photo8.jpg' }
        ],
        graphicDesign: [
            { title: 'Graphic 1', description: 'Description of Graphic 1', image: 'assets/images/portfolio/graphic1.jpg' },
            { title: 'Graphic 2', description: 'Description of Graphic 2', image: 'assets/images/portfolio/graphic2.jpg' },
            { title: 'Graphic 3', description: 'Description of Graphic 3', image: 'assets/images/portfolio/graphic3.jpg' },
            { title: 'Graphic 4', description: 'Description of Graphic 4', image: 'assets/images/portfolio/graphic4.jpg' },
            { title: 'Graphic 5', description: 'Description of Graphic 5', image: 'assets/images/portfolio/graphic5.jpg' },
            { title: 'Graphic 6', description: 'Description of Graphic 6', image: 'assets/images/portfolio/graphic6.jpg' },
            { title: 'Graphic 7', description: 'Description of Graphic 7', image: 'assets/images/portfolio/graphic7.jpg' },
            { title: 'Graphic 8', description: 'Description of Graphic 8', image: 'assets/images/portfolio/graphic8.jpg' },
            { title: 'Graphic 9', description: 'Description of Graphic 9', image: 'assets/images/portfolio/graphic9.jpg' },
            { title: 'Graphic 10', description: 'Description of Graphic 10', image: 'assets/images/portfolio/graphic10.jpg' },
            { title: 'Graphic 11', description: 'Description of Graphic 11', image: 'assets/images/portfolio/graphic11.jpg' },
            { title: 'Graphic 12', description: 'Description of Graphic 12', image: 'assets/images/portfolio/graphic12.jpg' },
            { title: 'Graphic 13', description: 'Description of Graphic 13', image: 'assets/images/portfolio/graphic13.jpg' },
            { title: 'Graphic 14', description: 'Description of Graphic 14', image: 'assets/images/portfolio/graphic14.jpg' },
            { title: 'Graphic 15', description: 'Description of Graphic 15', image: 'assets/images/portfolio/graphic15.jpg' },
            { title: 'Graphic 16', description: 'Description of Graphic 16', image: 'assets/images/portfolio/graphic16.jpg' },
            { title: 'Graphic 17', description: 'Description of Graphic 17', image: 'assets/images/portfolio/graphic17.jpg' },
            { title: 'Graphic 18', description: 'Description of Graphic 18', image: 'assets/images/portfolio/graphic18.jpg' },
            { title: 'Graphic 19', description: 'Description of Graphic 19', image: 'assets/images/portfolio/graphic19.jpg' },
            { title: 'Graphic 20', description: 'Description of Graphic 20', image: 'assets/images/portfolio/graphic20.jpg' },
            { title: 'Graphic 21', description: 'Description of Graphic 21', image: 'assets/images/portfolio/graphic21.jpg' },
            { title: 'Graphic 22', description: 'Description of Graphic 22', image: 'assets/images/portfolio/graphic22.jpg' }
        ]
    };

    function loadPortfolioItems() {
        const photographyGrid = document.querySelector('#photography .portfolio-grid');
        const graphicDesignGrid = document.querySelector('#graphic-design .portfolio-grid');

        function createPortfolioItem(item) {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="lazy" data-src="${item.image}">
                <div class="portfolio-item-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            return portfolioItem;
        }

        // Load Photography Items
        portfolioItems.photography.forEach(item => {
            photographyGrid.appendChild(createPortfolioItem(item));
        });

        // Load Graphic Design Items
        portfolioItems.graphicDesign.forEach(item => {
            graphicDesignGrid.appendChild(createPortfolioItem(item));
        });

        // Refresh Masonry layout after adding new items
        const masonryGrids = document.querySelectorAll('.portfolio-grid');
        masonryGrids.forEach(grid => {
            const msnry = new Masonry(grid, {
                itemSelector: '.portfolio-item',
                columnWidth: '.portfolio-item',
                percentPosition: true
            });
            msnry.layout();
        });

        // Initialize lazy loading for the new images
        const lazyLoadInstance = new LazyLoad({
            elements_selector: ".lazy"
        });
    }

    // Call the function to load portfolio items
    loadPortfolioItems();

    // Lazy loading for images
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        lazyImages.forEach(lazyImage => {
            lazyImageObserver.observe(lazyImage);
        });
    }
});