const navToPost = function (sValue) {
    window.location.href = "/views/blogPost.html"
}

function myFunction() {

    /**
     * @tyoe    {HTMLElement}
     */
    let menuBtn = document.querySelector(".nav-content")
    menuBtn.style.display = menuBtn.style.display === 'block' ? "none" : "block";
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