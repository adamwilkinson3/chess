import { useState } from 'react'
import './App.css'

import chessKingB from './assets/Chess_King_B.png'
import chessKingW from './assets/Chess_King_W.png'
import chessQueenB from './assets/Chess_Queen_B.png'
import chessQueenW from './assets/Chess_Queen_W.png'
import chessBishopB from './assets/Chess_Bishop_B.png'
import chessBishopW from './assets/Chess_Bishop_W.png'
import chessKnightB from './assets/Chess_Knight_B.png'
import chessKnightW from './assets/Chess_Knight_W.png'
import chessRookB from './assets/Chess_Rook_B.png'
import chessRookW from './assets/Chess_Rook_W.png'
import chessPawnB from './assets/Chess_Pawn_B.png'
import chessPawnW from './assets/Chess_Pawn_W.png'

function App() {

  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  let arr5 = [];
  let arr6 = [];
  let arr7 = [];
  let arr8 = [];

  const queenB = <img draggable className='chess-piece' src={chessQueenB} alt='queenB' onMouseDown={(e) => onClickHandler(e)} onMouseUp={() => onUnclickHandler()} onDragStart={(e) => dragStartHandler('queenB', e)} onDragEnd={() => dragEndHandler()} />;
  const knightB = <img draggable className='chess-piece' src={chessKnightB} alt='knightB' onMouseDown={(e) => onClickHandler(e)} onMouseUp={() => onUnclickHandler()} onDragStart={(e) => dragStartHandler('knightB', e)} onDragEnd={() => dragEndHandler()} />;
  const rookB = <img draggable className='chess-piece' src={chessRookB} alt='rookB' onMouseDown={(e) => onClickHandler(e)} onMouseUp={() => onUnclickHandler()} onDragStart={(e) => dragStartHandler('rookB', e)} onDragEnd={() => dragEndHandler()} />;
  const bishopB = <img draggable className='chess-piece' src={chessBishopB} alt='bishopB' onMouseDown={(e) => onClickHandler(e)} onMouseUp={() => onUnclickHandler()} onDragStart={(e) => dragStartHandler('bishopB', e)} onDragEnd={() => dragEndHandler()} />;
  const kingB = <img draggable className='chess-piece' src={chessKingB} alt='kingB' onMouseDown={(e) => onClickHandler(e)} onMouseUp={() => onUnclickHandler()} onDragStart={(e) => dragStartHandler('kingB', e)} onDragEnd={() => dragEndHandler()} />;
  const pawnB = <img draggable className='chess-piece' src={chessPawnB} alt='pawnB' onMouseDown={(e) => onClickHandler(e)} onMouseUp={() => onUnclickHandler()} onDragStart={(e) => dragStartHandler('pawnB', e)} onDragEnd={() => dragEndHandler()} />;
  const queenW = <img draggable className='chess-piece' src={chessQueenW} alt='queenW' onMouseDown={(e) => onClickHandler(e)} onMouseUp={() => onUnclickHandler()} onDragStart={(e) => dragStartHandler('queenW', e)} onDragEnd={() => dragEndHandler()} />;
  const knightW = <img draggable className='chess-piece' src={chessKnightW} alt='knightW' onMouseDown={(e) => onClickHandler(e)} onMouseUp={() => onUnclickHandler()} onDragStart={(e) => dragStartHandler('knightW', e)} onDragEnd={() => dragEndHandler()} />;
  const rookW = <img draggable className='chess-piece' src={chessRookW} alt='rookW' onMouseDown={(e) => onClickHandler(e)} onMouseUp={() => onUnclickHandler()} onDragStart={(e) => dragStartHandler('rookW', e)} onDragEnd={() => dragEndHandler()} />;
  const bishopW = <img draggable className='chess-piece' src={chessBishopW} alt='bishopW' onMouseDown={(e) => onClickHandler(e)} onMouseUp={() => onUnclickHandler()} onDragStart={(e) => dragStartHandler('bishopW', e)} onDragEnd={() => dragEndHandler()} />;
  const kingW = <img draggable className='chess-piece' src={chessKingW} onMouseDown={(e) => onClickHandler(e)} onMouseUp={() => onUnclickHandler()}  alt='kingW' onDragStart={(e) => dragStartHandler('kingW', e)} onDragEnd={() => dragEndHandler()} />;
  const pawnW = <img draggable className='chess-piece' src={chessPawnW} alt='pawnW' onMouseDown={(e) => onClickHandler(e)} onMouseUp={() => onUnclickHandler()} onDragStart={(e) => dragStartHandler('pawnW', e)} onDragEnd={() => dragEndHandler()} />;

  let shadow: any = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ];
  const [underAttack] = useState([0, 0]);
  let attack: any = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ];
  const [attack2] = useState([
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ]);


  const [moves, setMoves] = useState(shadow);
  let [prevMove, setPrevMove] = useState([
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ]);
  

  let board: any = [
    [rookB, pawnB,,,,,pawnW, rookW],
    [knightB, pawnB,,,,,pawnW, knightW],
    [bishopB, pawnB,,,,,pawnW, bishopW],
    [queenB, pawnB,,,,,pawnW, queenW],
    [kingB, pawnB,,,,,pawnW, kingW],
    [bishopB, pawnB,,,,,pawnW, bishopW],
    [knightB, pawnB,,,,,pawnW, knightW],
    [rookB, pawnB,,,,,pawnW, rookW]
  ];

  const [boardState, setBoardState] = useState(board);

  const [castling] = useState({castleWL: 1, castleWR: 1, castleBL: 1, castleBR: 1});
  const [kingPosition] = useState({kingW: [4, 7], kingB: [4, 0]});
  const [turn] = useState([false]); // 0 - white turn, 1 - black turn
  let modal1 = document.querySelector("[data-modal]") as any;
  let modal2 = document.querySelector("[data-modal2]") as any;
  let modal3 = document.querySelector("[data-modal3]") as any;
  let modal4 = document.querySelector("[data-modal4]") as any;
  let modal5 = document.querySelector("[data-modal5]") as any;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Chess Logic
  function chessMove(x: any, y: any) {
    
    let piece = boardState[x][y].props.alt;
    let color = 0;
    let clrS = 'B';
    let clrSO = 'W';
    x = parseInt(x);
    y = parseInt(y);
    if(piece.slice(-1) == "W") {
      color = 1;
      clrS = 'W';
      clrSO = 'B';
    }
    let newshadow = [...shadow];

    if(piece.slice(0, -1) == "pawn") { 
        //Double Move
        if(bishopMove(x, y, newshadow, color, true, false)) {

          let k = 0;
          let r = 0;
          for(let i = x + 1; i <= 7; i++) {
            if(boardState[i][y]) {
              if(boardState[i][y].props.alt == 'rook' + clrSO || boardState[i][y].props.alt == 'queen' + clrSO) {
                r = 1;
              } else if(boardState[i][y] && boardState[i][y].props.alt == 'king' + clrS) {
                k = 1;
              } else {
                break;
              }
            }
          }
          for(let i = x - 1; i >= 0; i--) {
            if(boardState[i][y]) {
              if(boardState[i][y].props.alt == 'rook' + clrSO || boardState[i][y].props.alt == 'queen' + clrSO) {
                r = 1;
              } else if(boardState[i][y] && boardState[i][y].props.alt == 'king' + clrS) {
                k = 1;
              } else {
                break;
              }
            }
          }

          if(y == 1 + color * 5 && (r + k != 2)) {
            if(!boardState[x][y + 1 - (2 * color)]) {
              newshadow[x][y + 1 - (2 * color)] = 'green-boarder';
              if(!boardState[x][y + 2 - (4 * color)]) {
                newshadow[x][y + 2 - (4 * color)] = 'green-boarder';
              }
            }
            
          //Single Move
          } else if(!boardState[x][y + 1 - (2 * color)]  && (r + k != 2)) {
              newshadow[x][y + 1 - (2 * color)] = 'green-boarder';
          }
        }

        if(rookMove(x, y, newshadow, color, true, false)) {
          let k = 0;
          let r = 0;
          //Capture Left Piece
          if(x > 0 && boardState[x - 1][y + 1 - (2 * color)] && !sameColor(x - 1, y + 1 - (2 * color), color)) {
            if(color) {
              let j = y;
              for(let i = x + 1; i <= 7; i++) {
                j--;
                if(j < 0) {
                  break;
                }
                if(boardState[i][j]) {
                  if(boardState[i][j].props.alt == 'bishopB' || boardState[i][j].props.alt == 'queenB') {
                    r = 1;
                  } else if(boardState[i][j].props.alt == 'kingW') {
                    k = 1;
                  }
                  break;
                }
              }
              j = y;
              for(let i = x - 1; i >= 0; i--) {
                j++;
                if(j > 7) {
                  break;
                }
                if(boardState[i][j]) {
                  if(boardState[i][j].props.alt == 'bishopB' || boardState[i][j].props.alt == 'queenB') {
                    r = 1;
                  } else if(boardState[i][j].props.alt == 'kingW') {
                    k = 1;
                  }
                  break;
                }
              }
            } else {
              let j = y;
              for(let i = x - 1; i >= 0; i--) {
                j--;
                if(j < 0) {
                  break;
                }
                if(boardState[i][j]) {
                  if(boardState[i][j].props.alt == 'bishopW' || boardState[i][j].props.alt == 'queenW') {
                    r = 1;
                  } else if(boardState[i][j].props.alt == 'kingB') {
                    k = 1;
                  }
                  break;
                }
              }
              j = y;
              for(let i = x + 1; i <= 7; i++) {
                j++;
                if(j > 7) {
                  break;
                }
                if(boardState[i][j]) {
                  if(boardState[i][j].props.alt == 'bishopW' || boardState[i][j].props.alt == 'queenW') {
                    r = 1;
                  } else if(boardState[i][j].props.alt == 'kingB') {
                    k = 1;
                  }
                  break;
                }
              }
          }
            if(r + k != 2) {
              newshadow[x - 1][y + 1 - (2 * color)] = 'green-boarder';
            }
          }            

          //Capture Right Piece
          k = 0;
          r = 0;
          if(x < 7 && boardState[x + 1][y + 1 - (2 * color)] && !sameColor(x + 1, y + 1 - (2 * color), color)) {
            if(color) {
              let j = y;
              for(let i = x - 1; i >= 0; i--) {
                j--;
                if(j < 0) {
                  break;
                }
                if(boardState[i][j]) {
                  if(boardState[i][j].props.alt == 'bishopB' || boardState[i][j].props.alt == 'queenB') {
                    r = 1;
                  } else if(boardState[i][j].props.alt == 'kingW') {
                    k = 1;
                  }
                  break;
                }
              }
              j = y;
              for(let i = x + 1; i <= 7; i++) {
                j++;
                if(j > 7) {
                  break;
                }
                if(boardState[i][j]) {
                  if(boardState[i][j].props.alt == 'bishopB' || boardState[i][j].props.alt == 'queenB') {
                    r = 1;
                  } else if(boardState[i][j].props.alt == 'kingW') {
                    k = 1;
                  }
                  break;
                }
              }
            } else {
              let j = y;
              for(let i = x + 1; i <= 7; i++) {
                j--;
                if(j < 0) {
                  break;
                }
                if(boardState[i][j]) {
                  if(boardState[i][j].props.alt == 'bishopW' || boardState[i][j].props.alt == 'queenW') {
                    r = 1;
                  } else if(boardState[i][j].props.alt == 'kingB') {
                    k = 1;
                  }
                  break;
                }
              }
              j = y;
              for(let i = x - 1; i >= 0; i--) {
                j++;
                if(j > 7) {
                  break;
                }
                if(boardState[i][j]) {
                  if(boardState[i][j].props.alt == 'bishopW' || boardState[i][j].props.alt == 'queenW') {
                    r = 1;
                  } else if(boardState[i][j].props.alt == 'kingB') {
                    k = 1;
                  }
                  break;
                }
              }              
            }

            if(r + k != 2) {
              newshadow[x + 1][y + 1 - (2 * color)] = 'green-boarder';
            }
          }
        }
        
    } else if(piece.slice(0, -1) == "rook") {
      rookMove(x, y, newshadow, color);
    } else if(piece.slice(0, -1) == "knight") {

      
      if(rookMove(x, y, newshadow, color, true, false) && bishopMove(x, y, newshadow, color, true, false)) {
        x + 2 <= 7 && y + 1 <= 7 && !sameColor(x + 2, y + 1, color) ? newshadow[x + 2][y + 1] = 'green-boarder' : '';
        x + 2 <= 7 && y - 1 >= 0 && !sameColor(x + 2, y - 1, color) ? newshadow[x + 2][y - 1] = 'green-boarder' : '';
        x + 1 <= 7 && y + 2 <= 7 && !sameColor(x + 1, y + 2, color) ? newshadow[x + 1][y + 2] = 'green-boarder' : '';
        x + 1 <= 7 && y - 2 >= 0 && !sameColor(x + 1, y - 2, color) ? newshadow[x + 1][y - 2] = 'green-boarder' : '';
        x - 1 >= 0 && y + 2 <= 7 && !sameColor(x - 1, y + 2, color) ? newshadow[x - 1][y + 2] = 'green-boarder' : '';
        x - 1 >= 0 && y - 2 >= 0 && !sameColor(x - 1, y - 2, color) ? newshadow[x - 1][y - 2] = 'green-boarder' : '';
        x - 2 >= 0 && y + 1 <= 7 && !sameColor(x - 2, y + 1, color) ? newshadow[x - 2][y + 1] = 'green-boarder' : '';
        x - 2 >= 0 && y - 1 >= 0 && !sameColor(x - 2, y - 1, color) ? newshadow[x - 2][y - 1] = 'green-boarder' : '';
      }




    } else if(piece.slice(0, -1) == "bishop") {
      bishopMove(x, y, newshadow, color);
    } else if(piece.slice(0, -1) == "queen") {
      if(rookMove(x, y, newshadow, color, true, false)) {
        bishopMove(x, y, newshadow, color, false, false);
      }
      if(bishopMove(x, y, newshadow, color, true, false)) {
        rookMove(x, y, newshadow, color, false, false);
      }
    } else if (piece.slice(0, -1) == "king") {
      y + 1 <= 7 && !sameColor(x, y + 1, color) && kingMoveCheck(x, y + 1, color) ? newshadow[x][y + 1] = 'green-boarder' : ''; //down
      y - 1 >= 0 && !sameColor(x, y - 1, color) && kingMoveCheck(x, y - 1, color) ? newshadow[x][y - 1] = 'green-boarder' : ''; //up
      x - 1 >= 0 && !sameColor(x - 1, y, color) && kingMoveCheck(x - 1, y, color) ? newshadow[x - 1][y] = 'green-boarder' : ''; //left
      x + 1 <= 7 && !sameColor(x + 1, y, color) && kingMoveCheck(x + 1, y, color) ? newshadow[x + 1][y] = 'green-boarder' : ''; //right
      y + 1 <= 7 && x + 1 <= 7 && !sameColor(x + 1, y + 1, color) && kingMoveCheck(x + 1, y + 1, color) ? newshadow[x + 1][y + 1] = 'green-boarder' : ''; //down right
      y - 1 <= 7 && x - 1 >= 0 && !sameColor(x - 1, y - 1, color) && kingMoveCheck(x - 1, y - 1, color) ? newshadow[x - 1][y - 1] = 'green-boarder' : ''; //up left
      y + 1 <= 7 && x - 1 >= 0 && !sameColor(x - 1, y + 1, color) && kingMoveCheck(x - 1, y + 1, color) ? newshadow[x - 1][y + 1] = 'green-boarder' : ''; //down left
      y - 1 <= 7 && x + 1 <= 7 && !sameColor(x + 1, y - 1, color) && kingMoveCheck(x + 1, y - 1, color) ? newshadow[x + 1][y - 1] = 'green-boarder' : ''; //up right
      //Castling
      if(color) {
        if(castling.castleWL) {
          if(!boardState[1][7] && !boardState[2][7] && !boardState[3][7]) {
            if(!underAttack[0] && kingMoveCheck(2, 7, 1) && kingMoveCheck(3, 7, 1)){
              newshadow[2][7] = 'green-boarder';
            }
            
          }
          if(castling.castleWR) {
            if(!boardState[5][7] && !boardState[6][7]) {
              if(!underAttack[0] && kingMoveCheck(6, 7, 1) && kingMoveCheck(5, 7, 1)){
                newshadow[6][7] = 'green-boarder';
              }
            }
          }
        }
      } else {
        if(castling.castleBL) {
          if(!boardState[1][0] && !boardState[2][0] && !boardState[3][0]) {
            if(!underAttack[1] && kingMoveCheck(2, 0, 0) && kingMoveCheck(3, 0, 0)) {
              newshadow[2][0] = 'green-boarder';
            }
          }
        }
        if(castling.castleBR) {
          if(!boardState[5][0] && !boardState[6][0]) {
            if(!underAttack[1] && kingMoveCheck(6, 0, 0) && kingMoveCheck(5, 0, 0)){
              newshadow[6][0] = 'green-boarder';
            }
          }
        }
      }
    }
    
  }

  const kingMoveCheck = (x:number, y:number, color:number) => {
    if(color) {
      /////////////////////White King
      /////////////////////king
      let kchk: number = 0;
      y + 1 <= 7 && boardState[x][y + 1] && boardState[x][y + 1].props.alt == 'kingB' ? kchk = 1 : ''; //down
      y - 1 >= 0 && boardState[x][y - 1] && boardState[x][y - 1].props.alt == 'kingB' ? kchk = 1 : ''; //up
      x - 1 >= 0 && boardState[x - 1][y] && boardState[x - 1][y].props.alt == 'kingB' ? kchk = 1 : ''; //left
      x + 1 <= 7 && boardState[x + 1][y] && boardState[x + 1][y].props.alt == 'kingB' ? kchk = 1 : ''; //right
      y + 1 <= 7 && x + 1 <= 7 && boardState[x + 1][y + 1] && boardState[x + 1][y + 1].props.alt == 'kingB' ? kchk = 1 : ''; //down right
      y - 1 <= 7 && x - 1 >= 0 && boardState[x - 1][y - 1] && boardState[x - 1][y - 1].props.alt == 'kingB' ? kchk = 1 : ''; //up left
      y + 1 <= 7 && x - 1 >= 0 && boardState[x - 1][y + 1] && boardState[x - 1][y + 1].props.alt == 'kingB' ? kchk = 1 : ''; //down left
      y - 1 <= 7 && x + 1 <= 7 && boardState[x + 1][y - 1] && boardState[x + 1][y - 1].props.alt == 'kingB' ? kchk = 1 : ''; //up right

      if(kchk) {
        return false;
      }
      /////////////////////pawn
      if(x != 7 && y != 0 && boardState[x + 1][y - 1] && boardState[x + 1][y - 1].props.alt == 'pawnB'){
        return false;
      }
      if(x != 0 && y != 0 && boardState[x - 1][y - 1] && boardState[x - 1][y - 1].props.alt == 'pawnB'){
        return false;
      }
      /////////////////////rook
      for(let i = x + 1; i <= 7; i++){
        if(boardState[i][y] && boardState[i][y].props.alt != 'kingW') {
          if(boardState[i][y].props.alt == 'rookB' || boardState[i][y].props.alt == 'queenB'){
            return false;
          }
          break;
        }
      }
      for(let i = x - 1; i >= 0; i--){
        if(boardState[i][y] && boardState[i][y].props.alt != 'kingW') {
          if(boardState[i][y].props.alt == 'rookB' || boardState[i][y].props.alt == 'queenB'){
            return false;
          }
          break;
        }
      }
      for(let i = y + 1; i <= 7; i++){
        if(boardState[x][i] && boardState[x][i].props.alt != 'kingW') {
          if(boardState[x][i].props.alt == 'rookB' || boardState[x][i].props.alt == 'queenB'){
            return false;
          }
          break;
        }
      }
      for(let i = y - 1; i >= 0; i--){
        if(boardState[x][i] && boardState[x][i].props.alt != 'kingW') {
          if(boardState[x][i].props.alt == 'rookB' || boardState[x][i].props.alt == 'queenB'){
            return false;
          }
          break;
        }
      }
      /////////////////////knight
      let chk:number = 1;
      chk *= x + 2 <= 7 && y + 1 <= 7 && boardState[x + 2][y + 1] && boardState[x + 2][y + 1].props.alt == 'knightB' ? 0 : 1;
      chk *= x + 2 <= 7 && y - 1 >= 0 && boardState[x + 2][y - 1] && boardState[x + 2][y - 1].props.alt == 'knightB' ? 0 : 1;
      chk *= x + 1 <= 7 && y + 2 <= 7 && boardState[x + 1][y + 2] && boardState[x + 1][y + 2].props.alt == 'knightB' ? 0 : 1;
      chk *= x + 1 <= 7 && y - 2 >= 0 && boardState[x + 1][y - 2] && boardState[x + 1][y - 2].props.alt == 'knightB' ? 0 : 1;
      chk *= x - 1 >= 0 && y + 2 <= 7 && boardState[x - 1][y + 2] && boardState[x - 1][y + 2].props.alt == 'knightB' ? 0 : 1;
      chk *= x - 1 >= 0 && y - 2 >= 0 && boardState[x - 1][y - 2] && boardState[x - 1][y - 2].props.alt == 'knightB' ? 0 : 1;
      chk *= x - 2 >= 0 && y + 1 <= 7 && boardState[x - 2][y + 1] && boardState[x - 2][y + 1].props.alt == 'knightB' ? 0 : 1;
      chk *= x - 2 >= 0 && y - 1 >= 0 && boardState[x - 2][y - 1] && boardState[x - 2][y - 1].props.alt == 'knightB' ? 0 : 1;
      if(!chk) {
        return false;
      }
      /////////////////////bishop
      //down right
      for(let a = y + 1; a <= 7; a++) {
        if(x + (a - y) > 7) {
          break;
        }
        if(boardState[x + (a - y)][a] && (boardState[x + (a - y)][a].props.alt == 'bishopB' || boardState[x + (a - y)][a].props.alt == 'queenB')){
          return false;
        }
        if(boardState[x + (a - y)][a] && boardState[x + (a - y)][a].props.alt != 'kingW'){
          break;
        }
      }
      //up right
      for(let a = y - 1; a >= 0; a--) {
        if(x - (a - y) > 7) {
          break;
        }
        if(boardState[x - (a - y)][a] && (boardState[x - (a - y)][a].props.alt == 'bishopB' || boardState[x - (a - y)][a].props.alt == 'queenB')){
          return false;
        }
        if(boardState[x - (a - y)][a] && boardState[x - (a - y)][a].props.alt != 'kingW'){
          break;
        }
      }
      //down left
      for(let a = y + 1; a <= 7; a++) {
        if(x - (a - y) < 0) {
          break;
        }
        if(boardState[x - (a - y)][a] && (boardState[x - (a - y)][a].props.alt == 'bishopB' || boardState[x - (a - y)][a].props.alt == 'queenB')){
          return false;
        }
        if(boardState[x - (a - y)][a] && boardState[x - (a - y)][a].props.alt != 'kingW'){
          break;
        }
      }
      //up left
      for(let a = y - 1; a >= 0; a--) {
        if(x + (a - y) < 0) {
          break;
        }
        if(boardState[x + (a - y)][a] && (boardState[x + (a - y)][a].props.alt == 'bishopB' || boardState[x + (a - y)][a].props.alt == 'queenB')){
          return false;
        }
        if(boardState[x + (a - y)][a] && boardState[x + (a - y)][a].props.alt != 'kingW'){
          break;
          
        }
      }
    } else {
      /////////////////////Black King
      /////////////////////king
      let kchk: number = 0;
      y + 1 <= 7 && boardState[x][y + 1] && boardState[x][y + 1].props.alt == 'kingW' ? kchk = 1 : ''; //down
      y - 1 >= 0 && boardState[x][y - 1] && boardState[x][y - 1].props.alt == 'kingW' ? kchk = 1 : ''; //up
      x - 1 >= 0 && boardState[x - 1][y] && boardState[x - 1][y].props.alt == 'kingW' ? kchk = 1 : ''; //left
      x + 1 <= 7 && boardState[x + 1][y] && boardState[x + 1][y].props.alt == 'kingW' ? kchk = 1 : ''; //right
      y + 1 <= 7 && x + 1 <= 7 && boardState[x + 1][y + 1] && boardState[x + 1][y + 1].props.alt == 'kingW' ? kchk = 1 : ''; //down right
      y - 1 <= 7 && x - 1 >= 0 && boardState[x - 1][y - 1] && boardState[x - 1][y - 1].props.alt == 'kingW' ? kchk = 1 : ''; //up left
      y + 1 <= 7 && x - 1 >= 0 && boardState[x - 1][y + 1] && boardState[x - 1][y + 1].props.alt == 'kingW' ? kchk = 1 : ''; //down left
      y - 1 <= 7 && x + 1 <= 7 && boardState[x + 1][y - 1] && boardState[x + 1][y - 1].props.alt == 'kingW' ? kchk = 1 : ''; //up right

      if(kchk) {
        return false;
      }

      /////////////////////pawn
      if(x != 7 && y != 7 && boardState[x + 1][y + 1] && boardState[x + 1][y + 1].props.alt == 'pawnW'){
        return false;
      }
      if(x != 0 && y != 7 && boardState[x - 1][y + 1] && boardState[x - 1][y + 1].props.alt == 'pawnW'){
        return false;
      }
      /////////////////////rook
      for(let i = x + 1; i <= 7; i++){
        if(boardState[i][y] && boardState[i][y].props.alt != 'kingB') {
          if(boardState[i][y].props.alt == 'rookW' || boardState[i][y].props.alt == 'queenW'){
            return false;
          }
          break;
        }
      }
      for(let i = x - 1; i >= 0; i--){
        if(boardState[i][y] && boardState[i][y].props.alt != 'kingB') {
          if(boardState[i][y].props.alt == 'rookW' || boardState[i][y].props.alt == 'queenW'){
            return false;
          }
          break;
        }
      }
      for(let i = y + 1; i <= 7; i++){
        if(boardState[x][i] && boardState[x][i].props.alt != 'kingB') {
          if(boardState[x][i].props.alt == 'rookW' || boardState[x][i].props.alt == 'queenW'){
            return false;
          }
          break;
        }
      }
      for(let i = y - 1; i >= 0; i--){
        if(boardState[x][i] && boardState[x][i].props.alt != 'kingB') {
          if(boardState[x][i].props.alt == 'rookW' || boardState[x][i].props.alt == 'queenW'){
            return false;
          }
          break;
        }
      }
      /////////////////////knight
      let chk:number = 1;

      chk *= x + 2 <= 7 && y + 1 <= 7 && boardState[x + 2][y + 1] && boardState[x + 2][y + 1].props.alt == 'knightW' ? 0 : 1;
      chk *= x + 2 <= 7 && y - 1 >= 0 && boardState[x + 2][y - 1] && boardState[x + 2][y - 1].props.alt == 'knightW' ? 0 : 1;
      chk *= x + 1 <= 7 && y + 2 <= 7 && boardState[x + 1][y + 2] && boardState[x + 1][y + 2].props.alt == 'knightW' ? 0 : 1;
      chk *= x + 1 <= 7 && y - 2 >= 0 && boardState[x + 1][y - 2] && boardState[x + 1][y - 2].props.alt == 'knightW' ? 0 : 1;
      chk *= x - 1 >= 0 && y + 2 <= 7 && boardState[x - 1][y + 2] && boardState[x - 1][y + 2].props.alt == 'knightW' ? 0 : 1;
      chk *= x - 1 >= 0 && y - 2 >= 0 && boardState[x - 1][y - 2] && boardState[x - 1][y - 2].props.alt == 'knightW' ? 0 : 1;
      chk *= x - 2 >= 0 && y + 1 <= 7 && boardState[x - 2][y + 1] && boardState[x - 2][y + 1].props.alt == 'knightW' ? 0 : 1;
      chk *= x - 2 >= 0 && y - 1 >= 0 && boardState[x - 2][y - 1] && boardState[x - 2][y - 1].props.alt == 'knightW' ? 0 : 1;
      if(!chk) {
        return false;
      }
      /////////////////////bishop
      //down right
      for(let a = y + 1; a <= 7; a++) {
        if(x + (a - y) > 7) {
          break;
        }
        if(boardState[x + (a - y)][a] && (boardState[x + (a - y)][a].props.alt == 'bishopW' || boardState[x + (a - y)][a].props.alt == 'queenW')){
          return false;
        }
        if(boardState[x + (a - y)][a] && boardState[x + (a - y)][a].props.alt != 'kingB'){
          break;
        }
      }
      //up right
      for(let a = y - 1; a >= 0; a--) {
        if(x - (a - y) > 7) {
          break;
        }
        if(boardState[x - (a - y)][a] && (boardState[x - (a - y)][a].props.alt == 'bishopW' || boardState[x - (a - y)][a].props.alt == 'queenW')){
          return false;
        }
        if(boardState[x - (a - y)][a] && boardState[x - (a - y)][a].props.alt != 'kingB'){
          break;
        }
      }
      //down left
      for(let a = y + 1; a <= 7; a++) {
        if(x - (a - y) < 0) {
          break;
        }
        if(boardState[x - (a - y)][a] && (boardState[x - (a - y)][a].props.alt == 'bishopW' || boardState[x - (a - y)][a].props.alt == 'queenW')){
          return false;
        }
        if(boardState[x - (a - y)][a] && boardState[x - (a - y)][a].props.alt != 'kingB'){
          break;
        }
      }
      //up left
      for(let a = y - 1; a >= 0; a--) {
        if(x + (a - y) < 0) {
          break;
        }
        if(boardState[x + (a - y)][a] && (boardState[x + (a - y)][a].props.alt == 'bishopW' || boardState[x + (a - y)][a].props.alt == 'queenW')){
          return false;
        }
        if(boardState[x + (a - y)][a] && boardState[x + (a - y)][a].props.alt != 'kingB'){
          break;
        }
      }
    }
    return true;
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const attackOnKing = (x:number, y:number, color:number) => {
    underAttack[0] = 0;
    underAttack[1] = 0;
    let clr = 'B';
    let oclr = 'W';
    let ua = 1;
    if(!color) {
      clr = 'W';
      oclr = 'B'
      ua = 0;
    }

    attack = [
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '']
    ];


      /////////////////////White King
      /////////////////////pawn
      if(x != 7 && y != 0 && boardState[x + 1][y - 1] && boardState[x + 1][y - 1].props.alt == 'pawn' + oclr){
        attack[x + 1][y - 1] = 'green-boarder';
        underAttack[ua]++;
      }else if(x != 0 && y != 0 && boardState[x - 1][y - 1] && boardState[x - 1][y - 1].props.alt == 'pawn' + oclr){
        attack[x - 1][y - 1] = 'green-boarder';
        underAttack[ua]++;
      }
      /////////////////////rook
      for(let i = x + 1; i <= 7; i++){
        if(boardState[i][y] && boardState[i][y].props.alt != 'king' + clr) {
          if(boardState[i][y].props.alt == 'rook' + oclr || boardState[i][y].props.alt == 'queen' + oclr){
            for(let a = x + 1; a <= i; a++){
              attack[a][y] = 'green-boarder';
            }
            underAttack[ua]++;
          }
          break;
        }
      }
      for(let i = x - 1; i >= 0; i--){
        if(boardState[i][y] && boardState[i][y].props.alt != 'king' + clr) {
          if(boardState[i][y].props.alt == 'rook' + oclr || boardState[i][y].props.alt == 'queen' + oclr){
            for(let a = x - 1; a >= i; a--){
              attack[a][y] = 'green-boarder';
            }
            underAttack[ua]++;
          }
          break;
        }
      }
      for(let i = y + 1; i <= 7; i++){
        if(boardState[x][i] && boardState[x][i].props.alt != 'king' + clr) {
          if(boardState[x][i].props.alt == 'rook' + oclr || boardState[x][i].props.alt == 'queen' + oclr){
            for(let b = y + 1; b <= i; b++){
              attack[x][b] = 'green-boarder';
            }
            underAttack[ua]++;
          }
          break;
        }
      }
      for(let i = y - 1; i >= 0; i--){
        if(boardState[x][i] && boardState[x][i].props.alt != 'king' + clr) {
          if(boardState[x][i].props.alt == 'rook' + oclr || boardState[x][i].props.alt == 'queen' + oclr){
            for(let b = y - 1; b >= i; b--){
              attack[x][b] = 'green-boarder';
            }
            underAttack[ua]++;
          }
          break;
        }
      }
      /////////////////////knight
      let atk: number = 0;
      x + 2 <= 7 && y + 1 <= 7 && boardState[x + 2][y + 1] && boardState[x + 2][y + 1].props.alt == 'knight' + oclr ? attack[x + 2][y + 1] = 'green-boarder' : atk++;
      x + 2 <= 7 && y - 1 >= 0 && boardState[x + 2][y - 1] && boardState[x + 2][y - 1].props.alt == 'knight' + oclr ? attack[x + 2][y - 1] = 'green-boarder' : atk++;
      x + 1 <= 7 && y + 2 <= 7 && boardState[x + 1][y + 2] && boardState[x + 1][y + 2].props.alt == 'knight' + oclr ? attack[x + 1][y + 2] = 'green-boarder' : atk++;
      x + 1 <= 7 && y - 2 >= 0 && boardState[x + 1][y - 2] && boardState[x + 1][y - 2].props.alt == 'knight' + oclr ? attack[x + 1][y - 2] = 'green-boarder' : atk++;
      x - 1 >= 0 && y + 2 <= 7 && boardState[x - 1][y + 2] && boardState[x - 1][y + 2].props.alt == 'knight' + oclr ? attack[x - 1][y + 2] = 'green-boarder' : atk++;
      x - 1 >= 0 && y - 2 >= 0 && boardState[x - 1][y - 2] && boardState[x - 1][y - 2].props.alt == 'knight' + oclr ? attack[x - 1][y - 2] = 'green-boarder' : atk++;
      x - 2 >= 0 && y + 1 <= 7 && boardState[x - 2][y + 1] && boardState[x - 2][y + 1].props.alt == 'knight' + oclr ? attack[x - 2][y + 1] = 'green-boarder' : atk++;
      x - 2 >= 0 && y - 1 >= 0 && boardState[x - 2][y - 1] && boardState[x - 2][y - 1].props.alt == 'knight' + oclr ? attack[x - 2][y - 1] = 'green-boarder' : atk++;
      if(atk != 8) {
        underAttack[ua]++;
      }

      /////////////////////bishop
      //down right
      for(let a = y + 1; a <= 7; a++) {
        if(x + (a - y) > 7) {
          break;
        }
        if(boardState[x + (a - y)][a] && (boardState[x + (a - y)][a].props.alt == 'bishop' + oclr || boardState[x + (a - y)][a].props.alt == 'queen' + oclr)){
          for(let i = y + 1; i <= a; i++){
            attack[x + (i - y)][i] = 'green-boarder';
          }
          underAttack[ua]++;
        }
        if(boardState[x + (a - y)][a]){
          break;
        }
      }
      //up right
      for(let a = y - 1; a >= 0; a--) {
        if(x - (a - y) > 7) {
          break;
        }
        if(boardState[x - (a - y)][a] && (boardState[x - (a - y)][a].props.alt == 'bishop' + oclr || boardState[x - (a - y)][a].props.alt == 'queen' + oclr)){
          for(let i = y - 1; i >= a; i--){
            attack[x - (i - y)][i] = 'green-boarder';
          }
          underAttack[ua]++;
        }
        if(boardState[x - (a - y)][a]){
          break;
        }
      }
      //down left
      for(let a = y + 1; a <= 7; a++) {
        if(x - (a - y) < 0) {
          break;
        }
        if(boardState[x - (a - y)][a] && (boardState[x - (a - y)][a].props.alt == 'bishop' + oclr || boardState[x - (a - y)][a].props.alt == 'queen' + oclr)){
          for(let i = y + 1; i <= a; i++){
            attack[x - (i - y)][i] = 'green-boarder';
          }
          underAttack[ua]++;
        }
        if(boardState[x - (a - y)][a]){
          break;
        }
      }
      //up left
      for(let a = y - 1; a >= 0; a--) {
        if(x + (a - y) < 0) {
          break;
        }
        if(boardState[x + (a - y)][a] && (boardState[x + (a - y)][a].props.alt == 'bishop' + oclr || boardState[x + (a - y)][a].props.alt == 'queen' + oclr)){
          for(let i = y - 1; i >= a; i--){
            attack[x + (i - y)][i] = 'green-boarder';
          }
          underAttack[ua]++;
        }
        if(boardState[x + (a - y)][a]){
          break;
        }
      }
      for(let i = 0; i <= 7; i++) {
        for(let j = 0; j <= 7; j++) {
          attack2[i][j] = attack[i][j];
        }
      }
    } 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function bishopMove(x:number, y:number, newshadow:any, color:number, pincheck:boolean = false, firstLoop:boolean = true) {

  if(firstLoop == false || rookMove(x, y, newshadow, color, true, false)){

  let clr = 'B';
  let oclr = 'W';
  if(color) {
    clr = 'W';
    oclr = 'B';
  }
  
  let newshadow1: any = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ];
  let newshadow2: any = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ];
  let newshadow3: any = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ];
  let newshadow4: any = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ];
  let dwnr: any = [0, 0];
  let upr: any = [0, 0];
  let dwnl: any = [0, 0];
  let upl: any = [0, 0];
  
  //down right
  for(let a = y + 1; a <= 7; a++) {
    if(x + (a - y) > 7 || sameColor(x + (a - y), a, color)) {
      if(x + (a - y) <= 7 && boardState[x + (a - y)][a] && boardState[x + (a - y)][a].props.alt == 'king' + clr) {
        dwnr[0] = 1;
      }
      break;
    }
    newshadow1[x + (a - y)][a] = 'green-boarder';
    if(boardState[x + (a - y)][a]) {
      if(boardState[x + (a - y)][a].props.alt == 'bishop' + oclr || boardState[x + (a - y)][a].props.alt == 'queen' + oclr) {
        dwnr[1] = 1;
      }
      break;
    }
  }
  //up right
  for(let a = y - 1; a >= 0; a--) {
    if(x - (a - y) > 7 || sameColor(x - (a - y), a, color)) {
      if(x - (a - y) <= 7 && boardState[x - (a - y)][a] && boardState[x - (a - y)][a].props.alt == 'king' + clr) {
        upr[0] = 1;
      }
      break;
    }
    newshadow2[x - (a - y)][a] = 'green-boarder';
    if(boardState[x - (a - y)][a]) {
      if(boardState[x - (a - y)][a].props.alt == 'bishop' + oclr || boardState[x - (a - y)][a].props.alt == 'queen' + oclr) {
        upr[1] = 1;
      }
      break;
    }
  }
  //down left
  for(let a = y + 1; a <= 7; a++) {
    if(x - (a - y) < 0 || sameColor(x - (a - y), a, color)) {
      if(x - (a - y) >= 0 && boardState[x - (a - y)][a] && boardState[x - (a - y)][a].props.alt == 'king' + clr) {
        dwnl[0] = 1;
      }
      break;
    }
    newshadow3[x - (a - y)][a] = 'green-boarder';
     if(boardState[x - (a - y)][a]) {
        if(boardState[x - (a - y)][a].props.alt == 'bishop' + oclr || boardState[x - (a - y)][a].props.alt == 'queen' + oclr) {
          dwnl[1] = 1;
        }
        break;
     }
  }
  //up left
  for(let a = y - 1; a >= 0; a--) {
    if(x + (a - y) < 0 || sameColor(x + (a - y), a, color)) {
      if(x + (a - y) >= 0 && boardState[x + (a - y)][a] && boardState[x + (a - y)][a].props.alt == 'king' + clr) {
        upl[0] = 1;
      }
      break;
    }
    newshadow4[x + (a - y)][a] = 'green-boarder';
    if(boardState[x + (a - y)][a]) {
      if(boardState[x + (a - y)][a].props.alt == 'bishop' + oclr || boardState[x + (a - y)][a].props.alt == 'queen' + oclr) {
        upl[1] = 1;
      }
      break;
    }
  }

  for(let i = 0; i <= 7; i++) {
    for(let j = 0; j <= 7; j++) {
      if(dwnr[0] + dwnr[1] + upl[0] + upl[1] != 2) {
        if(!pincheck) {
          newshadow[i][j] += newshadow2[i][j];
          newshadow[i][j] += newshadow3[i][j];
        }
      } else if(pincheck) {
        return false;
      }
      if(upr[0] + upr[1] + dwnl[0] + dwnl[1] != 2) {
        if(!pincheck) {
          newshadow[i][j] += newshadow1[i][j];
          newshadow[i][j] += newshadow4[i][j];
        }
      } else if(pincheck) {
        return false;
      }
    }
  }

  }
  return true;
}

