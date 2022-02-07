const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';
const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);
const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

// Move the linkPara 
sect.appendChild(linkPara);

//Remove the linkPara
// sect.removeChild(linkPara);

//Remove the linkPara with a self reference
// linkPara.remove();

//Remove linkPara in older browsers
// linkPara.parentNode.removeChild(linkPara);

//modify css or styles
// para.style.color = 'white';
// para.style.backgroundColor = 'blue';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';

//Element.setAttribute('attribute you wanna change' 'the new value')
para.setAttribute('class', 'highlight');

