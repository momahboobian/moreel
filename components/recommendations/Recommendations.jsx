import Image from "next/image";
import recommendationsData from "@/data/recommendationsData";

export default function Recommendations() {
  return (
    <section className="mt-2 md:mt-10 text-white w-full">
      <div className="flex flex-col items-center justify-center p-4 xl:px-40">
        <h2 className="text-4xl font-semibold">Recommendations</h2>
        <p className="font-normal text-base text-center text-gray-500 p-4">
          Discover what others have to say about my work and professional
          character in these recommendations.
        </p>
      </div>
      <div className="grid justify-center max-w-full overflow-x-auto ">
        <div className="w-full max-h-[26rem] sm:h-auto overflow-scroll">
          <div className="flex w-full ">
            <div className="grid md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {recommendationsData.map((recommendation, index) => (
                <article
                  key={index}
                  className="grid max-w-[32rem] sm:min-w-min text-gray-700 bg-white rounded-lg shadow-md p-4 "
                >
                  {/* Rating */}
                  <div className="flex items-start justify-between mb-4">
                    <p className=" font-semibold">{recommendation.review}</p>
                    <div>
                      {Array.from({ length: recommendation.rating }, (_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <div className="mb-4 max-h-32 md:max-h-42 overflow-scroll">
                    <p className="">{recommendation.recommendation}</p>
                  </div>

                  {/* Avatar */}
                  <div className="flex items-center ">
                    <div className="min-w-1/3 h-auto bg-gray-300 rounded-full overflow-hidden mr-2">
                      <Image
                        src={recommendation.avatar}
                        alt={recommendation.name}
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="w-2/3">
                      <p className="font-semibold ">{recommendation.name}</p>
                      <p className="">{recommendation.title}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
