const mybtn = document.getElementById('mybtn');
const msg1 = document.getElementById('msg1');

mybtn.addEventListener('mouseenter', function() {
    msg1.textContent = 'mouse inside';
    this.style.backgroundColor = 'lightblue';
});

mybtn.addEventListener('mouseleave', function() {
    msg1.textContent = 'mouse outside';
    this.style.backgroundColor = '';
});


const myinput = document.getElementById('myinput');
const msg2 = document.getElementById('msg2');

myinput.addEventListener('keyup', function(event) {
    msg2.textContent = 'key pressed is ' + event.key;
});


const myform = document.getElementById('myform');
const namebox = document.getElementById('namebox');
const msg3 = document.getElementById('msg3');

myform.addEventListener('submit', function(event) {
    event.preventDefault();
    msg3.textContent = 'done name is ' + namebox.value;
});


const focusbox = document.getElementById('focusbox');
const msg4 = document.getElementById('msg4');

focusbox.addEventListener('focus', function() {
    msg4.textContent = 'clicking inside input box';
    this.style.backgroundColor = 'lightyellow';
});

focusbox.addEventListener('blur', function() {
    msg4.textContent = 'clicking away from box';
    this.style.backgroundColor = 'white';
});


const btnbox = document.getElementById('btnbox');
const msg5 = document.getElementById('msg5');

btnbox.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        msg5.textContent = 'clicked button text is ' + event.target.textContent;
        event.target.style.backgroundColor = 'yellow';
    }
});