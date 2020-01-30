let msg = prompt('Enter Admin in you are one', 'Admin');

if (msg == 'Admin') {
    let admin = prompt('Enter your password', 'TheMaster');
    if (admin == 'TheMaster') {
        alert('Welcome');
    } else {
        alert('Wrong Password');
    }
} else {
    alert('Canceled');
}