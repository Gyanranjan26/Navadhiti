import React, {useState, useEffect} from 'react'
import drugOne from "./drug1.json"
import drugTwo from "./drug2.json"
import Drug from "./Drug"

export default function Home() {
    let [drugData, setDrugData] = useState([])
    let [drugSelected, setDrugSelected] = useState("")
   
    useEffect(() => {

    })

    function handleChangeDrug(e) {
        // e.preventDefault()
       
        if(e.target.value === "drugOne"){
            console.log(drugOne.fields)
            
            setDrugSelected("drugOne")
            setDrugData(drugOne.fields)
        }else if(e.target.value === "drugTwo"){
            console.log(drugTwo.fields)
          
            setDrugSelected("drugTwo")
            
            setDrugData(drugTwo.fields)
        }
        
    }
  return (
    <div className="row justify-content-center ">
        
        <div className="col col-lg-6 col-md-6">
   
            <div className="m-check m-check-inline">
                
                <input className="m-check-input" 
                onChange={handleChangeDrug}
                type="radio" name="inlineRadioOptions" id="drug1" value="drugOne" checked={drugSelected === "drugOne"}/>
                <label className="m-check-label" html="inlineRadio1">Drug 1</label>
            </div>
            <div className="m-check m-check-inline">
                <input className="m-check-input" onChange={handleChangeDrug} type="radio" name="inlineRadioOptions" 
                id="drug2" value="drugTwo" checked={drugSelected === "drugTwo"} />
                <label className="m-check-label" html="inlineRadio2">Drug 2</label>
            </div>
          
        </div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className='col col-lg-12 col-md-12'>
                       <Drug drugData={drugData}></Drug>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
