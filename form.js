class form{
constructor(){
this.play=createButton("play Now")
this.worldtour=createButton("world Tour")
this.Trainingsession=createButton("Trainingsession")

}
display(){
this.play.position(displayWidth/2,displayHeight/2);
this.play.mousePressed(()=>{
   this.play.hide();
   this.worldtour.position(displayWidth/2-100,displayHeight/2+100)

   this.Trainingsession.position(displayWidth/2,displayHeight/2+100)
  
   gameState="choose"});
    

 


this.Trainingsession.mousePressed(()=>{
gameState="training"
this.worldtour.position(50,100)
this.Trainingsession.hide()



})
this.worldtour.mousePressed(()=>{
gameState="tour"
this.Trainingsession.hide()
this.worldtour.hide()
})



}}