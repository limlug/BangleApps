
var connected = false;
var batteryInterval = false;
var messages = 0;
var ang = 0;
var position = "RHR";
var position_code = 0;

var img = {
  width : 200, height : 200, bpp : 1,
  transparent : 1,
  buffer : require("heatshrink").decompress(atob("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"))
}
var spinner = {
  width : 20, height : 22, bpp : 1,
  transparent : 1,
  buffer : require("heatshrink").decompress(atob("//+n//4P//kP//AAgX4gP/gF/8EHwk8mEH8YIBAgWAv08ofD/wKB+EH/+Aj4nIBIPjA="))
}

function drawSpinner() {
  ang += 0.1;
  g.setBgColor(0, 0, 0);
  g.clearRect(20, 190, 60, 240);
  g.setBgColor(1, 1, 1);
  g.drawImage(spinner, 40, 215, {rotate: ang});
}

function drawMessagesSent(){
  g.setBgColor(0, 0, 0);
  g.clearRect(170, 180, 200, 200);
  g.setBgColor(1, 1, 1);
  g.drawString(messages, 170, 180);
  g.drawString("m/sec", 188, 180);
  messages = 0;
}
function drawPosition(){
  g.setBgColor(0, 0, 0);
  g.clearRect(40, 180, 60, 200);
  g.setBgColor(1, 1, 1);
  g.drawString(position, 40, 180);
}

setWatch(() => {
    console.log(Bangle.isLCDOn());
    if (Bangle.isLCDOn() === true){
        Bangle.setLCDPower(0);
    }
    else {
        Bangle.setLCDPower(1);
    }
}, BTN1, {repeat:true});

setWatch(() => {
    Bangle.beep()
    if (position === "RHR"){
        position = "RHL";
        position_code = 1;
        drawPosition();
        NRF.updateServices({
          0xBCDE: {
            0xD000: {
              value: new Int32Array([position_code]).buffer,
              notify: true
            }
          }
        });
    }
    else {
        position = "RHR";
        drawPosition();
        position_code = 0;
        NRF.updateServices({
          0xBCDE: {
            0xD000: {
              value: new Int32Array([position_code]).buffer,
              notify: true
            }
          }
        });

    }
}, BTN3, {repeat:true});

function drawImages(){
  g.clear()
  Bangle.setLCDTimeout(0);
  g.setBgColor(1, 1, 1);
  g.setColor(1, 1, 1);
  g.drawImage(img, 20, 5);
  setInterval(drawSpinner, 50);
  g.setFont("Vector", 20);
  g.drawString("Spirit", 85, 210);
  g.setFont("Vector", 10);
  g.drawString("v0.1", 170, 218);
  drawMessagesSent();
  setInterval(drawMessagesSent, 1000);
  drawPosition();

}

Bangle.setLCDPower(1);


Bangle.on('HRM-raw', function(hrm) {
  if (connected) {
      NRF.updateServices({
        0xBCDE: {
          0xA000: {
            value: hrm.raw,
            notify: true
          }
        }
      });
      messages += 1;
  }
});
Bangle.on('accel', function(xyz) {
  if (connected) {
      NRF.updateServices({
        0xBCDE: {
          0xB000: {
            value: new Float32Array([xyz.x, xyz.y, xyz.z]).buffer,
            notify: true
          }
        }
      });
      messages += 1;
  }
});
Bangle.on('mag', function(xyz) {
  if (connected) {
      NRF.updateServices({
        0xBCDE: {
          0xC000: {
            value: new Int32Array([xyz.x, xyz.y, xyz.z]).buffer,
            notify: true
          }
        }
      });
      messages += 1;
  }
});
//Bangle.on('GPS', function(fix) {console.log(fix);});

function onInit() {
  drawImages();
  //Bangle.setGPSPower(true, "spirit");
  NRF.on('connect', function () {
      connected = true;
      //Bangle.ioWr(0x80,0);
      Bangle.setOptions({"hrmPollInterval": 40});
      Bangle.setOptions({"powerSave": false});
      Bangle.setPollInterval(40);
      Bangle.setHRMPower(true, "spirit");
      Bangle.setCompassPower(true, "spirit");

  });
  NRF.on('disconnect', function () {
      connected = false;
      Bangle.setHRMPower(false, "spirit");
      Bangle.setCompassPower(false, "spirit");

  });
  NRF.setServices({
  0xBCDE : {
    0xA000 : {
        description: 'Bangle Heart Rate Raw',
        notify: true,
        readable: true,
        value: new Int32Array([0]).buffer,
    },
    0xB000 : {
        description: 'Bangle Acceleration',
        notify: true,
        readable: true,
        value: new Float32Array([0, 0, 0, 0, 0]).buffer,
    },
    0xC000 : {
        description: 'Bangle Magnetometer',
        notify: true,
        readable: true,
        value: new Int32Array([0, 0, 0]).buffer,
    },
    0xD000 : {
        description: 'Bangle Position',
        notify: true,
        readable: true,
        value: new Int32Array([position_code]).buffer,
    },

  }
},{advertise:[0xBCDE], uart:true});
}


onInit();