function rookMove(x:number, y:number, newshadow:any, color:number, pincheck:boolean = false, firstLoop:boolean = true) {

  if(firstLoop == false || bishopMove(x, y, newshadow, color, true, false)) {
  let clr = 'B';
  let oclr = 'W';
  if(color) {
    clr = 'W';
    oclr = 'B';
  }

  let newshadow1: any = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ];
  let newshadow2: any = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ];
  let newshadow3: any = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ];
  let newshadow4: any = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ];

  let up = [0, 0];
  let down = [0, 0];
  let left = [0, 0];
  let right = [0, 0];

  for(let a = y + 1; a <= 7; a++) {
    if(boardState[x][a] && (boardState[x][a].props.alt == 'rook' + oclr || boardState[x][a].props.alt == 'queen' + oclr)) {
      down[1] = 1;
    }
    if(sameColor(x, a, color)) {
      if(boardState[x][a].props.alt == 'king' + clr) {
        down[0] = 1;
      }
      break;
    }
    newshadow1[x][a] = 'green-boarder';
    if(boardState[x][a]) {
      break;
    }
  }
  for(let a = y - 1; a >= 0; a--) {
    if(boardState[x][a] && (boardState[x][a].props.alt == 'rook' + oclr || boardState[x][a].props.alt == 'queen' + oclr)) {
      up[1] = 1;
    }
    if(sameColor(x, a, color)) {
      if(boardState[x][a].props.alt == 'king' + clr) {
        up[0] = 1;
      }
      break;
    }
    newshadow2[x][a] = 'green-boarder';
    if(boardState[x][a]) {
      break;
    }
  }
  for(let b = x + 1; b <= 7; b++) {
    if(boardState[b][y] && (boardState[b][y].props.alt == 'rook' + oclr || boardState[b][y].props.alt == 'queen' + oclr)) {
      right[1] = 1;
    }
    if(sameColor(b, y, color)) {
      if(boardState[b][y].props.alt == 'king' + clr) {
        right[0] = 1;
      }
      break;
    }
    newshadow3[b][y] = 'green-boarder';
    if(boardState[b][y]) {
      break;
    }
  }
  for(let b = x - 1; b >= 0; b--) {
    if(boardState[b][y] && (boardState[b][y].props.alt == 'rook' + oclr || boardState[b][y].props.alt == 'queen' + oclr)) {
      left[1] = 1;
    }
    if(sameColor(b, y, color)) {
      if(boardState[b][y].props.alt == 'king' + clr) {
        left[0] = 1;
      }
      break;
    }
    newshadow4[b][y] = 'green-boarder';
    if(boardState[b][y]) {
      break;
    }
  }

  for(let i = 0; i <= 7; i++) {
    for(let j = 0; j <= 7; j++) {
      if(up[0] + down[1] + up[1] + down[0] != 2) {
        if(!pincheck) {
          newshadow[i][j] += newshadow3[i][j];
          newshadow[i][j] += newshadow4[i][j];
        } 
      } else if(pincheck) {
        return false;
      }
      if(left[0] + right[1] + left[1] + right[0] != 2) {
        if(!pincheck) {
          newshadow[i][j] += newshadow1[i][j];
          newshadow[i][j] += newshadow2[i][j];
        }
      } else if(pincheck) {
        return false;
      }
    }
  }
  return true;
}
}

