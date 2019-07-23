
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



  navigator.getUserMedia(
    // Options
    {
        video: true
    },
    // Success Callback
    function(stream){

        // Create an object URL for the video stream and
        // set it as src of our HTLM video element.
        video.src = window.URL.createObjectURL(stream);

        // Play the video element to show the stream to the user.
        video.play();

    },
    // Error Callback
    function(err){

        // Most common errors are PermissionDenied and DevicesNotFound.
        console.error(err);

    }
);

function takeSnapshot(){

    var hidden_canvas = document.querySelector('canvas'),
        video = document.querySelector('video.camera_stream'),
        image = document.querySelector('img.photo'),

        // Get the exact size of the video element.
        width = video.videoWidth,
        height = video.videoHeight,

        // Context object for working with the canvas.
        context = hidden_canvas.getContext('2d');

    // Set the canvas to the same dimensions as the video.
    hidden_canvas.width = width;
    hidden_canvas.height = height;

    // Draw a copy of the current frame from the video on the canvas.
    context.drawImage(video, 0, 0, width, height);

    // Get an image dataURL from the canvas.
    var imageDataURL = hidden_canvas.toDataURL('image/png');

    // Set the dataURL as source of an image element, showing the captured photo.
    image.setAttribute('src', imageDataURL); 

        // Set the href attribute of the download button.
        document.querySelector('#dl-btn').href = imageDataURL;

}