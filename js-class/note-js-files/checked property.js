function subsribe() {
    const vsa =  document.getElementById('vsav');
    const masrer =  document.getElementById('master');
    const payple =  document.getElementById('payple');

    if(vsa.checked){
        console.log('You play vsa')
    }
    if(masrer.checked){
        console.log('You play master')
    }
    if(payple.checked){
        console.log('You play payple')
    }else{
        console.log('no play metede')
    }


    // if(document.getElementById('myBox').checked == true){
    //    console.log('You subcribe');
    // }else{
    //     console.log('You Not subcribe');
    // }
}