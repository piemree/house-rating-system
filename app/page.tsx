import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import HouseCard from "@/components/house-card";

const dummpHouseData = [
  {
    id: "1",
    title: "Modern House",
    rate: 5,
    images: ["/home.jpeg", "/home.jpeg", "/home.jpeg"],
  },
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 w-full">
        {dummpHouseData.map((item, index) => (
          <HouseCard key={index} item={item} className="w-full" />
        ))}
      </div>
    </section>
  );
}
