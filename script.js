const share = document.querySelector('.shareDiv');
const icon = document.querySelector('#shareicon');
 
share.style.display='none';

icon.addEventListener('click',()=>{
 
    if(share.style.display==='none'){
      share.style.display='block'
    }else{
      share.style.display='none'
    }

});
