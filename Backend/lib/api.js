export const UPLOAD_URL = `${BACKEND_URL}/api/upload/upload-photo`;

export async function uploadFile(file) {
  const fd = new FormData();
  fd.append('file', file);
  const res = await fetch(UPLOAD_URL, { method: 'POST', body: fd });
  if (!res.ok) throw new Error(`Upload failed: ${res.statusText}`);
  const { url } = await res.json();
  return url;
}
