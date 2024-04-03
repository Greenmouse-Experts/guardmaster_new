import { FC } from "react";
import logo from "@/lib/assets/logo.png";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import useAuth from "../../../../hooks/authUser";

interface Props {
  close: () => void;
}
const MobileMenu: FC<Props> = ({ close }) => {
  const router = useNavigate();
  const headerRoutes = [
    {
      name: "About Us",
      route: "/about",
    },
    {
      name: "Industry Partnership",
      route: "/partnership",
    },
    {
      name: "Leadership and Governance",
      route: "/leadership",
    },
    {
      name: "Programs",
      route: "/course",
    },
    {
      name: "FAQs",
      route: "/faq",
    },
    {
      name: "Blog",
      route: "/blog",
    },
    {
      name: "Careers",
      route: "/career",
    },
    {
      name: "Contact Us",
      route: "/contact",
    },
  ];
  const { isLoggedIn } = useAuth();
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <img
          src={
            "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706009737/GuardMaster/Guardmaster_transparent1_1_1_wzdsac.png"
          }
          alt="logo"
          width={150}
          height={50}
          className="w-40 lg:w-48"
        />
        <FaTimes className="text-xl cursor-pointer" onClick={close} />
      </div>
      <div className="mt-12">
        <ul className="grid gap-5">
          {headerRoutes.map((item) => (
            <li className="border-b" key={item.route}>
              <Link to={item.route} className="px-3 hover:text-[#F4C501]">
                {item.name}
              </Link>
            </li>
          ))}
          <li className="mt-7">
            {isLoggedIn ? (
              <Button
                title={"Dashboard"}
                onClick={() => router("/home")}
                altClassName="bg-primary px-4 text-white lg:px-8 py-2 rounded-lg"
              />
            ) : (
              <Button
                title={"Login"}
                onClick={() => router("/auth/login")}
                altClassName="bg-primary px-4 text-white lg:px-8 py-2 rounded-lg"
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
