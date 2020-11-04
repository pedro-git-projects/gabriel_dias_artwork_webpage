//Mudar o tema:
const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;

//Jquery do projeto

$(".gallery").magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{
    enabled: true
  }
}); 

//Desativar right click

document.addEventListener('contextmenu', event => event.preventDefault());