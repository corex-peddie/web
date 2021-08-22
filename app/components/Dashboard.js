/*
The Dashbaord, The Hub, The TVA - whatever you want to call it: its all here! - Rajan
*/

import React from 'react';
import './components.css';
import Iframe from 'react-iframe';


function Dashboard () {
  return (
    <article>
              <img src="../public/accent1.svg" className="accent1" alt="blob-blue"></img>
        <img src="../public/accent2.svg" className="accent2" alt="blob-yellow"></img>
      <section className='text-section'>
        <h1>Dashboard</h1>
        
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
      </section>
      <Iframe url="https://crud.rajnagrwl.repl.co/table.html"
        id="myId"
        className="crud"
        position="fixed"/>
    </article>
  )
}

export default Dashboard
