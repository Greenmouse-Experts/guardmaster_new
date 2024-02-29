import { FaStar } from "react-icons/fa6";

const CourseRating = () => {
  const review = [
    {
      name: "Victor Dwane",
      ini: "VD",
      comment:
        "I'm thrilled with the knowledge I gained from this course. The instructors were engaging, and the course materials were top-notch. This course has truly been a game-changer for me professionally.",
    },
    {
      name: "Anita Tabitha",
      ini: "AT",
      comment:
        "Enrolling in GICSM was one of the best decisions I've made for my career. The course structure was well-paced, and the interactive elements kept me engaged throughout.",
    },
    {
      name: "Juliana Andrews",
      ini: "JA",
      comment:
        "I'm amazed by the level of support I received throughout. From the initial enrollment process to completing the final assessment, the team at GICSM was there every step of the way.",
    },
    {
      name: "Alex Bestforth",
      ini: "AB",
      comment:
        "The online course offered by GICSM was a perfect fit for my learning style. The modules were concise yet comprehensive, and the interactive quizzes helped reinforce my understanding. ",
    },
  ];
  return (
    <div className="mt-6 grid lg:grid-cols-2 gap-4 lg:gap-12">
      {review.map((item) => (
        <div className="border-t-2 border-[#B7B7B7] pt-6">
          <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 rounded-[50%] !mont text--[18px] font-semibold text-white bg-black flex items-center justify-center">
              {item.ini}
            </div>
            <div>
              <p className="!mont font-semibold">{item.name}</p>
              <div className="text-[15px] text-[#B4690E] flex gap-x-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="!mont text-[15px]">{item.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseRating;
