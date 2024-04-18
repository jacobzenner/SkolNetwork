document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-blog");
    const blogDropdown = document.querySelector(".blog-dropdown");

    toggleButton.addEventListener("click", function () {
        blogDropdown.classList.toggle("show-blog");
    });
});
