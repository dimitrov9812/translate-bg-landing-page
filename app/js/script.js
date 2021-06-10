openModal = function(text) {
    document.getElementById('modal').style.display='block';
    document.getElementById('modal-text').innerHTML = text;
}

closeModal = function() {
    document.getElementById('modal').style.display='none'
}