// 勉強後導入する

"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const FadeTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }} // 初期状態を不透明に
        animate={{ opacity: 0 }} // アニメーションで透明に
        exit={{ opacity: 0 }} // 終了時に不透明に戻す
        transition={{ duration: 0.2 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          zIndex: 50,
          pointerEvents: "none",
        }}
      />
    </AnimatePresence>
  );
};

export default FadeTransition;
