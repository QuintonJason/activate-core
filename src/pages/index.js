import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Logo from "../images/Logo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="landing-intro">
      <h1 class="t-hidden">Activate Conference 2020</h1>
      <Logo />
      <datatime class="landing__datetime">September 19</datatime>
      <p class="landing__location">LSU Business Education Complex</p>
    </div>
    <ul class="landing__talk-categories">
      <li>Development</li>
      <li>Design</li>
      <li>Business</li>
      <li>Hackathon</li>
    </ul>
    <div class="landing-buttons">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCiyIco0ZjRO3-HTBJoWVHwUUVnlXdI_pHYBNDGeSo-yi9_A/viewform?usp=sf_link" class="btn landing-button">Be a Speaker</a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeTs_TKwHtFHw5qCWClAwzzA0NMBrtwffjdKDSsWeWPq--Beg/viewform?usp=sf_link" class="btn landing-button">Be a Volunteer</a>
      <a href="http://www.activateconf.com/assets/uploads/general/activate-sponsor-deck-2019.pdf" class="btn landing-button">Be a Sponsor</a>
    </div>
  </Layout>
)

export default IndexPage
