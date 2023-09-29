const getIMG = document.querySelector('img');
const divresFninal = document.querySelector('#resFninal');

const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const score3 = document.querySelector('#score3');

const btnReload = document.createElement('button');
btnReload.innerHTML = 'Zerar';
btnReload.id = 'btnReload';

btnReload.addEventListener('click', () => {

    score = 0;
    score1.style.background = 'none';
    score2.style.background = 'none';
    score3.style.background = 'none';
    btnReload.remove();
    getH5.innerHTML = '';
})

let getH5 = document.querySelector('h5');

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
        
        score1.style.background = 'rgb(149, 255, 128)'; // green
        modal1.style.display = 'none';
        modal2.style.display = 'flex';
        modal3.style.display = 'none';
        score++;
        // getH5.innerHTML = score;
        console.log(score);
    });

    btnOp2_modal1.addEventListener('click', () => {

        score1.style.background ='rgb(255, 128, 128)'; // red
        modal1.style.display = 'none';
        modal2.style.display = 'flex';
        modal3.style.display = 'none';
        // getH5.innerHTML = score;
    })

    btnOp3_modal1.addEventListener('click', () => {


        score1.style.background ='rgb(255, 128, 128)'; // red
        modal1.style.display = 'none';
        modal2.style.display = 'flex';
        modal3.style.display = 'none';
        // getH5.innerHTML = score;
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
        // getH5.innerHTML = score;
    });

    btnOp2_modal2.addEventListener('click', () => {

        score2.style.background = 'rgb(149, 255, 128)'; // green
        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'flex';
        score++;
        // getH5.innerHTML = score;
        console.log(score);
    })

    btnOp3_modal2.addEventListener('click', () => {


        score2.style.background ='rgb(255, 128, 128)'; // red
        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'flex';
        // getH5.innerHTML = score;
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

        getH5.innerHTML = `Você teve: ${score} acertos`;
        divresFninal.appendChild(btnReload);
    });

    btnOp2_modal3.addEventListener('click', () => {

        score3.style.background ='rgb(255, 128, 128)'; // red
        modal1.style.display = 'flex';
        modal2.style.display = 'none';
        modal3.style.display = 'none';

        getH5.innerHTML = `Você teve: ${score} acertos.`;
        divresFninal.appendChild(btnReload);
    })

    btnOp3_modal3.addEventListener('click', () => {


        score3.style.background = 'rgb(149, 255, 128)'; // green
        modal1.style.display = 'flex';
        modal2.style.display = 'none';
        modal3.style.display = 'none';

        score++;
        getH5.innerHTML = `Você teve: ${score} acertos`;
        divresFninal.appendChild(btnReload);
        console.log(score);
    })

}

fModal1();
fModal2();
fModal3();
