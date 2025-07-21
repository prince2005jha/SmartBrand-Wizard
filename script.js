import ColorThief from 'colorthief';
const imageUpload = document.getElementById('imageUpload');
const paletteDiv = document.getElementById('palette');

imageUpload.addEventListener('change', (event) => {
  const img = new Image();
  img.src = URL.createObjectURL(event.target.files[0]);
  img.onload = () => {
    const colorThief = new ColorThief();
    const palette = colorThief.getPalette(img, 5);
    paletteDiv.innerHTML = '';
    palette.forEach(color => {
      const swatch = document.createElement('div');
      swatch.style.backgroundColor = `rgb(${color.join(',')})`;
      paletteDiv.appendChild(swatch);
    });
  };
});
