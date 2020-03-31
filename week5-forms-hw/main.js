$(document).ready(function() {
  $('form').hide();
  // $('input').prop('disabled', true);
  $('input')
    .first()
    .prop('disabled', false);
  $('#trigger').click(function() {
    $('form').show();
  });

  $('input').change(function() {
    $('form').addClass('was-validated');
    $(this)
      .next()
      .prop('disabled', false);
  });

  $('#please').click(function() {
    if ($(this).prop('checked') == true) {
      $('#hide-uncheck').show();
      $('#billCustom01').val($('#validationCustom01').val());
      $('#billCustom02').val($('#validationCustom02').val());
      $('#billAddy').val($('#inputAddress').val());
      $('#billAddy2').val($('#inputAddress2').val());
      $('#billCity').val($('#inputCity').val());
      $('#billState').val($('#inputState').val());
      $('#billZip').val($('#inputZip').val());
    } else if ($(this).prop('checked') == false) {
      $('#hide-uncheck').hide();
    }
  });
}); //end ready
