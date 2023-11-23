(function(){
    
    const sliders = [...document.querySelectorAll('.personajes_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentpersonajes = document.querySelector('.personajes_body--show').dataset.id;
        value = Number(currentpersonajes);
        value+= add;


        sliders[Number(currentpersonajes)-1].classList.remove('personajes_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('personajes_body--show');

    }

})();