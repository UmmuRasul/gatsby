import React from "react"
import Layout from "../components/layout"

import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import github from "../images/github-logo.png";

export default () => (
  <Layout>
   
  <div>
     <h4>A well-educated mind will always have more questions than answers.</h4>
  </div>

  <h3 className="text-center">
      Talk to me and lets work together
    </h3>
    <div text-center social-share-link>
      <a href={'https://www.facebook.com/profile.php?id=100009587345210'}> <img src={facebook} alt="Mariam" /></a>
      <a href={'https://www.linkedin.com/in/mariam-abdallah-b64648143/'}> <img src={linkedin} alt="Mariam" /></a>
      <a href={'https://twitter.com/MariamA65594389'}> <img src={twitter} alt="Mariam" /></a>
      <a href={'https://github.com/UmmuRasul'}> <img src={github} alt="Mariam" /></a>
    </div>
    
  </Layout>
)