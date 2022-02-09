import React from 'react';
import "./style.css"
import { FacebookShareButton, TwitterShareButton ,EmailShareButton} from "react-share";
import { FacebookIcon, TwitterIcon ,EmailIcon} from "react-share";

const Itachi = () => {
    const ResponsiveMenu=()=>{
var e =document.getElementById("menus")
if(e.className==="menu_list"){
    e.className += " responsive"
}else{
    e.className="menu_list"
}
    }
    return (
        <div>
             {/* <div id="loading"></div> */}
    <header>
      <div className="header_menu">
        <div className="logo">
          <img src="./logo1.png" alt="logo" />
        </div>
        <div className="menu_list" id='menus'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Episodes</a></li>
            <li><a href="/">Seasons</a></li>
            <li><a href="/">Aboutus</a></li>
            <li><a href="/">Contactus</a></li>
          </ul>
        </div>
        <div className="menu">
            <img onClick={ResponsiveMenu} src="./menu1.png" alt='itachi' />
        </div>
      </div>

      <div className="header_content">
        <h2 className="span">The best Shinobi of the Leaf Village</h2>
        <h1><span className='name'>itachi uchiha</span></h1>
        <p className="para">
          Itachi Uchiha (うちはイタチ, Uchiha Itachi) was a shinobi of
          Konohagakure's Uchiha clan who served as an Anbu Captain. He later
          became an international criminal after murdering his entire clan,
          sparing only his younger brother, Sasuke. He afterwards joined the
          international criminal organisation known as Akatsuki, whose activity
          brought him into frequent conflict with Konoha and its ninja —
          including Sasuke who sought to avenge their clan by killing Itachi.
          Following his death, Itachi's motives were revealed to be more
          complicated than they seemed and that his actions were only ever in
          the interest of his brother and village, making him remain a loyal
          shinobi of Konohagakure to the very end. Itachi was the first child
          born to Mikoto and Fugaku Uchiha. His early childhood was marked with
          violence: when he was four years old, the Third Shinobi World War
          waged and he witnessed first-hand many of the war's casualties. The
          death and destruction he experienced at such a young age traumatised
          Itachi and made him a pacifist,[6] leading to him training non-stop to
          achieve his dream of becoming a ninja among ninja in order to erase
          fighting from the world.[7] At age 5, after becoming a big brother to
          Sasuke, Itachi was approached by Shisui, who offered to train
          together. Soon, the two became best friends, forming a brother-like
          bond as they continued to teach the other new tricks. During the
          Nine-Tailed Demon Fox's Attack, he was home alone looking after
          Sasuke, followed by Itachi rescuing Mikoto from falling debris,[8] and
          in the anime seeking shelter with Izumi.[9] The Nine-Tails' attack had
          soured relations between Konoha's leadership and the Uchiha, the
          former believing the latter to be responsible. The Uchiha were
          relocated to the edge of the village, isolating them from the rest of
          the village and making it easier to monitor them. &nbsp;  <a href="/">for more info  </a>
        </p>
      
        
      </div>
    </header>
    <div className="footerdiv" style={{textAlign: "center"}}>
      <h2 id="thapatext" style={{fontFamily: "Dosis, sans-serif"}}>
        Watch naruto YouTube
      </h2>
      <br />
      <iframe
      className='iframe'
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IwjPTonNrSM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <marquee><h4><mark>More episodes coming soon.....</mark></h4></marquee>
    <br /><br />
    <footer style={{width: "100%", height: "100px", backgroundColor: "#010101"}}>
      <h4
        style={{
          color: "white",
          lineHeight: "100px",
          textAlign: "center",
        }}
      >
        @Copyright Mi Developers
      </h4>
      <div className='shareDiv'>
      <FacebookShareButton
        url={"https://peing.net/ja/"}
     
        hashtag={"#hashtag"}
     
     
      >
        <FacebookIcon size={64} round /> 
     
      </FacebookShareButton>

      <TwitterShareButton
        title={"test"}
        url={"https://peing.net/ja/"}
        hashtags={["hashtag1", "hashtag2"]}
      >
        <TwitterIcon size={64} round />
      </TwitterShareButton>
      <EmailShareButton >
       <EmailIcon size={64} round />
      </EmailShareButton>
      </div>
      <span>Facebook</span> &nbsp;&nbsp;
      <span>Twitter</span> &nbsp;&nbsp;&nbsp;
      <span>E-mail </span>
    </footer>
 
        </div>
    );
};

export default Itachi;