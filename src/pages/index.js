import React from "react"
import Layout from "../components/layout"
import img from "../images/img.jpg";


export default () => (
  <Layout>
    <div>
      <img src={img} alt="Mariam" height="300" width="350" />
    </div>
    <div>
      <h3>Mariam Abdallah</h3>
        <p>
         <b>School: </b>Kibabii University<br></br>
         <b>Field:</b> Information Technology<br></br>
         <b>Interest:</b> Software Development<br></br>
        </p>
    </div>
  </Layout>
)