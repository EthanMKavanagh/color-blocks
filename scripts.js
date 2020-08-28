/*
[x] - Add 4 buttons
[] - when clicked, add color block to DOM
[] - count total of each block
*/


$( document ).ready( readyNow );

function readyNow(){
    $( '.redButton' ).on( 'click', redSquareDisplay );
    $( '.blueButton' ).on( 'click', blueSquareDisplay );
    $( '.greenButton' ).on( 'click', greenSquareDisplay );
    $( '.yellowButton' ).on( 'click', yellowSquareDisplay );
} // end readyNow

let redNumber = 1;
function redSquareDisplay(){
    $( '.squares' ).append( '<div class=redSquare></div>' );
    let el = $( '.redCount' );
    el.empty();
    el.append( ' ', redNumber++ );
} // end redSquareDisplay

let blueNumber = 1;
function blueSquareDisplay(){
    $( '.squares' ).append( '<div class=blueSquare></div>' );
    let el = $( '.blueCount' );
    el.empty();
    el.append( ' ', blueNumber++ );
} // end blueSquareDisplay

let greenNumber = 1;
function greenSquareDisplay(){
    $( '.squares' ).append( '<div class=greenSquare></div>' );
    let el = $( '.greenCount' );
    el.empty();
    el.append( ' ', greenNumber++ );
} // end greenSquareDisplay

let yellowNumber = 1
function yellowSquareDisplay(){
    $( '.squares' ).append( '<div class=yellowSquare></div>' );
    let el = $( '.yellowCount' );
    el.empty();
    el.append( ' ', yellowNumber++ );
} // end yellowSquareDisplay