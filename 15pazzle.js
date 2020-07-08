
    'use strict';{

    var canvas = document.getElementById('stage');
    const context =canvas.getContext("2d");
    const image = document.createElement('img');

    var tiles =[
      [0,1,2,3],
      [4,5,6,7],
      [8,9,10,11],
      [12,13,14,15]
    ];
    var x=0
    var y=0
    var row
    var column
    var area=0;
    var number

    //image = document.createElement('img')
    image.src = "sprite.png";


    function connecting(){
      console.log('connected')
    };

    function drawPuzzle() {
      context.drawImage(image, 0, 0);
    }

    function coordinate(){
      console.log('x:'+x+'y:'+y);
      area = Math.floor(x/70) + Math.floor(y/70)*4
      row = Math.floor(y/70)
      column = Math.floor(x/70)
      number = tiles[row][column]
      console.log('area'+area +"row"+row+":column"+column);
      console.log("number:"+number);
    }





    function exchange(){
      if(tiles[row][column-1]==0){
        console.log('right');

        context.drawImage(
          image,
          number%4*70,Math.floor(number/4)*70,70,70,
          column*70-70,row*70,70,70
        );
        context.drawImage(
          image,
          0,0,70,70,
          column*70,row*70,70,70
        );
        tiles[row].splice(column-1,1,tiles[row][column]);
        tiles[row].splice(column,1,0);
      }

      if(tiles[row][column+1]==0){
        console.log('left');

        context.drawImage(
          image,
          number%4*70,Math.floor(number/4)*70,70,70,
          column*70+70,row*70,70,70
        );
        context.drawImage(
          image,
          0,0,70,70,
          column*70,row*70,70,70
        );
        tiles[row].splice(column+1,1,tiles[row][column]);
        tiles[row].splice(column,1,0);
      }

      if(row>=1){
        if(tiles[row-1][column]==0){
          console.log('bottom');

          context.drawImage(
            image,
            number%4*70,Math.floor(number/4)*70,70,70,
            column*70,row*70-70,70,70
          );
          context.drawImage(
            image,
            0,0,70,70,
            column*70,row*70,70,70
          );
          tiles[row-1].splice(column,1,tiles[row][column]);
          tiles[row].splice(column,1,0);
        }
      }

      if(row<=2){
        if(tiles[row+1][column]==0){
          console.log('up');

          context.drawImage(
            image,
            number%4*70,Math.floor(number/4)*70,70,70,
            column*70,row*70+70,70,70
          );
          context.drawImage(
            image,
            0,0,70,70,
            column*70,row*70,70,70
          );
          tiles[row+1].splice(column,1,tiles[row][column]);
          tiles[row].splice(column,1,0);
        }
      }

      if(tiles==[
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,0]
      ]){
        console,log('clear');
      }




    }

    function onClick(e){
    var rect = e.target.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
      //context.fillRect(x,y,10,10);
      coordinate();
      exchange();
      //exchengeTest()
    }

    connecting();

    canvas.addEventListener('click',onClick,false);
    image.addEventListener('load',function(){

      drawPuzzle();
    })


  }
