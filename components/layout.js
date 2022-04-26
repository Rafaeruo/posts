import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 bg-blue-100 mb-8 py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            <a>🏡</a>
          </Link>
          <Link href="/">
            <a className="mx-auto">Posts</a>
          </Link>
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="https://github.com/Rafaeruo/posts">
            <a>
              <Image
                width={30}
                height={30}
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              ></Image>
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
