let colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let renderButton = (colorContainer) => {
  let output = ""; //string html
  for (let index = 0; index < colorContainer.length; index++) {
    //Mỗi lần duyệt lấy ra 1 màu
    let color = colorContainer[index];
    output += `
    <button class="color-button ${color} active" onclick="changeColor('${color}')"></button>
          
          `;
  }
  //Hiển thị output lên giao diện
  document.querySelector("#colorContainer").innerHTML = output;
};
renderButton(colorList);
window.changeColor = (colorContainer) => {
  const currentColorClass = document.querySelector(".house").classList;
  if (currentColorClass.length > 1) {
    document.querySelector(".house").classList.remove(currentColorClass[1]);
  }
  document.querySelector(".house").classList.add(colorContainer);
};
