var shareButtons = document.querySelectorAll('.share-button');
var shareDialog = document.querySelector('.share-dialog');
var closeButton = document.querySelector('.close-button');
var backdrop = document.querySelector('.backdrop');

function shareButtonListener(event) {
    if (navigator.share) {
        navigator.share({
            title: 'Mask Banao',
            url: document.URL
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
        document.querySelector(".backdrop").style.display = "block";
    }
}

for (var button of shareButtons) {
    button.addEventListener('click', shareButtonListener)
}

if (backdrop) {
    backdrop.addEventListener('click', closeDialog);
}

if (closeButton) {
    closeButton.addEventListener('click', closeDialog);
}

function closeDialog() {
    shareDialog.classList.remove('is-open');
    document.querySelector(".backdrop").style.display = "none";
}

const copyToClipboard = function(str) {
    var el = document.createElement('textarea');  // Create a <textarea> element
    el.value = str;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    var selected =
        document.getSelection().rangeCount > 0        // Check if there is any content selected previously
            ? document.getSelection().getRangeAt(0)     // Store selection if found
            : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
        document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
        document.getSelection().addRange(selected);   // Restore the original selection
    }
};