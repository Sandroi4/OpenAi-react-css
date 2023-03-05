import React from 'react'
import './Brand.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'


export default function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div className=''>
        <img src={google} alt="google" />
      </div>
      <div className=''>
        <img src={slack} alt="google" />
      </div>
      <div className=''>
        <img src={atlassian} alt="google" />
      </div>
      <div className=''>
        <img src={dropbox} alt="google" />
      </div>
      <div className=''>
        <img src={shopify} alt="google" />
      </div>
    </div>
  )
}
