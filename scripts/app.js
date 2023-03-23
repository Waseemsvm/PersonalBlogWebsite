const navToPost = function (sValue) {
    window.location.href = "/views/blogPost.html"
}

function myFunction() {

    /**
     * @type    {HTMLElement}
     */
    let menuBtn = document.querySelector(".nav-content")
    menuBtn.style.display = menuBtn.style.display === 'block' ? "none" : "block";
}


let subButton = document.querySelector(".subscribe");
const subDiv = document.querySelector(".bellIcon");
// subButton.textContent = "Subscribe"
subButton.addEventListener("mouseover", e => {
    subDiv.textContent = "Subscribe";
})
subButton.addEventListener("mouseout", e => {
    subDiv.textContent = "";
    subDiv.innerHTML = '<span class=".bellIcon"><i class="bellIcon fa fa-bell"></i></span>'
})



subDiv.innerHTML = '<span class=".bellIcon"><i class="bellIcon fa fa-bell"></i></span>'


/***
 * reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
 */

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

const subscribe = function (evt) {
    modal.style.display = 'block';
}

const subscribeClose = function (evt) {
    modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// const pageAccessedByReload = (
//     (window.performance.navigation && window.performance.navigation.type === 1) ||
//     window.performance
//         .getEntriesByType('navigation')
//         .map((nav) => nav.type)
//         .includes('reload')
// );

// if (pageAccessedByReload) {
//     location.href = "/index.html"
// }