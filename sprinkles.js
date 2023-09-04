var btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    var textbox = document.getElementById('passg');

    if (textbox.value == 'goldfish') {
        location.href = '/jowo-birthday/birthday.html';
    } else {
        alert('Incorrect!');
    }
});
