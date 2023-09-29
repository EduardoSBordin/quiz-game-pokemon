const getIMG = document.querySelector('img');
const btnOp1 = document.querySelector('#op1');
const btnOp2 = document.querySelector('#op2');
const btnOp3 = document.querySelector('#op3');

function getResult(){

    btnOp1.addEventListener('click', ()=> {

        getIMG.src = './imgs/pikachu.png';

    });

    btnOp2.addEventListener('click', () => {

        getIMG.src = './imgs/eevee.png';
    })
}
getResult();