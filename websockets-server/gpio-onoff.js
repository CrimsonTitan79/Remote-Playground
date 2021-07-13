gpio = require('../gpio-toggle');

module.exports = function (socket) {

    socket.on('gpio0_on', ()=> { gpio.LED_ctl(gpio.LED_0,1); console.log("0 on");});
    socket.on('gpio0_off', ()=> { gpio.LED_ctl(gpio.LED_0,0); console.log("0 off");});

    socket.on('gpio1_on', ()=> { gpio.LED_ctl(gpio.LED_1,1); console.log("1 on");});
    socket.on('gpio1_off', ()=> { gpio.LED_ctl(gpio.LED_1,0); console.log("1 off");});

    socket.on('gpio2_on', ()=> { gpio.LED_ctl(gpio.LED_2,1); console.log("2 on");});
    socket.on('gpio2_off', ()=> { gpio.LED_ctl(gpio.LED_2,0); console.log("2 off");});

    socket.on('gpio3_on', ()=> { gpio.LED_ctl(gpio.LED_3,1); console.log("3 on");});
    socket.on('gpio3_off', ()=> { gpio.LED_ctl(gpio.LED_3,0); console.log("3 off");});
}
