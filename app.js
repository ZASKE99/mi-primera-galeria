// images
let images = document.querySelectorAll('img')
// wrapper
let wrapper = document.getElementById('wrapper')
// imgwrapper
let imgWrapper = document.getElementById('fullImg')
// close
let close = document.querySelector('span')

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        openModal(`Images/img${index}.jpg`)
    })
})

close.addEventListener('click', () => (wrapper.style.display = 'none'));

openModal = (pic)  =>  {
    wrapper.style.display = 'flex'
    imgWrapper.src = pic
}