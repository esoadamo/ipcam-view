function pre2ai(){
  const c1 = document.querySelector('#canvas');
  const secondWindow = window.open("", "test", `width=${c1.width},height=${c1.height}`);
  const d2 = secondWindow.document;
  const b2 = d2.body;
  b2.innerHTML = '';
  const c2 = document.createElement('canvas');
  c2.width = c1.width;
  c2.height = c1.height;
  const c3 = document.createElement('canvas');
  c3.width = c1.width;
  c3.height = c1.height;
  b2.appendChild(c2);

  let context = c2.getContext('2d');
  let co3 = c3.getContext('2d');
  context.globalCompositeOperation = 'difference';
  co3.drawImage(c1, 0, 0, c2.width, c2.height);
  setInterval(() => {
    context.clearRect(0, 0, c2.width, c2.height);
    context.drawImage(c3, 0, 0, c2.width, c2.height);
    context.drawImage(c1, 0, 0, c2.width, c2.height);
    co3.drawImage(c1, 0, 0, c2.width, c2.height);
  }, 50);
}
pre2ai();
