import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-orange-400 to-orange-500 text-white py-6 sm:py-8">
        <header className="text-center p-4 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-semibold hover:scale-125">proxy icons</h1>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">Minimal, Clean Icons.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link href="./calender">
              <button className="bg-orange-300 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:scale-110">
                Calender
              </button>
            </Link>
            <Link
              href="https://en.wikipedia.org/wiki/Icon"
              target="_blank"
            >
              <button className="bg-orange-300 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:scale-110">
                Icon Documents
              </button>
            </Link>
            <Link
              href="https://proxyicons.com"
              target="_blank"
              className="bg-white px-4 py-2 rounded-lg font-semibold text-orange-500 shadow-lg flex items-center hover:scale-110"
            >
              proxyicons.com <span className="ml-1">↗</span>
            </Link>
          </div>
        </header>
      </div>

      {/* Image Section at Bottom of Page */}
      <div className="flex flex-col sm:flex-row justify-between items-end p-2 bg-orange-500">
        {/* Left Corner Image */}
        <div className="relative w-full sm:w-auto">
          <Image
            src="/object.png"
            alt="Object icon"
            height={300}
            width={500}
            className="rounded-tr-xl object-left-bottom gap-2 max-w-full h-auto hover:scale-75 mb-4"
          />
        </div>

        {/* Center Image */}
        <div className="relative w-full sm:w-auto">
          <Image
            src="/faces.png"
            alt="Faces icon"
            height={300}
            width={500}
            className="rounded-tr-lg rounded-tl-lg object-center gap-2 max-w-full h-60 hover:scale-75 mb-4"
          />
        </div>

        {/* Right Corner Image */}
        <div className="relative w-full sm:w-auto">
          <Image
            src="/health.png"
            alt="Health icon"
            height={300}
            width={500}
            className="rounded-tl-lg object-right-bottom gap-2 max-w-full h-60 hover:scale-75 mb-2"
          />
        </div>
      </div>
    </div>
  );
}
