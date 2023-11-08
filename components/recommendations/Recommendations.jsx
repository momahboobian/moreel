import Image from "next/image";
import recommendationsData from "@/data/recommendationsData";

export default function Recommendations() {
  return (
    <section className="flex flex-col justify-between pt-16 mt-5 md:mt-2 text-white rounded-2xl">
      <div className="flex flex-col items-center p-4 sm:px-32 xl:px-48 2xl:px-60">
        <h4 className="text-4xl font-semibold">Recommendations</h4>
        <p className="font-normal text-base text-center text-gray-500 p-4">
          Read what others have to say about my work and professional character
          in these recommendations.
        </p>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-yellow-400 text-xl">
          &#9733; &#9733; &#9733; &#9733; &#9733;
        </span>
      </div>

      <div className="flex justify-center font-normal text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {recommendationsData.map((recommendation, index) => (
            <article
              key={index}
              className="max-w-full bg-white rounded-lg shadow-md p-4"
            >
              {/* Rating */}
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-xl">
                  {Array.from({ length: recommendation.rating }, (_, i) => {
                    <span key={i}>&#9733;</span>;
                  })}
                </span>
              </div>

              {/* Review (with scrolling) */}
              <div className="mb-4 text-gray-500 max-h-36 overflow-y-auto">
                <p className="font-semibold">{recommendation.review}</p>
              </div>

              {/* Avatar */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 round-full overflow-hidden mr-2">
                  <Image
                    className="w-full h-full"
                    src={recommendation.avatar}
                    alt={recommendation.name}
                    width={150}
                    height={150}
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
    </section>
  );
}
