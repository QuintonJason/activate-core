import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Logo from "../images/Logo"
import pdf from "../images/activate-sponsor-deck-2020.pdf"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="landing-intro">
      <h1 class="t-hidden">Activate Conference 2020</h1>
      <Logo />
      <p class="landing__location">Due to Covid, The 2020 Conference has been Postponed.</p>
    </div>
    <ul class="landing__talk-categories">
      <li class="landing__talk-category">Development</li>
      <li class="landing__talk-category">Design</li>
      <li class="landing__talk-category">Business</li>
      <li class="landing__talk-category">Hackathon</li>
    </ul>
    <div class="landing-buttons">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCiyIco0ZjRO3-HTBJoWVHwUUVnlXdI_pHYBNDGeSo-yi9_A/viewform?usp=sf_link" class="btn landing-button" target="_blank" rel="noopener noreferrer">Be A Speaker</a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeTs_TKwHtFHw5qCWClAwzzA0NMBrtwffjdKDSsWeWPq--Beg/viewform?usp=sf_link" class="btn landing-button" target="_blank" rel="noopener noreferrer">Be A Volunteer</a>
      <a href={pdf} class="btn landing-button">Be A Sponsor</a>
    </div>
  </Layout>
)

export default IndexPage
