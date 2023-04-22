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