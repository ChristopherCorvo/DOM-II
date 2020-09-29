// Your code goes here
//   * mouseover` ---- Done
//   * mouseleave ---- Done
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`

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

// used scroll to change the navigation bar's background color to mistyrose


// keydown to make navbar change color

const navbarKey = document.querySelector('.main-navigation');

// document.addEventListener('keydown', function(event) {
//     if(event.code === 38){
//         // navbarKey.style.backgroundColor = 'black';
//         console.log("hello")
//     }
// })

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    console.log("hello")
    navbarKey.style.backgroundColor = "mistyrose";
  }
})
