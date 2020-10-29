// Menu actions
(function(){
  var displayHide = "none";
  var displayShow = "block";
  var displayShowFlex = "flex";
  var menuButton = document.getElementById("hamburguer-menu");
  var navList = document.getElementById("nav-list");
  var navListChildren = navList.children;
  var navPopover = document.getElementById("popover-menu");
  var navPopoverList = document.getElementById("nav-popover-list");
  var navPopoverListChildren = navPopoverList.children;
  var popoverSeeMoreCategories = [];
  var switchButton = document.getElementById("mobile-categories-menu-switch");
  var listItemArray = document.getElementsByClassName("nav-default-list__item");
  for (var elementIndex = 0; elementIndex < listItemArray.length; elementIndex++) {
    listItemArray[elementIndex].style.visibility = "visible";
    listItemArray[elementIndex].style.opacity = "1";
  }
  function toggle() {
    var body = document.body;
    var responsiveMenu = document.getElementById("responsive-menu");

    var visibility = "visibility";
    var transition = "0.2s";
    var opacityHidden = "0";
    var opacityVisible = "1";
    var leftHidden = "-95vw";
    var leftVisible = "0";
    var visibilityHidden = "hidden";
    var visibilityVisible = "visible";
    var bodyBlockScroll = "body--block-scroll";

    var responsiveMenuVisibility = window.getComputedStyle(responsiveMenu, null).getPropertyValue(visibility);

    responsiveMenu.style.transition = transition;

    if (responsiveMenuVisibility === visibilityHidden) {
      responsiveMenu.style.visibility = visibilityVisible;
      responsiveMenu.style.opacity = opacityVisible;
      responsiveMenu.style.left = leftVisible;
      body.classList.add(bodyBlockScroll);
    } else {
      responsiveMenu.style.visibility = visibilityHidden;
      responsiveMenu.style.opacity = opacityHidden;
      responsiveMenu.style.left = leftHidden;
      body.classList.remove(bodyBlockScroll);
    }
  }

  function seeMoreCategoriesHandler(){
    var button = document.getElementById('nav-default__see-more');
    var saleButton = document.getElementById('nav-default__sale-link');
    var howBuyButton = document.querySelector('.how-buy__button');

    var navListChildren = navList.children;

    var countWidth = 0;
    var saleButtonWidth = saleButton ? saleButton.clientWidth : 0;
    var howBuyButtonWidth = howBuyButton ? howBuyButton.clientWidth : 0;

    var max = navList.clientWidth - (saleButtonWidth + button.clientWidth + howBuyButtonWidth);

    var exceptions = ["nav-default__hamburger-button", "nav-default__see-more", "nav-default__sale-link", "how-buy__button"];

    for (var i = 0; i < navListChildren.length; i++) {
      if (exceptions.indexOf(navListChildren[i].id) === -1) {
        var condition;
        if (i === (navListChildren.length - exceptions.length) && !exceptions) {
          condition = (navListChildren[i].clientWidth <= max);
        } else {
          condition = (navListChildren[i].clientWidth + countWidth <= max);
        }
        if (condition) {
          countWidth += navListChildren[i].clientWidth;
        } else {
          popoverSeeMoreCategories.push(navListChildren[i].textContent);
          navListChildren[i].setAttribute('style', 'display: none !important');
        }
      }
    }
    if (!popoverSeeMoreCategories.length) {
      button.setAttribute('style', 'display: none !important');
    }
  }

  // Popover methods
  function showPopover() {
    navPopover.style.display = displayShow;
  }

  function hidePopover() {
    navPopover.style.display = displayHide;
  }

  function cleanPopoverData() {
    var popoverDataNodes = document.getElementsByClassName("nav-default-list--horizontal__item");
    var arrPopoverData = [].slice.call(popoverDataNodes);
    arrPopoverData.forEach(function (item) {
      item.style.display = displayHide;
    });
  }

  function setPopoverData(item, popoverSeeMoreCategories) {
    var popoverCategories = document.querySelectorAll('[data-toggle="' + item.dataset.js + '"]');
    if (item.id === "nav-default__see-more") {
      for (var e = 0; e < popoverSeeMoreCategories.length; e++) {
        for (var j = 0; j < navPopoverListChildren.length; j++) {
          if (navPopoverListChildren[j].textContent.replace(/\s/g, '').indexOf(popoverSeeMoreCategories[e].replace(/\s/g, '')) !== -1) {
            navPopoverListChildren[j].setAttribute('style', 'display: block !important');
          }
        }
      }
    }
    if (popoverCategories.length) {
      popoverCategories[0].style.display = displayShowFlex;
    }
  }

  function hoverStylesHandler(item) {
    for (var i = 0; i < navListChildren.length; i++) {
      navListChildren[i].style.boxShadow = 'none';
    }
    if (item && item.getAttribute('has-childs') !== '[]') {
      var popoverCategories = document.querySelectorAll('[data-toggle="' + item.dataset.js + '"]');
      var customTextColor = getComputedStyle(document.querySelector("#nav-list > li:nth-child(2) > a > span")).color;
      if ((popoverCategories[0] || (item.id === "nav-default__see-more") || item.getAttribute('data-js') === 'how-buy__button')) {
        item.style.boxShadow = 'inset 0 -2px 0 ' + customTextColor;
      }
    }
  }

  function popoverHandler(popoverSeeMoreCategories){
    var navListArray = [].slice.call(navList.children);
    navListArray.forEach(function (item) {
      item.addEventListener("mouseover", (function () {
        cleanPopoverData();
        showPopover();
        setPopoverData(this, popoverSeeMoreCategories);
        hoverStylesHandler(this);
      }));
    }, this);
    navPopover.addEventListener("mouseleave", (function () {
      hidePopover();
      hoverStylesHandler();
    }));
  }

  if (switchButton.checked) {
    toggle();
  }

  menuButton.addEventListener("click", toggle);

  seeMoreCategoriesHandler();
  popoverHandler(popoverSeeMoreCategories);

  //Mobile menu actions
  var categoriesOption = document.querySelectorAll('[data-js="categories-toggle"]');

  // this conditional fix chrome 43 version warning
  if (categoriesOption && (categoriesOption.length > 0)) {
    categoriesOption.forEach(function (item) {
      item.addEventListener("click", toggleSubItems);
    }, this);
  }

  function toggleSubItems() {
    var displayHidden = "none";
    var displayVisible = "block";
    var subItemes = document.querySelectorAll('[data-toggle="' + this.id + '"]');
    subItemes.forEach(function (item) {
      item.style.display = (this.checked) ? displayVisible : displayHidden;
    }, this);
  };

  var showMenuItems = function() {
  var menuElement = document.querySelector('.nav-default-header__bounds');
  var logoElement = document.querySelector('.nav-default-header__title');
  var navIconsElement = document.querySelector('.nav-default-header__nav-icons');
  var navlistElement = document.querySelector('.nav-default-list');

    var menuSize = parseInt(window
      .getComputedStyle(menuElement, null)
      .getPropertyValue("width").replace('px', ''));
    var logoSize = parseInt(window
          .getComputedStyle(logoElement, null)
          .getPropertyValue("width").replace('px', ''));
    var navIconsSize = parseInt(window
          .getComputedStyle(navIconsElement, null)
          .getPropertyValue("width").replace('px', ''));
    var navlistSize = parseInt(window
          .getComputedStyle(navlistElement, null)
          .getPropertyValue("width").replace('px', ''));

    var dropdown = document.querySelector('.nav-default-list .nav-default-list__item:not(.nav-default__hamburger-button)');
    if(menuSize < (logoSize + navIconsSize + navlistSize) ) {
      dropdown.classList.add("d-none");
    } else {
      dropdown.classList.remove("d-none");
    }
  };

  window.addEventListener("resize", function() {
    showMenuItems();
  });
  showMenuItems();

})();
