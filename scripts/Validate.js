
 
function ValidMail() {
    var re = /^[\w-\.]+@[a-z]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid) output = 'Адрес эл. почты введен правильно!';
    else output = 'Адрес электронной почты введен неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
}
 
function ValidPhone() {
    var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
    return valid;
}  

function ValidSent(){
    if ((ValidMail()!=true) || (ValidPhone()!=true)) {
        $(document).ready(function() {
        $('#two').click(function() {
          $(this).attr('disabled', true); // Либо добавить атрибут disabled 
        });
      
        $('#one').click(function() {
          $(this).hide(); // Либо скрыть
        });
      });} else{window.location.reload();}
    
}