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
          <Link href="/Oferta" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn("text-white hover:text-accentColor mx-5")}
            >
              Oferta
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-accentColor">
            Kalkulatory
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] bg-white lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink>
                  <div className="flex h-full w-full bg-calculator bg-cover rounded-xl select-none flex-col justify-end  from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg   font-medium"></div>
                    <p className="text-sm leading-tight text-white text-muted-foreground">
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
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-accentColor">
            Materiały pomocnicze
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 bg-white p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <li className="row-span-4">
                <NavigationMenuLink>
                  <div className="flex h-full w-full bg-smallDiet bg-cover rounded-xl select-none flex-col justify-end  from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg   font-medium"></div>
                    <p className="text-xl leading-tight text-white text-muted-foreground">
                      Zobacz dostępne materiały pomocnicze
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
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
      <NavigationMenuLink className="hover:bg-slate-400 " asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
