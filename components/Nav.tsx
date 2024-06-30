import { Logo } from "./Logo";
import Link from "next/link";


export const Nav = () => {
  return (
    <div className="w-full bg-gradient-to-b from-lila to-sky">
      <div className="py-5 border-b-[5]">
          <div className="flex flex-row items-center gap-8 md:gap-0">
            <div className="flex-none">
              <Logo />
            </div>
            <div className="flex flex-row gap-8  w-full justify-center text-2xl hover:text-turquesa transition-colors text-violet font-newJune font-extrabold ">
              Quiniela Copa America 2024 Crazy Imagine
            </div>
            <div className="flex flex-row gap-4 w-full justify-end">

					<Link className="font-bold text-2xl hover:text-turquesa transition-colors" href="/auth-server-action">Inicia Sesion</Link>
					<Link className="font-bold text-2xl hover:text-turquesa transition-colors" href="/">Home</Link>
					<Link className="font-bold text-2xl hover:text-turquesa transition-colors" href="/quiniela">Quiniela</Link>
                    <Link className="font-bold text-2xl hover:text-turquesa transition-colors" href="/ranking">Ranking</Link>

            </div>
          </div>
      </div>
    </div>
  );
};