//************************8 uncomment this below if no RPI ******************************************************/
 var socket = io.connect('http://localhost:3000'); //client establishes websocket connection to server

/**************************************88 comment if no RPI *****************************/
//var socket = io.connect('http://192.168.18.45:3000'); //client establishes websocket connection to server


var online = document.getElementById('online'),

    gpio1 = document.getElementById('gpio1'),
    gpio2 = document.getElementById('gpio2'),
    gpio3 = document.getElementById('gpio3'),
    userpassbox = document.getElementById("userpass"),
    inputfield = document.getElementById("user");
    signup = document.getElementById("signuplink");

var tempname = null;

//Listen for events
socket.on('online', (online_num)=>{
    online.innerHTML = `<b>Online: ${online_num}</b>`;  
});

socket.on('gpio1_click', (gpio1_status)=>{
    gpio1.checked = (gpio1_status) ? true : false;
});

socket.on('gpio2_click', (gpio2_status)=>{
    gpio2.checked = (gpio2_status) ? true : false;
});
socket.on('gpio3_click', (gpio3_status)=>{
    gpio3.checked = (gpio3_status) ? true : false;
});

socket.on('message', (text) => {
    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
});

document.querySelector('#loginbutton').onclick = () => {
    tempname = document.getElementById("user").value;
    document.getElementById("loginbutton").value = "SIGNOUT";
    document.getElementById("user-label").innerHTML =`Welcome, ${tempname}!`;
    userpassbox.removeChild(inputfield); 
    signup.innerHTML = 'PROFILE';
    signup.href="profile.html";
}

document.querySelector('#chatbutton').onclick = () => {
    const text = document.querySelector('#chat-input').value;
    socket.emit('message', text, tempname);
}

gpio1.addEventListener('click', ()=>{
    socket.emit('gpio1_click');
});

gpio2.addEventListener('click', ()=>{
    socket.emit('gpio2_click');
});

gpio3.addEventListener('click', ()=>{
    socket.emit('gpio3_click');
});

