"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Transformacje",
    href: "/Transformacje",
    description: "Zobacz transformacje",
  },
  {
    title: "Opinnie",
    href: "/Opinnie",
    description: "Zobacz opinne klientów",
  },
  {
    title: "Przepisy",
    href: "/Przepisy",
    description: "Zobacz Przepisy na zdrowe dania",
  },
  {
    title: "Ćwiczenia",
    href: "/Ćwiczenia",
    description: "Zobacz jak wykonywać Ćwiczenia",
  },
];

export function BigScreanHeder() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/O-mnie" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn("text-white hover:text-accentColor mx-5")}
            >
              O Mnie
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/Oferta?Option=" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn("text-white hover:text-accentColor mx-5")}
            >
              Oferta
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white bg-prime hover:bg-prime  hover:text-accentColor">
            Kalkulatory
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3  md:w-[400px] bg-prime lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink>
                  <div className="flex h-full w-full z-50 bg-calculator bg-cover  rounded-l-none  shadow-xl shadow-blue-300  p-2  rounded-xl select-none flex-col justify-strt  from-muted/50 to-muted  no-underline outline-none focus:shadow-md">
             
                    <p className="text-xl leading-tight text-left  text-white text-muted-foreground textShadow">
                      Zobacz dostępne kalkulatory i oblicz z łatwością swoje
                      parametry
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/Kalkulatory?typ=Kalkulator%20Wagi%20Idealnej"
                title="Kalkulator Wagi Idealnej"
              >
                Kalkulator Wagi Idealnej pomoże ci znaleść swoją wymażoną wagę
              </ListItem>
              <ListItem
                href="/Kalkulatory?typ=Kalkulator%20Bmi"
                title="Kalkulator BMI"
              >
                Kalkulator BMI obliczy twoje BMI jak i pomoże ci ja
                zinterpretować
              </ListItem>
              <ListItem
                href="/Kalkulatory?typ=Kalkulator%20Kalorii"
                title="Kalkulator Kalorii"
              >
                Kalkulator Kalorii obliczy twoje zapotrzebowanie kaloryczne jak
                i rospisze twoje makroelementy
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <NavigationMenuTrigger className="text-white bg-prime hover:bg-prime   hover:text-accentColor">
            Materiały pomocnicze
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-r-3xl">
            <ul className="grid w-[400px] gap-3 bg-prime  md:w-[500px] border-accentColor   md:grid-cols-2 lg:w-[600px] ">
              <li className="row-span-4">
                <NavigationMenuLink>
                  <div className="flex h-full w-full bg-smallDiet rounded-l-none rounded-r-[2.5rem] shadow-xl shadow-blue-300   bg-cover  select-none flex-col justify-start p-2 from-muted/50 to-muted  no-underline outline-none focus:shadow-md">
                   
                    <p className="text-3xl leading-tight text-left  text-white text-muted-foreground textShadow">
                      Zobacz dostępne materiały pomocnicze
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <div className="my-3">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}</div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/Kontakt" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn("text-white hover:text-accentColor")}
            >
              Kontakt
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({ className, title, children, ...props }) => {
  return (
    <li>
      <NavigationMenuLink className=" hover:bg-prime     " asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-none hover:shadow-md hover:shadow-white hover:text-accentColor p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className=" font-medium leading-none text-xl  text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug  text-muted-foreground text-slate-300">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
