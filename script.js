const error=document.querySelector('.error');
const btn=document.querySelector('.btn');
let username=document.getElementById('username').value;
const result=document.querySelector('.result-container')
const link=document.querySelector('.link')
let x=document.getElementById('username');
const btn1=document.querySelector('.btn1')
const mid=document.querySelector('.mid')
const roll=document.getElementById('roll').value;
const result_link=document.getElementById('result-link')

btn.addEventListener('click', function(){
    
if(x.value == ''){
   
   error.style.display='block';
}else{
   error.style.display='none';
   result.style.display='block'
   mid.style.display='none';
   
}

})
btn1.addEventListener('click',function(){
   if(roll == ''){
      error.style.display='block';
      
   }else{
      error.style.display='none';

   }
})
