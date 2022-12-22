import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import file from "./mods.json" assert { type: "json" };

interface ModList {
  name: string;
  href: string;
  description: string;
  updated: Date;
  download: string;
  mods: Mod[];
}
interface Mod {
  name: string;
  version: string | number;
  url: string;
}

export const handler: Handlers<ModList> = {
  GET(_req, ctx) {
    let project;
    console.log(file)
    file.forEach((list) => {
      if (list.href === ctx.params.name) project = list;
    });
    if (!project) {
      return new Response("Project not found", { status: 404 });
    }
    return ctx.render(project);
  },
};

export default function Greet(props: PageProps<ModList>) {
  return (
    <>
      <Head>
        <title>SomeModlist - {props.data.name}</title>
      </Head>

      <body class="overflow-x-hidden">
        <main class="w-screen min-h-screen bg-gradient-to-t from-gray-800 to-gray-900 bg-gray-900 text-gray-50 p-20">
          <div class="flex px-8 mb-20 justify-center rounded-xl">
            <div class="space-y-4 text-center bg-gray-900 p-6 rounded-2xl shadow-2xl border-1 border-gray-800">
              <h1 class="text-4xl inline-block font-bold font-mono flex justify-center items-center">
                <p class="ml-3 bg-clip-text bg-gradient-to-r from-green-300 to-blue-300 text-transparent">
                  {props.data.name}
                </p>
              </h1>
              <p class="text-xl max-w-lg text-blue-100">
                {props.data.description}
              </p>
              <p class="text-sm max-w-lg text-blue-200">
                {props.data.mods.length} Mods
              </p>
              
              <p class="text-sm max-w-lg text-gray-400 text-right">
                {new Date(props.data.updated).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div class="flex w-full my-20 justify-center rounded-xl">
            <div class="space-y-2.5 bg-gray-900 p-6 rounded-2xl shadow-2xl border-1 border-gray-800">
              <h1 class="text-2xl inline-block font-bold font-mono">
                Download Pack
              </h1>

              <p class="text-xl max-w-lg text-blue-100">
                Download all mods simply to zip
              </p>

              <a
                href={props.data.download}
                class="inline-block cursor-pointer px-2.5 py-1.5 rounded hover:opacity-80 border-1 border-gray-800 shadow-lg group"
              >
                <div class="flex flex-row">
                  <p class="ml-1">Download</p>
                </div>
              </a>
            </div>
          </div>

          <div class="flex justify-center flex-nowrap">
            <div class="rounded-xl shadow-2xl border-1 border-gray-800 bg-gray-900 text-gray-400 p-5 flex-shrink-0 w-[55rem]">
              <table class="text-sm text-left w-full">
                <thead class="uppercase bg-gray-800">
                  <tr>
                    <th scope="col" class="py-3 px-6">
                      Mod Name
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Version
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.mods.map((mod) => (
                    <tr>
                      <th class="py-4 px-6 text-white font-medium">
                        {mod.name}
                      </th>
                      <td class="py-4 px-6">{mod.version}</td>
                      <td class="py-4 px-6">
                        <a
                          href={mod.url}
                          target="_blank"
                          class="text-blue-500 hover:underline font-medium"
                        >
                          Link
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
