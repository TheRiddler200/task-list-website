// make butotn change background color and giv hex code


//function called using onClick on Html element



const EnterBtn = document.getElementById('enter-btn');
const InputBox = document.getElementById('input-box');
const list = document.getElementById('list');

let itemCount = 0;

//make a function for wnter button
function enterAction() {
    if (InputBox.value !== '' && itemCount < 10){
        //mark variable and assing text from imput feild
        let stringText = InputBox.value;
        //create new li element
        let newListItem = document.createElement('li');
        newListItem.textContent = stringText;
        list.appendChild(newListItem);

        InputBox.value = '';
        itemCount++;

    }else if (itemCount === 10){
        alert('Maximum List item amount reached (10)');
    }
}



EnterBtn.addEventListener('click', enterAction)



document.addEventListener('keyup', function(event){
    if (event.key === 'Enter' && document.activeElement === InputBox){
        enterAction();
    }
})



//make that so when list te
