const getIMG = document.querySelector('img');

const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const score3 = document.querySelector('#score3');

const modal1 = document.querySelector('#modal1');
modal1.style.display = 'flex';

const modal2 = document.querySelector('#modal2');
modal2.style.display = 'none';

const modal3 = document.querySelector('#modal3');
modal3.style.display = 'none';

let score = 0;

function fModal1(){

    const btnOp1_modal1 = document.querySelector('#op1-modal1');
    const btnOp2_modal1 = document.querySelector('#op2-modal1');
    const btnOp3_modal1 = document.querySelector('#op3-modal1');

    btnOp1_modal1.addEventListener('click', ()=> {

        score++;
        score1.style.background = 'rgb(149, 255, 128)';
        modal1.style.display = 'none';
        modal2.style.display = 'flex';
        modal3.style.display = 'none';
        
    });

    btnOp2_modal1.addEventListener('click', () => {

        score1.style.background ='rgb(255, 128, 128)';
        modal1.style.display = 'none';
        modal2.style.display = 'flex';
        modal3.style.display = 'none';
    })

    btnOp3_modal1.addEventListener('click', () => {


        score1.style.background ='rgb(255, 128, 128)';
        modal1.style.display = 'none';
        modal2.style.display = 'flex';
        modal3.style.display = 'none';
    })

}
function fModal2(){

    const btnOp1_modal2 = document.querySelector('#op1-modal2');
    const btnOp2_modal2 = document.querySelector('#op2-modal2');
    const btnOp3_modal2 = document.querySelector('#op3-modal2');

    btnOp1_modal2.addEventListener('click', ()=> {

        score2.style.background ='rgb(255, 128, 128)'; // red
        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'flex';
        
    });

    btnOp2_modal2.addEventListener('click', () => {

        score2.style.background = 'rgb(149, 255, 128)'; // green
        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'flex';
    })

    btnOp3_modal2.addEventListener('click', () => {


        score2.style.background ='rgb(255, 128, 128)'; // red
        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'flex';
    })

}
function fModal3(){

    const btnOp1_modal3 = document.querySelector('#op1-modal3');
    const btnOp2_modal3 = document.querySelector('#op2-modal3');
    const btnOp3_modal3 = document.querySelector('#op3-modal3');

    btnOp1_modal3.addEventListener('click', ()=> {

        score3.style.background ='rgb(255, 128, 128)'; // red
        modal1.style.display = 'flex';
        modal2.style.display = 'none';
        modal3.style.display = 'none';
        
    });

    btnOp2_modal3.addEventListener('click', () => {

        score3.style.background ='rgb(255, 128, 128)'; // red
        modal1.style.display = 'flex';
        modal2.style.display = 'none';
        modal3.style.display = 'none';
    })

    btnOp3_modal3.addEventListener('click', () => {


        score3.style.background = 'rgb(149, 255, 128)'; // green
        modal1.style.display = 'flex';
        modal2.style.display = 'none';
        modal3.style.display = 'none';
    })

}

fModal1();
fModal2();
fModal3();
console.log(score);