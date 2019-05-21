const beMe = {
    name: 'ryan mccoy',
    careerField: 'Full Stack Developer',
    sDesc: 'I am a 26 year old web developer in Nashville TN. I am a husband and father of two amazing kids. I am very creative and enjoy learnig and trying new things.'
};

const interests = ['D&D', 'Miniature Figures', 'World building', 'Programming', 'Creating things with my hands.'];

const pastPos = [{cName:  'Impact Banners and Signs', title:  'Production Manager', sDesc: 'Oversaw Printing and finishing departments, operated wide format printers, first level maintenance and operatio of all machines company wide.'},{cName: 'US Army Nation Guard', title: 'Logistics Officer', sDesc: 'Led Platoon of wheeled vehicle mechanics.'},{cName: 'Bethel World Outreach Church', title: 'Housekeeping Technician', sDesc: 'I was a janitor.'},{cName:  'Dippin Dots Icecream', title: 'Employee', sDesc: 'I made delicious icecream treats and took care of the entire store for dayshifts as a 16 year old.'}]; 

const skills = [{sName: 'Dungeon Mastering',isCool: true}, {sName: 'Javascript',isCool: false},{sName: 'Caldera RIP',isCool: false},{sName: 'Expert Marksman',isCool: true},{sName: 'Adobe photoshop, illustrator, indesign',isCool: false},{sName: 'Bootstrap',isCool: false},{sName: 'Miniature figure painting',isCool: true}, {sName: 'Hopefully more after this course!',isCool: true}];

//Formats pasto positions
function displayPosition(cName,title,sDesc) {
    console.log("* " + title + ' at ' + cName + ' - ' + sDesc);
};

//Adds 'BAM:' to Cool skills
function displaySkill(sName,isCool) {
    if (isCool == true) {
        console.log('* ' + 'BAM: ' + sName)
    } else {
        console.log('* ' + sName)
    };
};

//begin resume
console.log('Name: ' + beMe.name.toUpperCase());
console.log('Career: ' + beMe.careerField);
console.log('Description: ' + beMe.sDesc);

console.log('My Interests:')
for (const int of interests) {
    console.log('* ' + int);
};

console.log('My Previous Experience:')
for (const pos of pastPos) {
    displayPosition(pos.cName, pos.title, pos.sDesc);
};

console.log('My Skills:')
for (const skl of skills) {
    displaySkill(skl.sName,skl.isCool);
};