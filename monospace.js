/*
 * Made by: Quintin Herb
 * Website: QuintinHerb.net
 *   Email: quintin@quintinherb.net
 */

// to monospace the text within an element, set the id to "monospace"
// add a script tag with the src "monospace.js" after the text you want
// to monospace or at the end of the body.

// change this number to change the size of the letters:
var letterSize = "10px";

// get the element with the id "monospace" and store it in a variable.
var getElementToMonospace = document.getElementById('monospace');
// get the text of the element and store it in a variable
var getTextFromElement = getElementToMonospace.innerHTML;
// clear the element so we can add monospaced text back in
getElementToMonospace.innerHTML = '';

// a temporary variable to hold letters of words
// this ensures words don't break in the middle
var word = '';

// loop through each letter in the element
for (var i = 0; i < getTextFromElement.length; i++) {
    // if the letter is not a space (or a word hasn't ended), add a letter to the word variable.
    if (getTextFromElement.charAt(i) != ' ') {
        // formats the HTML using the selected letter size
        word += '<div style="text-align: center; display: inline-block; width: ' + letterSize + '">' + getTextFromElement.charAt(i) + '</div>';
    } else {
        // if the word has ended, formats the HTML based on the selected letter size
        getElementToMonospace.innerHTML += '<div style="display: inline-block; margin-left: ' + letterSize + '">' + word + '</div>';
        // clears the word variable
        word = '';
    }
}