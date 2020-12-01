export function inputGenerator(wraper, data) {
  let inputDOMs = [];
  data.forEach((e) => {
    if (e.type === "text") {
      wraper.appendChild(createTextInput(e));
      inputDOMs[e.id] = document.querySelector("#" + e.id);
    }
    if (e.type === "textarea") {
      wraper.appendChild(createTextArea(e));
    }
    if (e.type === "dropdown") {
      wraper.appendChild(createDropDown(e));
    }
    if (e.type === "file") {
      wraper.appendChild(createFile(e));
    }

    if (e.type === "radio" || e.type === "checkbox") {
      wraper.appendChild(createRadioOrCheckbox(e));
    }
  });

  return inputDOMs;
}

function createRadioOrCheckbox(e) {
  let field = document.createElement("fieldset");
  let legend = document.createElement("legend");
  legend.innerHTML = e.value;
  field.appendChild(legend);

  e.options.forEach((el) => {
    let label = createLabel(el);
    let input = document.createElement("input");
    input.type = e.type;
    input.id = el.id;
    input.name = el.name;
    input.value = el.value;
    let wrapDiv = createInputRow(input, label);
    field.appendChild(wrapDiv);
  });

  let inputRowDiv = createInputRow(field, createCloseButton());
  inputRowDiv.classList.add(e.rowClass);

  return inputRowDiv;
}

function createFile(e) {
  let input = document.createElement("input");

  input.type = e.type;
  input.id = e.id;
  input.name = e.name;
  input.hidden = e.required;

  let label = createLabel(e);
  label.classList.add(e.labelClass);
  let inputRowDiv = createInputRow(label, input);
  inputRowDiv.classList.add(e.rowClass);

  let span = document.createElement("span");
  span.id = e.id + "-span";

  inputRowDiv.appendChild(span);
  inputRowDiv.appendChild(createCloseButton());

  return inputRowDiv;
}

function createDropDown(e) {
  let input = document.createElement("select");

  input.id = e.id;
  input.name = e.name;

  e.options.forEach((op) => {
    let option = document.createElement("option");
    option.value = op.slice(3);
    option.innerHTML = op;
    input.appendChild(option);
  });

  let inputRowDiv = createInputRow(createLabel(e), input);
  inputRowDiv.classList.add(e.rowClass);
  inputRowDiv.appendChild(createCloseButton());

  return inputRowDiv;
}

function createTextArea(e) {
  let input = document.createElement("textarea");

  input.id = e.id;
  input.name = e.name;
  input.placeholder = e.placeholder;
  input.required = e.required;

  let inputRowDiv = createInputRow(createLabel(e), input);
  inputRowDiv.appendChild(createCloseButton());

  return inputRowDiv;
}

function createTextInput(e) {
  let input = document.createElement("input");

  input.type = e.type;
  input.id = e.id;
  input.name = e.name;
  input.placeholder = e.placeholder;
  input.required = e.required;

  let inputRowDiv = createInputRow(createLabel(e), input);
  if (e.id === "address") {
    createNumberInput(inputRowDiv, e);
  }
  inputRowDiv.appendChild(createCloseButton());

  return inputRowDiv;
}

function createNumberInput(inputRowDiv, e) {
  let label = document.createElement("label");
  let input = document.createElement("input");

  label.htmlFor = e.id + "-number";
  label.innerText = "nº";
  label.style.width = "15px";

  input.type = e.type;
  input.id = e.id + "-number";
  input.name = e.name + "-number";
  input.placeholder = "nº";
  input.required = e.required;
  input.style.width = "40px";

  inputRowDiv.appendChild(label);
  inputRowDiv.appendChild(input);
}

function createInputRow(label, input) {
  let inputRowDiv = document.createElement("div");
  inputRowDiv.classList.add("input-row");
  inputRowDiv.appendChild(label);
  inputRowDiv.appendChild(input);
  return inputRowDiv;
}

function createCloseButton() {
  let close = document.createElement("div");
  close.innerHTML = "x";
  return close;
}

function createLabel(e) {
  let label = document.createElement("label");
  label.htmlFor = e.id;
  label.innerHTML = e.value;
  return label;
}
