//  let canvas=    document.querySelector('canvas')

//  let pen=   canvas.getContext('2d')
// let sCell=[[0,0]]
// let cell=50
// let gameOver=false

// let direction='right'
// let score=0
// let generateR=random()
// let id=   setInterval(()=>{
//     draw()
//     update()

// },100)





// document.addEventListener('keydown',(e)=>{
//     // console.log(e,'hehehehehehe');
//     if(e.key==='ArrowLeft'){
//         direction='left'
     

//     }
//     else if(e.key==='ArrowRight'){
//         direction='right'
     
//     }
//     else if(e.key==='ArrowUp'){
//         direction='up'
      
//     }
//     else{
//         direction='down'
      
//     }
    

// })

// function draw(){

//     if(gameOver){
//         clearInterval(id)
//         pen.font='50px sans-sarif'
//         pen.fillStyle='white'
//         pen.fillText('gameOver',100,150)
//         return
//     }
//     pen.clearRect(0,0,1200,600)
//     for(let i of sCell){
     
//         pen.fillStyle='red'
//         pen.fillRect(i[0],i[1],cell,cell)
//     }
//     9827367010
//     pen.fillStyle='green'
//     pen.fillRect(generateR[0],generateR[1],cell,cell)
//     pen.font='50px sans-sarif'
//     pen.fillText(`${score}`,150,100)




// }




// function update(){
//      let headX=  sCell[sCell.length-1][0]
//     let headY=   sCell[sCell.length-1][1]
//    let newX
//       let newY
//       if(direction==='right'){
//         newX=headX+cell
//         newY=headY
//         if(newX===1200){
//             gameOver=true
//         }
//       }
//       else if(direction==='left'){
//         newX=headX-cell
//         newY=headY
//         if(newX<0){
//             gameOver=true
//         }
//       }
//       else if(direction==='up'){
//         newX=headX
//         newY=headY-cell
//         if(newY<0){
//             gameOver=true
//         }
//       }
//       else{
//         newX=headX
//         newY=headY+cell
//         if(newY===600){
//             gameOver=true
//         }
//       }

//       sCell.push([newX,newY])
//       if(newX===generateR[0]  && newY===generateR[1]){
//         generateR=random()
//         score+=1
//       }
//       else{

//         sCell.shift()
//       }
     
    




// }


// function random(){
//     return[
//         Math.floor(Math.random()*1150/cell)*cell
//       ,
//       Math.floor(Math.random()*550/cell)*cell
      
//     ]
// }






// setInterval(()=>{
//     console.log('helllooo');
    
// },1000)




// arr=[1,2,3,4,5,10]


// console.log(Math.random()*1200,'KOI MIL GYAA');


let canvas=  document.querySelector('canvas')
let pen=  canvas.getContext('2d')
pen.fillStyle='red'
let sCell=[[0,0]]
let cell=50
let score=0
let gameOver=false

let direction='right'
let id=  setInterval(()=>{
    draw()
    update()

    
},100)

 let geranateR=     random()

document.addEventListener('keydown',(e)=>{
    console.log(e,'heheheh');
    if(e.key==='ArrowLeft'){
        direction='left'
    }
    else if(e.key==='ArrowRight'){
        direction='right'
    }
    else if(e.key==='ArrowUp'){
        direction='up'
    }
    else{

        direction='down'
    }
    
})

function draw(){
    if(gameOver){
        clearInterval(id)
        pen.font='50px sans-sarif'
        pen.fillText('gameOver',200,150)
        return

    }
    pen.clearRect(0,0,1200,600)
    for(let i of sCell){
        pen.fillStyle='red'
        pen.fillRect(i[0],i[1],cell,cell)
    }
    pen.fillStyle='green'
    pen.fillRect(geranateR[0],geranateR[1],cell,cell)
     pen.font='50px sans-sarif'
     pen.fillStyle='white'
    pen.fillText(`${score}`,100,200)
    9827367010


}


function update(){
   let headX= sCell[sCell.length-1][0]
    let headY=  sCell[sCell.length-1][1]
   let newX
  let newY
  if(direction==='right'){
    newX=headX+cell
    newY=headY
    if(newX===1200){
        gameOver=true
    }
  }
  else if(direction==='left'){
    newX=headX-cell
    newY=headY
    if(newX<0){
        gameOver=true
    }
  }
  else if(direction==='up'){
    newX=headX
    newY=headY-cell
    if(newY<0){
        gameOver=true
    }
  }
  else{
    newX=headX
    newY=headY+cell
    if(newY===600){
        gameOver=true
    }
  }

  if(newX===geranateR[0] && newY===geranateR[1]){
    geranateR=    random()
    score+=1
  }
  else{
    sCell.shift()
  }
  sCell.push([newX,newY])
 


}



    function random(){
        return[
            Math.floor( Math.random()*1150/cell)*cell
           ,
           Math.floor( Math.random()*550/cell)*cell
           
        ]
    }

    
// pen.fillRect(0,0,50,50)










// let arr=[1,2,34,45]
// arr.push(100)
// arr.shift()
// console.log(arr);
