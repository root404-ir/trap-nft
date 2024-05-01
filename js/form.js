var button_login = document.querySelectorAll('.button_login')[0];
var icon_login = document.querySelectorAll('.button_login')[0];
var modal = document.querySelectorAll('.modal')[0];
var close = document.querySelectorAll('.close')[0];


button_login.onclick = function(){
    modal.style.display = 'block';
}
icon_login.onclick = function(){
    modal.style.display = 'block';
}
close.onclick = function()
{
    modal.style.display = 'none';
}

