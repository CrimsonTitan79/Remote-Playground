/* Import Websockets module */
import { main_sockets } from './websockets-client/socket-client-main.js'


//************************ uncomment this below if no RPI ******************************************************/
const socket = io.connect('https://localhost:3000', {reconnect: true}); //client establishes websocket connection to server

/************************************** comment if no RPI *****************************/
// const socket = io.connect('https://192.168.20.4:3000', {reconnect: true}); //client establishes websocket connection to server

/**********************DEPLOYMENT ********************/
// const socket = io.connect('https://20.194.44.54:8080', {reconnect: true}); //client establishes websocket connection to server

/* Declare all Document Objects to be manipulated */
const online = document.getElementById('online'),
    gpio0 = document.getElementById('gpio0'),
    gpio1 = document.getElementById('gpio1'),
    gpio2 = document.getElementById('gpio2'),
    gpio3 = document.getElementById('gpio3'),
    box1 = document.getElementById('box1'),
    box2 = document.getElementById('box2'),
    box3 = document.getElementById('box3'),
    box4 = document.getElementById('box4'),
    box5 = document.getElementById('box5'),
    collapsecol = document.getElementById('collapsecol'),
    ticketcount = document.getElementById('ticket-count'),
    btnpress = document.getElementById('btnsound'),
    chatcon = document.getElementById('cht'),
    statcon = document.getElementById('stat'),
    bigcon = document.getElementById('big-container'),
    cashout_btn = document.getElementById('cashout'),
    simon_startquit_btn = document.getElementById('simon-startquit'),

    curr_score = document.getElementById('curr_score'),


    username = document.getElementById("user").innerHTML,
    inputfield = document.getElementById("chat-input"),
    play_btns = document.getElementsByClassName('play-buttons'),
    chat_btn = document.getElementById('chatbutton'),
    queue_btn = document.getElementById('queuebutton'),
    exit_btn = document.getElementById('exitbutton'),
    navbar = document.getElementById('nav-bar'),
    inputs_class = document.getElementsByClassName('inputs');





var input_focus = false;

for (let i=0; i < inputs_class.length; i++) {
    inputs_class[i].addEventListener('focus', function() { input_focus = true; console.log(input_focus) });
    inputs_class[i].addEventListener('blur', function() { input_focus = false; console.log(input_focus) });
}

// function addMultipleEventListener(element, events, handler) {
//   events.forEach(e => element.addEventListener(e, handler))
// }


    //Sticky Navbar
    var sticky = navbar.offsetTop;

    window.onscroll = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
    
    //Use enter key to send chat messages
    inputfield.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        chat_btn.click();
      }
    });

    inputfield.addEventListener("keyup", (event) => {
      if (event.key === "A") {
        event.preventDefault();
        idlebtn.click();
      }
    })

    //Background Music Toggle
    var musicbtn = document.getElementById("bgmusicbtn");
    var bgmusic = document.getElementById("bgmusic");

    musicbtn.onclick = () => {
      bgmusic.play();
    }

    //ability to collapse 2nd column
    var isCollapsed = false;

    collapsecol.onclick = () => {
      if (isCollapsed) {
        bigcon.classList.remove("big-container2");
        statcon.classList.remove("dispnone");
        chatcon.classList.remove("dispnone");
        bigcon.classList.add("big-container1");
        collapsecol.value = ">";
        isCollapsed = false;        
      }
      else {
        bigcon.classList.remove("big-container1");
        statcon.classList.add("dispnone");
        chatcon.classList.add("dispnone");
        bigcon.classList.add("big-container2");
        collapsecol.value = "<";
        isCollapsed = true;
      }
    }

    //Modal Box
    var infomodal = document.getElementById("infomodal");
    var infobtn = document.getElementById("modalbtn");
    var span = document.getElementsByClassName("close")[0];
    

    infobtn.onclick = () => {
      infomodal.style.display = "block";
    }

    span.onclick = () => {
      infomodal.style.display = "none";
    }

    window.onclick = (event) => {
      if (event.target == infomodal) {
        infomodal.style.display = "none";
      }
    }   

function addMultipleEventListener(element, events, handler) {
  events.forEach(e => element.addEventListener(e, handler))
}


/* Simon Says flags */
var simon_on = false; 
var simon_speaks = false;
const gpio_list = [gpio0, gpio1, gpio2, gpio3];
const box_list = [box1, box2, box3, box4, box5];


//intialize all websockets
main_sockets(window, document, 
    socket,
    addMultipleEventListener,
    gpio_list,
    box_list,
    simon_on,
    simon_speaks,
    simon_startquit_btn,
    play_btns,
    chat_btn,
    curr_score,
    queue_btn,
    exit_btn,
    inputfield,
    username, 
    cashout_btn,
    ticketcount
);


export { input_focus, btnpress } ;
