const lists = document.querySelectorAll('.navbar-header nav ul li a');

lists.forEach(list => {
    list.addEventListener('mouseover', event => {
        event.target.style.borderBottom = 'solid #526E48 1px';
    })
})

lists.forEach(list => {
    list.addEventListener('mouseout', event => {
        event.target.style.borderBottom = '';
    })
})