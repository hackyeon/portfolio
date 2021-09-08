var video_button = document.querySelectorAll('.video_button');
var video_box = document.querySelectorAll('.video_box');

for (let i = 0; i < video_button.length; i++) {
    video_button[i].addEventListener("click", function () {
        if (video_box[i].style.display == 'none') {
            video_box[i].style.display = 'block';
            video_button[i].innerText = "시연 영상 닫기"
        } else {
            video_box[i].style.display = 'none';
            video_button[i].innerText = "시연 영상 보기"
        }
    })
}