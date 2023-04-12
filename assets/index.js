"use strict";
const canvas = document.getElementById("canvas");
console.assert(canvas instanceof HTMLCanvasElement, "Canvas is missing");
const context = canvas.getContext("2d",{alpha: false});
function redraw(width,height) {
    context.fillStyle="#000000";
    context.fillRect(0,0,width,height);
    context.fillStyle="#ffffff";
    context.fillRect(100,100,100,100);
}
//Note: requestIdleCallback adds something that's called when idle
requestAnimationFrame(function self(time) {
    redraw(canvas.width,canvas.height);
    requestAnimationFrame(self);
});
window.addEventListener('resize',(event)=>{
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    redraw(width,height);
});
