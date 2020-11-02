const customMenu = [
    {
        name: 'Bebes',
        url: 'www.google.com',
        nodes: [
            {
                catName: 'Todos lo productos de bebe',
                url: 'www.google.com',
            },
            {
                catName: 'Sonajeros',
                url: 'www.google.com',
            },
            {
                catName: 'MOviles de CUna',
                url: 'www.google.com',
            },
            {
                catName: 'Peluches Cuneros',
                url: 'www.google.com',
            },
            {
                catName: 'Gimnasio para bebes',
                url: 'www.google.com',
            },
            {
                catName: 'Todos lo productos de bebe',
                url: 'www.google.com',
            },
            {
                catName: 'Sonajeros',
                url: 'www.google.com',
            },
        ]
    },
    {
      name: 'Mochilas',
      url: '/mochislas',
      nodes: [
        {
          catName: 'MOchilas titulo',
          url: '/animales',
          nodes: [
            {
              name: 'MOchilas subtitulo1',
              url: '/osos',
            },
            {
              name: 'MOchilas subtitulo2',
              url: '/perros',
            },
            {
              name: 'MOchilas subtitulo3',
              url: '/cocdrilos',
            },
          ],
        },
      ]
    },
    {
      name: 'Peluches',
      url: '/peluches',
      nodes: [
        {
          catName: 'Peluches titulo1',
          url: '/animales',
          nodes: [
            {
              name: 'Peluches subtitulo1',
              url: '/osos',
            },
            {
              name: 'Perros',
              url: '/perros',
            },
            {
              name: 'Peluches subtitulo3',
              url: '/cocdrilos',
            },
          ],
        },
        {
            catName: 'Peluches titulo2',
            url: '/animales',
            nodes: [
              {
                name: 'Osos',
                url: '/osos',
              },
              {
                name: 'Perros',
                url: '/perros',
              },
              {
                name: 'Cocodrilos',
                url: '/cocdrilos',
              },
            ],
          },
      ]
    },
    {
        name: 'Mas Peluches',
        url: '/peluches',
        nodes: [
          {
            catName: 'Otera Cosa',
            url: '/animales',
            nodes: [
              {
                name: 'Osos',
                url: '/osos',
              },
              {
                name: 'Perros',
                url: '/perros',
              },
              {
                name: 'Cocodrilos',
                url: '/cocdrilos',
              },
            ],
          },
        ]
      }
  ]
  
  
 /*MENU ITEM DESKTOP*/ 
const menuContainer = document.getElementById('nav-list')


const siteMenuUl =  customMenu.reduce((html, item,i) => {
    return html + `<li class="nav-default-list__item"  data-js="${item.name}-${i}" has-childs='${item.nodes}'>
     <a href="${item.url}">
       <span class="header--custom-text">${item.name}</span>
     </a>
  </li>`
  },"")
  
  menuContainer.insertAdjacentHTML('afterbegin', siteMenuUl)


  

/*SUBMENU ITEM*/
  const subMenuContainer = document.querySelector('.nav-default-desktop-categories-popover') 
  
  let menuContent = [];
  let titulos ;
  let subtitulos;
  for (let items of customMenu){

      for(let children in items){
  
            if(typeof( items[children]) == "object"){

                let child = items[children]

                for(subitems of child){
                 
                    if(subitems.nodes){
                        let subitemChild = subitems.nodes
                       
                        subtitulos = subitemChild.map(item => {
                         
                            return `<li class="nav-default-list--horizontal__attribute header--custom-text">
                            <a href="${item.url}">${item.name}</a>
                        </li>`
                        }).join('')

                    }
                    
                }
                
                titulos =  child.map(item => {
            
                 
                    if(item.nodes){

                        return `<div class="nav-default-list--horizontal__subitem">
                            <li class="header--custom-text">
                            <a href="${item.url}">${item.catName}</a>
                            </li>
                            <div class="nav-default-list--horizontal__attr-container">
                            ${subtitulos}
                            </div> 
                            </div>`
                    }
                    else{
                        return `<div class="nav-default-list--horizontal__subitem">
                            <li class="header--custom-text">
                            <a href="${item.url}">${item.catName}</a>
                            </li>
                            <div class="nav-default-list--horizontal__attr-container">
                             </div> 
                            </div>`
                    }

                  }).join('')
                  
                  menuContent.push(titulos)
            }
            
        }
        
   }
    
   



let completeMenu = [];
let itemPopMenu

for(let i=0; i < customMenu.length; i++){

        itemPopMenu = `<div class="nav-default-list--horizontal__item" id="${customMenu[i].name}"  data-toggle="${customMenu[i].name}-3">
        <li class="nav-default-list--horizontal__category header--custom-text">
        <a href="${customMenu[i].url}">${customMenu[i].name}</a>
        <hr class="nav-default-list--vertical__hr header--custom-border" />
        </li>
            ${menuContent[i]}
        </div>`

            completeMenu.push(itemPopMenu)
}


  
completeMenu.forEach(item => {
   subMenuContainer.insertAdjacentHTML('beforeend' ,`${item}`)
  })
  


  


