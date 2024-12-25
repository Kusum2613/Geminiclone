import { createContext } from "react";
import run from "../config/Gemini";
import { useState } from "react";



export  const Context= createContext();
const ContextProvider=(props)=>{

  const [input,setInput]=useState("");
  const [recentPromt,setRecentPromt]=useState("");
  const[prevPromts,setPrevPromts]=useState([]);
  const[showResult,setShowResult]=useState(false);
  const [loading,setLoading]=useState(false);
  const[resultData,setResultData]=useState("");



  const delayPara=(index,nextWord)=>{
    setTimeout(function(){
        setResultData(prev=>prev+nextWord)
    },75*index)

  }
  const newChat=()=>{
    setLoading(false)
    setShowResult(false)
  }





    const onSent =async (prompt)=>{


        setResultData("")
        setLoading(true)
        setShowResult(true)
        //setRecentPromt(input)

        let response="";
        if(prompt!==undefined){
            response=await run(prompt)
            setRecentPromt(prompt)
        }
        else{
            setPrevPromts(prev=>[...prev,input])
            setRecentPromt(input)
            response = await run(input);
           
        }

       // setPrevPromts(prev=>[...prev,input])




       // const response= await run(input)
        let responseArray = response.split("**");
        let newRes;
        for(let i=0; i< responseArray.length;i++){
            if(i===0||i%2!==1 ){
                newRes+=responseArray[i];
            }
            else{
               newRes += "<b>"+responseArray[i]+"<b>"
            }
        }

        let newRes2=newRes.split('*').join("</br>")
        
       // setResultData(newRes2)

       let newResponse2=newRes2.split(" ")
       for(let i=0; i<newResponse2.length;i++){
        const nextWord=newResponse2[i]
        delayPara(i,nextWord+" ")
       }
        setLoading(false)
        setInput("")
    }

    

    const contextValue={
        prevPromts,
        setPrevPromts,
        onSent,
        setRecentPromt,
        recentPromt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
        
        
        




    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
