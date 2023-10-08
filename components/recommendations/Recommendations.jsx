import Image from "next/image";

export default function Recommendations() {
  return (
    <section className="flex flex-col justify-between pt-16 mt-5 md:mt-2 text-white rounded-2xl">
      <div className="flex flex-col items-center w-full p-4 ">
        <h4 className="text-5xl font-bold ">Recommendations</h4>
        <p className="font-normal text-base text-gray-500 py-6">
          Recommendations
        </p>
      </div>
      <div className="flex justify-center font-normal text-center">
        <div className="grid grid-cols-3 gap-4 ">
          {/* Recommendation Card 1 */}
          <div className="max-w-full bg-white rounded-lg shadow-md p-4">
            {/* Rating */}
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-xl">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </span>
            </div>
            {/* Review */}
            <div className="mb-4">
              <p className="font-semibold">Great Quality!</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec
                amet....
              </p>
            </div>
            {/* Avatar */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-2">
                {/* Insert the avatar image here */}
                <Image
                  src=""
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-gray-500">Title</p>
              </div>
            </div>
          </div>

          {/* Recommendation Card 2 (Repeat similar structure for each card) */}
          <div className="max-w-full bg-white rounded-lg shadow-md p-4">
            {/* Rating */}
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-xl">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </span>
            </div>
            {/* Review */}
            <div className="mb-4">
              <p className="font-semibold">Great Quality!</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec
                amet....
              </p>
            </div>
            {/* Avatar */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-2">
                {/* Insert the avatar image here */}
                <Image
                  src=""
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Jane Smith</p>
                <p className="text-gray-500">Title</p>
              </div>
            </div>
          </div>

          {/* Recommendation Card 3 (Repeat similar structure for each card) */}
          <div className="max-w-full bg-white rounded-lg shadow-md p-4">
            {/* Rating */}
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-xl">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </span>
            </div>
            {/* Review */}
            <div className="mb-4">
              <p className="font-semibold">Great Quality!</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec
                amet....
              </p>
            </div>
            {/* Avatar */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-2">
                {/* Insert the avatar image here */}
                <Image
                  src=""
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Alice Johnson</p>
                <p className="text-gray-500">Title</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
