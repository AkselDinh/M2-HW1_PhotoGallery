/*Name this external file gallery.js*/

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    const elem = document.getElementById('image');
    elem.innerHTML = previewPic.alt;
    elem.style.backgroundImage = `url(${previewPic.src})`;
    console.log("Image with alt: " + previewPic.alt + " focused")
}

function unDo() {
    /* In this function you should 
   1) Update the url for the background image of the div with the id = "image" 
   back to the orginal-image.  You can use the css code to see what that original URL was
   
   2) Change the text  of the div with the id = "image" 
   back to the original text.  You can use the html code to see what that original text was
   */

    const elem = document.getElementById('image');
    elem.innerHTML = "Hover over an image below to display here."
    elem.style.backgroundImage = ``;
    console.log("Image blurred")
}

function addTabindex(){
    let elems = document.querySelectorAll("img.preview")
    for (let i = 0; i < elems.length; i++) {
        const element = elems[i];
        element.setAttribute("tabindex", 0);
    }
}