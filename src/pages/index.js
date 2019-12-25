import React from "react";

import "./index.css";
import LogoDiv from "../components/logoDiv";
import Navcards from "../components/navigationcard";
import Projects from "../components/projects";
import Gallery from "../components/gallery";
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
             projects {
              title
              slug
              description
              id
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            },
            gallery {
              title
              slug
              id
              date
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allDataJson.edges[0].node.projects;
  const gallery = data.allDataJson.edges[0].node.gallery;
  console.log(gallery);

  return(
    <div class='main-container' id="top">
      <LogoDiv />
      <Navcards />

      <div class="about-section" id="about-section">
        
        <p class="introduction">hey, my name is kota cody enokida! i’m currently a 2nd year studying computer science at the university of california, irvine. i’m a developer with heavy interest in ui/ux! </p>
        
        <div class="experience">
          <p>experience</p>
          <p id="intern">2019 - software engineer intern at xlsoft corporation</p>
          <p id="intern">2019 - software engineer intern at softech & associcates</p>
        </div>

        <div class="skills">
          <p>skills</p>
          <p id="intern">javascript, html, css, sass, react.js, react native, node.js, angular.js, python, c++, java</p>
        </div>

        <div class="contact"> 
          <p>contact</p>
          <p id="intern">codyenokida@gmail.com</p>
        </div>

      </div>

      <div class="project-main-container" id="works-section">
        {projects.map((project) => {
          const id = project.id;
          const slug = project.slug;
          const description = project.description;
          const imageData = project.image.childImageSharp.fluid;
          console.log(imageData);
          
          return (
            <Projects 
              id={id}
              slug={slug}
              description = {description}
              imageData = {imageData}
            />
          );
        })}
      </div>

      <div class="gallery-main-container" id="gallery-section">
        <div class="gallery-container">
          {gallery.map((picture) => {
            const title = picture.title;
            const slug = picture.slug;
            const id = picture.id;
            const imageData = picture.image.childImageSharp.fluid;
            const date = picture.date;
            console.log(imageData);
            
            return (
              <Gallery 
                title = {title}
                slug={slug}
                id={id}
                imageData={imageData}
                date={date}
              />
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default IndexPage
