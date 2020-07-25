import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Look at the console!</h1>
<div>😎</div>
`;

const state = {
  activeStep: 0,
  sections: [
    {
      sectionName: "afiliado",
      controls: [
        {
          controlid: 1,
          value: "valor control 1 afiliado"
        },
        {
          controlid: 2,
          value: "valor control 2 afiliado"
        }
      ]
    },
    {
      sectionName: "medicamentos",
      controls: [
        {
          controlid: 1,
          value: "valor control 1 medicamentos"
        },
        {
          controlid: 2,
          value: "valor control 2 medicamentos"
        }
      ]
    }
  ]
};

const controlActualizado = {
  controlid: 1,
  value: "nuevo valor ********"
};

const updateControlValue = (sections, currentSection) => {
  const copySections = [...sections];
  return copySections.map(section => {
    const copySection = { ...section };
    if (copySection.sectionName === currentSection.sectionName) {
      copySection.controls = copySection.controls.map(control => {
        const copyControl = { ...control };
        if (copyControl.controlid === controlActualizado.controlid) {
          copyControl.value = controlActualizado.value;
        }
        return copyControl;
      });
    }
    return copySection;
  });
};

let newState = {
  ...state,
  sections: updateControlValue(state.sections, state.sections[0])
};

console.log("Original State:", state);

console.log("------------------------------");

console.log(state.sections[0].controls[0].value);
console.log(state.sections[0].controls[1].value);
console.log(state.sections[1].controls[0].value);
console.log(state.sections[1].controls[1].value);

console.log("------------------------------");

console.log(newState.sections[0].controls[0].value);
console.log(newState.sections[0].controls[1].value);
console.log(newState.sections[1].controls[0].value);
console.log(newState.sections[1].controls[1].value);

console.log("------------------------------");

console.log("New State:", newState);
