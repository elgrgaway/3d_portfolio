import { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
const Footer = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);
  return (
    <footer className="">
      <p>Copyright &copy; {date} by A.Elgrgawi | All Rights Reserved</p>
    </footer>
  );
};
export default SectionWrapper(Footer, "");
