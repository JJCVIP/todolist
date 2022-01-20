var list = [];
var listInput= document.getElementById("InputText");
let s = 0;
function getItem(){
    list.push(document.getElementById("InputText").value);
    populateList();
}

function populateList(){
   var cont = document.getElementById('listContainer');
    //Delete the Previous Element

    // create ul element and set the attributes.
    var ul = document.createElement('ul');
    ul.setAttribute('style', 'padding: 0; margin: 0;');
    ul.setAttribute('id', 'theList');

    for (i = s; i <= list.length - 1; i++) {
        var li = document.createElement('li');     // create li element.
        li.innerHTML = list[i];      // assigning text to li using array value.
        li.setAttribute('style', 'display: block;');    // remove the bullets.

        ul.appendChild(li);     // append li to ul.
    }
    s=list.length;
    cont.appendChild(ul);       // add list to the container. 

}
