import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* 상단 바 */}
      <div className="bg-gray-700 py-3 px-4 sm:px-6">
        <span className="text-white text-base sm:text-lg font-semibold">
          로그인 페이지
        </span>
      </div>
      {/* 메인 컨테이너 */}
      <div className="flex-1 flex flex-col items-center justify-center px-2">
        <div className="w-full max-w-sm sm:max-w-md bg-white rounded-xl shadow-lg p-4 sm:p-8 flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">로그인</h2>
          <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
            로그인하시고 서비스를 즐겨보세요
          </p>
          <form className="w-full flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="아이디"
                className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호"
                className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
            </div>
            <div className="flex justify-end mb-2">
              <a
                href="#"
                className="text-xs sm:text-sm text-blue-400 hover:underline"
              >
                비밀번호 찾기
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 sm:py-2.5 rounded-md transition-colors text-sm sm:text-base"
            >
              로그인
            </button>
          </form>
          <div className="mt-4 text-xs sm:text-sm text-gray-600">
            아직 회원이 아니신가요?
            <a href="#" className="ml-2 text-sky-500 hover:underline">
              회원가입
            </a>
          </div>
          <div className="w-full border-t my-6" />
          {/* 소셜 로그인 버튼 */}
          <div className="w-full flex flex-col gap-3">
            <button className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 sm:py-2.5 rounded-md border border-yellow-400 text-sm sm:text-base">
              <span className="text-xl">💬</span> 카카오로 시작하기
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold py-2 sm:py-2.5 rounded-md border border-green-500 text-sm sm:text-base">
              <span className="text-xl">N</span> 네이버로 시작하기
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 sm:py-2.5 rounded-md border border-gray-300 text-sm sm:text-base">
              <span className="text-xl">G</span> Google로 시작하기
            </button>
          </div>
        </div>
        {/* 홈으로 돌아가기 */}
        <div className="w-full max-w-sm sm:max-w-md mt-4 text-left">
          <a
            href="#"
            className="text-sky-500 hover:underline text-xs sm:text-sm"
          >
            &lt; 홈으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
