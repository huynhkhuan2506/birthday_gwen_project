document.getElementById('gift-box').addEventListener('click', function() {
    // Hiển thị tấm thiệp
    document.getElementById('card').style.display = 'block';
    document.getElementById('gift-box').style.display = 'none';
    
    // Phát âm thanh mừng sinh nhật
    const audio = new Audio('assets/birthday.mp3');
    audio.play();
    
    // Bắt đầu tạo bóng bay liên tục
    startBalloonCreation();
});

let balloonInterval;

function startBalloonCreation() {
    // Tạo bóng bay mỗi 1 giây
    balloonInterval = setInterval(createBalloons, 1000);
}

function createBalloons() {
    for (let i = 0; i < 3; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.bottom = `-50px`;
        document.body.appendChild(balloon);
        animateBalloon(balloon);
    }
}

function animateBalloon(balloon) {
    let floatDuration = Math.random() * 6 + 4;
    balloon.animate([
        { transform: `translateY(0)`, opacity: 1 },
        { transform: 'translateY(-110vh)', opacity: 0.5 }
    ], {
        duration: floatDuration * 1000,
        iterations: 1,
        easing: 'ease-in-out',
        fill: 'forwards'
    });
    
    balloon.addEventListener('animationend', function() {
        balloon.remove();
    });
}

// Ngừng tạo bóng bay khi tab không hoạt động
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        clearInterval(balloonInterval);
    } else {
        startBalloonCreation();
    }
});

// Thêm CSS cho bóng bay
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
.balloon {
    position: absolute;
    width: 20px;
    height: 30px;
    background-color: #FF69B4;
    border-radius: 50%;
    opacity: 0.7;
}
`;
document.head.appendChild(styleSheet);
