import React from "react";
import Link from "next/link";
import { Suspense } from "react";
// import { getAllNotes } from "@/lib/redis";
import SidebarNoteList from "@/components/SidebarNoteList";
import EditButton from "./EditButton";
import NoteListSkeleton from "./NoteListSkeleton";
import SidebarSearchField from "@/components/SidebarSearchField";
import SidebarImport from "@/components/SidebarImport";
// import { useTranslation } from "@/app/i18n/index.js";
export default async function Sidebar({ lng }) {
  // const { t } = await useTranslation(lng);
  // console.log(t);
  return (
    <>
      <section className="col sidebar">
        <Link href={"/"} className="link--unstyled">
          <section className="sidebar-header">
            <img
              className="logo"
              src="/logo.svg"
              width="22px"
              height="20px"
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          {/* 搜索框 */}
          <SidebarSearchField lng={lng} />
          <EditButton noteId={null}>+</EditButton>
        </section>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList />
          </Suspense>
        </nav>
        <SidebarImport />
      </section>
    </>
  );
}
