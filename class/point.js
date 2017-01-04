class Point {
  constructor(x = 100,y = 100,color = "#fff") {
    this.x = x
    this.y = y
    this.color = color
    this.sayHi()
  }
  sayHi(){
    console.log(`x:${this.x}  y: ${this.y}  color:${this.color}`)
  }
}

// export default Point
