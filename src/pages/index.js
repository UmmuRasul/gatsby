import React from "react"
import Layout from "../components/layout"
import img from "../images/img.png";


export default () => (
  <Layout>
  <div class="row">
  <div class="col-sm-6">
      <img src={img} alt="Mariam" height="550" width="600" />
    </div>
    <div class="col-sm-6">
      <h3>Mariam Abdallah</h3>
        <p>
         <b>School: </b>Kibabii University<br></br>
         <b>Field:</b> Information Technology<br></br>
         <b>Interest:</b> Software Development<br></br>
        </p>
    </div>
    </div>
  </Layout>
)
//tos master