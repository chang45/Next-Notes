import NoteEditor from "@/components/NoteEditor";
import { getNote } from "@/lib/strapi";

export default async function EditPage({ params }) {
  // 让效果更明显
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await sleep(2000);
  const { id } = await params;
  const noteId = id;
  const note = await getNote(noteId);

  if (note === null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Click a note on the left to view something! 🥺
        </span>
      </div>
    );
  }

  return (
    <NoteEditor
      noteId={noteId}
      initialTitle={note.title}
      initialBody={note.content}
    />
  );
}
