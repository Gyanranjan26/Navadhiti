import React from 'react'

export default function ShowForm({drugData}) {
   
  return (
    <div className='container m-auto '>
        <div className="card border-info bg-light">
          <div className="card-body">
          <form>
            {drugData.map(( data)=>{
              console.log(data)
              return(             
              <div>
                          <div className="mb-3 row input-group ms-3">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">{data.label}</label>
                            <div className="col-sm-8 ">
                              <input type={data.type} className="form-control" id="inputPassword" readOnly={data.isReadonly} required={data.isRequired} key={data.key} />
                            </div>
                            <div className="input-group-append col-sm-1 me-3">
                                  {data.unit?data.unit:null}
                              </div>
                          </div>
                          
                </div>
              )
            })}
        </form>
          </div>
        </div>
    </div>
  )
}
