document.addEventListener('DOMContentLoaded', () => {
    const contestpageBlock1 = document.querySelector('.contestpage__block1');
    const startContestBtn = document.querySelector('.start-contest');

    startContestBtn.addEventListener('click', () => {
        contestpageBlock1.classList.add('hide');
        document.querySelector('.contestpage__block2').classList.add('active');
        document.querySelector('.contestpage__block2').classList.remove('hide');
    });

    // Height contest block
    const contestHeight = document.querySelector('.contestpage__center-block').clientHeight;
    document.querySelectorAll('.contest-child').forEach(item => {
        // item.style.height=`${contestHeight}px`;
        console.log(contestHeight, 'contestHeight');
    });

});