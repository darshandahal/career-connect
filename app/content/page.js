import Image from 'next/image';
export default function Page() {
    return (
        <div className="flex flex-col items-center py-8 px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Jobs on Fields</h2>

            <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
                {["Retail and Product", "Marketing", "Finance", "Software", "Management", "Human Resource"].map((field, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md"
                    >
                        <Image
                            src={`/images/job-field-${index + 1}.jpg`} 
                            alt={field}
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            width={500}
                            height={300}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white py-2 px-4">
                            {field}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center mt-12 w-full max-w-6xl gap-6">
                <div className="w-full md:w-1/2">
                    <Image
                        src="/images/job-banner.jpg" 
                        alt="Find Your Job"
                        className="rounded-lg shadow-md"
                        width={500}
                        height={300}
                    />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Find The Job Thats Right for You</h3>
                    <input
                        type="text"
                        placeholder="Search Here"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    );
}
