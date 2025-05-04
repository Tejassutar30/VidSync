// let messagesContainer = document.getElementById('messages');
// messagesContainer.scrollTop = messagesContainer.scrollHeight;

// const memberContainer = document.getElementById('members__container');
// const memberButton = document.getElementById('members__button');

// const chatContainer = document.getElementById('messages__container');
// const chatButton = document.getElementById('chat__button');

// let activeMemberContainer = false;

// memberButton.addEventListener('click', () => {
//   if (activeMemberContainer) {
//     memberContainer.style.display = 'none';
//   } else {
//     memberContainer.style.display = 'block';
//   }

//   activeMemberContainer = !activeMemberContainer;
// });

// let activeChatContainer = false;

// chatButton.addEventListener('click', () => {
//   if (activeChatContainer) {
//     chatContainer.style.display = 'none';
//   } else {
//     chatContainer.style.display = 'block';
//   }

//   activeChatContainer = !activeChatContainer;
// });

let displayFrame = document.getElementById(`stream__box`)
let videoFrames = document.getElementsByClassName(`video__container`)
let streamsContainer = document.getElementById(`streams__container`)
let streamActions = document.getElementsByClassName(`stream__actions`)
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
  
  
streamsContainer.style.cssText='width: calc(30% - 10px); height: 100vh; background-color: rgb(41, 41, 41); border-radius: 20px; margin-top: 0em;'
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

  streamsContainer.style.cssText='width: 100%; height: calc(100vh - 84px); margin-top: 0em;'
}

displayFrame.addEventListener('click',hideDisplayFrame)