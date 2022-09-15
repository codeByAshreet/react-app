import React from 'react'

export default function Card(props) {
  return (
    <div className='container'>
        <h1 className={`mx-3  text-center text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
      <div className="flex-wrap ">
      <div className={`card mx-4 bg-${props.mode==='light'?'none':'dark'}`} >
            
            <div className="card-body" >
                <h5 className={`card-title text-${props.mode==='light'?'dark':'light'}`}>Card title</h5>
                <p className={`card-text text-${props.mode==='light'?'dark':'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      <div className={`card mx-4 my-3 bg-${props.mode==='light'?'none':'dark'}`} >
           
            <div className="card-body ">
                <h5 className={`card-title text-${props.mode==='light'?'dark':'light'}`}>Card title</h5>
                <p className={`card-text text-${props.mode==='light'?'dark':'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      <div className={`card mx-4 bg-${props.mode==='light'?'none':'dark'}`} >
           
            <div className="card-body">
                <h5 className={`card-title text-${props.mode==='light'?'dark':'light'}`}>Card title</h5>
                <p className={`card-text text-${props.mode==='light'?'dark':'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    </div>
  )
}
