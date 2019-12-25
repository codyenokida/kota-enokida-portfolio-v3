import React from 'react';
import Image from 'gatsby-image';
import './projects.css';

function showOnHover(int) {
    var bgImage = document.getElementsByClassName("project-preview-image-container")[int - 1];
    var title = document.getElementsByClassName("project-preview-title")[int - 1];
    bgImage.style.opacity = 0.6;
    bgImage.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
    title.style.transform = 'translateX(-50%) translateY(-55%)';
}

function leaveOnHover(int) {
    var bgImage = document.getElementsByClassName("project-preview-image-container")[int - 1];
    var title = document.getElementsByClassName("project-preview-title")[int - 1];
    bgImage.style.opacity = 0;
    bgImage.style.transform = 'translateX(-50%) translateY(-50%) scale(0.5)';
    title.style.transform = 'translateX(-50%) translateY(-50%)';
}

const Projects = ({id, slug, description, imageData}) => (
    <div class="project-container" onMouseOver={() => showOnHover(id)} onMouseOut={() => leaveOnHover(id)}>
        <h1 class="project-preview-title">{slug}</h1>
        {/* <Link to={`/${slug}/`}>
        </Link> */}
        <div class="project-preview-image-container">
            <Image class="project-preview-image" fluid={imageData} alt={slug}/>
        </div>
        <p class="project-preview-description">{description}</p>
    </div>
);

export default Projects;