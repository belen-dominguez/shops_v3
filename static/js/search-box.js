var setLocationValue;
!(function () {

    setLocationValue = function(url) {
        window.location = "/" + url;
    };

    var submitElement;
    submitElement = document.getElementById("search-form");
    
    if (submitElement) {
        submitElement.onsubmit = function (event) {
            event.preventDefault();
            var searchInput = document.getElementById("search-input");
            
            if (searchInput.value) {
                setLocationValue(searchInput.value);
            }
        };
    }
    
    submitElement = document.getElementById("search-form-responsive");
    if (submitElement) {
        submitElement.onsubmit = function (event) {
            event.preventDefault();
            var searchInput = document.getElementById("search-input-responsive");
            
            if (searchInput.value) {
                setLocationValue(searchInput.value);
            }
        };
    };

})();

    var navSearchInput = document.getElementsByClassName("nav-search-input")[0];
    var navSearchButton = document.getElementById("nav-search-button");

if (navSearchButton && navSearchInput) {
    navSearchButton.addEventListener("click", function (event) {
        var visibility =  navSearchInput.style.visibility;

        if (!visibility) { 
            event.preventDefault(); 
            navSearchInput.style.visibility = "visible"; 
            navSearchInput.style.opacity = "1";
        };
    });
}
