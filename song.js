(function() {
  function playMusic() {
    var myAudio = document.getElementById('playAudio');
    if (myAudio) { // Kiểm tra xem phần tử audio có tồn tại không
      if (!isNaN(myAudio.duration) && myAudio.duration > 0 && !myAudio.paused) {
        // Đang phát...làm việc của bạn
      } else {
        if (!myAudio.paused) {
          myAudio.pause(); // Tạm dừng nếu audio đang phát
        }
        myAudio.play(); // Bắt đầu phát hoặc phát lại nếu chưa từng phát
      }
    }
  }

  var body = document.getElementsByTagName("body")[0];
  body.addEventListener("click", function(ev) {
    playMusic();
  });
})();

