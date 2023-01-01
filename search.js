


    <ul>
        <li class = "Agruculture">Agruculture</li>
        <li class = "healthcare">healthcare</li>
        <li class = "youth">youth</li>
        <li class = "gallary">gallary</li>
        <li  class="sectors">sector</li>
    </ul>

function Search(item){
 var collection = document.getElementsByClassName("listItem");
 for (i = 0;i < collection.length; i++){
     if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
         collection[i].style.display = "block";
         } else {
             collection[i].style.display = "none";
             }
 }
}