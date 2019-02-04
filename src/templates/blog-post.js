import React from 'react'
import { Link, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import back from '../images/go-back-left-arrow.svg'
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

  h1 {
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

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const { title, date } = post.frontmatter
  return (
    <Layout>
      <Box>
        <h1>{ title }</h1>
        <p className="date">{ date }</p>
       
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link 
          to="/"
          className="back-button"
        >
          <img
            src={back}
            alt="back"
            width="18px"
          />
          <p>Go back to the homepage</p>
        </Link>
      </Box>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
      }
    }
  }
`