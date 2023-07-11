const controls = document.querySelectorAll(".controls input");

function updateValue() {
  const suffix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}

controls.forEach((control) => control.addEventListener("change", updateValue));
controls.forEach((control) =>
  control.addEventListener("mousemove", updateValue)
);
