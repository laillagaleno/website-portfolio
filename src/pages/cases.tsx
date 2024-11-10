import { ArrowDown, Workflow } from "lucide-react";
import ilustation from "../../public/assets/tes.png";
import Image from "next/image";

export function Cases() {
  return (
    <section className="container py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="subtitle flex items-center gap-4">
          Cases{" "}
          <span className="bg-background border-foreground border-[1px] text-foreground w-10 h-10 rounded-full flex justify-center items-center">
            6
          </span>
        </h2>
        <p className="text-sm text-gray-subtitle font-medium flex items-center gap-1">
          Explore
          <ArrowDown size={16} />
        </p>
      </div>
      <div className="grid grid-flow-row grid-cols-2 max-sm:grid-cols-1 gap-8">
        {[
          [1, "/", ilustation, "Mermãs Digitais", false, "Identidade Visual"],
          [
            2,
            "/",
            ilustation,
            "Mermãs Digitais",
            false,
            "Website, UI Design, Dev",
          ],
          [
            3,
            "/",
            ilustation,
            "CDW",
            false,
            "Landing Page, Sistema, UI Design, Dev",
          ],
          [
            4,
            "/",
            ilustation,
            "Funtransport",
            true,
            "App, Sistema, UI Design, Dev",
          ],
          [5, "/", ilustation, "QUISA", true, "Sistema, UI Design"],
          [6, "/", ilustation, "IHeal", true, "App, UI Design"],
        ].map(([i, url, img, title, status, tools]) => (
          <a
            href={url as string}
            key={i as number}
            className="w-full h-full flex flex-col gap-4"
          >
            <div className="w-full h-full bg-slate-100 relative overflow-hidden rounded-xl hover:rounded-3xl 
            border-[1px]
            cursor-pointer transition-all duration-300 ease-in-out will-change-transform">
              <div className="bg-white bg-cover hover:scale-105  cursor-pointer transition-all duration-300 ease-in-out will-change-transform
              before:content-[''] before:float-left before:pb-[50%]
              after:content-[''] after:block after:clear-both ">
                <Image
                  alt={title as string}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  src={img as any}
                  className="bg-contain bg-no-repeat w-max h-max"
                />
              </div>
              {(status as boolean) && (
                <div className="border-[1px] bg-white w-fit text-sm font-medium text-black rounded-full px-4 py-2 absolute right-4 top-4 flex items-center gap-1 shadow-md">
                  <Workflow size={16} />
                  Em breve
                </div>
              )}
            </div>

            <div>
              <h2 className="text-xl">{title as string}</h2>
              <p className="text-base font-normal text-gray-subtitle">{tools as string}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
