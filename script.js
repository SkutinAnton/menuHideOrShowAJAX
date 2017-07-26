'use strict';


function createList() {
    const xhr = new XMLHttpRequest;
    xhr.open("GET", "test.html");
    xhr.onreadystatechange = function () {

        if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
        }

        const data = xhr.responseText;
        let item = document.createElement('ul');
        item.innerHTML = data;
        item.className = 'underMenu';
        list.appendChild(item);
    };

    xhr.send();
    list.removeEventListener("click", createList);
}

list.addEventListener("click", createList);


