const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const docsPostTemplate = path.resolve(`src/templates/docTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: docsPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
