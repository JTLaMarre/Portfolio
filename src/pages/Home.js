import React, {Fragment} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './pages.css'
const Home = () => {
    
    return(
        <Fragment>
        <Header />
        <div className="columns is-centered">
      <div className="column is-one-quarter">
          <img src={require ("../images/mePic.jpg")} alt="Me" id="me"></img>
      </div>
      <div className="column is-half">
          <h2> my info</h2>
          <p>Github:<a href="https://github.com/JTLaMarre">my github profile</a></p>
          <p>Linkedin:<a href="https://www.linkedin.com/in/jacob-lamarre-6b578629/">my Linkedin</a></p>
          <p>Hi! I'm Jacob, I am a full stack web developer that brings professional problem solving and relation skills to the table from my time as a pharmacy technician! Working with different pharmacy systems has given me a mountain of
            practice with problem solving and inputting data with minimal mistakes.Looking forward to the exciting challenges programming will bring my way. I love building fun projects in React.</p>
      </div>
  </div>
        <Footer/>
        </Fragment>
    )
}
export default Home
