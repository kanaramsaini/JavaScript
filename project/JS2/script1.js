function changColor(){
    var hex_number = ['0','1','2','3','4','5','6','7','9','A','B','C','D','E','F']
    var hexcode = '';
    for (var b = 0; b < 6; b++){
        var random_index = Math.floor(Math.random()*hex_number.length);
        hexcode += hex_number[random_index];
    }
    document.getElementById('boxhexa-code').innerHTML=hexcode;
    document.getElementsByClassName('hex-colors')[0].style.background = "#" + hexcode;
   

}

function changbodyColor(){
    var hex_number = ['0','1','2','3','4','5','6','7','9','A','B','C','D','E','F']
    var hexcode = '';
    for (var b = 0; b < 6; b++){
        var random_index = Math.floor(Math.random()*hex_number.length);
        hexcode += hex_number[random_index];
    }
    document.getElementById('bodyhexa-code').innerHTML=hexcode;
   
    document.getElementsByTagName('body')[0].style.background = "#" + hexcode;

}

var element;

// element=document.all;
element=document.getElementsByTagName('').length;
console.log(element);
