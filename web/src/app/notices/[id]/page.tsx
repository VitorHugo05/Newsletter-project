"use client"

import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "@/context/darkModeContext";
import NavBar from "@/components/nav/navBar";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { UserLoggedOut } from "@/components/nav/user";
import api from "@/api";
import PostHeader from "@/components/postHeader";
import MarkdownViewer from "@/components/markdownViewer";

interface Author {
  id: string;
  name: string;
}

interface Post {
  postId: string;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
  author: Author;
}

export default function PostPage({ params }: { params: { id: string } }) {
  const { isDarkMode, togleDarkMode } = useContext(DarkModeContext);
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false); // Estado de hidratação

  useEffect(() => {
    // Esse efeito garante que a renderização inicial aconteça antes do uso do useState
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      api
        .get(`/posts/${params.id}`)
        .then((response) => {
          setPost(response.data);
          setIsLoading(false); // Quando os dados forem carregados
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  }, [params.id, isHydrated]);

  if (!isHydrated) {
    return null; // Impede a renderização do conteúdo até que o cliente tenha sido hidratado
  }

  if (isLoading) {
    return (
      <main
        className={`${
          isDarkMode ? "bg-gray-900" : "bg-zinc-200"
        } flex h-screen flex-col items-center justify-center overflow-y-auto pb-10 pt-24 transition-colors`}
      >
        <NavBar
          style="bg-gray-800 border-b border-white/10"
          leftContent={<UserLoggedOut />}
          rightContent={
            <Link
              href="/notices"
              className="flex items-center gap-2 text-lg transition-colors hover:cursor-pointer hover:text-gray-200"
            >
              Voltar para as postagens
              <ArrowRight className="invisible md:visible" />
            </Link>
          }
        />
        <p className="text-white">Carregando...</p>
      </main>
    );
  }

  return (
    <main
      className={`${
        isDarkMode ? "bg-gray-900" : "bg-zinc-200"
      } flex h-screen flex-col items-center justify-start overflow-y-auto pb-10 pt-24 transition-colors`}
    >
      <NavBar
        style="bg-gray-800 border-b border-white/10"
        leftContent={<UserLoggedOut />}
        rightContent={
          <Link
            href="/notices"
            className="flex items-center gap-2 text-lg transition-colors hover:cursor-pointer hover:text-gray-200"
          >
            Voltar para as postagens
            <ArrowRight className="invisible md:visible" />
          </Link>
        }
      />

      {post ? (
        <div
          className={`mt-8 flex w-3/5 flex-col gap-4 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <PostHeader title={post.title} author={post.author.name} createdAt={post.createdAt} />
          <MarkdownViewer content={post.content} />

          <div className="mt-6 text-lg">
            <span>{post.likes} Likes</span>
          </div>
        </div>
      ) : (
        <p className="text-white">Postagem não encontrada.</p>
      )}

      <div className="fixed bottom-4 right-4">
        <DarkModeSwitch
          style={{
            marginBottom: "2rem",
            marginRight: "2rem",
          }}
          checked={isDarkMode}
          onChange={togleDarkMode}
          size={60}
        />
      </div>
    </main>
  );
}
