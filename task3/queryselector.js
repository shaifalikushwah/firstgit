const mainheading = document.querySelector('#main-heading');
mainheading.style.textAlign="center";
const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor='grey';
fruits.style.padding ='30px';
fruits.style.margin ='30px';
fruits.style.width ='50px';
fruits.style.borderRadius ='5px';
fruits.style.listStyleType ='none'
const backate = document.querySelector("h2")
backate.style.marginLeft="30px";


const fruitItem = document.querySelector('.fruit');
for(let i=0;i<fruitItem.length;i++){
  fruitItem.style.backgroundColor='white';
  fruitItem.style.padding ='10px';
  fruitItem.style.margin ='10px';
  fruitItem.style.borderRadius="5px"
}
const oddfruit =document.querySelectorAll('.fruit:nth-child(even)');
for (let i=0;i<oddfruit.length;i++){
  oddfruit[i].style.backgroundColor='brown'
  oddfruit[i].style.color='white'
}
const backetheading = document.querySelector('#basket-heading');
backetheading.style.color='brown'
