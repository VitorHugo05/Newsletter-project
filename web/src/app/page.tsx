import Form from "@/components/singup";
import NavBar from "@/components/nav/navBar";
import Image from "next/image";
import {UserLoggedOut} from "@/components/nav/user";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-w-screen relative z-20 flex min-h-screen flex-col justify-center space-y-4 bg-gray-900 bg-[url('/bg-stars.svg')]">
      <Image
        src={"/color-sharp2.png"}
        width={560}
        height={300}
        alt=""
        className="absolute bottom-0 right-0 -z-10"
      />
      <Image
        src={"/color-sharp.png"}
        width={560}
        height={300}
        alt=""
        className="absolute left-0 top-0 -z-10"
      />
      <NavBar style="bg-transparent" leftContent={
          <UserLoggedOut />
      } rightContent={
          <Link
              href="/notices"
              className="flex items-center gap-2 text-lg transition-colors hover:cursor-pointer hover:text-gray-200"
          >
              Ir para as postagens
              <ArrowRight className="invisible md:visible" />
          </Link>
      } />
      <Form />
    </main>
  );
}
