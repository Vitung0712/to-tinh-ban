<!DOCTYPE html>
<html>
<head>
	<title><i>Tôi muốn tỏ tình với bạn</i></title>
	<style>
		body {
				background-color: pink;
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			text-align: center;
			padding-top: 100px;
		}

		h1 {
			font-size: 50px;
			color: white;
			text-shadow: 2px 2px 4px #000000;
		}

		p {
			font-size: 30px;
			color: white;
			text-shadow: 2px 2px 4px #000000;
			margin-top: 50px;
		}

        img:hover {
            transform: scale(1.1);
            transition: all 0.2s ease-in-out;
        }

		.heart-container {
			display: flex;
			justify-content: center;
			margin-top: 50px;
		}

		.heart {
	        width: 50px;
	        height: 50px;
	        background-image: url('path/to/anh02.png');
	        background-repeat: no-repeat;
	        background-size: cover;
	        position: relative;
	        animation: heartBeat 1s ease-in-out infinite;
        }

		.heart:before,

		.heart:after {
			content: "";
			position: absolute;
			left: 25px;
			top: 0;
			width: 25px;
			height: 40px;
			background-color: #ff69b4;
			border-radius: 25px 25px 0 0;
			transform: rotate(-45deg);
			transform-origin: 0 100%;
		}

		.heart:after {
			left: 0;
			transform: rotate(45deg);
			transform-origin: 100% 100%;
		}

		@keyframes heartBeat {
			0% { transform: scale(1); }
			25% { transform: scale(1.2); }
			50% { transform: scale(1); }
			75% { transform: scale(0.8); }
			100% { transform: scale(1); }
		}

		.btn {
           display: inline-block;
           background-color: #ff69b4;
           border: none;
           color: white;
           padding: 20px;
           font-size: 30px;
           border-radius: 50px;
           box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
           transition: all 0.3s ease;
           cursor: pointer;
           margin: 20px;
           text-shadow: 2px 2px 4px #000000;
        }

        .btn:hover {
           transform: scale(1.1);
           box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
        }
        .btn:active {
           transform: scale(0.9);
           box-shadow: none;
        }
	</style>
</head>
<body>
	<h1><i>Tôi muốn tỏ tình với bạn</i></h1>
	<img src="anh01.jpg" alt="heart" width="200" style="border-radius: 50%;">
	<p><i>Hãy làm người yêu tôi, được không?</i></p>
	<div class="heart-container">
		<div class="heart"></div>
		<div class="heart"></div>
		<div class="heart"></div>
		<div class="heart"></div>
		<div class="heart"></div>
	</div>
	<button class="btn btn-yes">Đồng ý</button>
    <button class="btn btn-no">Từ chối</button>
	<script>
  // Xử lý sự kiện nút "Đồng ý"
document.querySelector('.btn-yes').addEventListener('click', function() {
  Swal.fire({
    title: 'Cảm ơn bạn đã đồng ý yêu tôi!',
    text: 'Chúng ta sẽ có những ngày tháng đáng nhớ bên nhau.',
    icon: 'success',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
  });
});

// Xử lý sự kiện nút "Từ chối"
document.querySelector('.btn-no').addEventListener('click', function() {
  Swal.fire({
    title: 'Rất tiếc bạn đã từ chối lời tỏ tình của tôi',
    text: 'Chúng ta vẫn là bạn bè nhé!',
    icon: 'error',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
  });
});

$(document).ready(function() {
  $('.heart-container').hover(
    function() {
      $('.heart').addClass('beat');
    }, function() {
      $('.heart').removeClass('beat');
    }
  );
});

$('body').mouseenter(function() {
  $(this).css('background-color', '#ff9999');
}).mouseleave(function() {
  $(this).css('background-color', 'pink');
});
  </script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.all.min.js"></script>
    
</body>
</html>
