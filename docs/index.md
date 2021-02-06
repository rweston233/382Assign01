## Project 1 Learning Objectives
>Create a website application that passes through a string of uppercase or lowercase alphabetic characters than can be encrypted using a Caesar Cipher encryption function. 

### Part 1
>  Create a JavaScript function that accepts three parameters, and returns the Caesar Cipher encrypted text
Function name: `CaesarEncrypt(clearText, shiftNum, shiftLeft)`
- Parameters:
    - **clearTex:t** the unencrypted string
    - **shiftnum:**  the integer number of positions to shift
    - **shiftLeft:**  the Boolean value of whether the shifting is left (`true`), or right (`false`)
- **EX:** if `Abc` is passed through as **clearText** and **shiftNum** is `1` and **shiftLeft** is `true` then the encrypted text (output) is `Zab`

### Part 2 
>Create a JavaScript function that outputs the Caesar Cipher substitution alphabet (Links to an external site.) using the ASCII table between decimal value 33 (!) and 127 (~). The function will return separate div elements for each alphabetic letter
Function name: `CaesarSubstitutionAlphabet(shiftNum, shiftLeft)`
- **Parameters**
    - **shiftnum:**  the integer number of positions to shift
    - **shiftLeft:**  the Boolean value of whether the shifting is left (`true`), or right (`false`)
- **Return:** Substitution table using div elements
    - EX:   `<div key="A">A=Y</div>`
            `<div key="B">B=Z</div>`
- **This function MUST use the following JavaScript programming elements:**
    - Array()
    - Spread operator
    - Array keys() method
    - Array filter() method
    - Array map() method or Array forEach() method 
    - Template literal for the output
    -  String fromCharCode() method

To see the JS code for parts 2 & 3 click [Here](code/Project1.js)
### Part 3
> This part of the assignment involves creating the user interface (UI) for the web application, and connecting the user interface elements to the code.
- **The User Interface must:**
    - Use events to respond to real-time changes (e.g., onchange event), updating all impacted UI elements
    - Provide a user input box for the cleartext
    - Provide some type of output for the ciphertext
    - Provide some type of user input for the number of characters to shift (e.g., input box)
    - Provide some type of user input to determine left or right shift (e.g., checkbox)
    - Include a slider to make the character shift number easier to manage
### Part 4 (extra credit)
> Optionally add CSS to format the output. 
To view the CSS code click [Here](code/Project1.css)


## Final Product
To Use the actual application click [Here](code/Project1.html)

>> Back to home page:
[Home](https://rweston233.github.io/)