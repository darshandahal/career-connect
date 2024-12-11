import Link from "next/link";
export default function page() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col text-center px-4"
         style={{ backgroundImage: 'url(/images/background.jpg)' }}>
      <h1 className="text-5xl font-extrabold text-gray-900 mt-8 bg-white bg-opacity-70 p-8 rounded-lg shadow-md w-100%">
        Welcome To Career Connect
      </h1>
      <div className="flex flex-col items-center mt-14 bg-white bg-opacity-70 p-8 rounded-lg shadow-md w-100%">
        <h3 className="text-xl text-gray-900 font-medium mb-8">
          Bridging the gap between opportunities and talent
        </h3>
        <p className="text-gray-890 leading-relaxed">
          CareerConnect is a React-based web application designed to simplify the job search process.
          It provides job seekers with an intuitive platform to browse job listings, filter opportunities
          based on location, industry, and role, and apply directly through the app. Employers can post jobs
          and manage applications, creating a seamless connection between job seekers and employers.
        </p>
      </div>
      <div className="bg-blue height-30px width-50px rounded-lg shadow-md p-3">
        <a href="/login" className="bg-blue-500 text-white text-2xl font-bold py-2 px-4 rounded hover:bg-blue-600">Get Started</a>
      </div>
    </div>
  )
}