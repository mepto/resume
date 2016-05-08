/* biography information */

var bio = {
  "name": "Nathalie Gerst",
  "role": "Web developer",
  "welcomeMessage": "Hi, my name is Nathalie",
  "contacts": {
    "Mobile": "060606060",
    "E-mail": "natg.inf@gmail.com",
    "github": "mepto",
    "location": "Alsace"
  },
  "skills": ["Bilingual", "details-oriented", "solid writing skills", "Good bridge between business and users"],
  "bioPic": "http://placekitten.com/350/350"
};


/* work information */

var work = {
  jobs: [
    {
      "employer": "Council of Europe",
      "title": "Internal communications assistant",
      "location": "Strasbourg, France",
      "dates": "2011-present",
      "description": "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum"
    },
    {
      "employer": "Council of Europe",
      "title": "Training unit assistant",
      "location": "Strasbourg, France",
      "dates": "2007-2010",
      "description": "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum"
    },
    {
      "employer": "Council of Europe",
      "title": "Traineeship office assistant",
      "location": "Strasbourg, France",
      "dates": "2006-2007",
      "description": "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum"
    },
    {
      "employer": "Council of Europe",
      "title": "Recruitment assistant",
      "location": "Strasbourg, France",
      "dates": "2003-2006",
      "description": "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum"
    }
  ]
};


/* education information */

var education = {
  "schools": [
    {
      "name": "Institution Sainte-Clotilde",
      "location": "Strasbourg",
      "degree": "BTS",
      "majors": ["Secrétariat"],
      "dates": 2001,
      "url": ""
    },
    {
      "name": "Lycée Lucie Berger",
      "location": "Strasbourg",
      "degree": "Baccalauréat",
      "majors": ["Litterature", "English"],
      "dates": 1997,
      "url": ""
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End developer nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "http://udacity.com"
    },
    {
      "title": "Licence universitaire LPATC",
      "school": "Université de Strasbourg",
      "dates": 2013,
      "url": ""
    }
  ]
};


/* projects information */

var projects = {
  projects: [
    {
      "title": "making a little app",
      "dates": "ongoing",
      "description": "",
      "images": [""]
    }, {
      "title": "Making a little game",
      "dates": "ongoing",
      "description": "",
      "images": [""]
    }
  ]
};

/*****************/
/* add bio stuff */
/*****************/

/* biography to HTML */

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPicture = HTMLbioPic.replace('%data%', bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
//var formattedSkills = HTMLskills.replace('%data%', bio.skills.join(', '));
var formattedContacts = [];
for (var index in bio.contacts) {
  var currentContact = [];
  currentContact[index] = HTMLcontactGeneric.replace('%contact%', index).replace('%data%', bio.contacts[index]);
  formattedContacts.push(currentContact[index]);
}

/* biography addition on page */
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcome);
$("#header").append(formattedContacts);
//$("#header").append(formattedSkills);


/* check if skills are available */
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
}

/*****************/
/**add work stuff*/
/*****************/

var displayWork = function () {
  if (work.jobs.length > 0) {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formatJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title) + HTMLworkDates.replace("%data%", work.jobs[job].dates) + HTMLworkLocation.replace("%data%", work.jobs[job].location) + HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formatJob);
    }
  }
};

displayWork();

/*****************/
/** mouse clicks */
/*****************/

var clicksLogger = function () {
  $(document).click(function (loc) { // your code goes here });
    //  console.log("x= " + loc.pageX + "px ; y= " + loc.pageY + "px ; element clicked= " + loc.toElement + "target= " + loc.target + " ; nodename= " + loc.nodeName);
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
  });
};
clicksLogger();


/* internationalize button */
$("#main").append(internationalizeButton);

function inName(name) {
  name = name.trim().split(' ');
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + ' ' + name[1];
}
