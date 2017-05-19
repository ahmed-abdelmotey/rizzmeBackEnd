$(document).ready(function () {

	$('.star').on('click', function () {
      $(this).toggleClass('star-checked');
    });

    $('.ckbox label').on('click', function () {
      $(this).parents('tr').toggleClass('selected');
    });

    $('.btn-filter').on('click', function () {
      var $target = $(this).data('target');
      if ($target != 'all') {
        $('.table-filter tr').css('display', 'none');
        $('.table-filter tr[data-status="' + $target + '"]').fadeIn('slow');
      } else {
        $('.table-filter tr').css('display', 'none').fadeIn('slow');
      }
    });

 });