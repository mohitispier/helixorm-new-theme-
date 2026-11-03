"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./audit-messenger.css";

export default function AuditMessenger() {
  const pathname = usePathname();
  if (pathname.replace(/\/+$/, "") === "/reputation-audit") return null;

  return (
    <Link className="floating-audit-button" href="/reputation-audit/">
      Get Free Audit <span aria-hidden="true">&#8599;</span>
    </Link>
  );
}
