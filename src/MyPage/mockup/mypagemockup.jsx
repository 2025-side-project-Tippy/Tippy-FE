const mockUser = {
  user_id: 1,
  username: "seohyeon123",
  nickname: "서현",
  point: 100010,
  email: "seohyun@example.com",
  profile_image: "/pompu.png",
};

const mockPosts = [
  {
    post_id: 1,
    user_id: 1,
    title: "똑똑하게 독서하는 법",
    content: "책을 읽고 어떻게 기록하고, 나만의 메모를 남기는지에 대한 팁을 공유합니다.",
    images: ["/book.png"],
    view_count: 1234,
    like_count: 233,
    comment_count: 16,
    quote_count: 24,
    is_deleted: false,
    created_at: "2024-06-01T10:00:00Z",
    updated_at: "2024-06-02T12:00:00Z",
  },
  // ...더 추가
];

export { mockUser, mockPosts };