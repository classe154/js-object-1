const board = document.querySelector('.board');
const memoryArr = [];

let clickCounter = 0;
let primaScelta = undefined;
let secondaScelta = undefined;

function boardClickHandler(event) {
    const target = event.target;

    if (target.tagName !== 'IMG') {
        return;
    }

    clickCounter++;

    if (clickCounter === 1) {
        primaScelta = target
        console.log(primaScelta.dataset.name);
        

    } else if (clickCounter === 2) {
        secondaScelta = target;
        console.log(secondaScelta.dataset.name);
        
        if (primaScelta  === secondaScelta) {
            console.log('Bravo hai indovinato');
            primaScelta.classList.remove('opacity-0');
            secondaScelta.classList.remove('opacity-0');

            
        } else {
            console.log('RIPROVA');

        }

        clickCounter = 0;
    }
    //console.log('click on ' + target.dataset.name + ' ' + clickCounter + 'times');
}

for (const student of studentsInfo) {
    const studentGithubUsername = student.github_user;
    const studentGitHubImage = student.image;
    const memoryUserTmp = {
        name: studentGithubUsername,
        img: studentGitHubImage,
    }

    const memoryUserTmpDup = {...memoryUserTmp}; // Duplicato un oggetto
    
    memoryArr.push(memoryUserTmp);
    memoryArr.push(memoryUserTmpDup);
}

memoryArr.sort(function () {
    return Math.random() - 0.5;
});

let boardHtml = '';
for (const memory of memoryArr) {
    boardHtml += `
        <div class="col">
            <img class="img-fluid opacity-0" data-name="${memory.name}" src="${memory.img}">
        </div>
    `;
}
board.innerHTML = boardHtml;
board.addEventListener('click', boardClickHandler);
