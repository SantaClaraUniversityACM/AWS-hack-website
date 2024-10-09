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
                "Begin exploring the world of Rag + Prompt Engineering with Bedrock & Sagemaker. This workshop will provide an introduction to the tools and techniques used in the field, as well as a hands-on demo to get you started. Join us on Tuesday, October 15, at 7:15 pm in Kenna 104 to learn more!",
            image: "../img/aws-logo.png",
            week: 42,
        },
        {
            title: "Deep Dive: Rag + Prompt Engineering w/ Bedrock & Sagemaker",
            date: "Oct. 21st, 2024",
            location: "SCDI 2301",
            description:
                "Build on your knowledge of Rag + Prompt Engineering with Bedrock & Sagemaker in this deep dive workshop. We'll cover advanced topics and techniques to help you take your skills to the next level. Join us on Monday, October 21, at 7:15 pm in SCDI 2301 to learn more!",
            week: 43,
        },
        {
            title: "Intro: Computer Vision & Intro to Rekognition, Textrack, and OpenCV",
            date: "Oct. 29th, 2024",
            location: "Kenna 104",
            description:
                "New week, new AWS tech! This time we're diving into Computer Vision and exploring the world of Rekognition, Textrack, and OpenCV. Join us on Tuesday, October 29, at 7:15 pm in Kenna 104 to learn more!",
            week: 44,
        },
        {
            title: "Deep Dive: Computer Vision & Intro to Rekognition, Textrack, and OpenCV",
            date: "Nov. 4th, 2024",
            location: "SCDI 2301",
            description:
                "Ready to take your Computer Vision skills to the next level? Join us for a deep dive into Rekognition, Textrack, and OpenCV. We'll cover advanced topics and techniques to help you build on your knowledge and expertise. Join us on Monday, November 4, at 7:15 pm in SCDI 2301 to learn more!",
            week: 45,
        },
        {
            title: "Data science with Python",
            date: "Nov. 12th, 2024",
            location: "Kenna 104",
            description:
                "Applying your AWS skills to data science with Python! Join us on Tuesday, November 12, at 7:15 pm in Kenna 104 to learn more!",
            week: 46,
        },
        {
            title: "Hackathon Prep",
            date: "Oct. 14th, 2024",
            location: "Kenna 216",
            description:
                "Get ready for AWS hack this weekend with all the details for the event! From the data you'll have access to, to the best way to win the competition, we'll cover it all. Join us on Monday, October 14, at 7:15 pm in Kenna 216 to learn more!",
            week: 46,
        },
    ];

    function getCurrentWeek() {
        const currentDate = new Date();
        const startDate = new Date(currentDate.getFullYear(), 0, 1);

        const dayOfWeek = startDate.getDay();
        const daysUntilWednesday = (3 - dayOfWeek + 7) % 7;
        startDate.setDate(startDate.getDate() + daysUntilWednesday);

        const days = Math.floor(
            (currentDate - startDate) / (24 * 60 * 60 * 1000)
        );

        const currentWeek = Math.ceil(days / 7) + 2;
        console.log(currentWeek);

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

