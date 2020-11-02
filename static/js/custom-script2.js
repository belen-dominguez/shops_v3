

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}



function onReady(callback) {
 
  
    let intervalId = window.setInterval(function() {
      
       if (document.getElementsByTagName('body')[0] !== undefined) {
      //  if (document.getElementsByClassName('ml-main')[0] !== undefined) {
          window.clearInterval(intervalId);
          callback.call(this);
      }
    }, 1000); 
}
  
  
  
  onReady(function() {
      setVisible('#root-app', true);
      //setVisible('.ml-main', true); 
      setVisible('.se-pre-con', false);
  });





// const buscarHTML = () => {

//   const customLink = document.querySelector('link-custom')
  
//   console.log(customLink)

//   let url = customLink.pathname


//     console.log(document.location.pathname )

//     $.ajax({
//         type: "GET",
//         url: url,
//         crossOrigin: true,
//         success: function (url) {
      
//         $("main").html(url);
//         return false;
//       },
//       error: function(xhr){
//         console.log('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
//       }
//     });
  

// }


// const mainSection = document.querySelector('main');
// const loaderDiv = document.createElement('div')
// loaderDiv.setAttribute('class', 'se-pre-con')

// const customLink = document.getElementsByClassName('link-custom')



// for(let h = 0; h < customLink.length; h++){

//   customLink[h].addEventListener("click", (e) => {

//     console.log(customLink[h])
    
//     let location = e.target.pathname;
//     console.log(location)

//     let customURL = `https://middesign.com.ar/wp-content/shops-prueba${location}.html`
//     console.log(customURL)

//     buscarHTML(customURL)

    

//   })
// }

if(document.location.pathname === "/about-us"){

  const customURL = "https://middesign.com.ar/wp-content/shops-prueba/about-us.html"

  $.ajax({
    type: "GET",
    url: customURL,
    crossOrigin: true,
    //beforeSend: function(  ) {
      //mainSection.appendChild(loaderDiv);  
      
    //},
    success: function (customURL) {
  
    $("main").html(customURL);
    //loaderDiv.classList.add('noDisplay')
    return false;
  },
});
} else if (document.location.pathname === "/algo"){

  const customURL = "https://middesign.com.ar/wp-content/shops-prueba/algo.html"

    $.ajax({
      type: "GET",
      url: customURL,
      crossOrigin: true,
      success: function (customURL) { 
    
      $("main").html(customURL);

      return false;
    },
  });
}


/*
for(let url of customLink){
  
  url.addEventListener("click", (e) => {
    
    let location = e.target.pathname;
    console.log(location)

    let customURL = `https://middesign.com.ar/wp-content/shops-prueba${location}.html`

    $.ajax({
        type: "GET",
        url: customURL,
        crossOrigin: true,
        //beforeSend: function(  ) {
          //mainSection.appendChild(loaderDiv);  
          
        //},
        success: function (customURL) {
      
        $("main").html(customURL);
        //loaderDiv.classList.add('noDisplay')
        return false;
      },
    });
  

  })
}
*/

/*
const checkURL = (location) => {

 // console.log(location)
let customURL = `https://middesign.com.ar/wp-content/shops-prueba/${location}.html`


//if(document.location.pathname === "/about-us"){
  if(document.location.pathname === `/${location}`){
      $.ajax({
        type: "GET",
        url: customURL,
        crossOrigin: true,
        //beforeSend: function(  ) {
          //mainSection.appendChild(loaderDiv);  
          
        //},
        success: function (customURL) {
      
        $("main").html(customURL);
        //loaderDiv.classList.add('noDisplay')
        return false;
      },
    });
  }


}

*/

