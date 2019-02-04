import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './style.css'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px; 
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  text-decoration: none;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  h2 {
    margin-bottom: 0;
    color: #14151a;
  }

  p {
    color: #14151a;
  }

  .date {
    margin: 4px 0 20px 0;
    font-size: 16px;
    font-weight: bold;
    color: #81868f;
  }
`

const IndexPage = ({ data }) => {
  const postList = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="" keywords={[`gatsby`, `application`, `react`]} />
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} key={i} className="link">
          <Box>
            <h2>{node.frontmatter.title}</h2>
            <p className="date">{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </Box>
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
