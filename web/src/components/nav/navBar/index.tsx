import { ReactNode } from "react";

interface navbarProps {
  leftContent?: ReactNode;
  centerContent?: ReactNode;
  rightContent?: ReactNode;
  style?: string;
}

export default function NavBar(props: navbarProps) {
  return (
      <nav
          className={`${props.style} fixed top-0 flex h-24 w-full items-center px-6 md:px-24`}
      >

        <div className="flex flex-1">{props.leftContent}</div>
        <div className="flex flex-1 justify-center">{props.centerContent}</div>
        <div className="flex flex-1 justify-end">{props.rightContent}</div>

      </nav>
  );
}
