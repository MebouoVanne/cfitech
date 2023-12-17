import React from 'react'
import job from "../../assets/images/job.PNG"
import { Image } from 'react-bootstrap'
import "./Jobs.css"

export default function jobs() {
  return (
    <div className='job'>
      <div className='image'>
      <Image  style={{width:"100%",height:"400px"}} src={job} fluid/>
      </div>
      
      <div className='jobInfos'>
        vous voulez travaillez chez nous?
      </div>
    </div>
  )
}
