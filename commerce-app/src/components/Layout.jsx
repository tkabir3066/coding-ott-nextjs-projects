import Link from "next/link";
import React from "react";

function Layout({ children }) {
  const menus = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Products",
      link: "/products",
    },
    {
      label: "Carts",
      link: "/carts",
    },
    {
      label: "Login",
      link: "/login",
    },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      link: "https://www.facebook.com/tutul.kabir.98/",
      icon: "ri-facebook-circle-fill",
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/tutulkabir_dev/",
      icon: "ri-instagram-line",
    },
    {
      label: "Twitter",
      link: "https://x.com/tutul_kabir7",
      icon: "ri-twitter-fill",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/tutul-kabir-1b5231250/",
      icon: "ri-linkedin-box-fill",
    },
    {
      label: "Whatsapp",
      link: "https://chat.whatsapp.com/DYhI5I9qVWx4vNd011XgMu",
      icon: "ri-whatsapp-fill",
    },
  ];
  return (
    <div>
      <nav className="bg-blue-600 lg:py-6 py-3 px-6 lg:px-24 flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">Commerce</h1>
        <div className="space-x-16 lg:block hidden">
          {menus.map((item, index) => (
            <Link key={index} href={item.link} className="text-white">
              {item.label}
            </Link>
          ))}
          <Link
            href="/signup"
            className="bg-rose-600 text-white px-12 py-4 rounded hover:bg-black"
          >
            Register Now
          </Link>
        </div>
        <button className="bg-white text-xl w-12 h-12 rounded lg:hidden">
          <i className="ri-menu-3-fill"></i>
        </button>
      </nav>

      <div className="py-16 lg:px-24 px-8">{children}</div>

      <footer className="bg-slate-950 p-8  text-white grid lg:grid-cols-4 lg:px-24 lg:py-16 lg:gap-0 gap-8">
        <div>
          <h1 className="text-white text-xl font-semibold">Commerce</h1>
          <p className="text-gray-400 mt-3 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
            facilis.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-semibold">Useful Links</h1>
          <div className="text-gray-400 mt-3 flex flex-col gap-3">
            {menus.map((item, index) => (
              <Link href={item.link} key={index}>
                {item.label}
              </Link>
            ))}
            <Link href="/signup">Register Now</Link>
          </div>
        </div>

        <div>
          <h1 className="text-white text-xl font-semibold">Social Links</h1>
          <div className="text-gray-400 mt-3 flex flex-col gap-3">
            {socialLinks.map((item, index) => (
              <Link href={item.link} key={index}>
                <i className={`${item.icon} text-2xl mr-2`}></i>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-white text-xl font-semibold">Contact Us</h1>
          <form className="text-gray-400 mt-3 flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Enter your name here"
              required
              className="bg-white p-3 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="mail@example.com"
              required
              className="bg-white p-3 rounded"
            />
            <textarea
              type="text"
              name="message"
              className="bg-white p-3 rounded"
              required
              rows={3}
            ></textarea>
            <button className="bg-rose-600 text-white rounded px-5 py-3 w-fit">
              Submit
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
