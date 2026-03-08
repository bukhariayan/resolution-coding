let count = 0;
const button = document.getElementById('btn');
const display = document.getElementById('clicks');

button.addEventListener('click', () => {
    count ++;
    if(count == 1){
        button.textContent = 'you only clicked once!'
    }
    else{
        button.textContent = `you clicked the button ${count} times!`
    }

    display.textContent = count;
});