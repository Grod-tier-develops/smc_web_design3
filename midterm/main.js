$(document).ready(function () {
  $('#myCar').carousel({
    interval: 3000,
    pause: false,
  });

  $('.modal').modal({
    backdrop: 'static',
  });

  $('.alert').alert();

  $('#jalert').on('click', function () {
    alert('You should buy our products');
  });

  var forms = $('.needs-validation');

  var validate = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener(
      'submit',
      function (e) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },
      false,
    );
  });
});
