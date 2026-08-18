const listRef = document.querySelector("#contactsList");
const formRef = document.querySelector("#contactsForm");
const savedData = localStorage.getItem("contacts");
const contactsData = savedData ? JSON.parse(savedData) : [];

function createContact(contact) {
  const { name, surname, number, email, id } = contact;
  const item = `<li class="contacts__item" data-id="${id}">
    <h1 class="contacts__name">${name} ${surname}</h1>
    <div class="contacts__details">
    <a href="tel:+39 ${number}" target="_blank" class="contacts__number">+39 ${number}</a>
    •
    <a href="mailto: ${email}" target="_blank" class="contacts__email">${email}</a>
    </div>
    <button type="button" class="delete">X</button>
  </li>`;
  
  listRef.insertAdjacentHTML("afterbegin", item);
}

contactsData.forEach((contact) => createContact(contact));

formRef.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = formRef.elements.contactName.value.trim();
  const surname = formRef.elements.contactSurname.value.trim();
  const number = formRef.elements.contactNumber.value.trim();
  const email = formRef.elements.contactEmail.value.trim();

  if (name && surname && number && email) {
    const newContact = {
      id: Date.now().toString(), 
      name,
      surname,
      number,
      email,
    };
    contactsData.push(newContact);
    localStorage.setItem("contacts", JSON.stringify(contactsData));
    createContact(newContact);
    formRef.reset();
  }
});

listRef.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("delete")) {
    const itemToDelete = evt.target.closest(".contacts__item");  
    if (itemToDelete) {
      const contactId = itemToDelete.dataset.id;
      const index = contactsData.findIndex((contact) => contact.id === contactId);
      if (index !== -1) {
        contactsData.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(contactsData));
      }
      itemToDelete.remove();
    }
  }
});