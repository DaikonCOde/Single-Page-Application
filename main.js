(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("fech error: ",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",i=()=>'\n    <div class="error404">\n      <h1>Error 404</h1>\n    </div>\n  ',s={"/":async()=>`\n    <div class="characters">\n      ${(await a()).results.map((n=>`\n        <article class="characters-item">\n          <a href="#/${n.id}">\n            <img src="${n.image}" alt="${n.name}"/>\n            <h2>${n.name}</h2>\n          </a>\n        </article>\n      `)).join("")}\n    </div>\n  `,"/:id":async()=>{const n=e(),i=await a(n);return`\n    <div class="characters-inner">\n      <article class="characters-card>\n        <div className="character-card-img">\n          <img src="${i.image}" alt="${i.name}"/>\n          <h2>${i.name}</h2>\n        </div>\n        <div class="character-card-description">\n          <h3>Episodios: <span>${i.episode.length}</span></h3>\n          <h3>Status: <span>${i.status}</span></h3>\n          <h3>Species <span>${i.species}</span>:</h3>\n          <h3>Gender: <span>${i.gender}</span></h3>\n          <h3>Origin: <span>${i.origin.name}</span></h3>\n          <h3>Last Location: <span>${i.location.name}</span></h3>\n        </div>\n      </article>\n    </div>\n  `},"/contact":"Contact"},t=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n    <div class="header-main">\n      <div class="header-logo">\n        <h1><a href="/100Tifico-Single-Page-Application/">100tifi.co</a></h1>\n      </div>\n      <div class="header-nav">\n        <a href="#/about">About</a>\n      </div>\n    </div>  \n  \n  ';let t=e(),c=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(t),r=s[c]?s[c]:i;a.innerHTML=await r()};window.addEventListener("load",t),window.addEventListener("hashchange",t)})();