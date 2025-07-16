"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400 py-6 px-4 text-center">
      <p className="text-xs text-slate-300">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-blue-400 font-semibold">Anas Raihan Aprianto</span>. All rights reserved.
      </p>
    </footer>
  );
}