/* SUBITEM MENU MOBILE*/
/*

let subMenuChildren ;
let submenuParent =[];
let completeParent =[];

for(let items of customMenu){
    if(items.nodes){
        let subCat = items.nodes;

        for (let children of subCat){
            // console.log(children) //aca tengo los titulos

            // if(children.nodes){
            //     let subCatChildren = children.nodes;

            //     subMenuChildren = subCatChildren.map(item => {
            //         return `<li class="nav-default-list--vertical__attribute">  
            //         <a href="${item.name}" class="header--custom-text">${item.name}</a>
            //       </li>`
            //     })
            // }
        }
        
        // submenuParent = subCat.map((item,i) => {
        //     //console.log(item)

        //     if(item.nodes){
        //         return `<div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-${i}-${i}">
        //         ${subMenuChildren}
        //         </div>`
        //     }
        //     else{
        //         return `<div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-${i}-${i}">
        //         </div>`
        //     }

        // })

        
        //console.log(submenuParent)
    }
}

const arrSubtiemChild = [];

for(let i=0; i< customMenu.length; i++){
    //console.log(customMenu[i]) //tiene las cat generales


    for(let j=0; j < customMenu[i].nodes.length ; j++ ){

        //console.log("1", customMenu[i].nodes[j]) //Aca tengo los titulos

        if(customMenu[i].nodes[j].nodes){
            
            for(let h=0; h < customMenu[i].nodes[j].nodes.length; h++){
               // console.log("3",customMenu[i].nodes[j].nodes[h]) //aca tengo cada subtitulos
                // let name =  customMenu[i].nodes[j].nodes[h].name;
                // let url =  customMenu[i].nodes[j].nodes[h].url;
                let arr = customMenu[i].nodes[j].nodes;
                
    
                // subMenuChildren = `<li class="nav-default-list--vertical__attribute">  
                //     <a href="${url}" class="header--custom-text">${name}</a>
                //   </li>`
    
                  subMenuChildren = arr.map(item => {
                      return `<li class="nav-default-list--vertical__attribute">  
                      <a href="${item.url}" class="header--custom-text">${item.name}</a>
                    </li>`
                  }).join('')
            }
            
            arrSubtiemChild.push(subMenuChildren)
            
            // for(let k= 0; k < arrSubtiemChild.length; k++){
    
            // }
            
            // submenuParent  = `<div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-${i}-${j}">
            // ${arrSubtiemChild}
            // </div>`
        }
        
    }
    
    let titulos = customMenu[i].nodes;
    console.log(titulos)

    for(let j= 0; j < titulos.length; j++){
    
        submenuParent = titulos.map(item => {
    
            if(item.nodes){
                
                return `<li class="nav-default-list--vertical__subitem">
                <a href="${item.url}" class="header--custom-text">${item.name}</a>
                <li>
                <div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-${i}-${j}">
                    ${arrSubtiemChild}
                </div>`
            }
            else {
                
                return `<li class="nav-default-list--vertical__subitem">
                <a href="${item.url}" class="header--custom-text">${item.name}</a>
                <li>
                <div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-${i}-${j}">
                     </div>`
            }
    
        }).join('')
    }

        // else{
        //     submenuParent = `<div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-${i}-${j}">
        //     </div>`
          
        // }
            
        

        completeParent.push(submenuParent)    
       

        // if(customMenu[i].nodes[j].nodes){

        //     console.log("2",customMenu[i].nodes[j].nodes) //aca tengo arr de los subtitulos

        //     submenuParent = `<div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-${i}-${j}">
        //     ${subMenuChildren}
        //     </div>`
        //     completeParent.push(submenuParent)
        // }
        // else {
        //     submenuParent = `<div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-${i}-${j}">
        //     </div>`

        //     completeParent.push(submenuParent)
        // }
    //console.log(submenuParent)
}

//console.log(arrSubtiemChild)     
console.log(completeParent)
*/

/*MENU ITEM MOBILE*/
/*
const menuContainerMObile = document.querySelector('.responsive-menu-list')

let j = -1;
const siteMenuUlMobile =  customMenu.map(( item,i) => {
  if(item.nodes){
      j++
      return `<li class="nav-default-list--vertical__item">
      <a href="${item.url}" class="header--custom-text">${item.name}</a>
        <div>
        <input type="checkbox" data-js="categories-toggle" id="mobile-${i}" name="nav-tools-header__menu-switch">
        <label for="mobile-${i}" class="toggle-menu">
            <span class="nav-header__toggle nav-header__hamburger"></span>
            <span class="nav-header__toggle nav-header__hamburger"></span>
        </label>
        </div>
      </li>
      <div class="nav-default-list--vertical__subitem-container" data-toggle="mobile-${i}">
        
      ${completeParent}
      </div>
      <hr class="nav-default-list--vertical__hr header--custom-border" />`
      
  }
  else {
      j++
      return `<li class="nav-default-list--vertical__item">
      <a href="${item.url}" class="header--custom-text">${item.name}</a>
      </li>
      <div class="nav-default-list--vertical__subitem-container" data-toggle="mobile-${i}">
          <div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-${i}-${j}"> 
          </div>
      </div>
      <hr class="nav-default-list--vertical__hr header--custom-border" />`
      
  }
  
  
}).join('')
*/
/*SUBMENU ITEM MOBILE*/

