function displayList() {
    const div = document.querySelector('div#fruits');
    const p = document.querySelectorAll('div#fruits p')

    const ul = document.createElement('ul');
    div.appendChild(ul);

    p.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.textContent;
        ul.appendChild(li);
        div.removeChild(item);
    })
}
