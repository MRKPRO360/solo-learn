import BlogCard from "./shared/BlogCard";

const questions = [
  {
    question: "Is this technology best for me?",
    ans: "This question answer is up to you and technology depends from different works. If you want to become a web developer then this course is perfect for you.",
  },
  {
    question:
      "Do I have to know programming skills before continuing any course ?",
    ans: "If you start our bootcamp or course gradually what we've ordered then you don't need any programming skills. Of course, you need to have a basic computer operating skill and a network to connect with our app.",
  },
  {
    question: "How long does it take to become a web developer?",
    ans: "Person intereset vary from person to person. And it is not out of them. If you are more serious and keep your persistence along coding then you will nail down it within 1 or 1.5 yrs.",
  },
  {
    question: "I don't have a network connection. What can I do?",
    ans: "It is difficult to learn coding without a network connection. So we do recommend you to establish a network connection. We also provide you some offline content in case if you don't have network.",
  },
];
export default function Faq() {
  return (
    <div className="space-y-8">
      {questions.map((el, i) => (
        <BlogCard key={i} blogCard={el} />
      ))}
    </div>
  );
}
