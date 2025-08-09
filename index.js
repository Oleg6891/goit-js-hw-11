import{a as p,S as m,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="51676197-587b7604ca68e3bcd271cfabc",g="https://pixabay.com/api/";async function h(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(g,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const u=document.querySelector(".form"),q=u.elements["search-text"];u.addEventListener("submit",async i=>{i.preventDefault();const r=q.value.trim();if(r===""){a.warning({title:"Warning",message:"Введіть слово для пошуку!",position:"topRight",timeout:2e3});return}v(),w();try{const o=await h(r);if(o.hits.length===0){a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",timeout:2e3});return}L(o.hits)}catch(o){a.error({title:"Error",message:o.message,position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map
