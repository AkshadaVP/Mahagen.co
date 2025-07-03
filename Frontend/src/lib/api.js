export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
export const UPLOAD_URL    = `${API_BASE_URL}/api/upload/upload-photo`;
export const REQUESTS_URL  = `${API_BASE_URL}/api/requests`;
export const FORM_URL      = `${API_BASE_URL}/api/formdata`; // ← new form endpoint

export async function uploadFile(file) {
  const fd  = new FormData();
  fd.append('file', file);
  const res = await fetch(UPLOAD_URL, { method: 'POST', body: fd });
  if (!res.ok) throw new Error(`Upload failed: ${res.statusText}`);
  const { url } = await res.json();
  return url;
}
