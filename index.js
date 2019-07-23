
//     var width = 320;    // We will scale the photo width to this
//     var height = 0;     // This will be computed based on the input stream
  
//     var streaming = false;
  
//     var video = null;
//     var canvas = null;
//     var photo = null;
//     var startbutton = null;

//     function startup() {
//         video = document.getElementById('video');
//         canvas = document.getElementById('canvas');
//         photo = document.getElementById('photo');
//         startbutton = document.getElementById('startbutton');

//         navigator.mediaDevices.getUserMedia({ video: true, audio: false })
//             .then(function(stream) {
//                 video.srcObject = stream;
//                 video.play();
//             })
//             .catch(function(err) {
//                 console.log("An error occurred: " + err);
//             });

//             video.addEventListener('canplay', function(ev){
//                 if (!streaming) {
//                   height = video.videoHeight / (video.videoWidth/width);
                
//                   video.setAttribute('width', width);
//                   video.setAttribute('height', height);
//                   canvas.setAttribute('width', width);
//                   canvas.setAttribute('height', height);
//                   streaming = true;
//                 }
//               }, false);

//               startbutton.addEventListener('click', function(ev){
//                 takepicture();
//                 ev.preventDefault();
//               }, false);

//               clearphoto();
//   }

//   function clearphoto() {
//     var context = canvas.getContext('2d');
//     context.fillStyle = "#AAA";
//     context.fillRect(0, 0, canvas.width, canvas.height);

//     var data = canvas.toDataURL('image/png');
//     photo.setAttribute('src', data);
//   }

//   function takepicture() {
//     var context = canvas.getContext('2d');
//     if (width && height) {
//       canvas.width = width;
//       canvas.height = height;
//       context.drawImage(video, 0, 0, width, height);
    
//       var data = canvas.toDataURL('image/png');
//       photo.setAttribute('src', data);
//     } else {
//       clearphoto();
//     }
//   }

//   startup()

    
function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }
  
  if (hasGetUserMedia()) {
    // Good to go!
  } else {
    alert('getUserMedia() is not supported by your browser');
  }

hasGetUserMedia()

const constraints = {
    video: true
  };
  
  const video = document.querySelector('video');
  
navigator.mediaDevices.getUserMedia(constraints).
then((stream) => {video.srcObject = stream});

const hdConstraints = {
    video: {width: {min: 1280}, height: {min: 720}}
    };
    
    navigator.mediaDevices.getUserMedia(hdConstraints).
    then((stream) => {video.srcObject = stream});
        
    const vgaConstraints = {
    video: {width: {exact: 640}, height: {exact: 480}}
    };
    
    navigator.mediaDevices.getUserMedia(vgaConstraints).
    then((stream) => {video.srcObject = stream});