import React,{useState} from "react";
// import { RWebShare } from "react-web-share";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import "./sharing.css"
import { Modal } from '@material-ui/core';


export default function WebShareGfg(){	
	const [copied,setCopied]=useState(false)
  const [open,setOpen]=useState(false)
	const copyAddress = () => {
		const copyText = document.getElementById('code');
		navigator.clipboard.writeText(copyText.innerText);
		setCopied(true)
	  }

    const HandleClose=()=>{
      setOpen(false)
    }
    const HandleOpen=()=>{
      setOpen(true)
    }
return (
	<div>
		<div>
    <p style={{fontSize:"16px"}}>Share With Friends And Earn More Rewards For Each One You Onboard With Us Earn 25 Rbitx Tokens</p>
    <span  style={{fontSize:"14px"}}>Your referral ID</span>
    </div>
    <br />
    <div>
      <span id="code">jawwad</span>
      <div >
      <span onClick={copyAddress} >Copy</span> &nbsp;
      <span style={{cursor:"pointer"}} onClick={copyAddress}>{copied===false ? "Copy" : "Copied"}</span>
      </div>
    </div>
    <br />
    <br />
    <div  style={{display:"flex",columnGap:"5rem"}}>
    <div>
      <span >YOU RECEIVE</span>
      <br/>
      <span >25 rBitex tokens</span>
      <p>On successful KYC</p>
    </div>
    <div style={{display:"block"}}>
      <span >FRIENDS RECEIVE</span>
      <br />
      <span >50 rBitex tokens</span>
    </div>
    </div>
    <br />
    <div >  
    </div>
	{/* <RWebShare
		data={{
		text: "Social share",
		url: 'Rbitex-code',
		title: "Referral code",
		}}
		onClick={() => console.log("shared successfully!")}
	>
  <button>INVITE FRIENDS</button>
  	</RWebShare> */}
    <button onClick={HandleOpen}>invite friends</button>
    <Modal 
    open={open}
    onClose={HandleClose}
    >
  <div className='SharingDiv'>
          <WhatsappShareButton 
          title='Referral'
          url='https://web.whatsapp.com/'
          >
            <WhatsappIcon  size={64} round/>
          </WhatsappShareButton>

            <EmailShareButton
            title='Referral'
            url='https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp'
            >
                <EmailIcon size={64} round />
            </EmailShareButton>

              <FacebookShareButton
                title={"Referral"}
               url={"https://www.facebook.com/login/"}
      >
        <FacebookIcon size={64} round /> 
      </FacebookShareButton>
      <TwitterShareButton
        title={"Referral"}
        url={"https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"}
      >
        <TwitterIcon size={64} round />
      </TwitterShareButton>
        </div> 
           </Modal>
	</div>
);
};
