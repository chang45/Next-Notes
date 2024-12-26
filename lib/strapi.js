export async function getAllNotes() {
  const response = await fetch(`http://localhost:1337/api/notes`);
  const data = await response.json();

  const res = {};
  data.data.forEach(({ id, title, content, documentId, updatedAt }) => {
    res[documentId] = JSON.stringify({
      title,
      content,
      updateTime: updatedAt,
    });
  });

  return res;
}

export async function addNote(data) {
  const response = await fetch(`http://localhost:1337/api/notes`, {
    method: "POST",
    headers: {
      Authorization:
        "bearer eea6761942a0a3b3949ca19aaeef9df3b81e52962eedea531e882bdd65b2f6389be6883f8a03e3c2d63ebddf3b478c0ff4a937ac9221437b69588779ebff3b3cbd36906c9c16247bda5d39bdbd6abb4aeaf97fd390add5dead070f5c04fffacad917a411582b8ce6ec206f90495df324b561586afbed62c1f77f961b7e843667",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: JSON.parse(data),
    }),
  });
  const res = await response.json();
  return res.data.documentId;
}

export async function updateNote(uuid, data) {
  //   const { documentId } = await getNote(uuid);
  //   console.log(documentId);

  const response = await fetch(`http://localhost:1337/api/notes/${uuid}`, {
    method: "PUT",
    headers: {
      Authorization:
        "bearer eea6761942a0a3b3949ca19aaeef9df3b81e52962eedea531e882bdd65b2f6389be6883f8a03e3c2d63ebddf3b478c0ff4a937ac9221437b69588779ebff3b3cbd36906c9c16247bda5d39bdbd6abb4aeaf97fd390add5dead070f5c04fffacad917a411582b8ce6ec206f90495df324b561586afbed62c1f77f961b7e843667",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: JSON.parse(data),
    }),
  });
  const res = await response.json();
  //   console.log(res);
}

export async function getNote(uuid) {
  const response = await fetch(`http://localhost:1337/api/notes/${uuid}`);
  const data = await response.json();
  //   console.log(data.data);

  return {
    title: data.data.title,
    content: data.data.content,
    updateTime: data.data.updatedAt,
    documentId: data.data.documentId,
  };
}

export async function delNote(uuid) {
  //   const { documentId } = await getNote(uuid);
  //   console.log(documentId);
  const response = await fetch(`http://localhost:1337/api/notes/${uuid}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "bearer eea6761942a0a3b3949ca19aaeef9df3b81e52962eedea531e882bdd65b2f6389be6883f8a03e3c2d63ebddf3b478c0ff4a937ac9221437b69588779ebff3b3cbd36906c9c16247bda5d39bdbd6abb4aeaf97fd390add5dead070f5c04fffacad917a411582b8ce6ec206f90495df324b561586afbed62c1f77f961b7e843667",
      "Content-Type": "application/json",
    },
  });
  //   console.log(response);
  //   const res = await response.json();
}
