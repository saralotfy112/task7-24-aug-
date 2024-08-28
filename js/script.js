// Event Bubblin


document.querySelector('.box').addEventListener('click', function() {
    alert('Box clicked');
});


document.querySelector('.container').addEventListener('click', function() {
    alert('Container clicked')});


// Event Capturing 
document.querySelector('.container1').addEventListener('click', function() {
    alert('Container clicked');
}, true);


document.querySelector('.box1').addEventListener('click', function() {
    alert('Box clicked');
});