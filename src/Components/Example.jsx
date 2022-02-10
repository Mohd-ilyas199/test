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
import FileCopyIcon from '@material-ui/icons/FileCopy';


export default function WebShareGfg(){	
	const [copied,setCopied]=useState(false)
  const [urlCopied,setUrlCopied]=useState(false)
  const [open,setOpen]=useState(false)
	const copyAddress = () => {
		const copyText = document.getElementById('code');
		navigator.clipboard.writeText(copyText.innerText);
		setCopied(true)
	  }
    const copyURL = () => {
      const copyURLtext = document.getElementById('url');
      navigator.clipboard.writeText(copyURLtext.innerText);
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
      <div>
      <div className="X">
    <span   style={{cursor:"pointer"}} onClick={HandleClose}>X</span>
    </div>
  <div className='SharingDiv'>
         <WhatsappShareButton 
          title='Referral'
          url='https://rbitex.com/'
          id="url"
          >
            <WhatsappIcon  size={40} round/>
          </WhatsappShareButton>
          <span className="copy">
          <FileCopyIcon onClick={copyURL}/>
          </span>

            <EmailShareButton
            title='Referral'
            url="https://rbitex.com/"
          
            >
                <EmailIcon size={40} round />
            </EmailShareButton>

              <FacebookShareButton
                title={"Referral"}
               url="https://rbitex.com/"
      >
        <FacebookIcon size={40} round /> 
      </FacebookShareButton>
      <TwitterShareButton
        title={"Referral"}
        url="https://rbitex.com/"
      >
        <TwitterIcon size={40} round />
      </TwitterShareButton>
        </div> 
        </div>
           </Modal>
	</div>
);
};
