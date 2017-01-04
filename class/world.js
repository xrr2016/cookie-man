class World {
  constructor(canvas,width,height) {
    this.canvas = canvas
    this.width = width
    this.height = height
    this.ctx = canvas.getContext('2d')
    this.init()
    this.onResize()
  }
  init(){
    this.canvas.width = window.innerWidth -100 || this.width
    this.canvas.height = window.innerHeight -50 || this.height
    this.drawBackground(this.ctx)
    this.fillText(this.ctx)
  }
  drawBackground(ctx, color="#f4f4f4"){
    ctx.clearRect(0,0,this.width,this.height)
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,this.width,this.height)
  }
  fillText(ctx,font ='20px Georgia',text="Snake",x=100,y=40){
    ctx.font = font
    ctx.fillText(text,x,y)
  }
  onResize(){
    this.canvas.width = window.innerWidth
    this.canvas.width = window.innerWidth
  }
}
// export default World
