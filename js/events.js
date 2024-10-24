document.addEventListener("DOMContentLoaded", function () {
    const events = [
        {
            title: "Career Dev and Interview Prep ft. AWS!",
            date: "Oct. 3rd, 2024",
            location: "Daly Science 206",
            description:
                "Get ready for a workshop interview preparation and career development with Amazon AWS Engineers Stephen Mistele and Japjot Walia! Whether you're gearing up for your first interview or looking to advance your career, this is your chance to gain insights from those who have been through it all. Don't miss out on this opportunity to learn from industry professionals and ask your questions directly on Thursday, October 3, at 7:15 pm in Daly Science 206.",
            image: "https://firebasestorage.googleapis.com/v0/b/scu-acm.appspot.com/o/flyers%2F4cTV96UWLjIWjyLjQp3A.png?alt=media&token=6ff5a367-43d4-48ee-b536-cb5986cbdd89",
            week: 40,
        },
        {
            title: "Intro: Rag + Prompt Engineering w/ Bedrock & Sagemaker Demo",
            date: "Oct. 15th, 2024",
            location: "Kenna 104",
            description:
                "Ready to learn about AI Engineering with Amazon? On Tuesday, October 15, from 5:45 - 6:45 pm in Kenna Room 104, join us for an AWS Workshop where you’ll dive into Prompt Engineering and experience live demos of Bedrock & Sagemaker—the AI tools Amazon uses! No experience is needed! This is an incredible opportunity to learn from an industry expert and get hands-on with AI technologies. Don't miss out on this exciting workshop!",
            image: "../img/week3.png",
            week: 41,
        },
        {
            title: "AWS Workshop Catch Up",
            date: "Oct. 21st, 2024",
            location: "SCDI 2301",
            description:
                "Missed our meeting last week? Want a second look at the topics covered by our AWS professionals? Then this workshop is for you! Join us TONIGHT for a look into resources for learning AI, a look at the AWS console interface, and an intro into the prompt engineering you'll be doing for the hackathon!",
            image: "../img/workshops.png",
            week: 42,
        },
        {
            title: "Intro: Computer Vision & Intro to Rekognition, Textrack, and OpenCV",
            date: "Oct. 29th, 2024",
            location: "Kenna 104",
            description:
                "New week, new AWS tech! This time we're diving into Computer Vision and exploring the world of Rekognition, Textrack, and OpenCV. Join us on Tuesday, October 29, at 7:15 pm in Kenna 104 to learn more!",
            image: "../img/workshops.png",
            week: 43,
        },
        {
            title: "Deep Dive: Computer Vision & Intro to Rekognition, Textrack, and OpenCV",
            date: "Nov. 4th, 2024",
            location: "SCDI 2301",
            description:
                "Ready to take your Computer Vision skills to the next level? Join us for a deep dive into Rekognition, Textrack, and OpenCV. We'll cover advanced topics and techniques to help you build on your knowledge and expertise. Join us on Monday, November 4, at 7:15 pm in SCDI 2301 to learn more!",
            image: "../img/workshops.png",
            week: 44,
        },
        {
            title: "Data science with Python",
            date: "Nov. 12th, 2024",
            location: "Kenna 104",
            description:
                "Applying your AWS skills to data science with Python! Join us on Tuesday, November 12, at 7:15 pm in Kenna 104 to learn more!",
            image: "../img/workshops.png",
            week: 45,
        },
        {
            title: "Hackathon Prep",
            date: "Nov. 14th, 2024",
            location: "Kenna 216",
            description:
                "Get ready for AWS hack this weekend with all the details for the event! From the data you'll have access to, to the best way to win the competition, we'll cover it all. Join us on Monday, October 14, at 7:15 pm in Kenna 216 to learn more!",
            image: "../img/workshops.png",
            week: 45,
        },
    ];

    function getCurrentWeek() {
        const currentDate = new Date();

        const startDate = new Date(currentDate.getFullYear(), 0, 1);
        const startDayOfWeek = startDate.getDay();
        const daysUntilFirstSunday = (6 - startDayOfWeek) % 7;
        startDate.setDate(startDate.getDate() + daysUntilFirstSunday);

        const days = Math.floor(
            (currentDate - startDate) / (24 * 60 * 60 * 1000)
        );
        const currentWeek = Math.ceil(days / 7);

        return currentWeek;
    }

    function updateWorkshops() {
        const currentWeek = getCurrentWeek();
        const thisWeekWorkshop = document.getElementById("this-week-workshop");
        const futureWorkshops = document.getElementById("future-workshops");

        events.forEach((event) => {
            if (event.week === currentWeek) {
                const eventHTML = `
                <img src="${event.image}" alt="Event Flyer" style="width: 30rem; padding-right: 1em;">
                <div class="col-md-8">
                    <h3><strong>${event.title}</strong></h3>
                    <p>${event.date} - ${event.location}</p>
                    <p>${event.description}</p>
                </div>`;
                thisWeekWorkshop.innerHTML += eventHTML;
            } else if (event.week > currentWeek) {
                const eventHTML = `
                <div>
                    <h3><strong>${event.title}</strong></h3>
                    <p>${event.date} - ${event.location}</p>
                </div>`;
                futureWorkshops.innerHTML += eventHTML;
            }
        });
    }

    updateWorkshops();
});

