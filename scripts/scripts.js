let toggle = false;
const log = console.log
document.getElementById('toggler').addEventListener('click', () => {
  toggle = !toggle
  console.log(toggle);

  if (!toggle) {
    document.querySelector('body').style.overflowY = 'scroll'
    document.getElementById("mobile").style.display = 'none'
  }
  else {
    document.querySelector('body').style.overflowY = 'hidden'
    document.getElementById("mobile").style.display = 'block'
  }
})

