import React from "react";

import "./index.css";
import LogoDiv from "../components/logoDiv";
import Navcards from "../components/navigationcard";
import Projects from "../components/projects";
import { graphql, useStaticQuery } from 'gatsby';


const IndexPage = () => {
  const data = useStaticQuery(graphql`{
    allProjectsJson {
      edges {
        node {
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
        }
      }
    }
  }
  `)

  const projects = data.allProjectsJson.edges;

  return(
    <div class='main-container'>
      <LogoDiv />
      <Navcards />
      <div class="about-section" id="about-section">
        <p class="introduction">hey, my name is kota cody enokida! i’m currently a 2nd year studying computer science at the university of california, irvine. i’m a developer with heavy interest in ui/ux! </p>
        <div class="experience">
          <p>experience</p>
          <p id="intern">2019 - software engineer intern at xlsoft corporation</p>
          <p id="intern">2019 - software engineer intern at softech & associcates</p>
        </div>
        <div class="contact"> 
          <p>contact</p>
          <p id="intern">codyenokida@gmail.com</p>
        </div>
      </div>
      <div class="project-main-container">
        {projects.map(({ node: project }) => {
          const id = project.id;
          const slug = project.slug;
          const description = project.description;
          const imageData = project.image.childImageSharp.fluid;
          
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
    </div>
  );
}
export default IndexPage
