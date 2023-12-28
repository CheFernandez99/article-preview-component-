const share = document.querySelector('.shareDiv');
const icon = document.querySelector('#shareIcon');
 
share.style.display='none';

icon.addEventListener('click',()=>{
 
    if(share.style.display==='none'){
      share.style.display='block';
     icon.style.color='white';
    }else{
      share.style.display='none';
       icon.style.color='';
    }

});
