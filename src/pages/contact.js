import React from "react"
import Layout from "../components/layout"

import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import github from "../images/github-logo.png";
import googleplus from "../images/google-plus.png";


export default () => (
  <Layout>
   
  <div>
     <h4>Leave a comment please </h4>
     <form method="post" action={'https://mail.google.com/mail/u/0/'}>
      <div>
      <label>
          Email<br></br>
      </label>
      <input type="email" name="email" id="email" /><br></br>
      </div>
      <div>
      <label>
        comment<br></br>
      </label>
      <textarea name="message" id="message" rows="5" /><br></br>
      </div>
     <div>
     <button type="submit">Send</button>
      <input type="reset" value="Clear" />
     </div>
      
</form>
  </div>

  <h3 className="text-center">
      Talk to me and lets work together
    </h3>
    <div text-center social-share-link>
      <a href={'https://www.facebook.com/profile.php?id=100009587345210'}> <img src={facebook} alt="Mariam" /></a>
      <a href={'https://www.linkedin.com/in/mariam-abdallah-b64648143/'}> <img src={linkedin} alt="Mariam" /></a>
      <a href={'https://twitter.com/MariamA65594389'}> <img src={twitter} alt="Mariam" /></a>
      <a href={'https://github.com/UmmuRasul'}> <img src={github} alt="Mariam" /></a>
      <a href={'https://mail.google.com/mail/u/0/'}> <img src={googleplus} alt="Mariam" /></a>
      
    </div>
  </Layout>
)