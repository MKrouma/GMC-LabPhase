var skilss_title = document.querySelector(".frames-title-description")
console.log(skilss_title)


// FUNCTION 
function nightMode(event) {
  const nightModeElement = event.currentTarget;
  const nightOrNot = nightModeElement.getAttribute("id")
  console.log("Night mode element :", nightModeElement)

  if (nightOrNot == "n-m-light") {
    document.getElementsByTagName("body")[0].style.backgroundColor = `#312244`;
    document.getElementsByTagName("body")[0].style.color = `#FAFAFD`;

    const aTagELements = document.getElementsByTagName("a")
    for (let aTagELement of aTagELements) {
      aTagELement.style.color = `#FAFAFD`;
    }
  
    document.querySelector(".nav-bar").style.backgroundColor = `#312244`;
    // document.querySelector(".nav-bar").style.color = `#FAFAFD`;
    document.querySelector(".project-footer").style.backgroundColor = `#4d194d`;

    // change id attribute 
    nightModeElement.setAttribute("id", "n-m-notlight") 
    console.log("Night mode element AFTER:", nightModeElement)
  } 
  
  else {
    document.getElementsByTagName("body")[0].style.backgroundColor = `#FAFAFD`;
    document.getElementsByTagName("body")[0].style.color = `#24222A`;

    const aTagELements = document.getElementsByTagName("a")
    for (let aTagELement of aTagELements) {
      aTagELement.style.color = `#24222A`;
    }

    
    document.querySelector(".nav-bar").style.backgroundColor = `#FAFAFD`;
    document.querySelector(".project-footer").style.backgroundColor = `#6C55E0`;

    // change id attribute 
    nightModeElement.setAttribute("id", "n-m-light")
  }

}

function skillsUpDown(event) {
  const target = event.currentTarget;
  console.log('The target to up or down is:', target);

  // skilss parent level 
  const skillsRow = target.parentNode.parentNode.parentNode;
  const framesSkills = skillsRow.querySelector(".frames-skills")
  const frameSkillsOriginalHTML = `
  <div class="frames-skills">
      <div class="frames-skills-empty"></div>
      <div class="frames-skills-enums">
          <div class="frames-skills-enum">
              <div class="f-s-e-up">
                  <div>GIS</div>
                  <div>82%</div>
              </div>
              <div class="f-s-e-down">
                  <div class="progress-bar">
                      <div class="pg pg-bar-GIS"></div>
                  </div>
              </div>
          </div>
          <div class="frames-skills-enum">
              <div class="f-s-e-up">
                  <div>Remote sensing</div>
                  <div>80%</div>
              </div>
              <div class="f-s-e-down">
                  <div class="progress-bar">
                      <div class="pg pg-bar-RS"></div>
                  </div>
              </div>
          </div>
          <div class="frames-skills-enum">
              <div class="f-s-e-up">
                  <div>SAR</div>
                  <div>70%</div>
              </div>
              <div class="f-s-e-down">
                  <div class="progress-bar">
                      <div class="pg pg-bar-SAR"></div>
                  </div>
              </div>
          </div>
          <div class="frames-skills-enum">
              <div class="f-s-e-up">
                  <div>Forestery/Agriculture</div>
                  <div>55%</div>
              </div>
              <div class="f-s-e-down">
                  <div class="progress-bar">
                      <div class="pg pg-bar-FA"></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  `
  console.log('Skills target parent:', skillsRow);

  // change icon 
  const framesIconParent = skillsRow.querySelector(".ft-des-right")
  const framesIconCLass = framesIconParent.getElementsByTagName("i")[0].getAttribute("class")
  console.log("Icon class attributes : ", framesIconCLass)

  if (framesIconCLass.includes(`fa-chevron-down`)) {
    framesIconParent.innerHTML = `<i class="fa-solid fa-chevron-up fa-sm"></i>`

    // upload frameskills original HTML
    framesSkills.innerHTML = frameSkillsOriginalHTML
  } 
  
  else {
    framesIconParent.innerHTML = `<i class="fa-solid fa-chevron-down fa-sm"></i>`

    // delete frame-skills text 
    framesSkills.innerHTML = ""
  }
}



// LISTENERS 
function upDownSkillListeners() {
  const upDownBtnElementAll = document.getElementsByClassName('ft-des-right');

  for (let upDownBtnElement of upDownBtnElementAll) {
    upDownBtnElement.addEventListener('click', skillsUpDown);
    console.log("Up or Down Skills", upDownBtnElement);
  }
}

function nightModeListerner() {
  const nightModeBtnElement = document.getElementsByClassName('night-mode')[0];
  console.log("Night mode target : ", nightModeBtnElement);
  nightModeBtnElement.addEventListener('click', nightMode);
  
}



// RUN LISTENERS 
upDownSkillListeners()
nightModeListerner()