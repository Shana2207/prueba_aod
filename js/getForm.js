const db = firebase.firestore();

const todoForm = document.getElementById('contactForm');

const create = (name, mail, phone, message) => {
    db.collection('tasks').doc().set({
        name,
        mail,
        phone,
        message,
    })
}

contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name = todoForm['name'].value;
    const mail = todoForm['mail'].value;
    const phone = todoForm['phone'].value;
    const message = todoForm['message'].value;

    await create(name, mail, phone, message); // Llamo a mi función create

    todoForm.reset(); // Reseteamos los campos
});
