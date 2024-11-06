import useTitle from "../../Utils/Scripts/useTitle";
import SimpleBanner from "../../Components/SimpleBanner";

function FAQ() {
  useTitle("FAQ");
  return (
    <>
      <SimpleBanner title={"FAQ"} />
      <section className="flex flex-col gap-5">
        <div className='collapse collapse-plus bg-base-200/20 border'>
          <input type='radio' name='my-accordion-2' defaultChecked />
          <div className='collapse-title font-bold text-2xl text-[var(--primary-color)]'>
          What types of accessories do you offer?
          </div>
          <div className='collapse-content'>
            <p>We offer a wide variety of accessories including phone cases, chargers, headphones, screen protectors, laptop bags, and smartwatches. Our selection is designed to enhance your tech experience and provide protection and style for your devices.</p>
          </div>
        </div>
        <div className='collapse collapse-plus bg-base-200/20 border'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title font-bold text-2xl text-[var(--primary-color)]'>
          Do you offer warranties on your products?
          </div>
          <div className='collapse-content'>
            <p>Yes, most of our accessories come with a manufacturer's warranty. The duration and terms of the warranty may vary by product. Please check the product details on our website or ask a team member for more information when you make a purchase.</p>
          </div>
        </div>
        <div className='collapse collapse-plus bg-base-200/20 border'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title font-bold text-2xl text-[var(--primary-color)]'>
          Can I return or exchange an accessory if I’m not satisfied?
          </div>
          <div className='collapse-content'>
            <p>Absolutely! We offer a hassle-free return and exchange policy within 30 days of purchase. The item must be in its original packaging and in unused condition. Please keep your receipt or order confirmation to facilitate the process.</p>
          </div>
        </div>
        <div className='collapse collapse-plus bg-base-200/20 border'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title font-bold text-2xl text-[var(--primary-color)]'>
          How can I track my order after making a purchase?
          </div>
          <div className='collapse-content'>
            <p>Once your order is processed and shipped, you will receive an email confirmation with tracking information. You can use this tracking number to monitor the status of your shipment on the carrier's website.</p>
          </div>
        </div>
        <div className='collapse collapse-plus bg-base-200/20 border'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title font-bold text-2xl text-[var(--primary-color)]'>
          Do you provide installation or setup assistance for your accessories?
          </div>
          <div className='collapse-content text-lg'>
            <p>Yes, we offer installation assistance for certain products such as screen protectors and device setups. Our knowledgeable staff is here to help you ensure that your new accessories are set up correctly. Just ask in-store, or contact us for online purchases!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
