"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";

export default function CommentModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div className="">
      <h1>Comment modal</h1>
      {open && <h1>Open</h1>}
    </div>
  );
}
