(function (W, D) {

  const defaultOptions = {
    color: randomColor(),
    width: D.documentElement.clientWidth,
    height: D.documentElement.clientHeight
  }

  function Wave(options) {
    this.opts = options || defaultOptions
    for (let key in defaultOptions) {
      if (defaultOptions.hasOwnProperty[key] && this.opts[key] === 'undefined') {
        this.opts[key] = defaultOptions[key]
      }
    }
    return this
  }


  Wave.prototype.handleClick = function (event) {
    const { clientX, clientY } = event
    console.log(this)
    // const ele = createElement(, this.opts.height, this.opts.color)
  }

  Wave.prototype.handleTouch = function (event) {
    console.log(event)
    console.log(1111111)
  }

  function createElement(w, h, c) {
    const element = D.createElement('div')
    element.style.position = 'absolute'
    element.style.opacity = 0
    element.style.width = w
    element.style.height = h
    element.style.backgroundColor = c
    element.style.pointerEvents = 'none'
    return element
  }

  function randomColor() {
    const letters = 'abcdef1234567890'
    let color = '#'
    while (color.length < 6) {
      color += letters[Math.floor(Math.random() * letters.length)]
    }
    return color
  }

  function startWave(options) {
    const w = new Wave(options)
    W.addEventListener('click', w.handleClick, false)
    W.addEventListener('touchstart', w.handleTouch, false)
  }
  W.startWave = startWave
})(window, document)
