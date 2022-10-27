import BlogCard from "./shared/BlogCard";

const questions = [
  {
    question: "What is cors?",
    ans: "Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a 'preflight' request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.",
  },
  {
    question:
      "Why we are you use firebase? What other options do you have to implement authentication?",
    ans: "Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication. We can use this alternatives to implement authentication.",
  },
  {
    question: "How does the private route works?",
    ans: "The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.",
  },
  {
    question: "What is node? How does node works?",
    ans: "Node js is a JavaScript runtime based on google v8 engine, single-threaded, event-driven, non-blocking I/O model. Node js runs in a single thread no matter how the users is! To keep the node application running asynchronous code must be used everywhehre having callback functions. So the code that is only executed one should be written in synchronous code (top-level code). And all the callback functions runs in the background called something Event Loop. So event loop take cares all the callback functions and puts them in the main thread when the main thread is empty. Event loop is the place where all the asynchronous code runs.",
  },
];
export default function Blog() {
  return (
    <div className="space-y-8">
      {questions.map((el, i) => (
        <BlogCard key={i} blogCard={el} />
      ))}
    </div>
  );
}
