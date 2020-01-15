import React from 'react';
import "./project-page.css";

const Project = ({title, description, url, languages}) => (
    <div class="project-container">
        <div class="back-arrow">
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
            <Link to={`{/url}`}></Link>
        </p>
    </div>
)

export default Project