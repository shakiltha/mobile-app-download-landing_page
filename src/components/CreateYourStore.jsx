import screens from "../assets/Screens.png";
const CreateYourStore = () => {
  return (
    <div className="pt-[57rem] md:pt-[50rem] lg:pt-[40rem] xl:pt-[50rem] mx-1">
      <section className="flex flex-col-reverse gap-4 lg:flex lg:flex-row lg:items-center lg:gap-4">
        <section className="lg:flex-1">
          <img src={screens} alt="" />
        </section>
        <section className="lg:flex-1">
          <p className="manrope font-medium">Build your business</p>
          <h4 className="manrope font-semibold text-2xl lg:text-3xl">
            Create your Store
          </h4>
          <p className="manrope font-normal lg:text-lg">
            Ecommerce has opened doors for anyone with a passion and a product
            to turn their dreams into a reality. Whether you're a seasoned
            entrepreneur or just starting, creating your online store is easier
            than ever. Let's explore the steps to take your business idea and
            turn it into a thriving online destination.
          </p>
        </section>
      </section>
    </div>
  );
};

export default CreateYourStore;
