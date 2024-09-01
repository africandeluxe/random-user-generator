export async function fetchUserData() {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  return data;
}