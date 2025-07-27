import React from "react";
import { mockUser as user, mockPosts as posts } from "./mockup/mypagemockup";
import "../styles/index.css";

export default function MyPage() {
  return (
    <div className="flex min-h-screen bg-[#f6f9fc]">
      {/* 사이드바 */}
      <aside className="w-64 bg-white shadow-md p-6">
        <div className="flex flex-col items-center">
          <img src={user.profile_image} alt="프로필" className="w-24 h-24 rounded-full mb-2" />
          <p className="font-bold">{user.nickname}</p>
          <p className="text-sm text-orange-500">포인트 : {user.point}p</p>
        </div>
        <ul className="mt-6 space-y-3 text-sm font-medium text-gray-700">
          <li className="text-blue-600 font-bold">내가 만든 지식</li>
          <li className="hover:text-blue-600">스크랩한 지식</li>
          <li className="hover:text-blue-600">지식 일기</li>
          <li className="hover:text-blue-600">개인정보수정</li>
        </ul>
      </aside>

      {/* 본문 */}
      <main className="flex-1 p-8">
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">내가 만든 지식</h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {posts.slice(0, 2).map((post) => (
              <PostCard key={post.post_id} post={post} />
            ))}
          </div>
        </section>

        {/* 방문 통계 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">방문 통계</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <svg viewBox="0 0 200 80" className="w-full h-24">
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                points="0,70 40,20 80,60 120,30 160,50 200,25"
              />
            </svg>
          </div>
        </section>

        {/* 내가 쓴 지식들 */}
        <section>
          <h2 className="text-xl font-bold mb-4">내가 쓴 지식들</h2>
          <h3 className="text-xl font-bold mb-4">최근 만든 지식</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-sm px-5 py-2 rounded-full border text-blue-500 hover:bg-blue-50 transition">
              내가 만든 지식 더보기 ⌄
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

// 카드 컴포넌트
function PostCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
      <img src={post.images} alt="thumbnail" className="w-full h-36 object-cover" />
    
      <div className="p-4">
        <div className="text-xs text-blue-500 font-semibold mb-1">{post.tag}</div>
        <div className="font-semibold mb-2 text-sm">{post.title}</div>
        <div className="text-xs text-gray-500">
          {post.content}
        </div>
        <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
          <span>❤️ {post.like_count}</span>
          <span>💬 {post.comment_count}</span>
          <span>📌 {post.quote_count}</span>
        </div>
      </div>
      
    </div>
  );
}
