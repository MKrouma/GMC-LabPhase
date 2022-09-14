var skilss_title = document.querySelector(".frames-title-description")
console.log(skilss_title)


// FUNCTION 
function skillsUpDown(event) {
  const target = event.currentTarget;
  console.log('The target to up or down is:', target);

  // skilss parent level 
  const skillsRow = target.parentNode.parentNode.parentNode;
  console.log('Skills target parent:', skillsRow);

  // change icon 
  const framesIcon = skillsRow.querySelector(".ft-des-right")
  framesIcon.innerHTML = `<i class="fa-solid fa-chevron-down fa-sm"></i>`

  // delete frame-skills text 
  const framesSkills = skillsRow.querySelector(".frames-skills")
  framesSkills.innerText = ""
}



// LISTENERS 
function upDownSkillListeners() {
  const upDownBtnElementAll = document.getElementsByClassName('ft-des-right');

  for (let upDownBtnElement of upDownBtnElementAll) {
    upDownBtnElement.addEventListener('click', skillsUpDown);
    console.log("Up or Down Skills", upDownBtnElement);
  }
}



// RUN LISTENERS 
upDownSkillListeners()