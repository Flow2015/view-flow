var svg, box, data, gridScale, scale, pos, gradient, line, circles, i;

svg = $('svg.graph');

data = {};
data.set = [0, 9,	3, 5, 8, 2, 8, 3];
data.length = data.set.length;

box = {
  top: 10,
  right: 790,
  bottom: 290,
  left: 10
};

gridScale = {
  x: (box.right - box.left)/(data.length-1),
  y: (box.bottom - box.top)/10
};

function scale(y){
  return gridScale.y * y;
}

pos = {
  x: box.left,
  y: box.top
};

gradient = 'M' + box.left + ',' + box.bottom + ' ';
line = '';
circles = '';

for(i=0; i < data.length; i++){
  pos.y = box.bottom - scale(data.set[i]);
  gradient += ' L' + pos.x + ',' + pos.y + ' ';
  line += pos.x + ',' + pos.y + ' ';
  circles += '<circle cx="' + pos.x + '" cy="' + pos.y + '" data-value="' + data.set[i] + '" r="5"></circle>';
  pos.x += gridScale.x;
}

gradient += 'L' + box.right + ',' + box.bottom + ' Z';

svg.find('g.surfaces').html('<path class="first_set" d="' + gradient + '"></path>');
svg.find('g.first_set.points').html(circles);
svg.find('g.line').html('<polyline points="' + line + '"></polyline>');

line = $('.interaction line');
iX = box.left;

function iXconvert(x){
  return x / svg.width() * 800;
}
