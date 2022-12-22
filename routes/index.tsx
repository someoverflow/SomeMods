import { Head } from "$fresh/runtime.ts";
import IconListDetails from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/list-details.tsx";
import IconCaretDown from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/caret-down.tsx";
import IconCaretRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/caret-right.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>SomeModlist</title>
      </Head>

      <main
        class="w-screen h-screen bg-gradient-to-t
        from-gray-800
        to-gray-900
        bg-gray-900 text-gray-50 p-20"
      >
        <div class="flex px-8 mb-20 justify-center rounded-xl">
          <div class="space-y-4 text-center bg-gray-900 p-6 rounded-2xl shadow-2xl border-1 border-gray-800">
            <h1 class="text-4xl inline-block font-bold font-mono flex justify-center items-center">
              <IconListDetails />
              <p class="ml-3 bg-clip-text bg-gradient-to-r from-green-300 to-blue-300 text-transparent">
                Mod Lists
              </p>
            </h1>
            <p class="text-xl max-w-lg text-blue-100">
              The official list of the mods{" "}
              <a
                href="https://www.youtube.com/@someoverflow"
                target="_blank"
                class="text-green-300"
              >
                SomeOverflow
              </a>{" "}
              used in projects alone or with others.
            </p>
          </div>
        </div>

        <div class="flex justify-center text-blue-100 animate-bounce">
          <IconCaretDown />
        </div>

        <div class="flex min-w-[50px] my-20 justify-center rounded-xl">
          <div class="space-y-2.5 bg-gray-900 p-6 rounded-2xl shadow-2xl border-1 border-gray-800">
            <h1 class="text-2xl inline-block font-bold font-mono">
              Minecraft Forest Adventure
            </h1>

            <p class="text-xl max-w-lg text-blue-100">
              Projekt mit cAjott rund um Twilight Forest
            </p>

            <a
              href="/forest-adventure"
              class="inline-block cursor-pointer px-2.5 py-1.5 rounded hover:opacity-80 border-1 border-gray-800 shadow-lg group"
            >
              <div class="flex flex-row">
                <p class="ml-1">List</p>
                <div class="group-hover:translate-x-1 group-hover:scale-105 scale-90 transition-all">
                  <IconCaretRight />
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
