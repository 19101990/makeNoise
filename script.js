const sounds = ['cough', 'hiccup', 'burp', 'laugh', 'punch', 'yawn']

sounds.forEach((sound) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSound()
    document.getElementById(sound).play()
  })
  document.getElementById('buttons').appendChild(btn)
})

// make other sounds stop when user click another one
function stopSound() {
  sounds.forEach((sound) => {
    const soundEffect = document.getElementById(sound)
    soundEffect.pause()
    soundEffect.currentTime = 0
  })
}
