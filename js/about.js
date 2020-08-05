var teamElement = document.querySelector('.team');
var teamArr = [
    {
        name: 'Sualeh Asif',
        position: 'Project Manager and Head of Development',
        location: 'Cambridge, USA',
        credentials: "Massachusetts Institute of Technology'22",
        img: 'Sualeh.png',
        linkedin: 'https://www.linkedin.com/in/sualeh-a-1a4a97116/'
    },
    {
        name: 'Adan Ali',
        position: 'Campaign Director and Head of Creative',
        location: 'Doha, Qatar',
        credentials: "Northwestern University'22",
        img: 'Adan.png',
        linkedin: 'https://www.linkedin.com/in/adanali12/'
    },
    {
        name: 'Turab Abbas',
        position: 'Head of Marketing and Promotions',
        location: 'Karachi, Pakistan',
        credentials: "Institute of Business Administration'22",
        img: 'Turab.png',
        linkedin: 'https://www.linkedin.com/in/turababbas/'
    },
    {
        name: 'Amar Lal',
        position: 'Head of Public Relations and Operations ',
        location: 'Hyderabad, Pakistan',
        credentials: "Lahore University of Management Sciences'22",
        img: 'Amar.png',
        linkedin: 'https://www.linkedin.com/in/amar-lal-55945a76/'
    },
    {
        name: 'Ali S Mohammad',
        position: 'Head of Content Development',
        location: 'Philadelphia, USA',
        credentials: "University of Pennsylvania'22",
        img: 'Ali Sulaiman.png',
        linkedin: 'https://www.linkedin.com/in/ali-sulaiman-m-4b85a3b8/'
    },
    {
        name: 'Rujul Gandhi',
        position: 'Head of Content Development',
        location: 'Cambridge, USA',
        credentials: "Massachusetts Institute of Technology'22",
        img: 'Rujul.png',
        linkedin: 'https://www.linkedin.com/in/rujul-gandhi-7010a819b/'
    },
    {
        name: 'Iffah Abid Kitchlew',
        position: 'Copy Lead',
        location: 'Lahore, Pakistan',
        credentials: "Northwestern University'22",
        img: 'Ifflah Abid.png',
        linkedin: 'https://www.linkedin.com/in/iffah-kitchlew-849024189/'
    },
    {
        name: 'Hashir Ali Awan',
        position: 'Translation Lead',
        location: 'Karachi, Pakistan',
        credentials: "Dow University of Health Sciences'23",
        img: 'Hashir.png',
        linkedin: ''
    },
    {
        name: 'Abdul Rahman Abid',
        position: 'Video Lead',
        location: 'Doha, Qatar',
        credentials: "Northwestern University'22",
        img: 'Abdul Rahman.png',
        linkedin: 'https://www.linkedin.com/in/abdul-rahman-abid-1547a2163/'
    },
    {
        name: 'Natasha Hirt',
        position: 'Art Lead',
        location: 'Cambridge, USA',
        credentials: "Massachusetts Institute of Technology'22",
        img: 'Natasha.png',
        linkedin: 'https://www.natashahirtportfolios.com'
    },
    {
        name: 'Saad Aftab',
        position: 'Design Lead',
        location: 'Tampa, USA',
        credentials: "University of South Florida'23",
        img: 'Saad.png',
        linkedin: 'https://www.linkedin.com/in/saad-aftab-783a24183/'
    },
    {
        name: 'Sania Irfan',
        position: 'Editor',
        location: 'New York City, USA',
        credentials: "New York University'21",
        img: 'Sania Irfan.png',
        linkedin: 'https://www.linkedin.com/in/saniairfan/'
    },
    {
        name: 'Zeest Mariam',
        position: 'Social Media Manager',
        location: 'Doha, Qatar',
        credentials: "Northwestern University'23",
        img: 'Zeest.png',
        linkedin: 'https://www.linkedin.com/in/zeest-m-572090128/'
    },
    {
        name: 'Afaq Ahmed',
        position: 'On-ground Strategist',
        location: 'Karachi, Pakistan',
        credentials: "Institute of Business Administration'22",
        img: '',
        linkedin: 'https://www.linkedin.com/in/iafaqahmed/'
    },
    {
        name: 'Mateo Simonovic',
        position: 'Web Developer',
        location: 'Zagreb, Croatia',
        credentials: "",
        img: 'Mateo.png',
        linkedin: 'https://www.linkedin.com/in/mateosimonovic/'
    },
    {
        name: 'Kaira Del Rosario',
        position: 'Web Developer',
        location: 'Manila, Philippines ',
        credentials: "",
        img: 'Kaira.png',
        linkedin: 'https://www.linkedin.com/in/kairari/'
    },
    {
        name: 'Quratul Aain Zainab',
        position: 'Web Developer',
        location: 'Dubai, UAE',
        credentials: "",
        img: 'Qurat.png',
        linkedin: ''
    },
    {
        name: 'Tayyab Aziz',
        position: 'Web Developer',
        location: 'Karachi, Pakistan',
        credentials: "Eat Mubarak",
        img: 'Tayyab.png',
        linkedin: 'https://www.linkedin.com/in/tayyabaziz/'
    },
    {
        name: 'Pranav Patil',
        position: 'Web Developer',
        location: 'San Diego, USA',
        credentials: "Caltech'24",
        img: 'Pranav.png',
        linkedin: 'https://www.linkedin.com/in/pranav-patil-a57182188/'
    },
    {
        name: 'Syed Shaheryar Hussain',
        position: 'Copy Writer',
        location: 'Karachi, Pakistan',
        credentials: "Lahore University of Management Sciences'22",
        img: 'Shaheryar.png',
        linkedin: ''
    },
    {
        name: 'Kanwar Muhammad Areeb',
        position: 'Video Producer',
        location: 'Karachi, Pakistan',
        credentials: "Nixor College'21",
        img: 'Kanwar.png',
        linkedin: ''
    },
    {
        name: 'Ulan Seitkaliyev',
        position: 'Web Developer',
        location: '',
        credentials: "",
        img: '',
        linkedin: ''
    },
    {
        name: 'Aaron Lin',
        position: 'Web Developer',
        location: 'Fremont, California',
        credentials: "Google, Massachusetts Institute of Technology'18",
        img: 'Aaron Lin.png',
        linkedin: ''
    },
    {
        name: 'Talha Ahmed Siddiqui',
        position: 'Marketing',
        location: 'Karachi, Pakistan',
        credentials: "Institute of Business Administration'23",
        img: 'Talha.png',
        linkedin: ''
    },
    {
        name: 'Zoya Shah',
        position: 'Illustrator',
        location: 'Karachi, Pakistan',
        credentials: "Indus Valley School of Art and Architecture'22",
        img: 'Zoya.png',
        linkedin: 'https://www.linkedin.com/in/zoya-shah-b54979173/'
    },
    {
        name: 'Ebrahim Baig',
        position: 'Illustrator',
        location: 'Karachi, Pakistan',
        credentials: "Institute of Business Administration'23",
        img: '',
        linkedin: ''
    },
    {
        name: 'Muhammad Moosa Hashim',
        position: 'Public Relations and Quality Assurance',
        location: 'Karachi, Pakistan',
        credentials: "Institute of Business Administration'22",
        img: 'Moosa.png',
        linkedin: 'https://www.linkedin.com/in/moosahashim/'
    },
    {
        name: 'Zeeshan Khan',
        position: 'Public Relations and Quality Assurance',
        location: 'Karachi, Pakistan',
        credentials: "Institute of Business Administration'22",
        img: 'Zeeshan.png',
        linkedin: 'https://www.linkedin.com/in/zeeshan-ahmed-khan-851b65191/'
    },
        {
        name: 'M. Shaheer Malik',
        position: 'Content Writer',
        location: 'Turin, Italy',
        credentials: "Politecnico Di Torino’22",
        img: 'Shaheer.png',
        linkedin: 'https://www.linkedin.com/in/m-shaheer-malik-kaka-khail-2355651a7'
    },
    {
        name: 'Diya Singh',
        position: 'Content Writer',
        location: 'Yardley, USA',
        credentials: "University of Pennsylvania'22",
        img: 'Diya.png',
        linkedin: ''
    },
    {
        name: 'Abdul Moiz',
        position: 'Content Writer',
        location: 'Karachi, Pakistan',
        credentials: "Institute of Business Administration'22",
        img: 'Abdul Moiz.png',
        linkedin: ''
    },
    {
        name: 'Muhammad Irtiza',
        position: 'Content Writer',
        location: 'Karachi, Pakistan',
        credentials: "Institute of Business Administration'22",
        img: 'Irtiza.png',
        linkedin: ''
    },
    {
        name: 'Zuha Noor',
        position: 'Content Writer',
        location: 'Lahore, Pakistan',
        credentials: "University of Pennsylvania'23",
        img: 'Zuha Noor.png',
        linkedin: ''
    },
    {
        name: 'Suleman',
        position: 'Translator',
        location: 'New Jersey, USA',
        credentials: "Massachusetts Institute of Technology'23",
        img: 'Suleman.png',
        linkedin: ''
    },
    {
        name: 'Zaighum Ali',
        position: 'Translator',
        location: 'Khanewal, Pakistan',
        credentials: "Lahore University of Management Sciences'23",
        img: 'Zargham.png',
        linkedin: ''
    },
    {
        name: 'Tim Chu',
        position: 'Advisor',
        location: '',
        credentials: "Carnegie Mellon University",
        img: 'Timothy Chu.png',
        linkedin: ''
    },
    {
        name: 'Wasay Anwer',
        position: 'Engineering Advisor',
        location: '',
        credentials: "Apple, Massachusetts Institute of Technology'19",
        img: '',
        linkedin: ''
    },
    {
        name: 'Bilal Hasan',
        position: 'Financial Advisor',
        location: '',
        credentials: '',
        img: 'Bilal Hasan.jpg',
        linkedin: 'https://linkedin.com/in/bnba'
    },
    {
        name: 'Falah Shazib',
        position: 'Volunteer',
        location: 'Montreal, Canada',
        credentials: "University of Waterloo'21",
        img: 'Falah.png',
        linkedin: 'https://www.linkedin.com/in/falahshazib/'
    },
 
];

teamArr.forEach((value) => {
    var html = '    <a target="' + (value.linkedin ? '_blank' : '') + '" href="' + (value.linkedin || 'javascript:void(0)') + '" class="team_box" title="' + value.name + '">';
    html += '       <div class="team_img"><img src="images/team/' + (value.img || 'placeholder.png') + '" alt="' + value.name + '"></div>';
    html += '       <div class="team_title">' + value.name + '</div>';
    html += '       <div class="team_position">' + value.position + '</div>';
    html += value.credentials ? '<div class="team_credential">' + value.credentials + '</div>' : "";
    html += value.location ? '<div class="team_location">' + value.location + '</div>' : "";
    html += '   </a>';
    teamElement.innerHTML += html;
});
