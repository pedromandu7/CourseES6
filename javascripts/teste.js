/*
*adicionar classe ativo as sections quando clicar na imagem
 */

const jstabmenu = document.querySelectorAll('.js-tab-menu li');
const jsTabcontent = document.querySelectorAll('.js-tabcontent section');
jsTabcontent[0].classList.remove('disabled')
jsTabcontent[0].classList.add('anebled')

console.log(jsTabcontent);

function AddClassActive(index) {
  const Index = index;
  jsTabcontent.forEach((item, index) => {

    if (index === Index) {
      item.classList.add('enabled');
      item.classList.remove('disabled')
      console.log(item.className);
    } else {
      item.classList.remove('enabled');
      item.classList.add('disabled');
      console.log(item.className);
    }
  })

}

// const li = jstabmenu.querySelectorAll('li');
let i = 1
jstabmenu.forEach((li, index) => {
  li.addEventListener('click', () => {
    AddClassActive(index);
  })
});

