import React, { useState } from 'react'

export default function About(props) {

      // const[myStyle, setmyStyle] = useState({
      //     color: 'black',
      //     backgroundColor: 'white'
      // })

    let myStyle = {
      color: props.mode === 'dark'?'white':'black',
      backgroundColor: props.mode === 'dark'?'black':'white'
    }

    //const [btntext, setBtnText] = useState("Enable dark mode")

    /*const toggleStyle = ()=>{
        if(myStyle.color === 'black')
        {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable light mode")
        }
        else
        {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable dark mode")
        }

    }
*/
  return (
    <div className='container' style={myStyle}>
      <div className="accordion" id="accordionExample">
      <h2 className='my-3'>About</h2>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze the text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Textutil gives you a way to analyze the text whether its a character count or word count
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Textutils is a free to use tool
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This webapp works in any Browser
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
