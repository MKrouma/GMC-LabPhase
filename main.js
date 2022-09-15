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

    // link 
    const aTagELements = document.getElementsByTagName("a")
    for (let aTagELement of aTagELements) {
      aTagELement.style.color = `#24222A`;
    }

    // // button 
    const btnTagELements = document.getElementsByClassName("abt-btn-download")
    for (let btnTagELement of btnTagELements) {
      btnTagELement.getElementsByTagName("a")[0].style.color = `white`;
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

function qualificationMode(event) {
  const target = event.currentTarget;
  const qualifiDescriptionParent = target.parentNode.parentNode
  console.log('The target to up or down is:', qualifiDescriptionParent);

  workOrEducation = target.getAttribute("class")
  console.log("Class log", workOrEducation)

  if (workOrEducation.includes("work")) {
    // new description 
    const quali_descr = `
      <div class="q-d-title">
        <div class="q-d-t-type education">
            <i class="fa-solid fa-graduation-cap fa-xl"></i>
            <h3>Education</h3>
        </div>
        <div class="q-d-t-type work">
            <i class="fa-solid fa-briefcase fa-xl"></i>
            <h3>Work</h3>
        </div>
      </div>
      <div class="q-d-description">
      <div class="qdd-text qdd-text-l">
          <p class="qdd-text-title">Geospatial Specialist</p>
          <p class="qdd-text-school">Satelligence</p>
          <p class="qdd-text-period"><i class="fa-regular fa-calendar"></i>2/2021-Present</p>
      </div>
      <div class="qdd-text qdd-text-r"></div>
      <div class="qdd-text qdd-text-l"></div>
      <div class="qdd-text qdd-text-r">
          <p class="qdd-text-title">Remote sensing & ML Developer</p>
          <p class="qdd-text-school">Spacesense.ai</p>
          <p class="qdd-text-period"><i class="fa-regular fa-calendar"></i>7/2020-12/2020</p>
      </div>
    </div>
    `
    qualifiDescriptionParent.innerHTML = quali_descr

    // change style 
    // console.log("Education", document.getElementsByClassName("education"))
    document.getElementsByClassName("education")[0].style.color = "black";
    document.getElementsByClassName("education")[0].getElementsByTagName("i")[0].style.color = "#AFAEB7";
    document.getElementsByClassName("work")[0].style.color = "#6C55E0";
    document.getElementsByClassName("work")[0].getElementsByTagName("i")[0].style.color = "#6C55E0";

    console.log('The target to up or down is AFTER:', qualifiDescriptionParent);
  } 

  if (workOrEducation.includes("education")) {
    // new description 
    const quali_descr = `
        <div class="q-d-title">
          <div class="q-d-t-type education">
              <i class="fa-solid fa-graduation-cap fa-xl"></i>
              <h3>Education</h3>
          </div>
          <div class="q-d-t-type work">
              <i class="fa-solid fa-briefcase fa-xl"></i>
              <h3>Work</h3>
          </div>
        </div>
        <div class="q-d-description">
          <div class="qdd-text qdd-text-l">
              <p class="qdd-text-title">Mastère spécialisé PPMD</p>
              <p class="qdd-text-school">Ecole Nationale des Sciences Geographiques</p>
              <p class="qdd-text-period"><i class="fa-regular fa-calendar"></i>2019-2020</p>
          </div>
          <div class="qdd-text qdd-text-r"></div>
          <div class="qdd-text qdd-text-l"></div>
          <div class="qdd-text qdd-text-r">
              <p class="qdd-text-title">Ingénieur Géomètre-T.</p>
              <p class="qdd-text-school">Insitut National Polytechnique Félix Houphouet Boigny</p>
              <p class="qdd-text-period"><i class="fa-regular fa-calendar"></i>2014-2019</p>
          </div>
        </div>
    `
    qualifiDescriptionParent.innerHTML = quali_descr

    // change style 
    // console.log("Education", document.getElementsByClassName("education"))
    document.getElementsByClassName("education")[0].style.color = "#6C55E0";
    document.getElementsByClassName("education")[0].getElementsByTagName("i")[0].style.color = "#6C55E0";
    document.getElementsByClassName("work")[0].style.color = "black";
    document.getElementsByClassName("work")[0].getElementsByTagName("i")[0].style.color = "#AFAEB7";

    console.log('The target to up or down is AFTER:', qualifiDescriptionParent);
  }
}


// LISTENERS 
function upDownSkillListeners() {
  const upDownBtnElementAll = document.getElementsByClassName('ft-des-right');

  for (let upDownBtnElement of upDownBtnElementAll) {
    upDownBtnElement.addEventListener('click', skillsUpDown);
    // console.log("Up or Down Skills", upDownBtnElement);
  }
}

function nightModeListerner() {
  const nightModeBtnElement = document.getElementsByClassName('night-mode')[0];
  console.log("Night mode target : ", nightModeBtnElement);
  nightModeBtnElement.addEventListener('click', nightMode);
  
}


function qualificationModeListerner() {
  const qualiBtnElementAll = document.getElementsByClassName('q-d-t-type');

  for (let qualiBtnElement of qualiBtnElementAll) {
    qualiBtnElement.addEventListener('click', qualificationMode);
    // console.log("Qualification Education/Work", qualiBtnElement);
  }
}


// RUN LISTENERS 
upDownSkillListeners()
nightModeListerner()
qualificationModeListerner()