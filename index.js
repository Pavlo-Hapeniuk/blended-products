import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-N5iQpiFS.js";const l="https://dummyjson.com",n={CATEGORIES:"/products/category-list",PRODUCTS:"/products"},r=12;a.defaults.baseURL=l;async function _(){const{data:t}=await a.get(n.CATEGORIES);return t}async function g(t=1){const s=(t-1)*r,{data:o}=await a.get(`${n.PRODUCTS}?limit=${r}&skip=${s}`);return o}const i={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products")};function m(t){const o=["All",...t].map(c=>`<li class="categories__item">
   <button class="categories__btn" type="button">${c}</button>
 </li>
`).join("");i.categoriesList.innerHTML=o;const e=document.querySelector(".categories__btn");e&&e.classList.add("categories__btn--active")}function y(t){const s=t.map(({title:o,brand:e,category:c,price:d,thumbnail:u,id:p})=>`<li class="products__item" data-id="${p}">
    <img class="products__image" src="${u}" alt="${o}"/>
    <p class="products__title">${o}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: </span>${e||"no brand"}</p>
    <p class="products__category">Category: ${c}</p>
    <p class="products__price">Price: ${d}$</p>
 </li>
`).join("");i.productsList.insertAdjacentHTML("beforeend",s)}async function L(){const t=await _();m(t);const{products:s}=await g(2);y(s),console.log(s)}document.addEventListener("DOMContentLoaded",L);
//# sourceMappingURL=index.js.map
