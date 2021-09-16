const apps = ['app', 'blog', 'shop', 'note', 'game', 'grave'];

let appName = document.getElementById('app-name');
appName.innerText = apps[0];

const toggleDark = () => {
  document.body.style.color = '#ffedd9';
  document.body.style.backgroundColor = '#000000';
  appName.style.color = '#ffc88c';
};

const toggleLight = ()  => {
  document.body.style.color = '#000000';
  document.body.style.backgroundColor = '#FFFFFF';
  appName.style.color = '#8e8cff';
};

let rotateRight = () => {
  apps.push(apps.shift());
  appName.innerText = apps[0];
  apps[0] === 'grave' ? toggleDark() : toggleLight();
  return apps;
};

let rotateLeft = () => {
  apps.unshift(apps.pop());
  appName.innerText = apps[0];
  console.log(apps[0]);
  apps[0] === 'grave' ? toggleDark() : toggleLight();
  return apps;
};


document.getElementById('right-button').onclick = rotateRight;
document.getElementById('left-button').onclick = rotateLeft;