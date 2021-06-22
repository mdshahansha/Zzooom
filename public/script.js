
let myVideo=document.createElement('video');
myVideo.muted=true;

navigator.mediaDevices.getUsedMedia({
    video:true,
    audio:true
}).then(stream=>{
    myVideo =stream;
    addVideoStream(myVideo,stream);

})

const addVideoStream=(video,stream)=>{
    video.srcObject=stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();
        
    })
}