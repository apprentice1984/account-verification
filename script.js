function checkPhoneKey(key, target) {
  if (key >= '0' && key <= '9') {
    target.value = key
    setTimeout(() => {
      target.classList.add('active')
      target.nextElementSibling?.focus()
    })
  } else if (key === 'Backspace') {
    setTimeout(() => {
      target.classList.remove('active')
      target.previousElementSibling?.focus()
    })
  } else {
    return false
  }
}
