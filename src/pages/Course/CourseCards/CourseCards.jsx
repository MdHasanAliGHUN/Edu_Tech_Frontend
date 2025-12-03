import CourseCard from "../CourseCard/CourseCard";

export const data = [
  {
    id: 1,
    title: "Complete JavaScript Bootcamp",
    instructor: "Jhankar Mahbub",
    price: { original: 799, discounted: 499 },
    category: "JavaScript",
    short_description:
      "শুরু থেকে অ্যাডভান্স পর্যন্ত JavaScript শিখুন প্র্যাকটিক্যাল প্রোজেক্টসহ।",
    img: "https://i.ibb.co.com/84mXHzrb/download.png",
    level: "Beginner to Advanced",
    requirements: [
      "Basic HTML & CSS knowledge",
      "Laptop with internet connection",
      "Willingness to learn"
    ],
    lectures: 60,
  },
  {
    id: 2,
    title: "React Frontend Development",
    instructor: "Sumit Saha",
    price: { original: 950, discounted: 650 },
    category: "Frontend",
    short_description:
      "React দিয়ে ফুল প্রফেশনাল ফ্রন্টএন্ড প্রজেক্ট তৈরি করতে শিখুন।",
    img: "https://i.ibb.co.com/WpHYyH92/images.png",
    level: "Beginner to Advanced",
    requirements: [
      "Basic JavaScript knowledge",
      "Laptop with internet connection",
      "Willingness to learn"
    ],
    lectures: 55,
  },
  {
    id: 3,
    title: "Node.js & Express Masterclass",
    instructor: "Programming Hero Team",
    price: { original: 750, discounted: 550 },
    category: "Backend",
    short_description:
      "REST API, Authentication এবং Database সহ Backend শিখুন।",
    img: "https://i.ibb.co.com/Y7P53xgZ/download.png",
    level: "Beginner to Advanced",
    requirements: [
      "Basic JavaScript knowledge",
      "Laptop with internet connection",
      "Willingness to learn"
    ],
    lectures: 50,
  },
  {
    id: 4,
    title: "Fullstack Web Development",
    instructor: "Code With Harry",
    price: { original: 1299, discounted: 899 },
    category: "Fullstack",
    short_description: "Frontend থেকে Backend—এক কোর্সেই ফুলস্ট্যাক হয়ে যান।",
    img: "https://i.ibb.co.com/B2VxvTQ0/images-1.jpg",
    level: "Beginner to Advanced",
    requirements: [
      "Basic HTML & CSS knowledge",
      "Laptop with internet connection",
      "Willingness to learn"
    ],
    lectures: 60,
  },
];


const CourseCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {data.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default CourseCards;
