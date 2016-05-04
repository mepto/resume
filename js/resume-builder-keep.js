/* biography informaiton */

var bio = {
  "name" : "Nathalie",
  "role" : "Web developer",
  "contact" : {
    "E-mail" : "natg.inf@gmail.com",
    "Phone" : "060606060",
    "Location" : "Alsace"
  },
  "picture" : "https://placekitten.com/300/200",
  "welcome" : "Hi, my name is Nathalie",
  "skills" : ["Bilingual", "details-oriented", "solid writing skills"]
};

/* biography to HTML */

//var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedPicture = HTMLbioPic.replace('%data%', bio.picture);
//var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcome);
//var formattedSkills = HTMLskills.replace('%data%', bio.skills.join(', '));
//var formattedContacts = [];
//for (var index in bio.contact){
//  var currentContact = [];
//  currentContact[index] = HTMLcontactGeneric.replace('%contact%', index).replace('%data%', bio.contact[index]);
//  formattedContacts.push(currentContact[index]);
//}

/* biography addition on page */
//$("#header").append(formattedName);
//$("#header").append(formattedRole);
//$("#header").append(formattedPicture);
//$("#header").append(formattedWelcome);
//$("#header").append(formattedContacts);
//$("#header").append(formattedSkills);

/* work information */

var work = {
  "position": "Internal communications assistant",
  "employer": "Council of Europe",
  "years": "2010-present",
  "city": "Strasbourg, France"
}

/* work to HTML */

//var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.position);
//var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
//var formattedWorkYears = HTMLworkDates.replace("%data%", work.years);
//var formattedWorkCity = HTMLworkLocation.replace("%data%", work.city);

/* work insert */

//$("#workExperience").append(HTMLworkStart);
//$(".work-entry").append(formattedWorkEmployer);
//$(".work-entry").append(formattedWorkTitle);
//$(".work-entry").append(formattedWorkYears);
//$(".work-entry").append(formattedWorkCity);


/* education information */

//var education = {};
//education["school"] = "Université de Strasbourg";
//education["city"] = "Strasbourg";
//education["years"] = "2012-2013";
//education["degree"] = "Licence Professionnelle Activités et Techniques de Communication";

var education = {
  "schools": [
    {
      "name": "Institution Sainte-Clotilde",
      "city": "Strasbourg",
      "degree": "BTS",
      "major": ["Secrétariat"],
      "dates": 2001,
      "url": ""
    },
    {
      "name": "Lycée Lucie Berger",
      "city": "Strasbourg",
      "degree": "Baccalauréat",
      "major": ["Litterature", "English"],
      "dates": 1997,
      "url": ""
    }
  ],
  "onlineCourses": [
    {
      "name": "Udacity",
      "location": "online",
      "degree": "Front-End developer nanodegree",
      "major": ["Web development"],
      "dates": 2016,
      "url": "http://udacity.com"
    },
    {
      "name": "Université de Strasbourg",
      "city": "Strasbourg",
      "degree": "Licence LPATC",
      "major": ["Gestion de projet", "Web"],
      "dates": 2013,
      "url": ""
    }
  ]
}

/* education to HTML */

//var formattedSchoolName = HTMLschoolName.replace("%data%", education.school);
//var formattedSchoolYears = HTMLschoolDates.replace("%data%", education.years);
//var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.city);
//var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.degree);
//

/* education insert */
//$("#education").append(HTMLschoolStart);
//$(".education-entry").append(formattedSchoolName);
//$(".education-entry").append(formattedSchoolDegree);
//$(".education-entry").append(formattedSchoolYears);
//$(".education-entry").append(formattedSchoolCity);
//

/* projects information */

var projects = {
    {
      "name": "Becoming a web developper",
      "type": "Job relevant",
      "completion": "2016 onwards",
    },
    {
      "name": "Guitar learning",
      "type": "leisure",
      "dates": "ongoing"
    }
}
