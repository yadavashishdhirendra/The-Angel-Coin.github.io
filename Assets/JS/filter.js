function showFirst() {
    var fisrtDiv = document.getElementById('fisrtDiv');
    var secDiv = document.getElementById('secDiv');
    if (fisrtDiv.style.display === 'none') {
        secDiv.style.display = 'none';
        fisrtDiv.style.display = 'block';
        document.getElementById("fisrtDiv").style.animation = "scale .8s alternate 1";
    }
}

function showSec() {
    var fisrtDiv = document.getElementById('fisrtDiv');
    var secDiv = document.getElementById('secDiv');
    if (secDiv.style.display === 'none') {
        secDiv.style.display = 'block';
        document.getElementById("secDiv").style.animation = "scale .8s alternate 1";
        fisrtDiv.style.display = 'none';
    }
}