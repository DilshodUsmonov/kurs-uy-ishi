var elForm=document.querySelector('.form');
var elInput=document.querySelector('.kurs__input');
var elSelect=document.querySelector('.kurs__selection--option');
var natijalar=document.querySelector('.div');
var kursUsd=11000;
var kursYevro=12500;
var kursRubl=190;
var usd='usd';
var yevro='yevro';
var rubl='rubl';

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var summa= elInput.value;
    var valyuta=elSelect.value;
    elInput.value=null;
    
    
    if(valyuta===usd) {
        var natija=(summa/kursUsd).toFixed(2);
        natijalar.textContent=natija;

    }
    else if (valyuta===yevro) {
        var natija=(summa/kursYevro).toFixed(2);
        natijalar.textContent=natija;
      
    }
    else {
        var natija=(summa/kursRubl).toFixed(2);
        natijalar.textContent=natija;
        
    }


    
});
