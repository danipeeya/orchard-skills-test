document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        console.log(event.target);
    }
});