function sameColor(x:number, y:number, color:number) {
  //White
  if(color) {
    if(boardState[x][y]){
      if(boardState[x][y].props.alt.slice(-1) == "W") {
        return true;
      }
    }
  } else {
  //Black
    if(boardState[x][y]){
      if(boardState[x][y].props.alt.slice(-1) == "B") {
        return true;
      }
    }
  }
  return false;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Handlers

  const onUnclickHandler = () => {
    shadow = [
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '']
    ];
    setMoves(shadow); 
  }


  const onClickHandler = (e: any) => {
    onUnclickHandler();
    let start = e.target.parentNode.id;
    let color = boardState[start[0]][start[2]].props.alt.slice(-1);
    let move = '';

    if(turn[0] == false) {
      move = 'W'
    } else {
      move = 'B'
    }
    if(move == color) {
      chessMove(start[0], start[2]);
    }
    
    checkMoves(start[0], start[2], color);
  }

  const checkMoves = (x:number, y:number, color:string) => {
    let clr = 0;
    if(color == 'B'){
      clr = 1;
    }
    if(underAttack[clr] == 1 && boardState[x][y].props.alt.slice(0, -1) != 'king') {
      for(let i = 0; i <= 7; i++) {
        for(let j = 0; j <= 7; j++) {
          if(attack2[i][j] && shadow[i][j] == attack2[i][j]) {
            continue;
          } else {
            shadow[i][j] = '';
          }
        }
      }
    } else if(underAttack[clr] == 2 && boardState[x][y].props.alt.slice(0, -1) != 'king') {
      for(let i = 0; i <= 7; i++) {
        for(let j = 0; j <= 7; j++) {
          shadow[i][j] = '';
        }
      }
    }
  }





  const dragStartHandler = (piece:string, e: any) => {
    e.dataTransfer.setData("drag-item", piece);
    let start = e.target.parentNode.id;
    e.dataTransfer.setData("start-loc", start);
  }

  const dragEndHandler = () => {
    onUnclickHandler();
  }

  const dragOverHandler = (e: React.DragEvent) => {
    e.preventDefault();
  }

  const onDropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    let target = e.currentTarget.id;
    let loc = e.dataTransfer.getData("start-loc");
    let piece = e.dataTransfer.getData("drag-item");
    let kingUpdate = kingPosition;
    let color = 0;
    if(piece.slice(-1) == 'W') {
      color = 1;
    }

    let clr = 0;
    let clrS = 'W';
    if(color) {
      clr = 1;
      clrS = 'B';
    }

    //if move is available
    if(moves[target[0]][target[2]]) {
      const boardUpdate: any = [...boardState];
      if(piece == 'kingB') {
        kingUpdate.kingB[0] = parseInt(target[0]);
        kingUpdate.kingB[1] = parseInt(target[2]);
      }
      if(piece == 'kingW') {
        kingUpdate.kingW[0] = parseInt(target[0]);
        kingUpdate.kingW[1] = parseInt(target[2]);
      }

      
        //capture piece
        if(boardUpdate[target[0]][target[2]]) {
          boardUpdate[target[0]][target[2]] = '';
        }

          [boardUpdate[loc[0]][loc[2]], boardUpdate[target[0]][target[2]]] = [boardUpdate[target[0]][target[2]], boardUpdate[loc[0]][loc[2]]];
          prevMove = [
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '']
          ];
          prevMove[parseInt(loc[0])][parseInt(loc[2])] = 'blue-boarder';
          prevMove[parseInt(target[0])][parseInt(target[2])] = 'blue-boarder';
          setPrevMove(prevMove);

        //Pawn Promotion
        let pwnP = 1;
        if(piece.slice(0, -1) == 'pawn') {
          if(target.slice(-1) == '0') {
            pwnP = 0;
            modal1.showModal();
          }
          if(target.slice(-1) == '7') {
            pwnP = 0;
            modal2.showModal();
          }
        }
  
        /*Castling*/
        //White Castle Left
        if(loc[0] == '4' && loc[2] == '7'  && target[0] == '2' && target[2] == '7' && underAttack[clr] == 0 && castleCheck(2, 7)) {
          [boardUpdate[0][7], boardUpdate[3][7]] = [boardUpdate[3][7], boardUpdate[0][7]];
        }
        //White Castle Right
        if(loc[0] == '4' && loc[2] == '7' && target[0] == '6' && target[2] == '7' && underAttack[clr] == 0 && castleCheck(6, 7)) {
          [boardUpdate[7][7], boardUpdate[5][7]] = [boardUpdate[5][7], boardUpdate[7][7]];
        }
        //Black Castle Left
        if(loc[0] == '4' && loc[2] == '0' && target[0] == '2' && target[2] == '0' && underAttack[clr] == 0 && castleCheck(2, 0)) {
          [boardUpdate[0][0], boardUpdate[3][0]] = [boardUpdate[3][0], boardUpdate[0][0]];
        }
        //Black Castle Right
        if(loc[0] == '4' && loc[2] == '0' && target[0] == '6' && target[2] == '0' && underAttack[clr] == 0 && castleCheck(6, 0)) {
          [boardUpdate[7][0], boardUpdate[5][0]] = [boardUpdate[5][0], boardUpdate[7][0]];
        }

        //location is not in check
        if(turn[0] == false) {
            setBoardState(boardUpdate);
            turn[0] = !turn[0];
            if(piece == 'kingW') {
              kingPosition.kingW = [parseInt(target[0]), parseInt(target[2])];
            }
        } else {
            setBoardState(boardUpdate);
            turn[0] = !turn[0];
            //King Moves
            if(piece == 'kingB') {
              kingPosition.kingB = [parseInt(target[0]), parseInt(target[2])];
            }
        }


        //King||Rook Moves
        if(!boardState[4][7]) {
          castling.castleWL = 0;
          castling.castleWR = 0;
        }
        if(!boardState[4][0]) {
          castling.castleBL = 0;
          castling.castleBR = 0;
        }
        if(!boardState[0][7]) {
          castling.castleWL = 0;
        }
        if(!boardState[7][7]) {
          castling.castleWR = 0;
        }
        if(!boardState[0][0]) {
          castling.castleBL = 0;
        }
        if(!boardState[7][0]) {
          castling.castleBR = 0;
        }
        if(color){
          attackOnKing(kingPosition.kingB[0], kingPosition.kingB[1], color);
        } else {
          attackOnKing(kingPosition.kingW[0], kingPosition.kingW[1], color);
        }

    //check for checkmate
    labela:
    if(underAttack[clr] == 1) {
      for(let i = 0; i <= 7; i++) {
        for(let j = 0; j <= 7; j++) {
          if(boardState[i][j] && boardState[i][j].props.alt.slice(-1) == clrS) {
            shadow = [
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', '']
            ];
            chessMove(i, j);
            checkMoves(i, j, clrS);
            if(moveFinder()) {
              break labela;
            }
          }
        }
      }
      clr ? modal3.showModal() : modal4.showModal();
      onUnclickHandler();
      return null;
    } else if(underAttack[clr] == 2) {
      let brk = 1;
      if(clr) {
        chessMove(kingPosition.kingB[0], kingPosition.kingB[0]);
        checkMoves(kingPosition.kingB[0], kingPosition.kingB[0], clrS);
        labelb: for(let i = 0; i <= 7; i++) {
          for(let j = 0; j <= 7; j++) {
            if(shadow[i][j]) {
              brk = 0;
              break labelb;
            }
          }
        }
      } else {
        chessMove(kingPosition.kingW[0], kingPosition.kingW[1]);
        checkMoves(kingPosition.kingW[0], kingPosition.kingW[1], clrS);
        labelb:for(let i = 0; i <= 7; i++) {
          for(let j = 0; j <= 7; j++) {
            if(shadow[i][j]) {
              brk = 0;
              break labelb;
            }
          }
        }
      }
      if(brk) {
        clr ? modal3.showModal() : modal4.showModal();
        onUnclickHandler();
        return null;
      }
      
    }
    let stalemate = true;

    //Stalemate Check
    labelc:
      for(let i = 0; i <= 7; i++) {
        for(let j = 0; j <= 7; j++) {
          if(boardState[i][j] && boardState[i][j].props.alt.slice(-1) == clrS) {
            shadow = [
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', '']
            ];
            chessMove(i, j);
            checkMoves(i, j, clrS);
            if(moveFinder()) {
              stalemate = false;
              break labelc;
            }
          }
        }
      }
      if(stalemate && pwnP) {
        modal5.showModal();
      }
    }
   
    onUnclickHandler();
  }

  const castleCheck = (x:number, y:number) => {
    chessMove(x, y);
    if(moveFinder()) {
      return true;
    }
    return false;
  }

  const checkMate = (clr: number, clrS: string) => {
        //check for checkmate
        if(clrS == 'W') {
          clrS = 'B';
        } else {
          clrS = 'W';
        }
        labela:
        if(underAttack[clr] == 1) {
          for(let i = 0; i <= 7; i++) {     /////////
            for(let j = 0; j <= 7; j++) {
              if(boardState[i][j] && boardState[i][j].props.alt.slice(-1) == clrS) {
                shadow = [
                  ['', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '']
                ];
                chessMove(i, j);
                checkMoves(i, j, clrS);
                if(moveFinder()) {
                  break labela;
                }
              }
            }
          }
          clr ? modal3.showModal() : modal4.showModal();
        } else if(underAttack[clr] == 2) {
          let brk = 1;
          if(clr) {
            chessMove(kingPosition.kingB[0], kingPosition.kingB[0]);
            checkMoves(kingPosition.kingB[0], kingPosition.kingB[0], clrS);
            labelb: for(let i = 0; i <= 7; i++) {
              for(let j = 0; j <= 7; j++) {
                if(shadow[i][j]) {
                  brk = 0;
                  break labelb;
                }
              }
            }
          } else {
            chessMove(kingPosition.kingW[0], kingPosition.kingW[1]);
            checkMoves(kingPosition.kingW[0], kingPosition.kingW[1], clrS);
            labelb:for(let i = 0; i <= 7; i++) {
              for(let j = 0; j <= 7; j++) {
                if(shadow[i][j]) {
                  brk = 0;
                  break labelb;
                }
              }
            }
          }
          if(brk) {
            clr ? modal3.showModal() : modal4.showModal();
          }
        }
  }

  const pawnPromotion = (piece: string) => {
    let color = piece.slice(-1);
    let clr = 0;
    let clrO = 'W';
    let clrS = 'B';
    if(color == "W") {
      clr = 1;
      clrO = 'B';
      clrS = 'W';
      for(let i = 0; i <= 7; i++) {
        if(boardState[i][0] && boardState[i][0].props.alt == 'pawnW') {
          const boardUpdate: any = [...boardState];
          if(piece == 'queenW') {
            boardUpdate[i][0] = queenW;
          }
          if(piece == 'knightW') {
            boardUpdate[i][0] = knightW;
          }
          if(piece == 'rookW') {
            boardUpdate[i][0] = rookW;
          }
          if(piece == 'bishopW') {
            boardUpdate[i][0] = bishopW;
          }
          setBoardState(boardUpdate);
          attackOnKing(kingPosition.kingB[0], kingPosition.kingB[1], 1);
          
          if(underAttack[1]) {
            checkMate(clr, color);
          }
          break;
        }
      } 
    } else {
      for(let i = 0; i <= 7; i++) {
        if(boardState[i][7] && boardState[i][7].props.alt == 'pawnB') {
          const boardUpdate: any = [...boardState];
          if(piece == 'queenB') {
            boardUpdate[i][7] = queenB;
          }
          if(piece == 'knightB') {
            boardUpdate[i][7] = knightB;
          }
          if(piece == 'rookB') {
            boardUpdate[i][7] = rookB;
          }
          if(piece == 'bishopB') {
            boardUpdate[i][7] = bishopB;
          }
          setBoardState(boardUpdate);
          attackOnKing(kingPosition.kingW[0], kingPosition.kingW[1], 0);
          if(underAttack[0]) {
            checkMate(clr, color);
          }
          break;
        }
      }
    }

    let stalemate = true;
    labelc:
    for(let i = 0; i <= 7; i++) {
      for(let j = 0; j <= 7; j++) {
        if(boardState[i][j] && boardState[i][j].props.alt.slice(-1) == clrO) {
          shadow = [
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '']
          ];
          chessMove(i, j);
          checkMoves(i, j, clrS);
          if(moveFinder()) {
            stalemate = false;
            break labelc;
          }
        }
      }
    }
    if(stalemate && !underAttack[clr]) {
      modal5.showModal();
    }
  }

  const modalHandler = (piece: string) => {
    pawnPromotion(piece);
    modal1.close();
    modal2.close();
  }
  const escHandler = (e: React.KeyboardEvent) => {
    if(e.key === 'Escape'){
      e.preventDefault();
    }
  }

  const moveFinder = () => {
    for(let i = 0; i <= 7; i++) {
      for(let j = 0; j <= 7; j++) {
        if(shadow[i][j]) {
          return true;
        }
      }
    }
    return false;
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Board
    for(let i =  0; i < 8; i++){
      arr1.push(<div key={`${i}-0`} onDrop={(e) => onDropHandler(e)} onDragOver={dragOverHandler} className={`chess-space-odd    ${moves[i][0]}  ${prevMove[i][0]}  `} id={`${i}-0`}>{boardState[i][0]}</div>)
      arr2.push(<div key={`${i}-1`} onDrop={(e) => onDropHandler(e)} onDragOver={dragOverHandler} className={`chess-space-even  ${moves[i][1]}   ${prevMove[i][1]} `} id={`${i}-1`}>{boardState[i][1]}</div>)
      arr3.push(<div key={`${i}-2`} onDrop={(e) => onDropHandler(e)} onDragOver={dragOverHandler} className={`chess-space-odd    ${moves[i][2]}  ${prevMove[i][2]}  `} id={`${i}-2`}>{boardState[i][2]}</div>)
      arr4.push(<div key={`${i}-3`} onDrop={(e) => onDropHandler(e)} onDragOver={dragOverHandler} className={`chess-space-even  ${moves[i][3]}   ${prevMove[i][3]} `} id={`${i}-3`}>{boardState[i][3]}</div>)
      arr5.push(<div key={`${i}-4`} onDrop={(e) => onDropHandler(e)} onDragOver={dragOverHandler} className={`chess-space-odd    ${moves[i][4]}  ${prevMove[i][4]}  `} id={`${i}-4`}>{boardState[i][4]}</div>)
      arr6.push(<div key={`${i}-5`} onDrop={(e) => onDropHandler(e)} onDragOver={dragOverHandler} className={`chess-space-even  ${moves[i][5]}   ${prevMove[i][5]} `} id={`${i}-5`}>{boardState[i][5]}</div>)
      arr7.push(<div key={`${i}-6`} onDrop={(e) => onDropHandler(e)} onDragOver={dragOverHandler} className={`chess-space-odd    ${moves[i][6]}  ${prevMove[i][6]}  `} id={`${i}-6`}>{boardState[i][6]}</div>)
      arr8.push(<div key={`${i}-7`} onDrop={(e) => onDropHandler(e)} onDragOver={dragOverHandler} className={`chess-space-even  ${moves[i][7]}   ${prevMove[i][7]} `} id={`${i}-7`}>{boardState[i][7]}</div>)
    }

  return (
    <>
      <dialog data-modal onKeyDown={(e) => escHandler(e)} className='modal'>
        <button onClick={() => modalHandler('queenW')}><img src={chessQueenW}/></button>
        <button onClick={() => modalHandler('knightW')}><img src={chessKnightW}/></button>
        <button onClick={() => modalHandler('rookW')}><img src={chessRookW}/></button>
        <button onClick={() => modalHandler('bishopW')}><img src={chessBishopW}/></button>
      </dialog>
      <div className="chess-board">
          {arr1}
          {arr2}
          {arr3}
          {arr4}
          {arr5}
          {arr6}
          {arr7}
          {arr8}
      </div>
      <dialog data-modal2 onKeyDown={(e) => escHandler(e)} className='modal'>
        <button onClick={() => modalHandler('queenB')}><img src={chessQueenB}/></button>
        <button onClick={() => modalHandler('knightB')}><img src={chessKnightB}/></button>
        <button onClick={() => modalHandler('rookB')}><img src={chessRookB}/></button>
        <button onClick={() => modalHandler('bishopB')}><img src={chessBishopB}/></button>
      </dialog>

      <dialog data-modal3 onKeyDown={(e) => escHandler(e)} className='modal'>
        <h1>White Wins</h1>
      </dialog>
      <dialog data-modal4 onKeyDown={(e) => escHandler(e)} className='modal'>
        <h1>Black Wins</h1>
      </dialog>
      <dialog data-modal5 onKeyDown={(e) => escHandler(e)} className='modal'>
        <h1>Stalemate</h1>
      </dialog>
    </>
  )
}

export default App