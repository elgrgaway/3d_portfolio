import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // // template_nyyqqip
    // //  service_z45x9mz
    // //PQJmmhTuQmtNwSd7m
    // emailjs.send(
    //   "service_z45x9mz",
    //   "template_nyyqqip",
    //   {
    //     from_name: form.name,
    //     to_name: "Ahmed",
    //     from_email: form.email,
    //     to_email: "elgrgaway@gmail.com",
    //     message: form.message,
    //   },
    //   "PQJmmhTuQmtNwSd7m"
    // );
    // setLoading(false);
    emailjs
      .send("service_e315yid", "template_nyyqqip", form, "PQJmmhTuQmtNwSd7m")
      .then(() => {
        // setSuccessMsg("Message sent successfully!");
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .finally(() => {
        setLoading(false);
      });

    // .catch(() => {
    //   setErrorMsg("Failed to send message. Please try again.");
    // });
  };
  return (
    <div className=" xl:mt-12 xl:flex-row flex-col-reverse gap-10 flex overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75]  bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name? "
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none  font-medium"
            />
          </label>
          <label htmlFor="email" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email? "
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none  font-medium"
            />
          </label>
          <label htmlFor="message" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              id="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none  font-medium"
            />
          </label>
          <button className=" bg-tertiary py-3 px-8 outline-none border-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl ">
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=" xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
