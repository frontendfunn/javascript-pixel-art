var colorsObject = {
  b: '#212121',
  w: '#efefef',
  o: 'transparent'
};
var heart = [
  ['r', 'g', 'b'],
  ['b', 'b']
];

var thugLife = [
  [
    'o',
    'o',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b'
  ],
  [
    'b',
    'b',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'b',
    'b',
    'w',
    'b',
    'w',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'w',
    'b',
    'w',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b'
  ],
  [
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'b',
    'b',
    'w',
    'b',
    'w',
    'b',
    'b',
    'b',
    'b',
    'b',
    'o',
    'b',
    'b',
    'b',
    'w',
    'b',
    'w',
    'b',
    'b',
    'b',
    'b',
    'b',
    'o'
  ],
  [
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'b',
    'b',
    'w',
    'b',
    'w',
    'b',
    'b',
    'b',
    'o',
    'o',
    'o',
    'b',
    'b',
    'b',
    'w',
    'b',
    'w',
    'b',
    'b',
    'b',
    'o',
    'o'
  ],
  [
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'o',
    'o',
    'o',
    'o',
    'o',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'o',
    'o',
    'o'
  ]
];

function createPixelArt(
  containerElementId,
  pixelArtArray,
  sizeOfPixel,
  colorsObject
) {
  var container = document.getElementById(containerElementId);
  var pixel = document.createElement('div');
  container.appendChild(pixel);
  var noOfRows = pixelArtArray.length;
  var noOfColumns = pixelArtArray[0].length;
  var heightOfElement = sizeOfPixel * noOfRows;
  var widthOfElement = sizeOfPixel * noOfColumns;
  container.style.position = 'relative';
  container.style.height = heightOfElement + 'px';
  container.style.width = widthOfElement + 'px';
  container.style.overflow = 'hidden';
  pixel.style.position = 'absolute';
  pixel.style.height = sizeOfPixel + 'px';
  pixel.style.width = sizeOfPixel + 'px';
  pixel.style.top = -sizeOfPixel + 'px';
  pixel.style.left = -sizeOfPixel + 'px';
  var boxShadow = '';
  pixelArtArray.forEach(function(row, rowIndex) {
    row.forEach(function(column, columnIndex) {
      boxShadow += `${(columnIndex + 1) * sizeOfPixel}px ${(rowIndex + 1) *
        sizeOfPixel}px ${colorsObject[column]},`;
    });
  });
  //    remove last comma
  boxShadow = boxShadow.slice(0, -1);
  pixel.style.boxShadow = boxShadow;
}

createPixelArt('thug-life', thugLife, 20, colorsObject);
