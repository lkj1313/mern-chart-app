// api/rooms.ts
const serverUrl = import.meta.env.VITE_SERVER_URL;

// ✅ 1:1 채팅 생성 API
export const createDirectChatAPI = async (id: string) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${serverUrl}/api/directChat/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id }),
  });

  const data = await response.json();
  return { ok: response.ok, chat: data.chat };
};
// 대호방 디테일정보
export const fetchRoomDetailsAPI = async (roomId: string) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${serverUrl}/api/rooms/${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return { ok: response.ok, data };
};
// 방들어가기 API
export const joinRoomAPI = async (roomId: string) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${serverUrl}/api/rooms/${roomId}/join`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return { ok: response.ok, room: data.room };
};
// 방삭제 API
export const deleteRoomApI = async (roomId: string) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${serverUrl}/api/rooms/${roomId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return { ok: response.ok, room: data.room };
};
//방 나가는 API
export const leaveRoomAPI = async (roomId: string) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${serverUrl}/api/rooms/${roomId}/leave`, {
    method: "PUT", //방 나가기 요청 (PUT)
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return { ok: response.ok, message: data.message };
};
/// 채팅방의 이미지 가져오는 API
export const fetchRoomImageAPI = async (roomId: string) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${serverUrl}/api/rooms/${roomId}/image`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return { ok: response.ok, image: data };
};

// ✅ 일반 채팅방 + 1:1 채팅방을 한 번에 가져오는 API
export const fetchAllChatsAPI = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${serverUrl}/api/rooms/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return { ok: response.ok, rooms: data };
};
