const letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789";
function hackEffect(event){
    let iterations = 0;
    let interval = null;
    
    if(event.target.dataset.mutex == '1'){
        return;
    }
    event.target.dataset.mutex = '1';

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if(index < iterations){
                    return event.target.dataset.value[index];
                }
                 return letters[Math.floor(Math.random() * letters.length)]
            }).join("");

        if(iterations >= event.target.dataset.value.length){
            event.target.dataset.mutex = '0';
            clearInterval(interval);
        }
        iterations++;        
    }, 100);
}

document.querySelectorAll(".hack-effect").forEach((node)=> {
    node.onmouseover = event => {
        hackEffect(event);
    }
})

document.querySelector(".hack-effect").onload = event => {
    hackEffect(event);
}