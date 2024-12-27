"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";

export function NavDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* ボタン */}
      <button
        onClick={toggleDrawer}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md"
      >
        Open Drawer
      </button>

      {/* オーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={toggleDrawer}
        >
          {/* Drawerコンテンツ */}
          <div
            className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg transform transition-transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between p-4">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button
                onClick={toggleDrawer}
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>
            <ul className="p-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-lg text-gray-800 hover:text-blue-600"
                  onClick={toggleDrawer} // Drawerを閉じる
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-lg text-gray-800 hover:text-blue-600"
                  onClick={toggleDrawer}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lg text-gray-800 hover:text-blue-600"
                  onClick={toggleDrawer}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
