const dropBtn = document.getElementById('dropdown')
dropBtn.addEventListener('click', function () {
    console.log('clicked');
    const open = document.querySelector('.toggle')
    open.classList.toggle('active')
})