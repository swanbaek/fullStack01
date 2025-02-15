const init = function () {
    const input = document.getElementById('todoInput');
    const btnAdd = document.querySelector('#btnAdd');
    const todoList = document.querySelector('#todoList');

    const addToDo = (event) => {
        //alert(event.target.textContent);
        let todoText = input.value.trim(); //trim(): 문자열 앞뒤 공백 제거
        //alert(todoText);
        if (!todoText) {
            alert('할 일을 입력하세요');
            input.focus();
            return;
        }
        //dom 생성
        //li
        let listItem = document.createElement('li');
        listItem.innerHTML = `<label>${todoText}
        <input type='checkbox'>
        </label>`;
        let delButton = document.createElement('button');
        delButton.append('삭 제');
        listItem.append(delButton);
        //삭제 버튼 이벤트 처리
        delButton.onclick = (evt) => {
            evt.target.parentNode.remove();
        };

        //todoList.append(listItem);
        todoList.prepend(listItem);
        input.value = ''; //입력창 초기화
        input.focus();
    }; //----------------------------

    const updateToDo = (evt) => {
        //체크한 곳의 label에 .complete 클래스 추가
        //console.log(evt.target);//checkboxk
        //console.log(evt.target.parentNode);//label
        //evt.target.parentNode.classList.add('complete');
        evt.target.parentNode.classList.toggle('complete');
        //toggle() : add와 remove를 번갈아 수행
    };

    btnAdd.addEventListener('click', addToDo);
    todoList.addEventListener('change', updateToDo);
    // input.addEventListener('keydown', (evt) => {
    //     //console.log(evt.keyCode, evt.key);
    //     if (evt.key === 'Enter') {
    //         addToDo(evt);
    //     }
    // });
    input.addEventListener('change', (evt) => {
        addToDo(evt);
    });
    //alert(input);
}; //init()-------------------

//window.onload = init; //윈도우 창에 모든 리소스가 로드되고 난 후에 init호출
document.addEventListener('DOMContentLoaded', init);
//DOM 이 로드되고 난후 init을 호출
