let makiClass = document.querySelector(".Maki");
let nigiriClass = document.querySelector(".Nigiri");
let soupeClass = document.querySelector(".Soupe");
let btnTous = document.getElementById("IdTous");
let btnMaki = document.getElementById("IdMaki");
let btnSoupe = document.getElementById("IdSoupe");
let btnNigiri = document.getElementById("IdNigiri");
let arrTotal = [];
var somme = 0 ;


btnTous.addEventListener('click',function(){
    makiClass.style.display="flex";
    nigiriClass.style.display="flex";
    soupeClass.style.display="flex";

});
btnMaki.addEventListener('click',function(){
    makiClass.style.display="flex";
    nigiriClass.style.display="none";
    soupeClass.style.display="none";

});
btnSoupe.addEventListener('click',function(){
    makiClass.style.display="none";
    nigiriClass.style.display="none";
    soupeClass.style.display="flex";

});
btnNigiri.addEventListener('click',function(){
    makiClass.style.display="none";
    nigiriClass.style.display="flex";
    soupeClass.style.display="none";

});


let eventclickAdd = document.querySelectorAll('.btn-add');
let parentPanier = document.querySelector('.Produit');
var ArrLenght = 0;



eventclickAdd.forEach(function(element){
    element.addEventListener('click',function(e){
        let obj = e.target.parentNode.parentNode;
        let titreProduit = obj.childNodes[3].childNodes[1].innerText;
        let prixProduit = obj.childNodes[7].childNodes[1].innerText.replace("$", "");
        let total = document.getElementById('TotalAchat');
        // split("$")[0]
        let div = document.createElement("div");
        div.innerHTML=`<div class="Produit-acheter">
        <div class="nom-produit">${titreProduit}</div>
        <div class="prix-produit">${prixProduit}</div>
        </div>` ;
        parentPanier.appendChild(div);  
        // parentPanier.insertBefore(div,document.querySelector('.Class-total'));
        // console.log(document.querySelector('.Class-total').parentNode);
        arrTotal.push(parseInt(prixProduit));
        somme = arrTotal.reduce((p, c)=>p+c, 0) ;
        // console.log(somme);
        total.innerHTML=somme;       
    });
});



