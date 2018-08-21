document.addEventListener('DOMContentLoaded', () => {
    const testpageView1 = document.querySelector('.testpage__view1');
    const startTestBtn = document.querySelector('.start-test');

    startTestBtn.addEventListener('click', () => {
        testpageView1.classList.add('hide');
        let dataIndex = 0;
        document.querySelectorAll('.testpage__child')[0].classList.add('active');
        // Count margin-top 
        contentMarginTop();

        window.addEventListener('resize', () => {
        	if (document.querySelector('.testpage__child.active')){
            contentMarginTopResize();
        }
        });
    });

    function contentMarginTop() {
        const panelAnswers = document.querySelector('.panelanswers');
        const panelAnswersHeight = panelAnswers.offsetHeight;
        const testpageChildHeight = document.querySelectorAll('.testpage__child')[0].offsetHeight;
        const summHeight = panelAnswersHeight + testpageChildHeight;
        console.log(panelAnswersHeight, testpageChildHeight, summHeight, 'ddd');
        panelAnswers.style.marginTop = `${((window.innerHeight - summHeight) / 2)}px`;
    }

    function contentMarginTopResize() {
        const panelAnswers = document.querySelector('.panelanswers');
        const panelAnswersHeight = panelAnswers.offsetHeight;
        const testpageChildHeight = document.querySelector('.testpage__child.active').offsetHeight;
        const summHeight = panelAnswersHeight + testpageChildHeight;
        console.log(panelAnswersHeight, testpageChildHeight, summHeight, 'ddd');
        panelAnswers.style.marginTop = `${((window.innerHeight - summHeight) / 2)}px`;
    }
    
});