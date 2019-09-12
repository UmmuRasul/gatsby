import React from "react"
import Layout from "../components/layout"

import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import github from "../images/github-logo.png";
import googleplus from "../images/google-plus.png";


export default () => (
  <Layout>
   
  <div className="col-10 col-sm-8 col-md-6 mx-auto">
     <h4>Leave a comment please </h4>
        <form method="post" action="https://formspree.io/mariamabdallah711@gmail.com">
            {/* Email */}
              <div className="form-group mt-5 m-b-2">
                <label htmlFor="email">Email:</label><br></br>
                <input type="text" className="form-control" name="email" id="email" placeholder="example@example" />
              </div><br></br>
            {/* comments */}
              <div className="form-group mt-5 m-b-2">
                <label htmlFor="comments">Comments:</label><br></br>
                <textarea name="comments" id="comments" className="form-control" row="5" placeholder="Your Comments Here...."></textarea>
              </div><br></br>
            {/* buttons */}
            <button type="submit" className="btn btn-blue btn-block text-Capitalize mt-5">Send</button>
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