import{a as d,S as f,i as p}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="51715222-245823a157b91ecf18a5e059a",y="https://pixabay.com/api/";async function h(t,o=1,a=40){try{const{data:i}=await d.get(y,{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:a}});return{hits:i.hits,totalHits:i.totalHits}}catch(i){throw console.error("Помилка при завантаженні зображень:",i),i}}let g=new f(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery");function b(t){const o=t.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:n,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a href="${i}">
            <img src="${a}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${r}</p>
            <p><b>Views:</b> ${n}</p>
            <p><b>Comments:</b> ${l}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){c.innerHTML=""}function w(){var t;(t=document.querySelector(".loader"))==null||t.classList.remove("hidden")}function S(){var t;(t=document.querySelector(".loader"))==null||t.classList.add("hidden")}const q=document.querySelector(".form");function s(t,o,a){p[t]({title:o,message:a,position:"topRight"})}q.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.elements["search-text"].value.trim();if(!o)return s("warning","Warning","Please enter a search term!");L(),w();try{const{hits:a}=await h(o,1,40);if(!a.length)return s("error","Error","Sorry, there are no images matching your search query. Please try again!");b(a)}catch{s("error","Error","Something went wrong. Please try again later.")}finally{S()}});
//# sourceMappingURL=index.js.map
