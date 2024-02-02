import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PostHeader from "../../lib/components/layout/landing/PostHeader";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const captchaRef = useRef<any>(null);

  return (
    <div className="">
      <PostHeader
        image={
          "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706881733/GuardMaster/Rectangle_3_9_1_fn1nyz.png"
        }
        title="Contact Us"
        nav="Contact"
      />
      <div className="contact">
        <form className="contact_form" action="submit">
          <h2 className="h2 text-2xl lg:text-4xl fw-600 syne">Get in touch</h2>
          <p>
            Fill in the placeholders below with the appropriate information to
            keep in touch with us.{" "}
          </p>
          <div className="double">
            <div className="input">
              <label htmlFor="firstName">First Name</label>
              <input
                required
                type="text"
                name="firstName"
                id=""
                placeholder="First name"
              />
            </div>
            <div className="input">
              <label htmlFor="lasttName">Last Name</label>
              <input
                required
                type="text"
                name="lastName"
                id=""
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="double">
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                name="email"
                id=""
                placeholder="Email address"
              />
            </div>
            <div className="input">
              <label htmlFor="phone">Phone Number</label>
              <input
                required
                type="number"
                name="lphone"
                id=""
                placeholder="Enter Phone"
              />
            </div>
          </div>

          <div className="input">
            <label htmlFor="message">Message</label>
            <textarea
              required
              name="message"
              id=""
              cols={30}
              rows={10}
              placeholder="Your message here"
            ></textarea>
          </div>
          <div className="mt-8">
            <ReCAPTCHA
              sitekey={`6Leno1MpAAAAAO0BmPjneoVUVd5FKfw0ED40qvpc`}
              ref={captchaRef}
            />
          </div>

          <button type="submit" className="!mt-10">
            Send Message
          </button>
        </form>

        <div className="contact_text bg-primary">
          <div className="cont">
            <h2>Contact information</h2>
            <p>
              Reach us via the following links and information provided below.
            </p>
          </div>
          <div className="conti">
            <h2>Address</h2>
            <p>www.guardmasterinstitute.ca</p>
          </div>
          <div className="conti">
            <h2>Phone </h2>
            <p>+1 905 452 2470</p>
          </div>
          <div className="conti">
            <h2>Email</h2>
            <p>info@guardmasterinstitute.ca</p>
          </div>
          <div className="social">
            <Link to="/" target="_blank">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <AiFillInstagram />
            </Link>
            <Link to="/">
              <AiOutlineTwitter />
            </Link>
            <Link to="/">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.11297545373!2d3.5181865744363807!3d6.63288862188363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103beec0810ad52b%3A0x4f0d71c6aafac7e0!2s2%20Olabisi%20Cl%2C%20Ikorodu%20104101%2C%20Ikorodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1695945224871!5m2!1sen!2sng"
          width="100%"
          height="100vh"
          style={{ border: "0", height: "60vh" }}
          loading="lazy"
          title="map"
          //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
