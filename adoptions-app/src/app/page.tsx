import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Main } from "@/components/main";
import { Navbar } from "@/components/nav";
import logo from "../assets/images/logo.png";

export default function Home() {
	return (
		<Main className="min-h-dvh place-items-center p-4 ">
			<div className="flex flex-col col-span-full w-full h-full">
				<Navbar></Navbar>
				<div className="flex gap-6 p-2">
					<div className="flex flex-col gap-3 items-center sm:flex-row">
						<Link href="/login">
							<Button>Login</Button>
						</Link>
						<Link href="#">
							<Button variant="secondary">Logout</Button>
						</Link>
					</div>
					<div className="flex items-center">
						<Image
							src={logo}
							alt="Logotipo Hueso"
							width={100}
							height={100}
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</div>
			</div>

		</Main>
	);
}
