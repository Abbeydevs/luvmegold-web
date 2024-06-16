import FooterForm from "./footer-form";
import { Separator } from "./ui/separator";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="p-5 py-20 lg:p-20 text-left bg-[#180A06] text-white">
      <FooterForm />
      <Separator className="my-10 bg-muted-foreground" />
      <div className="flex flex-col md:flex-row justify-between gap-10 items-cente text-center lg:text-left">
        <div>
          <p className="text-sm text-muted-foreground">CONTACT US</p>
          <p className="text-sm mt-4">hello@lovemegold.com</p>
          <p className="text-sm">+1 034 983-22-77</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">LEGAL INFO</p>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-4">
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy policies</a>
          </div>
        </div>
      </div>
      <p className="text-center mt-20  text-muted-foreground">
        &copy; {year} Lovemegold
      </p>
    </div>
  );
};

export default Footer;
