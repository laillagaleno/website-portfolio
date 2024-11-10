import { ArrowRight, ArrowUp, Sparkles } from "lucide-react";


export function Footer() {
  return (
    <footer className="space-y-20">
      <section className="px-6">
        <div className="container border-[1px] border-gray-border rounded-sm p-16 flex justify-between items-end 
        max-lg:flex-col max-lg:gap-12 max-lg:text-center max-lg:items-center max-lg:justify-center">
          <div className="flex flex-col justify-start gap-6 max-lg:items-center">
            <h2 className="text-6xl font-sans leading-tight">
              Vamos criar um <br />
              projeto incrível?
            </h2>
            <a
              href=""
              className="flex flex-nowrap justify-center items-center gap-4 group w-[304px] h-16
            text-black"
            >
              <div className=" bg-primary group-hover:bg-primary-dark flex justify-center items-center px-6 rounded-lg h-full flex-1 font-medium text-lg transition-colors duration-300 ease-in-out will-change-transform">
                Entre em contato
              </div>
              <div className="bg-primary group-hover:bg-primary-dark flex justify-center items-center rounded-lg h-full w-16 max-md:w-14 transition-colors duration-300 ease-in-out will-change-transform">
                <ArrowRight
                  size={24}
                  className="absolute transition-transform duration-200 ease-in-out group-hover:-rotate-45 will-change-transform"
                />
              </div>
            </a>
          </div>

          <div className="space-y-4 flex flex-col max-lg:items-center">
            <h2 className="">Me acompanhe nas redes</h2>
            <div className="flex gap-4">
              {[
                [
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>,
                  "",
                  "",
                ],
                [
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M7.5 11C8.03043 11 8.53914 10.7893 8.91421 10.4142C9.28929 10.0391 9.5 9.53043 9.5 9C9.5 8.46957 9.28929 7.96086 8.91421 7.58579C8.53914 7.21071 8.03043 7 7.5 7H3V11H7.5ZM8.5 13H3V17H8.5C9.03043 17 9.53914 16.7893 9.91421 16.4142C10.2893 16.0391 10.5 15.5304 10.5 15C10.5 14.4696 10.2893 13.9609 9.91421 13.5858C9.53914 13.2107 9.03043 13 8.5 13ZM10.563 11.572C11.3125 12.0227 11.8937 12.7066 12.2175 13.5191C12.5413 14.3315 12.5899 15.2277 12.3559 16.0704C12.1218 16.9131 11.618 17.6559 10.9216 18.185C10.2252 18.7141 9.3746 19.0004 8.5 19H1V5H7.5C8.26166 4.99993 9.0075 5.21732 9.64985 5.62661C10.2922 6.0359 10.8043 6.62007 11.126 7.31045C11.4478 8.00083 11.5657 8.76871 11.4659 9.52381C11.3662 10.2789 11.0529 10.9898 10.563 11.573M15.5 6H21V7.5H15.5V6ZM23 14.5H15.5V14.75C15.4998 15.3677 15.7075 15.9676 16.0898 16.4528C16.4721 16.938 17.0066 17.2804 17.6073 17.4248C18.2079 17.5692 18.8396 17.5072 19.4007 17.2487C19.9617 16.9902 20.4194 16.5503 20.7 16H22.834C22.5293 17.1083 21.8333 18.0686 20.8748 18.703C19.9164 19.3374 18.7605 19.6029 17.6212 19.4503C16.482 19.2978 15.4367 18.7375 14.6789 17.8732C13.9212 17.009 13.5023 15.8994 13.5 14.75V13.25C13.5 11.9902 14.0004 10.782 14.8912 9.89124C15.782 9.00045 16.9902 8.5 18.25 8.5C19.5098 8.5 20.718 9.00045 21.6088 9.89124C22.4996 10.782 23 11.9902 23 13.25V14.5ZM20.896 12.5C20.7323 11.9245 20.3854 11.4181 19.9079 11.0575C19.4304 10.6969 18.8483 10.5018 18.25 10.5018C17.6517 10.5018 17.0696 10.6969 16.5921 11.0575C16.1146 11.4181 15.7677 11.9245 15.604 12.5H20.896Z" />
                  </svg>,
                  "",
                  "",
                ],
                [
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>,
                  "",
                  "",
                ],
                [
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0px"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M11.1484 9.37344C10.9781 9.28594 10.1297 8.87031 9.97187 8.81406C9.81406 8.75469 9.69843 8.72656 9.58437 8.90156C9.46874 9.075 9.14062 9.46094 9.03749 9.57812C8.93749 9.69375 8.83593 9.70781 8.66562 9.62187C7.65312 9.11562 6.98906 8.71875 6.32187 7.57344C6.14531 7.26875 6.49843 7.29062 6.82812 6.63281C6.88437 6.51719 6.85624 6.41875 6.81249 6.33125C6.76874 6.24375 6.42499 5.39687 6.28124 5.05156C6.14218 4.71562 5.99843 4.7625 5.89374 4.75625C5.79374 4.75 5.67968 4.75 5.56406 4.75C5.44843 4.75 5.26249 4.79375 5.10468 4.96406C4.94687 5.1375 4.50156 5.55469 4.50156 6.40156C4.50156 7.24844 5.11874 8.06875 5.20312 8.18437C5.29062 8.3 6.41718 10.0375 8.14687 10.7859C9.24062 11.2578 9.66874 11.2984 10.2156 11.2172C10.5484 11.1672 11.2344 10.8016 11.3766 10.3969C11.5187 9.99375 11.5187 9.64844 11.4766 9.57656C11.4344 9.5 11.3187 9.45625 11.1484 9.37344Z" />
                    <path d="M14.4562 5.2875C14.1031 4.44844 13.5969 3.69531 12.9516 3.04844C12.3062 2.40313 11.5531 1.89531 10.7125 1.54375C9.85312 1.18281 8.94062 1 8 1H7.96875C7.02187 1.00469 6.10468 1.19219 5.24218 1.56094C4.40937 1.91719 3.6625 2.42344 3.02343 3.06875C2.38437 3.71406 1.88281 4.46406 1.53593 5.3C1.17656 6.16563 0.99531 7.08594 0.999997 8.03281C1.00468 9.11719 1.26406 10.1938 1.75 11.1562V13.5312C1.75 13.9281 2.07187 14.25 2.46875 14.25H4.84531C5.80781 14.7359 6.88437 14.9953 7.96875 15H8.00156C8.9375 15 9.84531 14.8188 10.7 14.4641C11.5359 14.1156 12.2875 13.6156 12.9312 12.9766C13.5766 12.3375 14.0844 11.5906 14.4391 10.7578C14.8078 9.89531 14.9953 8.97812 15 8.03125C15.0047 7.07969 14.8203 6.15625 14.4562 5.2875ZM12.0953 12.1313C11 13.2156 9.54687 13.8125 8 13.8125H7.97343C7.03125 13.8078 6.09531 13.5734 5.26875 13.1328L5.1375 13.0625H2.9375V10.8625L2.86718 10.7312C2.42656 9.90469 2.19218 8.96875 2.1875 8.02656C2.18125 6.46875 2.77656 5.00625 3.86875 3.90469C4.95937 2.80312 6.41718 2.19375 7.975 2.1875H8.00156C8.78281 2.1875 9.54062 2.33906 10.2547 2.63906C10.9516 2.93125 11.5766 3.35156 12.1141 3.88906C12.65 4.425 13.0719 5.05156 13.3641 5.74844C13.6672 6.47031 13.8187 7.23594 13.8156 8.02656C13.8062 9.58281 13.1953 11.0406 12.0953 12.1313Z" />
                  </svg>,
                  "",
                  "",
                ],
              ].map(([icon, href, title]) => (
                <a
                  href={href as string}
                  className="text-foreground border-[1px] border-gray-border rounded-md p-4"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background border-t-[1px] border-gray-border flex justify-between px-8 py-12 items-center">
        <div className="space-y-4">
          <div className="bg-foreground w-8 h-8 rounded-md text-background flex justify-center items-center">
            <Sparkles size={20} />
          </div>
          <div className="flex gap-16">
            <div className="space-y-1">
              <h2 className="font-medium tracking-wide">Lailla Galeno</h2>
              <p className="text-gray-subtitle text-sm">
                Frontend Developer <br />& Web Designer
              </p>
            </div>

            <div className=" text-sm text-gray-subtitle ">
              <h2>© 2024</h2>
              <h2>
                Desenvolvido por{" "}
                <a
                  href=""
                  className="text-foreground cursor-pointer font-medium"
                >
                  Lailla Galeno
                </a>
              </h2>
            </div>
          </div>
        </div>

        <button
          className="border-[1px] border-gray-border flex justify-center items-center rounded-lg p-4 w-16 h-16 
        hover:border-gray-border-hover hover:bg-foreground  hover:text-background transition-colors duration-300 will-change-transform ease-in-out"
        >
          <ArrowUp size={24} />
        </button>
      </section>
    </footer>
  );
}
