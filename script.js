


// document.addEventListener('DOMContentLoaded', function() {
//     const video1 = document.getElementById('video1');
//     const video2 = document.getElementById('video2');

//     function checkDistance() {
//         fetch('https://vid-control-server.onrender.com')  //server url
//             .then(response => response.json())
//             .then(data => {
//                 if (data.distance < 10) { //play vid2 when distance<10
//                     video1.style.display = 'none';
//                     video2.style.display = 'block';
//                     video2.play();
//                     video1.pause();
//                 } else {  // 否则，播放默认视频1
//                     video1.style.display = 'block';
//                     video2.style.display = 'none';
//                     video1.play();
//                     video2.pause();
//                 }
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }

//     setInterval(checkDistance, 1000);  // 每秒检查一次距离
// });

document.addEventListener('DOMContentLoaded', function() {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    function checkDistance() {
        fetch('https://vid-control-server.onrender.com/distance',)  // 确保 URL 是正确的并且服务器有对应的 `/update` 路径处理此请求
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.distance < 10) { // 当距离小于10时，播放视频2
                    video1.style.display = 'none';
                    video2.style.display = 'block';
                    video2.play();
                    video1.pause();
                } else {  // 否则播放默认视频1
                    video1.style.display = 'block';
                    video2.style.display = 'none';
                    video1.play();
                    video2.pause();
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // 在出现错误时，可以选择性地处理视频显示逻辑，例如始终显示视频1
                video1.style.display = 'block';
                video2.style.display = 'none';
                video1.play();
                video2.pause();
            });
    }

    setInterval(checkDistance, 1000);  // 每秒检查一次距离
});
