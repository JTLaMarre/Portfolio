import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Email from '../components/Email'
 
const Contact = () => {
    return (
      <Fragment>
      <Header />
         <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="is-size-1">
            Reach me at:
          </h1>
          <ul>
          <li>
            Phone: (980)-230-1816
          </li>
          <li >
            github: JTLaMarre
          </li>
          <li >
          linkedin:linkedin.com/in/jacob-lamarre-6b578629
          </li>
          </ul>
          <br></br>
          <h1 className="is-size-1">
            Send Email:
          </h1>
          <Email />
        </div>
        </div>
        <Footer />
        </Fragment>
    );
}
 
export default Contact;