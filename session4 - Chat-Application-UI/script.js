"use strict";



const joinGroup= function(){
  document.querySelector("#second_page_div").toggleAttribute("style");
  document.querySelector("#first_page_div").setAttribute("style","display:none;");
};



const logout= function(){
  document.querySelector("#first_page_div").toggleAttribute("style");
  document.querySelector("#second_page_div").setAttribute("style","display:none;");
};

const sendMsg= function(){
    const msg=`
    <div align="right" class="container">
    <p style="background-color:white; width:50%" align="left";>You: ${document.querySelector('#group_msg').value}</p>
    <time datetime="YYYY-MM-DD hh:mm:ss">${Date()}</time>
    </div>
    `;

    document.querySelector('#msg_area').insertAdjacentHTML('beforeend',msg);
    document.querySelector('#group_msg').value="";
  };

const clickEvent= function(){
    console.log("Click Event");
};

document.querySelector('#join_group').addEventListener("click",clickEvent);
document.querySelector('#logout_group').addEventListener("click",clickEvent);
document.querySelector('#send_msg_btn').addEventListener("click",clickEvent);
document.querySelector('#group_msg').addEventListener('keydown', (event) => 
{
    if (event.keyCode === 13 && event.altKey)
    {
        document.querySelector('#group_msg').value+="\r\n";
        console.log("Alt+Enter Key Event");
    }else if(event.key==='Enter'){
        console.log("Enter Key Event");
        sendMsg();
    }
});



