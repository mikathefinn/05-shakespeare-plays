document.querySelector('#eka > ul').classList.add('lists');
const ulElements = document.querySelectorAll('#eka > ul');
ulElements.forEach((ul) => {
  ul.style.display = 'flex';
  ul.style.gap = '1rem';
  ul.style.listStyle = 'none';
});

const innerUl = document.querySelectorAll('#eka > ul > li > ul');
innerUl.forEach((ul) => {
  ul.classList.add('boxes');
  ul.style.backgroundColor = 'lightgray';
  ul.style.padding = '';
});

const tables = document.querySelectorAll('#toka > table, #kolmas > table');
tables.forEach((table) => {
  table.classList.add('every-other-line');
  console.log('check check, do we have classes?', table);
  const rows = table.querySelectorAll('tr'); // get all tr elements in all the tables

  rows.forEach((row, index) => {
    // loop through the rows
    if (index % 2 !== 1) {
      // if index is an even number, get all <td> elements in that row
      const cells = row.querySelectorAll('td');

      cells.forEach((cell) => {
        cell.style.backgroundColor = 'lightgray';
      });
    }
  });
});

const allLinks = document.querySelectorAll('a');
console.log(allLinks);
allLinks.forEach((link) => {
  link.classList.add('dotted');
  link.style.color = 'orangered';
  link.style.textDecoration = 'none';
  link.style.fontStyle = 'italic';
  link.style.fontWeight = 'bold';
  link.style.borderBottom = '0.3rem dotted orangered';

  const href = link.getAttribute('href');
  if (href.toLowerCase().endsWith('.pdf')) {
    const pdfIcon = document.createElement('i');
    pdfIcon.classList.add('fa-solid', 'fa-file-pdf');
    const space = document.createTextNode(' ');
    // link.appendChild(space);
    link.parentNode.insertBefore(pdfIcon, link.nextSibling);
    pdfIcon.style.paddingLeft = '0.6rem';
    pdfIcon.style.color = 'orangered';
  }

  const mailto = link.getAttribute('href');
  if (mailto.toLowerCase().includes('mailto')) {
    const mailtoIcon = document.createElement('i');
    const space = document.createTextNode(' ');
    mailtoIcon.classList.add('fa-regular', 'fa-envelope');
    link.parentNode.insertBefore(mailtoIcon, link);
    mailtoIcon.style.paddingRight = '0.6rem';
    mailtoIcon.style.color = 'orangered';
  }
});
const externalLinkArray = []; // array to store the links
const currentHostname = window.location.hostname; //get current domain's hostname

allLinks.forEach((link) => {
  const linkHref = link.getAttribute('href');
  if (linkHref) {
    //to make sure there is a link
    const temporaryLink = document.createElement('a');
    temporaryLink.href = linkHref;
    // create a temporary link to parse the link's href

    if (temporaryLink.hostname !== currentHostname) {
      // check if the link has the same hostname as currentHostname and if not
      // push it to externalLinkArray
      externalLinkArray.push(link);
    }
  }
});
console.log('check the array:' + externalLinkArray); //just to log the links

// go through the external links and add an icon to them

externalLinkArray.forEach((link) => {
  const iconElement = document.createElement('i');
  iconElement.classList.add('fa-solid', 'fa-up-right-from-square');
  iconElement.style.color = 'green';
  iconElement.style.paddingRight = '0.6rem';
  link.parentNode.insertBefore(iconElement, link);
});
