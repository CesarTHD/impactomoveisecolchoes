// Import stylesheets
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const replay = document.getElementById('replay');
const video = document.querySelector('video');
console.log(start);
let recorder, stream;

/**
 * Record the user's screen
 */
async function startRecording() {
  stream = await navigator.mediaDevices.getDisplayMedia({
    video: { displaySurface: 'browser' }
  });
  const recordedSlices = [];
  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = e => recordedSlices.push(e.data);
  recorder.onstop = e => {
    const completeBlob = new Blob(recordedSlices, {
      type: recordedSlices[0].type
    });
    video.src = URL.createObjectURL(completeBlob);
    video.play();
  };
  recorder.start();
}

replay.addEventListener('click', () => {
  video.play();
});

start.addEventListener('click', () => {
  start.setAttribute('disabled', true); // Disable because user can only record one screen at a time.
  stop.removeAttribute('disabled'); // Allow the user to stop recording.

  startRecording();
});

stop.addEventListener('click', () => {
  stop.setAttribute('disabled', true);
  start.removeAttribute('disabled');

  if (recorder.state === 'recording') {
    recorder.stop();
    stream.getVideoTracks()[0].stop();
  }
});
