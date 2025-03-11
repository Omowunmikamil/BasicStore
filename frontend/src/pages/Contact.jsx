import { useState } from "react";
import HerderBanner from "../components/HerderBanner";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill in the required fields");
    } else {
      toast.success("Form submitted successfully");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.fullName.trim()) {
      errors.fullName = "Please provide your full name";
    } else if (data.fullName.length < 8) {
      errors.fullName = "Full name must be at least 8 characters long";
    }

    if (!data.email.trim()) {
      errors.email = "Please provide your email";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Please provide a valid email";
    }

    if (!data.phone.trim()) {
      errors.phone = "Please provide your phone number";
    } else if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = "Please provide a valid phone number";
    }

    if (!data.subject.trim()) {
      errors.subject = "Please provide a subject";
    }

    if (!data.message.trim()) {
      errors.message = "Please provide a message";
    }

    return errors;
  };

  return (
    <div>
      <HerderBanner h1={"Contact"} text1={"Home"} text2={"Contact"} />
      <div className="mt-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex flex-col sm:flex-row justify-between gap-7">
          {/* contact Info */}
          <div className="flex flex-col w-full md:w-[700px]">
            <h2 className="text-xl font-bold text-text text-start mb-2">
              Contact Info
            </h2>
            <p className="text-base text-text">
              Tortor dignissim convallis aenean et tortor at risus viverra
              adipiscing.
            </p>
            <div className="flex flex-col justify-between md:flex-row mt-5 gap-6">
              <div className="flex flex-col gap-2">
                <p className="mb-3 text-base text-text font-medium underline">
                  Office
                </p>
                <p className="text-base text-text">
                  730 Glenstone Ave 65802, Springfield, US
                </p>
                <p className="text-base text-text">+123 222 333 44</p>
                <p className="text-base text-gray-600">info@yourinfo.com</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="mb-3 text-base text-text font-medium underline">
                  Management
                </p>
                <p className="text-base text-text">
                  730 Glenstone Ave 65802, Springfield, US
                </p>
                <p className="text-base text-gray-600">+1 123 456 7890</p>
                <p className="text-base text-text">info@yourinfo.com</p>
              </div>
            </div>
          </div>

          {/* Question section */}
          <div className="flex flex-col w-full md:w-[700px]">
            <h2 className="text-xl font-bold text-text text-start mb-2">
              Any Questions?
            </h2>
            <p className="text-base text-text">
              Use the form below to get in touch with us.
            </p>

            {/* Question Form */}
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="flex flex-col md:flex-row gap-3 mb-5">
                <div className="w-full sm:w-2/4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="outline-none bg-white border border-tesBorder rounded-md shadow-md p-2 w-full"
                  />
                  {errors.fullName && (
                    <span className="text-xs sm:text-sm text-red-600 mt-1">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div className="w-full sm:w-2/4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Write your email here *"
                    value={formData.email}
                    onChange={handleChange}
                    className="outline-none bg-white border border-tesBorder rounded-md shadow-md p-2 w-full"
                  />
                  {errors.email && (
                    <span className="text-xs sm:text-sm text-red-600 mt-1">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="outline-none bg-white border border-tesBorder rounded-md shadow-md p-2 w-full"
                />
                {errors.phone && (
                  <span className="text-xs sm:text-sm text-red-600 mt-1">
                    {errors.phone}
                  </span>
                )}
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  name="subject"
                  placeholder="Write your subject here *"
                  value={formData.subject}
                  onChange={handleChange}
                  className="outline-none bg-white border border-tesBorder rounded-md shadow-md p-2 w-full"
                />
                {errors.subject && (
                  <span className="text-xs sm:text-sm text-red-600 mt-1">
                    {errors.subject}
                  </span>
                )}
              </div>
              <div className="mb-5">
                <textarea
                  name="message"
                  placeholder="Write your message here *"
                  value={formData.message}
                  onChange={handleChange}
                  className="outline-none bg-white border border-tesBorder rounded-md shadow-md p-2 w-full"
                ></textarea>
                {errors.message && (
                  <span className="text-xs sm:text-sm text-red-600">
                    {errors.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="text-xs md-text-sm text-white bg-gray-800 py-3 px-8 rounded-full hover:bg-gray-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Our Store */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-7 mt-16">
          <img
            src={assets.contactImg}
            alt="Contact image"
            className="rounded-xl w-full md:w-[620px]"
          />
          <div className="flex flex-col w-full md:w-[720px] gap-3">
            <h2 className="text-left m-0">Our Stores</h2>
            <p className="text-base text-text">
              You can also directly buy products from our stores.
            </p>
            <div className="flex flex-col justify-between md:flex-row mt-5 gap-6">
              <div className="flex flex-col gap-2">
                <p className="mb-3 text-base text-text font-medium underline">
                  USA
                </p>
                <p className="text-base text-text">
                  730 Glenstone Ave 65802, US
                </p>
                <p className="text-base text-text">+123 666 777 88</p>
                <p className="text-base text-gray-600">info@yourinfo.com</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="mb-3 text-base text-text font-medium underline">
                  France
                </p>
                <p className="text-base text-text">
                  13 Rue Montmartre 75001, Paris, France
                </p>
                <p className="text-base text-gray-600">+123 222 333 44</p>
                <p className="text-base text-text">info@yourinfo.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
