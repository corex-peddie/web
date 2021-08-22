/*
Ahhhh, the home page! The first thing you see, and well, its a beaut!
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render () {
    return (
      <article>
        <img src="../public/accent1.svg" className="accent1" alt="blob-blue"></img>
        <img src="../public/accent2.svg" className="accent2" alt="blob-yellow"></img>
        <div>
          <section className='text-section'>
            <h1>Welcome, to <b>CoreX</b></h1>
            <h2>CoreX is an open-source digital platform for small businesses interested in supercharging financial tracking, analysis and transparency.</h2>
            <p>The Concept:</p>
            <ul>
              <li>Financial Tracking through Locally-Stored Data Management</li>
              <li>Financial and SEO Analysis Using 3 On-Device Machine Learning Models</li>
              <li>Company Transparency Through Built-In Finanial Reports and Built In Transparency Documents</li>
            </ul>
            <p>This enables full control of your small business on an external, yet decentralized, platform. During these difficult times, we want to make the process of financial security and company-wide management to be safe, quick and user-friendly. We utilize <a href="#">XDB</a>, our customized locally-stored database to ensure your financial data is YOURS. All data will be stored on your computer, and can be added/deleted at any time. We also provide the <a href="#">CoreX Analaysis Application</a>, which analyzes your financial and SEO data and provides real-time on-device feedback. Finally, your team can produce <a href="#">transparency reports</a> to share with the public and business report templates with your finances ready to go!</p>
            <p>Directory:</p>
            <ul>
              <li>Home Page <code>/#</code></li>
              <li>Get Started
                <ul>
                <li>Login <code>/login</code></li>
                <li>Register <code>/register</code></li>
                </ul>
              </li>
              <li>Dashboard <code>/dashboard</code></li>
              <li>Analysis <code>/analysis</code></li>
            </ul>
            <p>Inspiration:</p>
            <p>Small Businesses are a vital part of our local communities. We understand the difficulties faced in the transition to an online-only environment. <a>CoreX was built on the foundation of alleviating the complex difficulties of technical tracking and replacing consultants for SEO and Financial management.</a> <b>This is truly a safe, secure and decentralized platform to enable high returns and good practices to the digital workplace. </b></p>
            <p>Technologies Used</p>
            <ul>
              <li><a>Web Interface</a>
                <ul>
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                  <li>Redux</li>
                  <li>Array of Packages</li>
                  <li>PDF API</li>
                  </ul>  
              </li>
              <li><a>Machine Learning Development</a>
                <ul>
                  <li>Python</li>
                  <li>SciKit Learn</li>
                  <li>Streamlit</li>
                  <li>Plotly</li>
                  <li>Pandas</li>
                  <li>Numpy</li>
                  <li>Joblib</li>
                  </ul>  
              </li>
              <li><a>XDB</a>
                <ul>
                  <li>Python</li>
                  </ul>  
              </li>
            </ul>
            </section>
        </div>
      </article>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Home)
