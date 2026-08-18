let t=document.querySelector("#contactsList"),e=document.querySelector("#contactsForm"),a=localStorage.getItem("contacts"),n=a?JSON.parse(a):[];function c(e){let{name:a,surname:n,number:c,email:s,id:l}=e,i=`<li class="contacts__item" data-id="${l}">
    <h1 class="contacts__name">${a} ${n}</h1>
    <div class="contacts__details">
    <a href="tel:+39 ${c}" target="_blank" class="contacts__number">+39 ${c}</a>
    \u{2022}
    <a href="mailto: ${s}" target="_blank" class="contacts__email">${s}</a>
    </div>
    <button type="button" class="delete">X</button>
  </li>`;t.insertAdjacentHTML("afterbegin",i)}n.forEach(t=>c(t)),e.addEventListener("submit",t=>{t.preventDefault();let a=e.elements.contactName.value.trim(),s=e.elements.contactSurname.value.trim(),l=e.elements.contactNumber.value.trim(),i=e.elements.contactEmail.value.trim();if(a&&s&&l&&i){let t={id:Date.now().toString(),name:a,surname:s,number:l,email:i};n.push(t),localStorage.setItem("contacts",JSON.stringify(n)),c(t),e.reset()}}),t.addEventListener("click",t=>{if(t.target.classList.contains("delete")){let e=t.target.closest(".contacts__item");if(e){let t=e.dataset.id,a=n.findIndex(e=>e.id===t);-1!==a&&(n.splice(a,1),localStorage.setItem("contacts",JSON.stringify(n))),e.remove()}}});
//# sourceMappingURL=js-hw29.833ea5c8.js.map
