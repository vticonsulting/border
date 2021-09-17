const border = (options) => {
  let elements = document.querySelectorAll(".border");

  if (options.borderType === "thick") {
    options.borderType = "4px";
  } else {
    options.borderType = "1px";
  }
  if (!options.borderColor) {
    options.borderColor = "black";
  }

  elements.forEach((element) => {
    element.style.border = `${options.borderType} solid ${options.borderColor}`;
  });
};

module.exports.border = border;
