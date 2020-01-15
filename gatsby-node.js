exports.createPages = async ({actions, graphql, reporter}) => {
    const results = await graphql(`
        {
            allDataJson {
                edges {
                    node {
                        projects {
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (results.error) {
        reporter.panic('There was a problem loading your proejcts');
        return;
    }

    const allProjects = results.allDataJson.edges.node;

    allProjects.forEach(({projects}) => {
        const slug = projects.slug;

        actions.createPage({
            path: `/${slug}/`,
            component: require.resolve('./src/templates/project.js')
            context: 'slug';
        });
    });
}