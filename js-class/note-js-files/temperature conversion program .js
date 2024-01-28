function covet() {
 let youIn = document.getElementById('input-1').value;
 let c = document.getElementById('input-2').checked;
 let f = document.getElementById('input-3').checked;
if(f){
    document.getElementById('utpout').innerHTML = (`You temp ${(youIn * 9 / 5 + 32)}°F`)
}
else if(c){
    document.getElementById('utpout').innerHTML = (`You temp ${(youIn - 32) * (5 /9)}°C`);

    }
    else{
        document.getElementById('utpout').innerHTML = (`You temp selat`);
    
        }


}