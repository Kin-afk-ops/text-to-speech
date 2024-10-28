function updateRateLabel(value) {
  document.getElementById("rateValue").textContent = value;
}

document
  .getElementById("speakButton")
  .addEventListener("click", async function () {
    const text = document.getElementById("text").value;

    const audioContainer = document.getElementById("audioContainer");

    audioContainer.classList.toggle("active");

    // try {
    //   const res = await axios.get(
    //     `https://api.voicerss.org/?key=dc34e6febedf4aab9d6e7c194c272302&hl=vi-vn&src=${text}`
    //   );

    //   const urlAudio = res.config.url;

    //   const audioPlayer = document.getElementById("audioPlayer");
    //   audioPlayer.src = urlAudio;
    //   audioPlayer.play();
    // } catch (error) {
    //   console.log(error);
    // }
  });
