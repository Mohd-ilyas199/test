import React,{useState} from "react";
import { RWebShare } from "react-web-share";

export default function WebShareGfg(){
	const [copied,setCopied]=useState(false)

	const copyAddress = () => {
		const copyText = document.getElementById('code');
		navigator.clipboard.writeText(copyText.innerText);
		setCopied(true)
	  }
return (
	<div>
		<div>
    <p style={{fontSize:"16px"}}>Share With Friends And Earn More Rewards For Each One You Onboard With Us Earn 25 Rbitx Tokens</p>
    <span  style={{fontSize:"14px"}}>Your referral ID</span>
    </div>
    <br />
    <div>
      <span id="code">199</span>

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

	<RWebShare
		data={{
		text: "Social share",
		url: 'Rbitex-code',
		title: "Referral code",
		}}
		onClick={() => console.log("shared successfully!")}
	>
  <button>INVITE FRIENDS</button>
  	</RWebShare>
	</div>
);
};
