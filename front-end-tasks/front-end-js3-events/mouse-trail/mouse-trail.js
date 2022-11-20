"use strict"

let dots = [],
  mouse = {
    x: 0,
    y: 0,
  };

let Dot = function () {
  this.x = 0;
  this.y = 0;
  this.node = ( () =>{
    let newDiv = document.createElement("div");
    newDiv.className = "trail";
    document.body.appendChild(newDiv);
    return newDiv;
  })();
};

Dot.prototype.draw = function () {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

for (let i = 0; i < 12; i++) {
  let dot = new Dot();
  dots.push(dot);
}

const draw = ()=> {
  let x = mouse.x,
    y = mouse.y;

  dots.forEach((dot, index, dots) =>{
    let nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * 0.6;
    y += (nextDot.y - dot.y) * 0.6;
  });
}

addEventListener("mousemove",(event)=> {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

const start = ()=> {
  draw();
  requestAnimationFrame(start);
}

start();


