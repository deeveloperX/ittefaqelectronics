import Marquee from "react-fast-marquee";

const BrandMarquee = () => {
  return (
    <div className="bg-light py-3">
      <Marquee pauseOnHover speed={60} gradient={false} loop={0}>
        <img src="/src/assets/brands/canon-logo.jpeg" alt="Canon" height="50" className="mx-4" />
        <img src="/src/assets/brands/dawlance-logo.webp" alt="Dawlance" height="50" className="mx-4" />
        <img src="/src/assets/brands/generaltec-logo.png" alt="GeneralTec" height="50" className="mx-4" />
        <img src="/src/assets/brands/gfc-logo.jpeg" alt="GFC" height="50" className="mx-4" />
        <img src="/src/assets/brands/haier-logo.jpg" alt="Haier" height="50" className="mx-4" />
        <img src="/src/assets/brands/orient-logo.png" alt="Orient" height="50" className="mx-4" />
        <img src="/src/assets/brands/Panasonic-Logo.jpg" alt="Panasonic" height="50" className="mx-4" />
        <img src="/src/assets/brands/philips-logo.png" alt="Philips" height="50" className="mx-4" />
        <img src="/src/assets/brands/superasia-logo.jpeg" alt="SuperAsia" height="50" className="mx-4" />
      </Marquee>
    </div>
  );
};

export default BrandMarquee;
