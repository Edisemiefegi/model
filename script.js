const btn = document.getElementById('btn')
const backdrop = document.querySelector('.backdrop')
const closeBtn = document.getElementById('close')

btn.addEventListener('click', function(){
    backdrop.classList.remove('hide')
})

closeBtn.addEventListener('click', function(){
    backdrop.classList.add('hide')
})