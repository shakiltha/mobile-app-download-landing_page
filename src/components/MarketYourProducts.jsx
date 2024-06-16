import icon1 from "../assets/Icon-4.png";
import icon2 from "../assets/Icon-6.png";
import img1 from "../assets/Section Image-1.png";
import icon3 from "../assets/Icon-5.png";
import icon4 from "../assets/Icon-7.png";

const MarketYourProducts = () => {
  return (
    <div className="manrope mt-6 mx-1">
      <div className="text-center">
        <p className="font-medium">Grow your Business</p>
        <h4 className="font-semibold text-2xl lg:text-3xl">
          Market your products
        </h4>
        <p className="font-normal lg:text-lg">
          Grow your audience, build long-lasting customer relationships, and
          make more sales with powerful, easy-to-use marketing tools.
        </p>
      </div>
      <div className="xl:flex xl:gap-2 xl:my-4">
        <div className="xl:w-1/3">
          <div>
            <img src={icon1} alt="" />
            <h5 className="font-bold text-xl lg:text-2xl">E-mail Marketing</h5>
            <p className="font-normal">
              E-mail marketing remains a powerful tool in your e-commerce
              arsenal. It allows you to connect directly with your customer
              base, fostering loyalty and driving sales. Build an engaged
              subscriber list by offering valuable content like exclusive
              discounts, early access to new products, or informative
              newsletters. Personalize your emails to address customers by name
              and recommend products based on their interests. Craft compelling
              subject lines and design visually appealing emails that capture
              attention and encourage clicks. By providing value and building
              relationships through targeted email marketing, you'll turn
              passive subscribers into active, engaged customers.{" "}
            </p>
          </div>
          <div>
            <img src={icon2} alt="" />
            <h5 className="font-bold text-xl lg:text-2xl">Lead Magnet</h5>
            <p className="font-normal">
              A lead magnet is a valuable piece of content you offer for free in
              exchange for someone's email address. It acts as a powerful tool
              to attract potential customers who are interested in what you have
              to offer. Think of it as a free sample that entices them to learn
              more and ultimately become paying customers. Effective lead
              magnets can be ebooks, checklists, cheat sheets, webinars, or
              anything that solves a specific problem or provides valuable
              insights relevant to your target audience. By offering something
              genuinely useful, you build trust and establish yourself as an
              authority in your field, making them more likely to turn to you
              when they're ready to buy.
            </p>
          </div>
        </div>
        <div className="my-2 xl:w-1/3">
          <img src={img1} className="mx-auto" alt="" />
        </div>
        <div className="xl:w-1/3">
          <div>
            <img src={icon3} alt="" />
            <h5 className="font-bold text-xl lg:text-2xl">Bundles & Upsells</h5>
            <p className="font-normal">
              Don't miss the opportunity to increase your average order value
              with strategic bundles and upsells. Craft enticing product bundles
              that combine complementary items at a discounted price, offering
              customers a clear value proposition. Upselling encourages
              customers to consider a higher-tier product or add-on that
              enhances the value of their initial purchase. Highlight how the
              upgraded option addresses specific needs or unlocks additional
              features. By strategically suggesting these options at checkout or
              showcasing them alongside relevant products, you can nudge
              customers towards a more satisfying purchase and boost your bottom
              line.
            </p>
          </div>
          <div>
            <img src={icon4} alt="" />
            <h5 className="font-bold text-xl lg:text-2xl">Discount codes</h5>
            <p className="font-normal">
              Discount codes offer a targeted way to incentivize purchases and
              drive sales. You can create unique codes for specific promotions,
              loyalty rewards, or influencer partnerships. Clearly communicate
              the discount offered, expiry date, and any applicable product or
              category restrictions. Promote your discount codes through various
              channels like email marketing, social media campaigns, or website
              banners. By effectively utilizing discount codes, you can attract
              new customers, reward existing ones, and generate excitement
              around your products or services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketYourProducts;
