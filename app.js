var i=1;
let x=i+1;
  let y=i+2;
  let z=i+3;
 let imgg1 = document.getElementById('imgg1');
 let imgg2 = document.getElementById('imgg2');
 let imgg3 = document.getElementById('imgg3');
 setInterval(myTimer, 4000);
 function myTimer() {
 
  if(z===5){
    z=1;
  }
  imgg1.innerHTML='<img src="sponsor'+x+'.png" alt="">';
  imgg2.innerHTML='<img src="sponsor'+y+'.png" alt="">';
  imgg3.innerHTML='<img src="sponsor'+z+'.png" alt="">';
  let temp=y;
  y=z;
  x=temp;
  z++;
  
          i++;
      }

      //carousel script ends

      //boxes script to change circle
         
        //  console.log(cbox.innerHTML)
   
         setInterval(shifttonext, 4000);
        var sValue=new Array(1,1,1,1,1,1)
        var j=new Array(1,1,1,1,1,1)
        const hd=[["balls","outs","hatrics"],["runs","boundaries","singles"],["runs","boundaries","singles"],["runs","boundaries","singles"],["runs","boundaries","singles"],["runs","boundaries","singles"]];
        const hnd=[[17388,98765,90987],[173,8765,987],[97388,985765,587],[8,01,907],[1988,96665,767],[676,765,17]]
      //  let j=1;
        // console.log(heading.innerHTML)
         
        //  sValue[1]=1;
       function shifttonext(){
  for (let i = 0; i< 6; i++) {
    if(i==3){
      
    }
    let heading=document.getElementsByClassName('heading')[i];
        let hnum=document.getElementsByClassName('hnum')[i];
    let cbox=document.getElementsByClassName('cbox')[i];
        cbox.innerHTML= cbox.innerHTML.replace('circle'+sValue[i],'circleb'+sValue[i]);
        sValue[i]++;
        if(sValue[i]===4 ){
          sValue[i]=1;
        }
        if(i===3 && sValue[i]===3){
          sValue[i]=1;
        }
        if(j[i]===3){
          j[i]=0;
        }
        let v=j[i];
        heading.innerHTML=hd[i][v];
        hnum.innerHTML=hnd[i][v];
        j[i]++;
        cbox.innerHTML=cbox.innerHTML.replace('circleb'+sValue[i],'circle'+sValue[i]);
      
    
  }
        
       }
         



      let box=document.getElementsByClassName('bbox')[0];
      let lbutton = document.getElementById('live');
      // let lbutton=document.getElementsByClassName('sbtngl')[0];
      var rbutton = document.getElementById('result');
      var sbutton = document.getElementById('shedule');
      let sbox=document.getElementById('scontainer');
      
      lbutton.addEventListener('click', () => {
        console.log(lbutton.outerHTML) 
          // lbutton.outerHTML=lbutton.outerHTML.replace("sbtngl","sbtnbl");
          lbutton.setAttribute("class","sbtnbl")
          rbutton.setAttribute("class","sbtngr")
          sbutton.setAttribute("class","sbtngs")
          // lbutton.outerHTML=lbutton.outerHTML;
          box.innerHTML="<h4 id='l'>No live Matches rn</h4>"; 
          console.log(lbutton.outerHTML) 
          // lbutton = document.getElementById('live');
          console.log(lbutton.outerHTML) 
      })
   
      rbutton.addEventListener('click', () => {
        lbutton.setAttribute("class","sbtngl")
          rbutton.setAttribute("class","sbtnbr")
          sbutton.setAttribute("class","sbtngs")
          box.innerHTML=`
       <div class="boxes">
        <div class="imagebox">
          <img src="pk.png" alt="">
          <img src="india.png" alt="">
        </div>
        <div class="descbox">
          <p class="grey">pakistan vs india    <p class="blue">Pakistan won by 5 wicktes</p></p>
       
        </div>
      </div>
      <div class="boxes">
        <div class="imagebox">
          <img src="pk.png" alt="">
          <img src="india.png" alt="">
        </div>
        <div class="descbox">
          <p class="grey">pakistan vs india    <p class="blue">Pakistan won by 5 wicktes</p></p>
       
        </div>
      </div>
      <div class="boxes">
        <div class="imagebox">
          <img src="pk.png" alt="">
          <img src="india.png" alt="">
        </div>
        <div class="descbox">
          <p class="grey">pakistan vs india    <p class="blue">Pakistan won by 5 wicktes</p></p>
       
        </div>
      </div>
      <div class="boxes">
        <div class="imagebox">
          <img src="pk.png" alt="">
          <img src="india.png" alt="">
        </div>
        <div class="descbox">
          <p class="grey">pakistan vs india    <p class="blue">Pakistan won by 5 wicktes</p></p>
       
        </div>
      </div>
      <div class="boxes">
        <div class="imagebox">
          <img src="pk.png" alt="">
          <img src="india.png" alt="">
        </div>
        <div class="descbox">
          <p class="grey">pakistan vs india    <p class="blue">Pakistan won by 5 wicktes</p></p>
       
        </div>
      </div>
   `; 
      })
      sbutton.addEventListener('click', () => {
        lbutton.setAttribute("class","sbtngl")
          rbutton.setAttribute("class","sbtngr")
          sbutton.setAttribute("class","sbtnbs")
          box.innerHTML=`<div class="boxes">
<div class="imagebox">
  <img src="pk.png" alt="">
  <img src="india.png" alt="">
</div>
<div class="descbox">
  <p class="grey">pakistan vs india    <p class="blue">Tommorow at 6am us time</p></p>

</div>
</div>
<div class="boxes">
<div class="imagebox">
  <img src="pk.png" alt="">
  <img src="india.png" alt="">
</div>
<div class="descbox">
  <p class="grey">pakistan vs india    <p class="blue">Tommorow at 6am us time</p></p>

</div>
</div>
<div class="boxes">
<div class="imagebox">
  <img src="pk.png" alt="">
  <img src="india.png" alt="">
</div>
<div class="descbox">
  <p class="grey">pakistan vs india    <p class="blue">Tommorow at 6am us time</p></p>

</div>
</div>

<div class="boxes">
<div class="imagebox">
  <img src="pk.png" alt="">
  <img src="india.png" alt="">
</div>
<div class="descbox">
  <p class="grey">pakistan vs india    <p class="blue">Tommorow at 6am us time</p></p>

</div>
</div>
<div class="boxes">
<div class="imagebox">
  <img src="pk.png" alt="">
  <img src="india.png" alt="">
</div>
<div class="descbox">
  <p class="grey">pakistan vs india    <p class="blue">Tommorow at 6am us time</p></p>

</div>
</div>`; 
      })
    let loginb=document.getElementById('loginb');
    let homesection=document.getElementsByClassName('homesection')[0];
    loginb.addEventListener('click', () => {
      homesection.innerHTML="<h1>Login page</h1>";
    })
