import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';

const Project =(props)=> {
    const [isFlipped, setisFlipped]=useState(false)

    const handleFlip = () => {
        setisFlipped(!isFlipped)
    }
    

        return (
                        <div className="column is-one-quarter">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                      <div className="box"  key={props.id}>
                    <img src={require(`../images${props.img}`)} alt={props.name} className="project"></img>
                    <h1 className="is-size-3">{props.name}</h1>
                    <br></br>
                    <a href={props.deploy}>Deployed Here</a>
                    <br></br>
                    <a href={props.code}>Code Here</a>
                    <br></br>
                    <button onClick={handleFlip} className="button is-info">Flip for info</button>
                </div>
                <div className="box">
                    <h3 className="is-size-5">Technologies Utilized</h3>
                    <p>{props.tech}</p>
                    <h3 className="is-size-5">Description</h3>
                    <p>{props.description}</p>
                    <br></br>
                    <button onClick={handleFlip} className="button is-primary">Flip to front</button>
                </div>
            </ReactCardFlip>
            </div>
              
        )
    
}
export default Project