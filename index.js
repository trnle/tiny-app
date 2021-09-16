const apps = ['app', 'blog', 'shop', 'note', 'game', 'grave'];

let appName = document.getElementById('app-name');
appName.innerText = apps[0];

let rotateRight = () => {
  apps.push(apps.shift());
  appName.innerText = apps[0];
  return apps;
};

let rotateLeft = () => {
  apps.unshift(apps.pop());
  appName.innerText = apps[0];
  return apps;
};


document.getElementById('right-button').onclick = rotateRight;
document.getElementById('left-button').onclick = rotateLeft;