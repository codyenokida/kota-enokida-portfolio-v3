import React from 'react';
import Image from 'gatsby-image';
import './gallery.css'

function showOnHover(int) {
    var galleryImage = document.getElementsByClassName("gallery-preview-image")[int - 1];
    var galleryTitle = document.getElementsByClassName("gallery-preview-title")[int - 1];
    var galleryDate = document.getElementsByClassName("gallery-preview-date")[int - 1];
    galleryTitle.style.opacity = 1;
    galleryDate.style.opacity = 1;
    galleryImage.style.opacity = 0.8;
    galleryImage.style.transform = "scale(1.2)";
}

function leaveOnHover(int) {
    var galleryImage = document.getElementsByClassName("gallery-preview-image")[int - 1];
    var galleryTitle = document.getElementsByClassName("gallery-preview-title")[int - 1];
    var galleryDate = document.getElementsByClassName("gallery-preview-date")[int - 1];
    galleryTitle.style.opacity = 0;
    galleryDate.style.opacity = 0;
    galleryImage.style.opacity = 1;
    galleryImage.style.transform = "scale(1)";

}

const Gallery = ({title, slug, id, imageData, date}) => (

    <div class="gallery-box" onMouseOver={() => showOnHover(id)} onMouseOut={() => leaveOnHover(id)}>
        <h1 class="gallery-preview-title">{title}</h1>
        <p class="gallery-preview-date">{date}</p>   
        <Image className="gallery-preview-image" fluid={imageData} alt={slug}/>         
    </div>

);

export default Gallery;