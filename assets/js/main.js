var skilss_title = document.querySelector(".frames-title-description")
console.log(skilss_title)


// FUNCTION 
function nightMode(event) {
  const nightModeElement = event.currentTarget;
  const nightOrNot = nightModeElement.getAttribute("id")
  console.log("Night mode element :", nightModeElement)

  // NIGHT MODE 
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
  
  // LIGHT MODE 
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
  console.log('Skills target parent:', skillsRow);

  // change icon & skills 
  const framesIconParent = skillsRow.querySelector(".ft-des-right")
  const framesIconCLass = framesIconParent.getElementsByTagName("i")[0].getAttribute("class")
  console.log("Icon class attributes : ", framesIconCLass)

  if (framesIconCLass.includes(`fa-chevron-down`)) {
    framesIconParent.innerHTML = `<i class="fa-solid fa-chevron-up fa-sm"></i>`

    // upload frameskills original HTML
    framesSkills.style.display = "flex";
  } 
  
  else {
    framesIconParent.innerHTML = `<i class="fa-solid fa-chevron-down fa-sm"></i>`

    // delete frame-skills text 
    framesSkills.style.display = "None";
  }

  // reduce height 
  const earthSkillsUp = document.querySelector("#earthO-skills").children[0].children[1].children[1].children[0].getAttribute("class")
  const dataSSkillsUp = document.querySelector("#dataS-skills").children[0].children[1].children[1].children[0].getAttribute("class")
  const webSkillsUp = document.querySelector("#webD-skills").children[0].children[1].children[1].children[0].getAttribute("class")
  const dataESkillsUp = document.querySelector("#dataE-skills").children[0].children[1].children[1].children[0].getAttribute("class")
  console.log("Earth skills :", dataSSkillsUp)
  console.log("Earth skills :", dataSSkillsUp)

  // group 1 & 2 var 
  const skillsElement = document.querySelector(".skills")
  const skillsDownElement = document.querySelector(".skills-down")
  const groupe1DownALL = document.getElementsByClassName("sk-groupe1")
  const groupe2DownALL = document.getElementsByClassName("sk-groupe2")

  // GROUP 1
  if (earthSkillsUp.includes("fa-chevron-down") && dataSSkillsUp.includes("fa-chevron-down")) {
    // reduce skills down 
    skillsElement.style.height = "500px"
    skillsDownElement.style.height = "400px"

    // reduce groupe 1
    for (let groupe1Down of groupe1DownALL) {
      groupe1Down.style.height = "50px";
    }

    for (let groupe2Down of groupe2DownALL) {
      groupe2Down.style.height = "350px";
    }
  }

  else {
     // reduce skills down 
     skillsElement.style.height = "750px"
     skillsDownElement.style.height = "100%"
 
     // reduce groupe 1
     for (let groupe1Down of groupe1DownALL) {
       groupe1Down.style.height = "50%";
     }
  }

  // GROUP 2
  if (webSkillsUp.includes("fa-chevron-down") && dataESkillsUp.includes("fa-chevron-down")) {
    // reduce skills down 
    skillsElement.style.height = "500px"
    skillsDownElement.style.height = "400px"

    // reduce groupe 2
    for (let groupe1Down of groupe1DownALL) {
      groupe1Down.style.height = "350px";
    }

    for (let groupe2Down of groupe2DownALL) {
      groupe2Down.style.height = "50px";
    }
  }

  else {
     // reduce skills down 
     skillsElement.style.height = "750px"
     skillsDownElement.style.height = "100%"
 
     // reduce groupe 2
     for (let groupe2Down of groupe2DownALL) {
      groupe2Down.style.height = "50%";
     }
  }

  // ALL 
  if (earthSkillsUp.includes("fa-chevron-down") && dataSSkillsUp.includes("fa-chevron-down")
    && webSkillsUp.includes("fa-chevron-down") && dataESkillsUp.includes("fa-chevron-down")) 
  {
    // reduce skills down 
    skillsElement.style.height = "300px"
    skillsDownElement.style.height = "200px"

    // reduce groupe 1
    for (let groupe1Down of groupe1DownALL) {
      groupe1Down.style.height = "50px";
    }

    for (let groupe2Down of groupe2DownALL) {
      groupe2Down.style.height = "50px";
    }
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
    nightOrNot = document.getElementsByClassName("night-mode")[0].getAttribute("id")
    console.log("Night mode for Quali : ", nightOrNot)
    if (nightOrNot == "n-m-light") {
      document.getElementsByClassName("education")[0].style.color = "black";
    }
    else {
      document.getElementsByClassName("education")[0].children[1].style.color = "white";
    }
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