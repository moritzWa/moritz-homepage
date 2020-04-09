/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import { faCheckSquare, faUserNinja } from "@fortawesome/free-solid-svg-icons"

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const FAicon = styled(FontAwesomeIcon)`
  margin-left: 0px;
  margin-right: 15px;
`

library.add(fab, faCheckSquare)

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
    render={(data) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            <a href="https://twitter.com/MoritzW42">
              <FAicon
                target="_blank"
                icon={["fab", "twitter"]} //"fab fa-angellist"
                size="lg"
              ></FAicon>
            </a>
            <a href="https://www.goodreads.com/moritzw" target="_blank">
              <FAicon icon={["fab", "goodreads"]} size="lg"></FAicon>
            </a>
            <a
              href="https://www.producthunt.com/@moritzwallawitsch"
              target="_blank"
            >
              <FAicon
                icon={["fab", "product-hunt"]} //"fab fa-angellist"
                size="lg"
              ></FAicon>
            </a>
            <a href="https://www.linkedin.com/in/moritzw/" target="_blank">
              <FAicon
                icon={["fab", "linkedin"]} //"fab fa-angellist"
                size="lg"
              ></FAicon>
            </a>
            <a
              href="https://www.researchgate.net/profile/Moritz_Wallawitsch"
              target="_blank"
            >
              <FAicon
                size="lg"
                icon={["fab", "researchgate"]} //"fab fa-angellist"
                size="lg"
              ></FAicon>
            </a>
            <a href="https://www.codewars.com/users/MoritzW" target="_blank">
              <FAicon
                icon={faUserNinja} //"fab fa-angellist"
                //icon={["fa", "user-ninja"]}
              ></FAicon>
            </a>
            <a href="https://angel.co/u/moritz-wallawitsch" target="_blank">
              <FAicon
                //icon={faTwitter} //"fab fa-angellist"
                icon={["fab", "angellist"]}
                size="lg"
              />
            </a>{" "}
            <p>
              Moritz Wallawitsch © {new Date().getFullYear()}, Built with
              {` `}
            </p>
            <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
