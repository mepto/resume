/* biography information */

var bio = {
  "name": "Nathalie",
  "role": "Web developer",
  "welcomeMessage": "Hi, my name is Nathalie",
  "contacts": {
    "mobile": "060606060",
    "e-mail": "natg.inf@gmail.com",
    "github": "mepto",
    "linkedin": "nathalie",
    "location": "Schiltigheim"
  },
  "skills": ["Bilingual", "details-oriented", "solid writing skills", "Good bridge between business and users"],
  "bioPic": "http://placekitten.com/350/350",
  "display": function () {

    var formattedBio = HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role) + HTMLcontactStart + HTMLbioPic.replace('%data%', bio.bioPic) + HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    /* biography addition on page */
    $("#header").prepend(formattedBio);

    if (bio.contacts) {
      var formattedContacts = [];
      for (var contact in bio.contacts) {
        var currentContact = [];
        currentContact[contact] = HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', bio.contacts[contact]);
        formattedContacts.push(currentContact[contact]);
      }
      $('#topContacts').append(formattedContacts.join(''));
      $('#footerContacts').append(formattedContacts.join(''));
    }

    /* check if skills are available */
    if (bio.skills.length > 0) {
      var formattedSkills = [];
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        formattedSkills.push(HTMLskills.replace("%data%", bio.skills[i]));
      }
      $("#skills").append(formattedSkills.join(''));
    }
  }
};


/* work information */

var work = {
  "jobs": [
    {
      "employer": "Council of Europe",
      "title": "Internal communications assistant",
      "location": "Avenue de l'Europe, Strasbourg, France",
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
  ],
  "display": function () {
    if (work.jobs.length > 0) {
      for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formatJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title) + HTMLworkDates.replace("%data%", work.jobs[job].dates) + HTMLworkLocation.replace("%data%", work.jobs[job].location) + HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formatJob);
      }
    }
  }
};


/* education information */

var education = {
  "schools": [
    {
      "name": "Institution Sainte-Clotilde",
      "location": "Rue de Verdun, Strasbourg",
      "degree": "BTS",
      "majors": ["Secretarial duties"],
      "dates": 2001,
      "url": "http://www.clotilde.org"
    },
    {
      "name": "Lycée Lucie Berger",
      "location": "Rue des Greniers, Strasbourg",
      "degree": "Baccalauréat",
      "majors": ["Litterature", "English"],
      "dates": 1997,
      "url": "http://www.lucieberger.com"
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
      "url": "http://lpatc.eformation-webmaster.net/page/accueil-1"
    }
  ],
  "display": function () {
    if (education.schools.length > 0) {
      for (school in education.schools) {
        $('#education').append(HTMLschoolStart);
        var formatSchools = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url) + HTMLschoolDegree.replace("%data%", education.schools[school].degree) + HTMLschoolDates.replace("%data%", education.schools[school].dates) + HTMLschoolLocation.replace("%data%", education.schools[school].location) + HTMLschoolMajor.replace("%data%", education.schools[school].majors.join(', '));
        $('.education-entry:last').append(formatSchools);
      }
    }
    if (education.onlineCourses.length > 0) {
      $('#education').append(HTMLonlineClasses);
      for (onlineCourse in education.onlineCourses) {
        $('#education').append(HTMLonlineStart);
        var formatOnlineCourses = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title).replace("#", education.onlineCourses[onlineCourse].url) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school) + HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates) + HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url).replace("#", education.onlineCourses[onlineCourse].url);
        $('.online-entry:last').append(formatOnlineCourses);
      }
    }
    var formatEducation = formatSchools + formatOnlineCourses;
  }
};


/* projects information */

var projects = {
  projects: [
    {
      "title": "Finishing FEND courses",
      "dates": "ongoing",
      "description": "Something to say here",
      "images": ["http://placekitten.com/200/200"]
    }, {
      "title": "Making a little app",
      "dates": "To be started",
      "description": "Something to say here",
      "images": ["http://placekitten.com/200/200"]
    }, {
      "title": "Making a little game",
      "dates": "To be started",
      "description": "Something to say here",
      "images": ["http://placekitten.com/200/200", "http://placekitten.com/200/200", "http://placekitten.com/200/200"],
    }
  ],
  "display": function () {
    if (projects.projects.length > 0) {
      for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var allProjectImages = [];
        if (projects.projects[project].images.length > 0) {
          for (image in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            allProjectImages.push(formattedImage);
          }
        }
        var formatProject = HTMLprojectTitle.replace("%data%", projects.projects[project].title) + HTMLprojectDates.replace("%data%", projects.projects[project].dates) + HTMLprojectDescription.replace("%data%", projects.projects[project].description) + allProjectImages.join('');
        $(".project-entry:last").append(formatProject);
      }
    }
  }
};
// add google map
$('#mapDiv').append(googleMap);

/* internationalize button */
//$("#main").append(internationalizeButton);

//function inName(name) {
//  name = name.trim().split(' ');
//  name[1] = name[1].toUpperCase();
//  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
//
//  return name[0] + ' ' + name[1];
//}

function displayResume() {
  bio.display();
  work.display();
  projects.display();
  education.display();
}

displayResume();
