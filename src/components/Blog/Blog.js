import React from 'react';

function Blog() {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<section classname="blog" id="blog">
<div classname="container">
<h2>Blog</h2>
<div classname="blog-grid">
<!-- Example Blog Post -->
<article classname="blog-post">
<img alt="Blog Post 1" src="images/blog1.jpg"/>
<div classname="blog-content">
<h3>Design Trends in 2024</h3>
<p>Explore the latest trends in graphic and web design that are shaping the industry this year.</p>
<a classname="read-more" href="#">Read More</a>
</div>
</article>
<!-- Add more blog posts as needed -->
</div>
<div classname="blog-controls">
<input id="blog-search" placeholder="Search..." type="text"/>
<div classname="blog-categories">
<span>Categories:</span>
<a classname="category" href="#">Design</a>
<a classname="category" href="#">Marketing</a>
<a classname="category" href="#">Business</a>
</div>
</div>
</div>
</section>` }} />
    );
}

export default Blog;