import React from 'react';
import { graphql } from 'gatsby';
import Project from './components/projects.js';

const ProjectTemplate = ({ data }) => {
    const project = data.allDataJson.edges[0].node.projects;
}