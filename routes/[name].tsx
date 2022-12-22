import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

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

const lists: ModList[] = [
  {
    name: "Forest Adventure",
    href: "forest-adventure",
    download: "#",
    description: "Projekt mit cAjott rund um Twilight Forest",
    updated: new Date("2022-12-21T22:38:44.206Z"),
    mods: [
      {
        name: "The Twilight Forest",
        version: "2-4.1.1423",
        url: "https://www.curseforge.com/minecraft/mc-mods/the-twilight-forest",
      },
      {
        name: "OptiFine",
        version: "HD_U_H7",
        url: "https://optifine.net/downloads",
      },
      {
        name: "Alex Mobs",
        version: "1.18.6",
        url: "https://www.curseforge.com/minecraft/mc-mods/alexs-mobs",
      },
      {
        name: "Citadel #Alex Mobs",
        version: "1.11.3-1.18.2",
        url: "https://www.curseforge.com/minecraft/mc-mods/citadel",
      },
      {
        name: "AppleSkin",
        version: "2.4.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/appleskin",
      },
      {
        name: "Baubley Heart Canisters",
        version: "1.0.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/baubley-heart-canisters",
      },
      {
        name: "Curios API #Baubley Heart Canisters",
        version: "5.0.7.1",
        url: "https://www.curseforge.com/minecraft/mc-mods/curios",
      },
      {
        name: "Biomes O' Plenty",
        version: "16.0.0.109",
        url: "https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty",
      },
      {
        name: "TerraBlender #Biomes O' Plenty",
        version: "1.2.0.126",
        url: "https://www.curseforge.com/minecraft/mc-mods/terrablender",
      },
      {
        name: "MrCrayfish's Furniture Mod",
        version: "7.0.0-pre29",
        url: "https://www.curseforge.com/minecraft/mc-mods/mrcrayfish-furniture-mod",
      },
      {
        name: "Decorative Blocks",
        version: "2.1.2",
        url: "https://www.curseforge.com/minecraft/mc-mods/decorative-blocks",
      },
      {
        name: "Dungeon Crawl",
        version: "2.3.10",
        url: "https://www.curseforge.com/minecraft/mc-mods/dungeon-crawl",
      },
      {
        name: "When Dungeons Arise",
        version: "2.1.52",
        url: "https://www.curseforge.com/minecraft/mc-mods/when-dungeons-arise",
      },
      {
        name: "Dynamic Lights",
        version: "1.18.6",
        url: "https://www.curseforge.com/minecraft/mc-mods/dynamic-lights",
      },
      {
        name: "Ecologics",
        version: "1.7.10",
        url: "https://www.curseforge.com/minecraft/mc-mods/ecologics",
      },
      {
        name: "Guard Villagers",
        version: "1.4.3",
        url: "https://www.curseforge.com/minecraft/mc-mods/guard-villagers",
      },
      {
        name: "Iron Chests",
        version: "13.2.11",
        url: "https://www.curseforge.com/minecraft/mc-mods/iron-chests",
      },
      {
        name: "Just Enough Items",
        version: "forge-10.2.1.283",
        url: "https://www.curseforge.com/minecraft/mc-mods/jei",
      },
      {
        name: "Mekanism",
        version: "10.2.5.465",
        url: "https://www.curseforge.com/minecraft/mc-mods/mekanism",
      },
      {
        name: "Mekanism Generators",
        version: "10.2.5.465",
        url: "https://www.curseforge.com/minecraft/mc-mods/mekanism-generators",
      },
      {
        name: "Mekanism Tools",
        version: "10.2.5.465",
        url: "https://www.curseforge.com/minecraft/mc-mods/mekanism-tools",
      },
      {
        name: "Oh The Biomes You'll Go",
        version: "1.4.7",
        url: "https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go",
      },
      {
        name: "Ores Above Diamonds",
        version: "8.1.1",
        url: "https://www.curseforge.com/minecraft/mc-mods/ores-above-diamonds",
      },
      {
        name: "Silent Gear",
        version: "2.10.16",
        url: "https://www.curseforge.com/minecraft/mc-mods/silent-gear",
      },
      {
        name: "Silent Lib",
        version: "6.2.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/silent-lib",
      },
      {
        name: "Silent's Gems",
        version: "4.3.1",
        url: "https://www.curseforge.com/minecraft/mc-mods/silents-gems/files",
      },
      {
        name: "YUNG's Better Dungeons",
        version: "2.10",
        url: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-dungeons",
      },
      {
        name: "YUNG's Better Mineshafts",
        version: "2.2",
        url: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-mineshafts-forge",
      },
      {
        name: "YUNG's API",
        version: "2.2.6",
        url: "https://www.curseforge.com/minecraft/mc-mods/yungs-api",
      },
      {
        name: "The One Probe",
        version: "5.1.2",
        url: "https://www.curseforge.com/minecraft/mc-mods/the-one-probe",
      },
      {
        name: "Storage Drawers",
        version: "10.2.1",
        url: "https://www.curseforge.com/minecraft/mc-mods/storage-drawers",
      },
      {
        name: "Stalwart Dungeons",
        version: "1.2.3",
        url: "https://www.curseforge.com/minecraft/mc-mods/stalwart-dungeons",
      },
      {
        name: "SimpleOres",
        version: "4.1.2.9",
        url: "https://www.curseforge.com/minecraft/mc-mods/simpleores",
      },
      {
        name: "SimpleCore API",
        version: "4.3.1.4",
        url: "https://www.curseforge.com/minecraft/mc-mods/simplecore-api",
      },
      {
        name: "Iron Jetpacks",
        version: "5.1.4",
        url: "https://www.curseforge.com/minecraft/mc-mods/iron-jetpacks",
      },
      {
        name: "Cucumber Library",
        version: "5.1.3",
        url: "https://www.curseforge.com/minecraft/mc-mods/cucumber",
      },
    ],
  },
  {
    name: "Dimension Traveling",
    href: "dimension-traveling",
    download: "https://repo.someworkflow.de/storage/mod_packs/dimension-traveling.zip",
    description: "Projekt mit cAjott",
    updated: new Date("2022-12-21T22:38:44.206Z"),
    mods: [
      {
        name: "Biomes O' Plent",
        version: "17.1.1.162",
        url: "https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty",
      },
      {
        name: "TerraBlender #Biomes O' Plent",
        version: "2.0.1.128",
        url: "https://www.curseforge.com/minecraft/mc-mods/terrablender",
      },
      {
        name: "Corpse",
        version: "1.19.2-1.0.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/corpse",
      },
      {
        name: "Guard Villagers",
        version: "1.5.2",
        url: "https://www.curseforge.com/minecraft/mc-mods/guard-villagers",
      },
      {
        name: "Useful Backpacks",
        version: "106",
        url: "https://www.curseforge.com/minecraft/mc-mods/useful-backpacks",
      },
      {
        name: "U Team Core #Useful Backpacks",
        version: "4.4.3.236",
        url: "https://www.curseforge.com/minecraft/mc-mods/u-team-core",
      },
      {
        name: "Another Furniture",
        version: "2.1.2",
        url: "https://www.curseforge.com/minecraft/mc-mods/another-furniture",
      },
      {
        name: "Not Enough Animations",
        version: "1.6.2-1.19.2",
        url: "https://www.curseforge.com/minecraft/mc-mods/not-enough-animations",
      },
      {
        name: "More Babies",
        version: "1.0.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/more-babies",
      },
      {
        name: "Better Animals Plus",
        version: "11.0.7",
        url: "https://www.curseforge.com/minecraft/mc-mods/betteranimalsplus",
      },
      {
        name: "Architectury API #Better Animals Plus",
        version: "6.4.62",
        url: "https://www.curseforge.com/minecraft/mc-mods/architectury-api",
      },
      {
        name: "Aquaculture 2",
        version: "2.4.8",
        url: "https://www.curseforge.com/minecraft/mc-mods/aquaculture",
      },
      {
        name: "Exotic Birds",
        version: "2.6.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/exotic-birds",
      },
      {
        name: "Artifacts",
        version: "5.0.1",
        url: "https://www.curseforge.com/minecraft/mc-mods/artifacts",
      },
      {
        name: "Curios API #Artifacts",
        version: "5.1.1.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/curios",
      },
      {
        name: "ExpandAbilit",
        version: "7.0.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/expandability",
      },
      {
        name: "Serene Seasons",
        version: "8.1.0.24",
        url: "https://www.curseforge.com/minecraft/mc-mods/serene-seasons",
      },
      {
        name: "Towns and Towers",
        version: "1.10.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/towns-and-towers",
      },
      {
        name: "MVS - Moog's Voyager Structures",
        version: "3.1.6",
        url: "https://www.curseforge.com/minecraft/mc-mods/moogs-voyager-structures",
      },
      {
        name: "Keebsz's Battle Towers",
        version: "0.4.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/keebszs-battletowers-fabric",
      },
      {
        name: "Paladin's Furniture",
        version: "1.1.1",
        url: "https://www.curseforge.com/minecraft/mc-mods/paladins-furniture",
      },
      {
        name: "Cloth Config API #Paladin's Furniture",
        version: "8.2.88",
        url: "https://www.curseforge.com/minecraft/mc-mods/cloth-config",
      },
      {
        name: "Patchouli #Paladin's Furniture",
        version: "77",
        url: "https://www.curseforge.com/minecraft/mc-mods/patchouli",
      },
      {
        name: "Red's More Structures",
        version: "1.0.4",
        url: "https://www.curseforge.com/minecraft/mc-mods/reds-more-structures",
      },
      {
        name: "Copper Craft",
        version: "1.1.0.7",
        url: "https://www.curseforge.com/minecraft/mc-mods/copper-craft",
      },
      {
        name: "Deeper and Darker",
        version: "1.1.6",
        url: "https://www.curseforge.com/minecraft/mc-mods/deeperdarker",
      },
      {
        name: "GeckoLib #Deeper and Darker",
        version: "3.1.39",
        url: "https://www.curseforge.com/minecraft/mc-mods/geckolib",
      },
      {
        name: "Combat Roll",
        version: "1.1.1",
        url: "https://www.curseforge.com/minecraft/mc-mods/combat-roll",
      },
      {
        name: "playerAnimator #Combat Roll",
        version: "0.4.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/playeranimator",
      },
      {
        name: "Monster Plus",
        version: "1.1.4",
        url: "https://www.curseforge.com/minecraft/mc-mods/monster-plus",
      },
      {
        name: "Diamethysts!",
        version: "1.5.7",
        url: "https://www.curseforge.com/minecraft/mc-mods/diamethysts",
      },
      {
        name: "Dreamland Biomes",
        version: "1.2.0.6",
        url: "https://www.curseforge.com/minecraft/mc-mods/dreamland-biomes",
      },
      {
        name: "Immersive structures",
        version: "2.0.6",
        url: "https://www.curseforge.com/minecraft/mc-mods/immersive-structures",
      },
      {
        name: "The Bumblezone",
        version: "6.4.9",
        url: "https://www.curseforge.com/minecraft/mc-mods/the-bumblezone-forge",
      },
      {
        name: "Immersive Armors",
        version: "1.5.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/immersive-armors",
      },
      {
        name: "Falling Attack",
        version: "2.0.2",
        url: "https://www.curseforge.com/minecraft/mc-mods/falling-attack-forge",
      },
      {
        name: "The Lost Cities",
        version: "6.0.10",
        url: "https://www.curseforge.com/minecraft/mc-mods/the-lost-cities",
      },
      {
        name: "akkamaddi's Simple Tungsten",
        version: "4.1.0.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/akkamaddis-simple-tungsten",
      },
      {
        name: "SimpleCore API #Simple Tungsten #Netherrocks",
        version: "5.1.0.2",
        url: "https://www.curseforge.com/minecraft/mc-mods/simplecore-api",
      },
      {
        name: "Fusion #Simple Tungsten",
        version: "5.1.2.2",
        url: "https://www.curseforge.com/minecraft/mc-mods/fusion",
      },
      {
        name: "SimpleOres #Simple Tungsten",
        version: "5.1.1.8",
        url: "https://www.curseforge.com/minecraft/mc-mods/simpleores",
      },
      {
        name: "Netherrocks",
        version: "5.1.0.2",
        url: "https://www.curseforge.com/minecraft/mc-mods/netherrocks",
      },
      {
        name: "Brutal Bosses - Dungeon Bosses",
        version: "5.6",
        url: "https://www.curseforge.com/minecraft/mc-mods/brutal-bosses-dungeon",
      },
      {
        name: "YUNG's Better Ocean Monuments",
        version: "2.1.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-ocean-monuments",
      },
      {
        name: "YUNG's Better Mineshafts",
        version: "3.2.0",
        url: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-mineshafts-forge",
      },
      {
        name: "YUNG's API",
        version: "3.8.2",
        url: "https://www.curseforge.com/minecraft/mc-mods/yungs-api",
      },
      {
        name: "Just Enough Items (JEI)",
        version: "11.5.0.296",
        url: "https://www.curseforge.com/minecraft/mc-mods/jei",
      },
    ],
  },
];

export const handler: Handlers<ModList> = {
  async GET(_req, ctx) {
    let project;
    lists.forEach((list) => {
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
                {props.data.updated.toLocaleDateString()}
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
