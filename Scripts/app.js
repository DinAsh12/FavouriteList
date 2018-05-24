/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app = (function () {
    "use strict"

    //functional scope
    let AboutButton;

    //About Button Click event handler
    function AboutButtonClick() {
        console.log("About Button Clicked!");
    }

    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut() {
        event.currentTarget.style.opacity = 1;
    }

    function HomeContecnt() {
        //Homecontent function scope
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";

        //About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

      function ReturnPI() {
        return Math.PI;
    }


    function AboutContent() {
        //let number = ReturnPI();
        //console.log("My funky number: " + myNumber);

        let paragraph = document.getElementById("paragraph");

        let mySentence = "Hello, Dinesh is here. I am robo"

        paragraph.textContent = paragraph;
        paragraph.textContent = mySentence;

        let myArray =[
           {name: "Tom", age: 25},
           {name: "Bob", age: 35},
           {name: "Mike", age: 45},
           {name: "Juan", age: 55},
           {name: "Smyth", age: 65}

        ]; //means create an empty array container

        myArray[0] = "Hello World!";
        myArray[1] = 5;
        myArray[2] = true;

        myArray.push("here is another element");

        let myArray = new Array(); // equivalent to let myArray = [];

        let content = document.getElementsByClassName("content");
        console.log(content[0].textContent);
    }

    function Start() {
        // local variable
        let title = document.title;

        switch (title) {
            case "COMP125 - Home":
                HomeContecnt();
                break;

            case "COMP125 - About":
                AboutContent();

                /*let myNumber = ReturnPI;
                console.Log(myNumber);*/
                break;

            default:
                break;
        }

        //functions inside functions
        /*function outer() {
            let myOuterVariable = 30;
            function innere() {
                function deepInner() {
                    let deepInnerVariable = true;
                    function reallyDeepInside() {
                        function OKThisIsReallyDeep() {
                            let myOuterVariable = "Hello";
                        }
                    }
                }
            }
        }*/

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);
    }
    function Main(){
     title = Start();

    }

    // window.onload = Start;
    window.addEventListener("load", Start);
    return {
        title: document.title,
        myFavouriteNumber: 11

    };
})();