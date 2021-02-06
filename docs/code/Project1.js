
// Part 3 CaesarEncrypt
let CaesarEncrypt = (clearText, shiftNum, shiftLeft) => {
    let output = "";
// debugging tool 
    console.log(shiftLeft, shiftNum, output);

    for (let i = 0; i < clearText.length; i++) {
      chars = clearText[i];
      if (chars.match(/[a-z]/i)) {
        charsCode = chars.charCodeAt();
  
        if (charsCode >= 65 && charsCode <= 90) {
          if (shiftLeft) {
            chars = String.fromCharCode(
              90 - ((90 - charsCode + shiftNum) % 26)
            );
          } else {
            chars = String.fromCharCode(
              ((charsCode - 65 + shiftNum) % 26) + 65
            );
          }
        } else if (charsCode >= 97 && charsCode <= 122) {
          if (shiftLeft) {
            chars = String.fromCharCode(
              122 - ((122 - charsCode + shiftNum) % 26)
            );
          } else {
            chars = String.fromCharCode(
              ((charsCode - 97 + shiftNum) % 26) + 97
            );
          }
        }
      }
      // append 
      output += chars;
    }
    //return output;
    return output;
  };
  
  //Part 4 - Caesar Cipher substitution alphabet 
  // call the two elements from part 3 shiftNum & shift Left with document.getelementbyid 
  function CaesarSubstitutionAlphabet(shiftNum, shiftLeft) {

      // create new div and input in place of html
    let subDiv = document.querySelector("#SubAlpha");
    if (subDiv) {
      subDiv.innerHTML = "";
      [...Array(127 + 1).keys()]
        .filter(number => number >= 33 && number <= 127)
        .forEach(number => {
            // call part 3 function
          let output = `${String.fromCharCode(number)}=${CaesarEncrypt(
            String.fromCharCode(number),
            shiftNum = Number(document.getElementById("shiftNum").value),
            shiftLeft = document.getElementById("shiftLeft").checked
          )}`;
          let newDiv = document.createElement("DIV");
          newDiv.innerHTML = output;
          subDiv.appendChild(newDiv);
        });
    }
  };
  
  
  function ChangeTextInput(txt) {
    //inputs
    clearText = String(document.getElementById("clearText").value);
    shiftNum = Number(document.getElementById("shiftNum").value);
    shiftLeft = document.getElementById("shiftLeft").checked;
    var code = CaesarEncrypt(clearText, shiftNum, shiftLeft);
    document.querySelector("#OutputDiv").innerHTML = code;
  };
  // clear the input text button 
  function ClearInput() {
    document.querySelector("#clearText").value = "";
    document.querySelector("#clearText").dispatchEvent(new Event("input"));
  };
  
  // these are defual values for the webpage 
const DefaultEntry = "Hi my Name is River Weston";
const DefaultNum = 0;

  // Wait for DOM to load - can also use .addEventListener with an appropriate event
  window.onload = () => {
    // Initialization - such as
    // - Startup conditions
    // - Setup event handlers - could place event handles inline, but easier to read when separate
  
    document.querySelector("#ClearButton").addEventListener("click", txt => {
      ClearInput();
    });
  
  // read the slider
    let sliderInput = document.getElementById("shiftNum");
    sliderInput.addEventListener("change", function() {
      document.getElementById("inputRange").value = document.getElementById(
        "shiftNum"
      ).value;
      ChangeTextInput();
    });
  //read the number text box
    let rangeInput = document.getElementById("inputRange");
    rangeInput.addEventListener("change", function() {
      document.getElementById("shiftNum").value = document.getElementById(
        "inputRange"
      ).value;
      ChangeTextInput();
    });
  
// read the check box 
    let checkboxInput = document.getElementById("shiftLeft");
    checkboxInput.addEventListener("change", function() {
      document.getElementById("shiftLeft").value = document.getElementById(
        "shiftLeft"
      ).value;
      ChangeTextInput();
    });
  // elements 
    const inputRef = document.querySelector("#clearText");
    inputRef.addEventListener("input", ChangeTextInput);
    inputRef.value = DefaultEntry;
    inputRef.dispatchEvent(new Event("input"));
  
    const inputNum = document.querySelector("#shiftNum");
    inputNum.addEventListener("input", ChangeTextInput);
    inputNum.value = DefaultNum;
    inputNum.dispatchEvent(new Event("input"));
  
    const checkbox = document.querySelector("#shiftLeft");
    checkbox.addEventListener("change", ChangeTextInput);
    checkbox.dispatchEvent(new Event("change"));
  };
  
  