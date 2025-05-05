
let displayFrame = document.getElementById(`stream__box`)
let videoFrames = document.getElementsByClassName(`video__container`)
let streamsContainer = document.getElementById(`streams__container`)
let streamActions = document.getElementsByClassName(`stream__actions`)
let leaveStream = document.getElementById(`leave-btn`)
let userIdInDisplayFrame = null;

let expandVideoFrame = (e)=>{
  let child = displayFrame.children[0]
  if(child){
    document.getElementById(`streams__container`).appendChild(child)
  }

  displayFrame.style.display='block'
  displayFrame.appendChild(e.currentTarget)
  userIdInDisplayFrame = e.currentTarget.id

  for(let i=0; videoFrames.length>i; i++){
    if(videoFrames[i].id != userIdInDisplayFrame){
      videoFrames[i].style.height='150px'
      videoFrames[i].style.width='150px'
    }
  } 
  
  streamsContainer.style.cssText='width: calc(30% - 10px);  background-color: rgb(41, 41, 41); border-radius: 20px; margin-top: 0em;'

}

for(let i=0; videoFrames.length>i; i++){
  videoFrames[i].addEventListener('click',expandVideoFrame)
}

let hideDisplayFrame= ()=>{
  userIdInDisplayFrame=null
  displayFrame.style.display=null

  let child = displayFrame.children[0]
  document.getElementById(`streams__container`).appendChild(child)

  for(let i=0;videoFrames.length>i;i++){
    videoFrames[i].style.height='300px'
    videoFrames[i].style.width='300px'
  }

  streamsContainer.style.cssText=`
  width: 100%; 
  height: calc(100vh - 84px); 
  margin-top: 0em;
  overflow-y: auto;
  padding-bottom: 40px;
  `
}

displayFrame.addEventListener('click',hideDisplayFrame)

let leaveRoom= ()=>{
    window.location='index.html'
}
leaveStream.addEventListener('click',leaveRoom)