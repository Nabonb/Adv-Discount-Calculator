document.getElementById('inpField').addEventListener('keyup',function(event){
    const inputField = event.target.value;
    
    if(inputField == 'DISC30'){
        document.getElementById('btn-apply').removeAttribute('disabled');
        document.getElementById('btn-apply').addEventListener('click',function(){
            const taka = document.getElementById('taka');
            const takaString = taka.innerText;
            const takaValue = parseFloat(takaString);
            
            let newTakaValue = takaValue * (30/100);

            const afterDiscount = document.getElementById('afterDiscount');
            afterDiscount.innerText = newTakaValue;
        });

    }
    else{
        document.getElementById('btn-apply').setAttribute('disabled',true);
    }
})