// Calling loader function 



function showLoader() {
    setTimer = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
}