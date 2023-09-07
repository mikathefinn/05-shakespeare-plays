document.querySelector('#eka > ul').classList.add('lists');
const ulElements = document.querySelectorAll('#eka > ul');
ulElements.forEach((ul) => {
  ul.style.display = 'flex';
  ul.style.gap = '1rem';
  ul.style.listStyle = 'none';
});

const innerUl = document.querySelectorAll('#eka > ul > li >ul');
innerUl.forEach((ul) => {
  ul.classList.add('boxes');
  ul.style.backgroundColor = 'lightgray';
  ul.style.padding = '';
});

const tables = document.querySelectorAll('#toka > table, #kolmas > table');
tables.forEach((table) => {
  table.classList.add('every-other-line');
  console.log('check check, do we have classes?', table);
  const rows = table.querySelectorAll('tr'); //get all tr elements in all the tables

  rows.forEach((row, index) => {
    //loop through the rows
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
  link.style.fontWeight = 'bolc';
  link.style.borderBottom = '0.3rem dotted orangered';
});
