let all = document.querySelectorAll('li');

for (let li of all) {
    let span = document.createElement('span');
    span.classList.add('show');
    li.prepend(span);
    span.append(span.nextSibling);
}


document.onclick = function (event) {
    console.log(event.target.tagName);
    if (event.target.tagName != 'SPAN') return;

    let childrenContainer = event.target.parentNode.querySelector('ul');
    console.log(childrenContainer);


    if (!childrenContainer) return;


    childrenContainer.hidden = !childrenContainer.hidden;

    if (childrenContainer.hidden) {
        event.target.classList.add('hide');
        event.target.classList.remove('show');
    }else{
        event.target.classList.add('show');
        event.target.classList.remove('hide');
    }
}