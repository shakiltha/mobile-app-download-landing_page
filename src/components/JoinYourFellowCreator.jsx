import profile1 from "../assets/Ellipse -1.png";
import profile2 from "../assets/Ellipse -2.png";
import profile3 from "../assets/Ellipse 225.png";

const JoinYourFellowCreator = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <p className="manrope font-medium">A home for your business</p>
        <h4 className="manrope font-semibold text-2xl lg:text-3xl my-2">
          Join your fellow creators
        </h4>
        <p className="manrope font-normal lg:text-lg">
          You're not alone on this journey! Our platform fosters a thriving
          community of passionate creators and entrepreneurs. Connect,
          collaborate, and learn from others on the platform. Engage in forums,
          attend online workshops, or participate in networking events (both
          virtual and physical, depending on the platform). Share your
          experiences, exchange ideas, and gain inspiration from fellow creators
          who are building successful online businesses. This supportive network
          can be a valuable resource for overcoming challenges, celebrating
          successes, and staying motivated as you navigate the exciting world of
          e-commerce.
        </p>
        <button className="manrope font-bold bg-[#FF6701] rounded-full py-2 px-4 text-white my-4">
          Download Now
        </button>
      </div>
      <div className="manrope lg:flex lg:gap-3">
        <div className="w-[322px] border mx-auto shadow-xl p-2 my-4">
          <p className="font-normal">
            "Pocket Shop has been a game-changer for my handmade jewelry
            business. The platform is so easy to use, and I love the features
            like built-in invoicing and discount codes. It's also been amazing
            to connect with other creative sellers through the community forums.
            I've picked up so many helpful tips and tricks!"
          </p>
          <div className="w-[175px] border-2 rounded-full mx-auto my-5"></div>
          <div>
            <img src={profile1} alt="" />
            <p className="font-bold">Liam, Artisan Jewelry Maker </p>
            <p className="font-normal">liamjewelry.com</p>
          </div>
        </div>
        <div className="w-[322px] border mx-auto shadow-xl p-2 my-4">
          <p>
            {" "}
            "I was hesitant to jump into e-commerce, but Pocket Shop made the
            process incredibly smooth. Their all-in-one toolkit is fantastic – I
            can manage my entire online store, from uploading my ebooks to
            running targeted email marketing campaigns, all from a single
            platform. Plus, the analytics dashboard is super insightful, helping
            me understand my audience and optimize my offerings."
          </p>
          <div className="w-[175px] border-2 rounded-full mx-auto my-5"></div>
          <div>
            <img src={profile2} alt="" />
            <p className="font-bold">David, E-book Author</p>
            <p>davidauthor.com</p>
          </div>
        </div>
        <div className="w-[322px] border mx-auto shadow-xl p-2 my-4">
          <p>
            {" "}
            "Joining the Pocket Shop creator community has been one of the best
            decisions I've made. It's so inspiring to connect with other
            passionate entrepreneurs and learn from their experiences. We share
            best practices, troubleshoot challenges together, and even hold
            virtual workshops to expand our skillsets. It's a fantastic support
            network that keeps me motivated and constantly striving to improve
            my online soap business."
          </p>
          <div className="w-[175px] border-2 rounded-full mx-auto my-5"></div>
          <div>
            <img src={profile3} alt="" />
            <p className="font-bold">Ethan, Organic Soap Crafter</p>
            <p>ethansoapcrafter.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinYourFellowCreator;
