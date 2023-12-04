function shuffleValues() {
  const checkboxes = document.querySelectorAll(
    '.options input[type="checkbox"]'
  );

  const labels = document.querySelectorAll(".options label");

  const values = Array.from(checkboxes).map((checkbox, index) => {
    const label = labels[index];
    return { value: checkbox.value, label: label.innerText, checked: checkbox.checked };
  });

  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }

  checkboxes.forEach((checkbox, index) => {
    checkbox.value = values[index].value;
    labels[index].innerText = values[index].label;
    checkbox.checked = values[index].checked; // Uncheck all checkboxes after shuffling
  });
  
  showSelectedValues();
}

function changeValues() {
  const checkboxes = document.querySelectorAll(
    '.options input[type="checkbox"]'
  );
  const labels = document.querySelectorAll(".options label");

  const randomValues = generateRandomValues(checkboxes.length);

  checkboxes.forEach((checkbox, index) => {
    checkbox.value = randomValues[index].value;
    labels[index].innerText = randomValues[index].label;
    checkbox.checked = false;
  });
  showSelectedValues();
}


function showSelectedValues() {
  const checkboxes = document.querySelectorAll(
    '.options input[type="checkbox"]:checked'
  );


  const container = document.querySelector(".selected-items");
  container.innerHTML = "";

  checkboxes.forEach((checkbox) => {
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.value = checkbox.value;
    newCheckbox.checked = true;
    newCheckbox.disabled = true;

    newCheckbox.className = "checkbox";

    const newLabel = document.createElement("label");
    newLabel.htmlFor = checkbox.value;
    newLabel.innerText = checkbox.value;

    const newDiv = document.createElement("div");
    newDiv.appendChild(newCheckbox);
    newDiv.appendChild(newLabel);

    container.appendChild(newDiv);
  });
}

function generateRandomValues(count) {
  const values = [];
  const labelPrefix = "Random Value ";

  for (let i = 1; i <= count; i++) {
    let randomValue, randomLabel;

    do {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      randomValue = `${labelPrefix}${randomNumber}`;
      randomLabel = `${labelPrefix}${randomNumber}`;
    } while (values.some((item) => item.value === randomValue));

    values.push({ value: randomValue, label: randomLabel });
  }

  return values;
}