/*items de subcategorias*/
let subtitles;
let subtitleArr =[];

customMenu.map((items,i) => {
    items.nodes.map(item => {

        //console.log(item)

        if(item.nodes){

            subtitles =  item.nodes.map(child => {
                
                    return `<li class="nav-default-list--vertical__attribute">
                    <a href="${child.url}" class="header--custom-text">${child.name}</a>
                </li>`
            }).join('')
            
            subtitleArr.push(subtitles)
        }

    })
})

console.log(subtitleArr)

/* titulos de las subcategoias*/
let titulosMOb;
let titulosArr = []

customMenu.map((items,i) => {
    
    titulosMOb =  items.nodes.map((item,j) => {
      //console.log(item)

        if(item.nodes){
            return `
            <li class="nav-default-list--vertical__subitem">
                  <a href="${item.url}" class="header--custom-text">${item.catName}</a>
                    <div>
                      <input type="checkbox" data-js="categories-toggle" id="mobile-attr-${i}-${j}" name="nav-tools-header__menu-switch">
                      <label for="mobile-attr-${i}-${j}" class="toggle-menu">
                        <span class="nav-header__toggle nav-header__hamburger"></span>
                        <span class="nav-header__toggle nav-header__hamburger"></span>
                      </label>
                    </div>
                </li>
                <div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-${i}-${j}">
                   ${subtitleArr[i]}
                </div>`
        }
        else{
            return `<li class="nav-default-list--vertical__subitem">
            <a href="${item.url}" class="header--custom-text">${item.catName}</a>
          </li>
          <div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-${i}-${j}">
          </div>`
        }

    }).join('')
    titulosArr.push(titulosMOb)
}).join('')

console.log(titulosArr)




/*MENU ITEM MOBILE*/
const menuContainerMObile = document.querySelector('.responsive-menu-list')

const siteMenuUlMobile = customMenu.map((item,i) => {
   // console.log(item)

    if(item.nodes){
        return `<li class="nav-default-list--vertical__item">
        <a href="${item.url}" class="header--custom-text">${item.name}</a>
          <div>
            <input type="checkbox" data-js="categories-toggle" id="mobile-${i}" name="nav-tools-header__menu-switch">
            <label for="mobile-${i}" class="toggle-menu">
              <span class="nav-header__toggle nav-header__hamburger"></span>
              <span class="nav-header__toggle nav-header__hamburger"></span>
            </label>
          </div>
      </li>
      <div class="nav-default-list--vertical__subitem-container" data-toggle="mobile-${i}" >
                ${titulosArr[i]}
        </div>
        <hr class="nav-default-list--vertical__hr header--custom-border" />`
    }
    else {
        return   `li class="nav-default-list--vertical__item">
        <a href="${item.url}" class="header--custom-text">${item.name}</a>
        </li>
        <div class="nav-default-list--vertical__subitem-container" data-toggle="mobile-${i}" >
        </div>
        <hr class="nav-default-list--vertical__hr header--custom-border" />`
    }

   
}).join('')



menuContainerMObile.insertAdjacentHTML('afterbegin', siteMenuUlMobile)

/*
            <ul class="responsive-menu-list">
          

          {{#each menu}}
            <li class="nav-default-list--vertical__item">
              <a href="{{this.url}}" class="header--custom-text">{{this.name}}</a>
              {{#if this.nodes}}
                <div>
                  <input type="checkbox" data-js="categories-toggle" id="mobile-{{@index}}" name="nav-tools-header__menu-switch">
                  <label for="mobile-{{@index}}" class="toggle-menu">
                    <span class="nav-header__toggle nav-header__hamburger"></span>
                    <span class="nav-header__toggle nav-header__hamburger"></span>
                  </label>
                </div>
              {{/if}}
            </li>

            <div class="nav-default-list--vertical__subitem-container" data-toggle="mobile-{{@index}}" >
              {{#each this.nodes}}

                <li class="nav-default-list--vertical__subitem">
                  <a href="{{this.url}}{{../name}}" class="header--custom-text">{{this.name}}</a>
                  {{#if this.nodes}}
                    <div>
                      <input type="checkbox" data-js="categories-toggle" id="mobile-attr-{{@../index}}-{{@index}}" name="nav-tools-header__menu-switch">
                      <label for="mobile-attr-{{@../index}}-{{@index}}" class="toggle-menu">
                        <span class="nav-header__toggle nav-header__hamburger"></span>
                        <span class="nav-header__toggle nav-header__hamburger"></span>
                      </label>
                    </div>
                  {{/if}}
                </li>
                <div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-{{@../index}}-{{@index}}">
                  {{#each this.nodes}}
                    <li class="nav-default-list--vertical__attribute">
                      <a href="{{this.url}}" class="header--custom-text">{{this.name}}</a>
                    </li>
                  {{/each}}
                </div>
              {{/each}}

            </div>
            <hr class="nav-default-list--vertical__hr header--custom-border" />
          {{/each}}

          <l
        </ul>
       */