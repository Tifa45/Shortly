import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Menu, SquareX } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";

function MobNavbar() {
  const [menuState, setMenuState] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  function menuStateHandler() {
    setMenuState(!menuState);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    if (isDesktop) {
      setMenuState(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [isDesktop]);

  return (
    <>
      <div className="w-full px-4 py-8 flex justify-between items-center md:justify-start md:px-8 lg:px-16 ">
        <div className="flex justify-start flex-shrink-0 items-center">
          <a href="#">
            <img src="logo.svg" alt="logo" />
          </a>
        </div>

        {!isDesktop ? (
          <div>
            <Menubar className={" border-none shadow-none px-0 "}>
              <MenubarMenu>
                <MenubarTrigger asChild className={"px-0"}>
                  <button onClick={menuStateHandler}>
                    {menuState ? (
                      <SquareX size={35} />
                    ) : (
                      <Menu size={35} className="hover:text-gray-400" />
                    )}
                  </button>
                </MenubarTrigger>
                <MenubarContent
                  onInteractOutside={menuStateHandler}
                  className={
                    "w-screen bg-transparent border-none shadow-none flex justify-center"
                  }
                >
                  <div className="bg-prime-dark w-[90%] sm:w-[80%] rounded-lg px-6 py-8">
                    <MenubarItem
                      asChild
                      className={"focus:bg-white mb-6 group "}
                    >
                      <a href="#features">
                        <p className="mob-menu-item">Features</p>
                      </a>
                    </MenubarItem>
                    <MenubarItem
                      asChild
                      className={"focus:bg-white mb-6 group"}
                    >
                      <a href="#pricing">
                        <p className="mob-menu-item">Pricing</p>
                      </a>
                    </MenubarItem>
                    <MenubarItem
                      asChild
                      className={"focus:bg-white mb-6 group"}
                    >
                      <a href="#resources">
                        <p className="mob-menu-item">Resources</p>
                      </a>
                    </MenubarItem>

                    <MenubarSeparator className={"mb-6"} />
                    <MenubarItem className={"focus:bg-white mb-6 group"}>
                      <p className="mob-menu-item">Login</p>
                    </MenubarItem>
                    <MenubarItem
                      asChild
                      className={"focus:bg-transparent p-0 group "}
                    >
                      <div className=" w-full  ">
                        <button className="px-6 py-2 bg-prime-light w-full rounded-full hover:opacity-65">
                          <p className="mob-menu-item">Sign Up</p>
                        </button>
                      </div>
                    </MenubarItem>
                  </div>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        ) : (
          <>
            <div className="ml-12">
              <ul className=" list-none flex justify-center items-center gap-6 ">
                {navLinks.map((item) => (
                  <li key={item.title}>
                    <a href={item.ref}>
                      <p className="font-shortly text-text-accent font-normal text-lg hover-underline-animation hover:text-black">
                        {item.title}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" ml-auto flex justify-center items-center gap-10 lg:pr-22">
              <a href="#">
                <p className="hover-underline-animation font-shortly text-text-accent font-normal text-lg hover:text-black">
                  Login
                </p>
              </a>
              <button className="cta-btn">Sign Up</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MobNavbar;
