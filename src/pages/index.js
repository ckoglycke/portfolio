import React from "react"
import { createUseStyles } from "react-jss"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const useStyles = createUseStyles({
  subHeading: {
    fontSize: "3rem",
  },
  main: {
    maxWidth: "960px",
    margin: "0 auto",
  },
  flexbox: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "700px",
    margin: "0 auto",
  },
  columnLeft: {
    maxWidth: "250px",
  },
  columnRight: {
    maxWidth: "400px",
  },
})

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Christine Skoglycke</h1>
      <p className={classes.subHeading}>A design and code enthusiast.</p>
      <main className={classes.main}>
        <article className={classes.flexbox}>
          <div className={classes.columnLeft}>
            <p>CSS</p>
            <p>HTML</p>
            <p>REACT</p>
            <p>UI DESIGN</p>
            <p>UX DESIGN</p>
            <p>ACCESSIBILITY</p>
          </div>
          <div className={classes.columnRight}>
            <p>
              Goal oriented and ambitious UI developer who loves to combine tech
              and design in order to create user-friendly and accessible user
              interfaces. Enjoys being part of a project right from the start to
              be able to create the best results, both from a business and a
              technical perspective.
            </p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default IndexPage
