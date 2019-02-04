import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import './layout.css'
import like from '../images/like.svg'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const FooterContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    padding: 0;
    margin: 0;
    font-size: 16px;
    color: #14151a;
  }

  .icon {
    width: 18px;
    margin: 0 5px;
  }

  a {
    color: #14151a;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          {children}
          <footer>
            <FooterContent>
            <p>Made with</p>
            <img src={like} alt="love" className="icon" />
            <p>by <a href="https://github.com/nurulfurqon" target="_blank">Nurul Furqon</a></p>
            </FooterContent>
          </footer>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
