// Your code goes here
//   * mouseover` ---- Done
//   * mouseleave ---- Done
//   * `keydown` --- Done
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize` ---DONE
//   * `scroll`
//   * `select`
//   * `dblclick` ---Done
//   * `drag / drop`
//   * click -----Done

// mouseover to make navigation bigger and mouseleave to return to initial fontSize
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.style.fontSize = "x-large";
    })

    item.addEventListener('mouseleave', function(){
        item.style.fontSize = "initial";
    })
})


// keydown to make navbar change color

const navbarKey = document.querySelector('.main-navigation');

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    console.log("hello")
    navbarKey.style.backgroundColor = "mistyrose";
  }
})

// when the window is resized it sends an alert 

window.addEventListener('resize', function(element) {
    alert("This website looks best at it's default size")
})

// use dblclick to make images larger

const imageSelector = document.querySelectorAll('img');
console.log(imageSelector);

imageSelector.forEach(item => {
    item.addEventListener('dblclick', function(element) {
        item.style.transform = "scale(1.5)"
    })
})

imageSelector.forEach(item => {
    item.addEventListener('click', function(element) {
        item.style.transform = "initial"
    })
})
