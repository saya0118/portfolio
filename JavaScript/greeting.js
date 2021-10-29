
const content = "Welcome abroad!";

const typing = (element, sentence) => {
	[...sentence].forEach((character, index) => {
  	setTimeout(() => {
    	document.querySelector(element).textContent += character;
    }, 100 * ++index);
  });
}

typing('.greeting', content);


setInterval(() => {
	document.querySelector('.greeting').textContent = ''
	typing('.greeting', content);
}, 250 * content.length)