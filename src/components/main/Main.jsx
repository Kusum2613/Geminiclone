import React, { useContext } from 'react'
import"./../main/main.css"
import girl from "../../assets/girl.jpg"
import { assets } from '../../assets/assets'
import { Context } from '../../context/Contex'

function Main() {
    const {onSent,recentPromt,showResult,loading,resultData,setInput,input}=useContext(Context)




  return (
    <div className="main">
        <div className="nav">
           <p>Gemini</p> 
           <img src={girl} alt="" style={{height:"50"}}/>
        </div>
        <div className="main-container">
               {!showResult?<>




            <div className="greet">
                <p><span>Hello , Kusum.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p> Suggest beautiful place to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>Briefly summarize this concept:urban planning </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                    <p> Brainstorm team bonding activity for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                    <p> Improve the readability of following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
             <div className="result-title">
                <img src={girl} alt=""  style={{height:"50px", borderRadius:"50px",width:"50px"}} />
                <p>{recentPromt}</p>
             </div>
               <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                 {loading ? <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                 </div>:

                <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
               </div>

                </div>
                }




            <div className="main-bottom">
                <div className="search-box">
                    <input type='text' placeholder='Enter a prompt here' onChange={(e)=>setInput(e.target.value)} value={input}></input>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" onClick={()=>onSent()} />
                    </div>
                </div>
       
                <p className='bottom-info'>
                  Gemini can make mistakes, so double-check it.<br></br>
                  © 2024 Kusum Kumari. All rights reserved.
                </p>
            </div>
        </div>
    </div>
  )
 
}

export default Main