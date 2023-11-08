import Image from "next/image";
import recommendationsData from "@/data/recommendationsData";

export default function Recommendations() {
  return (
    <section className="flex flex-col justify-between pt-16 mt-5 md:mt-2 text-gray-500 rounded-2xl">
      <div className="flex flex-col items-center p-4 sm:px-32 xl:px-48 2xl:px-60">
        <h4 className="text-4xl font-semibold">Recommendations</h4>
        <p className="font-normal text-base text-center p-4">
          Discover what others have to say about my work and professional
          character in these recommendations.
        </p>
      </div>

      <div className="max-w-full overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex  space-x-4">
            {recommendationsData.map((recommendation, index) => (
              <article
                key={index}
                className="flex flex-col justify-between max-w-full bg-white rounded-lg shadow-md p-4 min-w-[22rem]"
              >
                {/* Rating */}
                <div className="flex items-start justify-between mb-4">
                  <p className="font-bold">{recommendation.review}</p>
                  <div>
                    {Array.from({ length: recommendation.rating }, (_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>

                {/* Review */}
                <div className="mb-4 text-gray-500 max-h-48 overflow-y-auto">
                  <p className="font-semibold">
                    {recommendation.recommendation}
                  </p>
                </div>

                {/* Avatar */}
                <div className="flex items-center text-gray-500">
                  <div className="w-auto h-auto bg-gray-300 rounded-full overflow-hidden mr-2">
                    <Image
                      src={recommendation.avatar}
                      alt={recommendation.name}
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{recommendation.name}</p>
                    <p className="text-gray-500">{recommendation.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
