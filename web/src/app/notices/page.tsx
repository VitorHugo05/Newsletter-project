"use client";

import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "@/context/darkModeContext";
import NavBar from "@/components/nav/navBar";
import Link from "next/link";
import timeAgo from "../../utils/timeAgo";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { UserLoggedOut } from "@/components/nav/user";
import api from "@/api";

interface Author {
  id: string;
  name: string;
}

interface Comment {
  commentId: string;
  content: string;
  createdAt: string;
  author: Author;
}

interface Post {
  postId: string;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
  author: Author;
  comments: Comment[];
}

export default function Notice() {
  const { isDarkMode, togleDarkMode } = useContext(DarkModeContext);

  const [isRelevant, setIsRelevant] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => setPosts(response.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const postsPerPage = 10;

  const sortedPosts = [...posts].sort((a, b) => {
    if (isRelevant) {
      return b.likes - a.likes;
    } else {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } h-screen w-screen overflow-y-auto`}
    >
      <main className="relative flex flex-col items-center justify-start transition-colors">
        <NavBar
          style="bg-gray-800 border-b border-white/10"
          leftContent={<UserLoggedOut />}
          centerContent={
            <div className="flex items-center justify-center gap-6">
              <button
                className="text-lg transition-colors hover:cursor-pointer hover:text-gray-200"
                onClick={() => setIsRelevant(true)}
              >
                Relevantes
              </button>
              <button
                className="text-lg transition-colors hover:cursor-pointer hover:text-gray-200"
                onClick={() => setIsRelevant(false)}
              >
                Recentes
              </button>
            </div>
          }
          rightContent={
            <input
              type="text"
              placeholder="Buscar..."
              className="px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          }
        />

        <div className="w-full mt-4 pt-[6rem] flex flex-col gap-4 px-4 pb-4">
          {currentPosts.map((post, index) => (
            <Link href={`/notices/${post.postId}`} key={post.postId}>
              <div
                className={`p-4 mx-2 pl-[30%] transition duration-300 w-full ${
                  isDarkMode
                    ? "text-white border-b border-white/10"
                    : "text-black border-b border-black/10"
                } hover:bg-opacity-70`}
              >
                <h2 className="text-xl font-bold">{index + 1}. {post.title}</h2>
                <h4>
                  {post.likes} likes · {post.author.name} · {timeAgo(post.createdAt)}
                </h4>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-4 mb-6">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`px-4 py-2 rounded-full text-lg font-semibold transition duration-300 transform ${
                currentPage === pageNumber
                  ? isDarkMode
                    ? "bg-gray-900 text-white scale-105"
                    : "bg-gray-900 text-white scale-105"
                  : isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-500 hover:text-white"
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>

        <footer
          className={`w-full flex items-center justify-between px-6 py-4`}
        >
          <div className="fixed bottom-4 left-4">
            <DarkModeSwitch
              style={{
                marginBottom: "2rem",
                marginLeft: "2rem",
              }}
              checked={isDarkMode}
              onChange={togleDarkMode}
              size={60}
            />
          </div>
          <div className="fixed bottom-4 right-4">
            <button
              className="bg-gray-300 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-800 transition"
            >
              + Criar Post
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
