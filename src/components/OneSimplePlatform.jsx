import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon-2.png";
import img1 from "../assets/Section Image.png";
import icon3 from "../assets/Icon-1.png";
import icon4 from "../assets/Icon-3.png";

const OneSimplePlatform = () => {
  return (
    <div className="manrope mt-6 mx-1">
      <div className="text-center">
        <p className="font-medium">Manage your Business</p>
        <h4 className="font-semibold text-2xl lg:text-3xl">
          One simple platform
        </h4>
        <p className="font-normal lg:text-lg">
          Imagine managing your entire online business from a single,
          user-friendly platform. Gone are the days of juggling multiple tools
          and logins. Our platform empowers you to create your online store,
          list and manage products (physical or digital), process payments, and
          track sales – all in one place. This streamlined approach saves you
          time and simplifies operations, allowing you to focus on what matters
          most – growing your business and delivering exceptional customer
          experiences.
        </p>
      </div>
      <div className="xl:flex xl:gap-2 xl:my-4">
        <div className="xl:w-1/3 xl:text-right">
          <div>
            <img src={icon1} className="xl:ml-[27.5rem]" alt="" />
            <h5 className="font-bold text-xl lg:text-2xl">
              All-in-one toolkit
            </h5>
            <p className="font-normal">
              Equipping yourself with the right tools is essential for
              e-commerce success. But managing a scattered arsenal of apps and
              software can be overwhelming. Our all-in-one toolkit provides
              everything you need to thrive online, conveniently bundled into a
              single platform. From creating a stunning storefront and managing
              inventory to processing payments, engaging customers with email
              marketing, and analyzing sales data – it's all at your fingertips.
              This comprehensive toolkit streamlines your workflow, eliminates
              the need for complex integrations, and empowers you to manage your
              entire online business with efficiency and ease.{" "}
            </p>
          </div>
          <div>
            <img src={icon2} className="xl:ml-[27.5rem]" alt="" />
            <h5 className="font-bold text-xl lg:text-2xl">invoicing</h5>
            <p className="font-normal">
              Seamless invoicing is crucial for any business, and our platform
              makes it a breeze. Create professional invoices in seconds,
              complete with customizable templates and automatic calculations
              for taxes and totals. Streamline your workflow by sending invoices
              directly to clients through email and track their payment status
              in real-time. Our invoicing system simplifies record-keeping and
              ensures you get paid quickly and efficiently, allowing you to
              focus on what you do best – running your business.
            </p>
          </div>
        </div>
        <div className="my-2 xl:w-1/3">
          <img src={img1} className="mx-auto" alt="" />
        </div>
        <div className="xl:w-1/3">
          <div>
            <img src={icon3} alt="" />
            <h5 className="font-bold text-xl lg:text-2xl">Business insights</h5>
            <p className="font-normal">
              Unlock the power of data-driven decisions with our comprehensive
              business insights suite. Gain valuable visibility into your online
              store's performance with detailed reports on sales trends,
              customer behavior, and marketing effectiveness. Analyze key
              metrics like conversion rates, abandoned carts, and product
              popularity to identify areas for improvement. Use these insights
              to optimize your product offerings, target marketing campaigns
              more effectively, and make data-backed decisions that propel your
              business forward. By leveraging business intelligence, you can
              gain a competitive edge and navigate your e-commerce journey with
              confidence.
            </p>
          </div>
          <div>
            <img src={icon4} alt="" />
            <h5 className="font-bold text-xl lg:text-2xl">Tax compliance</h5>
            <p className="font-normal">
              The world of e-commerce can get complicated when it comes to
              taxes. Our platform helps you navigate these complexities with
              features designed to ensure tax compliance. Automate tax
              calculations based on your location and your customers',
              eliminating the risk of human error. Generate accurate sales tax
              reports to simplify filing and keep you on top of your tax
              obligations. Our platform also integrates seamlessly with popular
              tax software solutions, providing you with a robust and reliable
              system for managing your e-commerce taxes. Focus on running your
              business and leave the tax calculations and reporting to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneSimplePlatform;
