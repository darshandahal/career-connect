import Link from "next/link";
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center bg-no-repeat" style={{ backgroundImage: 'url(/images/login.jpg)' }}>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome, Please Login to Start
        </h1>
        
        <button
        className="w-full bg-blue-500 text-white text-lg font-medium py-2 px-4 rounded-md hover:bg-blue-600"
        > <Link href="/content">
        Login </Link>
        </button>
        
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a>
        </p>
      </div>
    </div>
  );
}
