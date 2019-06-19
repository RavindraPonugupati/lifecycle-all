import React, { Component } from 'react';

function activateLasers(){
  // alert();
   document.getElementById("txt").style.color = "#ff0000";
   console.log('1');
}

function activateLasers1() {
    let str = "hello sir";
    var result = str.fontcolor("green");
  
    document.getElementById("txt1").innerHTML = result;
    console.log('2');
    //alert(1);

}



function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

class HandlingEvents2 extends Component{
   
        
    
    render() {
        return(

            <div>
                <p id="txt">i want to change the color of the txt</p>
                <button onClick={activateLasers}>Click me!</button>

                <p id="txt1">this is click event function</p>
                <button onClick={activateLasers1}>Click me! txt color will change</button>
                {/* <a href="#" onclick="console.log('The link was clicked.'); return false">link open the another page</a> */}

                 <a href="#" onClick={handleClick}> Click me </a>
            </div>
 

        );
    }
}

export default HandlingEvents2;