let homeb=document.getElementById('home');
//  console.log(homeb.innerHTML)
homeb.addEventListener('click',() => {
homesection.innerHTML=`
<div class="homesectionleft">
<!-- youtube div -->
<div class="youtubebox">
<iframe width="100%" height="80%" src="https://www.youtube.com/embed/-_yTuPwU6Bw" title="Pakistan vs South Africa Highlights T20 world cup 2022 | Pak vs Sa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem debitis quia eligendi voluptas eum architecto, optio non assumenda perferendis! Repellendus.
</div>
<div class="pointstable">
  <div class="optionsp">
    <div class="teamsb">karachi</div>
    <div class="teamsb">isb</div>
    <div class="teamsb">lahore</div>
    <div class="teamsb">quetta</div>
    <div class="teamsb">peshawar</div>
    <div class="teamsb">lahore</div>
    <div class="teamsb">quetta</div>
    <div class="teamsb">peshawar</div>
  </div>
  <div class="headingb">
    <div class="bbtn2">Points Table</div>
  </div>
  <div class="scoretable">
    <div class="scorebox " id="mainst">
      <div class="nums">
      #
      </div>
      <div class="teamnames">
          Team
      </div>
      <div class="others">Mat</div>
      <div class="others">Won</div>
      <div class="others">Lost</div>
      <div class="others">N/R</div>
      <div class="others">PTS</div>
      <div class="others">Net rns</div>
    </div>
    <div class="scorebox">
      <div class="nums">
      1
      </div>
      <div class="teamnames">
        <img src="qg.png" alt="">
          Quetta Gladiators
      </div>
      <div class="others">112</div>
      <div class="others">67</div>
      <div class="others">56</div>
      <div class="others">23</div>
      <div class="others">123</div>
      <div class="others">1.677</div>
    </div>
 
    <div class="scorebox">
      <div class="nums">
      2
      </div>
      <div class="teamnames">
        <img src="qg.png" alt="">
          Quetta Gladiators
      </div>
      <div class="others">112</div>
      <div class="others">67</div>
      <div class="others">56</div>
      <div class="others">23</div>
      <div class="others">123</div>
      <div class="others">1.677</div>
    </div>
 
    <div class="scorebox">
      <div class="nums">
      3
      </div>
      <div class="teamnames">
        <img src="qg.png" alt="">
          Quetta Gladiators
      </div>
      <div class="others">112</div>
      <div class="others">67</div>
      <div class="others">56</div>
      <div class="others">23</div>
      <div class="others">123</div>
      <div class="others">1.677</div>
    </div>
 
    <div class="scorebox">
      <div class="nums">
      4
      </div>
      <div class="teamnames">
        <img src="qg.png" alt="">
          Quetta Gladiators
      </div>
      <div class="others">112</div>
      <div class="others">67</div>
      <div class="others">56</div>
      <div class="others">23</div>
      <div class="others">123</div>
      <div class="others">1.677</div>
    </div>
 
    <div class="scorebox">
      <div class="nums">
      5
      </div>
      <div class="teamnames">
        <img src="qg.png" alt="">
          Quetta Gladiators
      </div>
      <div class="others">112</div>
      <div class="others">67</div>
      <div class="others">56</div>
      <div class="others">23</div>
      <div class="others">123</div>
      <div class="others">1.677</div>
    </div>
 
    <div class="scorebox">
      <div class="nums">
      6
      </div>
      <div class="teamnames">
        <img src="qg.png" alt="">
          Quetta Gladiators
      </div>
      <div class="others">112</div>
      <div class="others">67</div>
      <div class="others">56</div>
      <div class="others">23</div>
      <div class="others">123</div>
      <div class="others">1.677</div>
    </div>
 
    <div class="scorebox">
      <div class="nums">
      7
      </div>
      <div class="teamnames">
        <img src="qg.png" alt="">
          Quetta Gladiators
      </div>
      <div class="others">112</div>
      <div class="others">67</div>
      <div class="others">56</div>
      <div class="others">23</div>
      <div class="others">123</div>
      <div class="others">1.677</div>
    </div>
 
  <div class="mored">
    more Details
  </div>

  </div>
</div>
<div class="playerst">
  <div class="playerslist">
    <div class="headingb">
      <div class="bbtn2">Batting</div>
    </div>
    <div class="scorebox head">
      <div class="players">
        
       <h3>players</h3>
      </div>
      <div class="ach">
        Runs
      </div>
    </div>
    <div class="scorebox">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        112
      </div>
    </div>
    <div class="scorebox">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        112
      </div>
    </div>
    <div class="scorebox">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        112
      </div>
    </div>
    <div class="scorebox">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        112
      </div>
    </div>
    <div class="scorebox last">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        119
      </div>
    </div>
    <div class="mored">
      Complete List
    </div>
  </div>
  
  <div class="playerslist">
    <div class="headingb">
      <div class="bbtn2">Bowling</div>
    </div>
    <div class="scorebox head">
      <div class="players">
        
       <h3>players</h3>
      </div>
      <div class="ach">
        Runs
      </div>
    </div>
    <div class="scorebox">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        112
      </div>
    </div>
    <div class="scorebox">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        112
      </div>
    </div>
    <div class="scorebox">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        112
      </div>
    </div>
    <div class="scorebox">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        112
      </div>
    </div>
    <div class="scorebox last">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        119
      </div>
    </div>
    <div class="mored">
      Complete List
    </div>
  </div>
  <div class="playerslist">
    <div class="headingb">
      <div class="bbtn2">Ranking</div>
    </div>
    <div class="scorebox head">
      <div class="players">
        
       <h3>players</h3>
      </div>
      <div class="ach">
        Runs
      </div>
    </div>
    <div class="scorebox">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        112
      </div>
    </div>
    <div class="scorebox">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        112
      </div>
    </div>
    <div class="scorebox">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        112
      </div>
    </div>
    <div class="scorebox">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        112
      </div>
    </div>
    <div class="scorebox last">
      <div class="players">
        <img src="afridi.png" alt="">
        Shahid Afridi
      </div>
      <div class="ach">
        119
      </div>
    </div>
    <div class="mored">
      Complete List
    </div>
  </div>
</div>
<div class="mb">
  <div class="ub">
    <div class="sqbox rect">
      <div class="headbox" >
        <p class="heading">Balls</p>
         <p class="hnum">17,388</p>
      </div>
      <img src="cw.png" alt="">
      <div class="cbox">
        <div class="circle1"></div>
        <div class="circleb2"></div>
        <div class="circleb3"></div>
      </div>
    </div>
    <div class="sqbox lblue">
      <div class="headbox">
        <p class="heading">Balls</p>
         <p class="hnum">17,388</p>
      </div>
      <img src="cw.png" alt="">
      <div class="cbox">
        <div class="circle1"></div>
        <div class="circleb2"></div>
        <div class="circleb3"></div>
      </div>
    </div>
    <div class="sqbox ">  
      <div class="headbox">
        <p class="heading">WKTS</p>
         <p class="hnum">17,388</p>
      </div>
      <img src="w.png" alt=""> <div class="cbox">
      <div class="circle1"></div>
      <div class="circleb2"></div>
      <div class="circleb3"></div>
    </div></div>
  </div>
  <div class="lb">
    <div class="sqbox"> 
      <div class="headbox">
        <p class="heading">Balls</p>
         <p class="hnum">17,388</p>
      </div>
      <img src="boundary.png" alt="">
        <div class="cbox">
      <div class="circle1"></div>
      <div class="circleb2"></div>
  
    </div></div>
    <div class="sqbox lblue"> 
      <div class="headbox">
        <p class="heading">Balls</p>
         <p class="hnum">17,388</p>
      </div>  
      <img src="ro.png" alt=""><div class="cbox">
      <div class="circle1"></div>
      <div class="circleb2"></div>
      <div class="circleb3"></div>
    </div></div>
    <div class="sqbox">  
      <div class="headbox">
        <p class="heading">Balls</p>
         <p class="hnum">17,388</p>
      </div> <img src="ro.png" alt="">  <div class="cbox">
      <div class="circle1"></div>
      <div class="circleb2"></div>
      <div class="circleb3"></div>
    </div></div>
    <div class="sqbox lblue">  
      <div class="headbox">
        <p class="heading">Balls</p>
         <p class="hnum">17,388</p>
      </div>   <img src="ro.png" alt=""><div class="cbox">
      <div class="circle"></div>
   
    </div></div>
  </div>
</div>
</div>
<div class="homesectionright">
<div class="resultandshedulematches">
   <div class="sbox" id="scontainer">
        <div class="sbtngl" id="live"><h4>Live</h4></div>
        <div class="sbtnbr" id="result"><h4>Results</h4></div>
        <div class="sbtngs"  id="shedule"><h4>Shedule</h4></div>
   </div>
   <div class="bbox">
       <div class="boxes">
        <div class="imagebox">
          <img src="pk.png" alt="">
          <img src="india.png" alt="">
        </div>
        <div class="descbox">
          <p class="grey">pakistan vs india    <p class="blue">Pakistan won by 5 wicktes</p></p>
       
        </div>
      </div>
      <div class="boxes">
        <div class="imagebox">
          <img src="pk.png" alt="">
          <img src="india.png" alt="">
        </div>
        <div class="descbox">
          <p class="grey">pakistan vs india    <p class="blue">Pakistan won by 5 wicktes</p></p>
       
        </div>
      </div>
      <div class="boxes">
        <div class="imagebox">
          <img src="pk.png" alt="">
          <img src="india.png" alt="">
        </div>
        <div class="descbox">
          <p class="grey">pakistan vs india    <p class="blue">Pakistan won by 5 wicktes</p></p>
       
        </div>
      </div>
      <div class="boxes">
        <div class="imagebox">
          <img src="pk.png" alt="">
          <img src="india.png" alt="">
        </div>
        <div class="descbox">
          <p class="grey">pakistan vs india    <p class="blue">Pakistan won by 5 wicktes</p></p>
       
        </div>
      </div>
      <div class="boxes">
        <div class="imagebox">
          <img src="pk.png" alt="">
          <img src="india.png" alt="">
        </div>
        <div class="descbox">
          <p class="grey">pakistan vs india    <p class="blue">Pakistan won by 5 wicktes</p></p>
       
        </div>
      </div>

      
   </div>
   <div class="sbox">
     <h3> complete list</h3>
   </div>

   <!-- //right cont ends -->
</div>
<div class="cboxes" id="gallery">
  <div class="bbtn">Gallery</div>
  <div class="imgc">
    <img src="awardn.jfif" alt="">
  <h4>PCB Awards 2022</h4>
  </div>
</div>

<div class="cboxes" id="Download">
<div class="bbtn">Download</div>
<div class="downimg">
    <img src="appstore.png" alt="">
    <!-- <img src="playstore.png" alt=""> -->
    <img src="pst.png" alt="">
  </div>
</div>

<div class="cboxes" id="facebook">
<div class="bbtn">Facebook</div>
<div class="newsfeed">
b ullam commodi laudantium natus quos quaerat illo, quo dolor recusandae nam hic placeat asperiores, dolore veniam cupiditate aperiam tempora perferendis iure odit aut corporis tenetur dolorum maxime. Ullam veniam voluptatem repellendus in magni reprehenderit ducimus neque eum vitae error doloribus, debitis recusandae ab cum vel suscipit. Illo ipsa fugiat voluptatem nostrum sed pariatur similique culpa, aut accusamus expedita dolores odit deleniti sint laudantium dolorum commodi eligendi facere aperiam voluptas delectus laboriosam magni! Atque animi odit laboriosam officiis explicabo obcaecati, exercitationem architecto. Facere officiis dignissimos, nisi ipsum aspernatur harum? Repellendus inventore id ad, ipsam consequatur iste quod doloribus impedit suscipit at exercitationem sunt alias mollitia voluptatem aperiam temporibus velit fuga eum consequuntur fugiat tempore tempora molestias rem beatae? Aspernatur, optio, accusantium, neque vel aut amet esse quidem unde fugit ab expedita quo corrupti accusamus error eos excepturi ducimus odit a natus nisi magni molestiae. Officia laudantium eos doloremque, quia maiores perspiciatis ex nihil voluptatem tempora, alias quidem iste dolorum reprehenderit. In facilis libero officia cumque, distinctio vel fugiat nostrum odio laborum, dolores inventore earum magni dicta tempore totam accusantium possimus. Quasi quidem accusantium nisi consectetur temporibus aut corrupti rerum enim hic odit, unde sit quaerat magnam iste beatae necessitatibus recusandae non. Quidem deleniti amet, consectetur blanditiis aliquam accusantium soluta asperiores culpa quisquam nihil similique assumenda voluptas magnam tempore autem possimus, sed, totam voluptates. Quasi unde repellendus quibusdam deleniti quod in recusandae tempore vero cupiditate autem cumque sit veritatis, atque ea quas. Tempora dolorum veniam temporibus. Sunt sint earum voluptates, voluptas tempore iusto consequatur voluptatibus labore itaque? Deserunt maiores itaque vel quasi dignissimos aut, provident molestias est accusantium, animi tenetur ipsa iste, reprehenderit eligendi quam aperiam! In ad eius minima debitis obcaecati adipisci nesciunt sunt voluptates natus earum quod nemo repudiandae ut qui explicabo, distinctio dignissimos quis deleniti placeat eveniet odio voluptate esse incidunt? Repellendus ab cum eveniet voluptate optio tenetur voluptatem quos excepturi sapiente porro asperiores consectetur, rerum saepe officia qui natus placeat dolore, inventore ipsum sint nesciunt, enim exercitationem! Voluptate delectus molestiae, ipsam commodi, quod dignissimos natus, doloremque vel omnis eum dicta. Facere quod placeat facilis sit voluptates eaque harum dicta. Aut nemo doloremque reprehenderit sed est fugiat, delectus eveniet facilis voluptatibus similique fuga ex voluptas beatae cumque consectetur officiis nostrum provident? Harum eveniet asperiores quo reprehenderit commodi perferendis hic, ullam ipsa adipisci, eos ex, ratione magni tempora ut voluptates ducimus dolores excepturi modi necessitatibus deserunt pariatur. Quae accusantium esse, odit voluptate iste voluptatem ex, in delectus commodi sunt corporis debitis ut. Repellendus iure blanditiis deserunt minus, vitae consequuntur labore perferendis error est praesentium temporibus modi nostrum molestias eaque laboriosam corporis, quasi minima. Hic excepturi cupiditate deleniti iure aspernatur explicabo maxime dolorum error natus, accusantium repellat quo, ipsum accusamus. Eaque inventore quidem dignissimos doloremque, ipsam amet expedita voluptate maiores iusto totam iure.
</div>
</div>
<div class="cboxes" id="twitter">
<div class="bbtn">Twitter</div>
<div class="newsfeed">
  
</div>
</div>
</div>



`;
})