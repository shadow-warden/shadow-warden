function add_dots(){
    var text = document.getElementById('page_footer');
    if(text!=null){
    for (let index = 0; index < 135; index++) {
       text.innerHTML+=`<img src="images/dot.png" id="not">`
    } 
}
}
add_dots()