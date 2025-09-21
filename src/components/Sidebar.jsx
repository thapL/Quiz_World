// Sidebar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Parts of Speech", path: "/part" },
  { name: "Noun", path: "/noun" },
  { name: "ทายศัพท์", path: "/guess" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // ปิดอัตโนมัติเมื่อเปลี่ยนหน้า
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Hamburger Button (Mobile only) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-[100] bg-[#504538] text-white p-2 rounded-md sm:hidden border border-solid border-white"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Sidebar Container */}
      <aside
        className={classNames(
          "fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-[#504538] text-white p-4 transition-transform duration-300 z-[99]",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "sm:translate-x-0 sm:block"
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">My App</h2>
          <button onClick={() => setIsOpen(false)} className="sm:hidden">
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={classNames(
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Dark overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[98] sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
