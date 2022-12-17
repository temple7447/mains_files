function setup() {
  // put setup code here
  let leng = navigator.language || 'en-US'
 
  let speechRec = new p5.speechRec(leng,()=>{
    console.log(speechRec)
  })
  // speechRec.start();
  speechRec.speak('hi there')
}



