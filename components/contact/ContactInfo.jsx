import { BiMailSend } from "react-icons/bi";

export default function ContactInfo() {
  return (
    <section className="flex-auto w-32 text-white">
      <div className="flex flex-col items-start text-start w-full p-4 ">
        <h5 className="text-3xl font-normal">Contact Information</h5>
        <div className="flex flex-col items-center mt-4 w-full bg-white p-4 gap-4">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
            <BiMailSend size={20} className="text-gray-800 " />
          </div>

          <div className="flex item-start justify-between text-gray-500 w-full ">
            <p className="text-lg font-medium"> Country:</p>
            <p className="text-base "> United Kingdom</p>
          </div>
          <div className="flex justify-between text-gray-500 w-full ">
            <p className="text-lg font-medium"> City:</p>
            <p className="text-base "> London</p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-4 w-full bg-white p-4 gap-4">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
            <BiMailSend size={20} className="text-gray-800 " />
          </div>

          <div className="flex item-start justify-between text-gray-500 w-full ">
            <p className="text-lg font-medium"> Email:</p>
            <p className="text-base ">info@moreel.me</p>
          </div>
          <div className="flex justify-between text-gray-500 w-full ">
            <p className="text-lg font-medium"> LinkedIn:</p>
            <p className="text-base "> @momahboobian</p>
          </div>
          <div className="flex justify-between text-gray-500 w-full ">
            <p className="text-lg font-medium"> GitHub:</p>
            <p className="text-base "> @momahboobian</p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-4 w-full bg-white p-4 gap-4">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
            <BiMailSend size={20} className="text-gray-800 " />
          </div>

          <div className="flex item-start justify-between text-gray-500 w-full ">
            <p className="text-lg font-medium"> Country:</p>
            <p className="text-base "> United Kingdom</p>
          </div>
          <div className="flex justify-between text-gray-500 w-full ">
            <p className="text-lg font-medium"> City:</p>
            <p className="text-base "> London</p>
          </div>
        </div>
      </div>
    </section>
  );
}
