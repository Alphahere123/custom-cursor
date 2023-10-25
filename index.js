const main=document.querySelector(".main")

main.addEventListener("mousemove",function(dets){
    const crsr=document.querySelector(".cursor")
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
  

})