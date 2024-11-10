import Image from "next/image";
import iconFigma from "../../public/assets/figma-icon.svg";
import iconTrello from "../../public/assets/trello-icon.svg";
import iconDiscord from "../../public/assets/discord-icon.svg";
import iconGithub from "../../public/assets/github-icon.svg";
import iconVscode from "../../public/assets/vscode-icon.svg";
import iconHTML from "../../public/assets/html-icon.svg";
import iconCSS from "../../public/assets/css-icon.svg";
import iconJS from "../../public/assets/js-icon.svg";
import iconTailwind from "../../public/assets/tailwind-icon.svg";
import iconTypescrit from "../../public/assets/typescript-icon.svg";
import iconReact from "../../public/assets/react-icon.svg";
import iconNodejs from "../../public/assets/nodejs-icon.svg";

export function Stack() {
  return (
    <div className="flex flex-wrap w-full animate-scrolling will-change-transform group-hover/stack:pause">
      {[
        ["Figma", iconFigma, "#0a0a0a"],
        ["Trello", iconTrello, "#0277BD"],
        ["Github", iconGithub, "#0a0a0a"],
        ["Discord", iconDiscord, "#5865F2"],
        ["VSCode", iconVscode, "#0a0a0a"],
        ["HTML", iconHTML, "#E14E1D"],
        ["CSS", iconCSS, "#0277BD"],
        ["Javascript", iconJS, "#D3BE11"],
        ["React", iconReact, "#0a0a0a"],
        ["Typescript", iconTypescrit, "#0277BD"],
        ["Tailwind", iconTailwind, "#0a0a0a"],
        ["NodeJS", iconNodejs, "#0a0a0a"],
      ].map(([title, url, color]) => (
        <div
          key={title}
          title={title}
          className="stack-style"
        >
          <div
            className="rounded-full w-10 h-10 flex justify-center items-center"
            style={{ backgroundColor: color }}
          >
            <Image alt={title} width={20} height={20} priority src={url} />
          </div>
        </div>
      ))}
    </div>
  );
}
