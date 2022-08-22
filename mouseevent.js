document.body.addEventListener('mousemove', function mousemove(e){
    this.style.setProperty('--x', e.clientX);
    this.style.setProperty('--y', e.clientY);
    console.log(e.offsetX)
  });

/*
function mousemove(event){
    console.log("pageX: ",event.pageX, 
    "pageY: ", event.pageY, 
    "clientX: ", event.clientX, 
    "clientY:", event.clientY)
    this.style.setProperty('--x', event.pageX);
    this.style.setProperty('--y', event.pageY);
}*/