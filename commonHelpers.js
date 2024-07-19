import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="45010101-f091bc02c96679130727c6b77",m="https://pixabay.com/api/";async function d(n){const o=`${m}?key=${f}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;console.log("API request URL:",o);try{const s=await fetch(o);if(!s.ok)throw new Error("Failed to fetch images");return(await s.json()).hits}catch(s){return console.error("Error fetching images:",s),[]}}function p(n){const o=document.querySelector(".gallery"),s=n.map(t=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}" data-title="${t.tags}">
        <img 
          class="gallery-image" 
          src="${t.webformatURL}" 
          alt="${t.tags}" 
        />
        <div class="gallery-info">
          <p class="info-item"><b>Likes</b>: ${t.likes}</p>
          <p class="info-item"><b>Views</b>: ${t.views}</p>
          <p class="info-item"><b>Comments</b>: ${t.comments}</p>
          <p class="info-item"><b>Downloads</b>: ${t.downloads}</p>
        </div>
      </a>
    </li>
      `).join("");o.innerHTML=s}function y(){l.error({title:"Error",message:"Sorry, there are no images. Please try again!"})}document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("#search-form"),o=document.querySelector("#search-input"),s=document.querySelector(".gallery"),t=document.querySelector(".loader");if(!n||!o||!s){console.error("Form or input element not found");return}const e=new u(".gallery a",{captions:!0,captionsData:"title",captionDelay:250});n.addEventListener("submit",async r=>{r.preventDefault();const i=o.value.trim();if(i===""){iziToast.error({title:"Error",message:"Search query can't be empty!"});return}t.style.display="block";try{const a=await d(i);s.innerHTML="",a.length===0?y():(p(a),e.refresh(),await new Promise(c=>{setTimeout(()=>{c()},100)}))}catch(a){console.error("Error fetching images:",a),iziToast.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{t.style.display="none"}})});
//# sourceMappingURL=commonHelpers.js.map
