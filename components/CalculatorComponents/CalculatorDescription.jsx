"use client";
import AnimateLetters from "@/lib/animateLetters";
import { useSearchParams } from "next/navigation";
import React from "react";

const coToList = "- Co to jest?".split("");
const jakList = "Jak działa - ".split("");
const jakInterpretowac = "Jak Interpretować - ".split("");

const CalculatorDescription = () => {
  const serchParams = useSearchParams();
  const selectedType = serchParams.get("typ");

  return (
    <div className="text-black w-[98%] border-b-4  border-r-4 rounded-xl bg-white ">
      <div>
        <h2 className="flex subtitleSize font-serif border-l-2 border-b-2 rounded-l border-accentColor">
          {selectedType}{" "}
          <AnimateLetters
            letterClass="calculator_description-specialFont"
            strArray={coToList}
            idx={0}
          ></AnimateLetters>
        </h2>
        {selectedType === "Kalkulator Bmi" ? (
          <p className="textSize">
            Wskaźnik masy ciała (BMI, z ang. Body Mass Index) to prosta i
            popularna metoda oceny masy ciała osoby na podstawie jej wagi i
            wzrostu. Wskaźnik ten pomaga określić, czy dana osoba ma masę ciała
            w normie, czy może cierpi na niedowagę, nadwagę lub otyłość.
          </p>
        ) : null}
        {selectedType === "Kalkulator Wagi Idealnej" ? (
          <p className="font-serif p-2 textSize">
            - Kalkulator wagi idealnej to narzędzie, które pomaga określić, jaka
            waga jest uważana za idealną lub zdrową dla danej osoby na podstawie
            różnych czynników, takich jak wzrost , wiek i płeć. Nie jest to
            jedna konkretne liczba, ale zakres wag uważany za odpowiedni w
            kontekście zdrowia i dobrego samopoczucia.
          </p>
        ) : null}
        {selectedType === "Kalkulator Kalorii" ? (
          <p className="font-serif p-2 textSize">
            - Kalkulator Kalorii to narzędzie, które pomoże Ci zrozumieć i
            kontrolować swoje spożycie kalorii, co jest kluczowe dla osiągnięcia
            celów związanych z wagą i zdrowiem. Aplikacja umożliwia prosty
            sposób rejestrowania spożywanych posiłków i monitorowania
            kalorycznej zawartości diety.
          </p>
        ) : null}

        <h2 className="flex subtitleSize font-serif border-l-2 border-b-2 rounded-l border-accentColor">
          <AnimateLetters
            letterClass="calculator_description-specialFont"
            strArray={jakList}
            idx={0}
          ></AnimateLetters>
          {selectedType} ?
        </h2>
        {selectedType === "Kalkulator Bmi" ? (
          <ol className="list-decimal font-serif textSize p-2 pl-6">
            <li>Wprowadź dane, takie jak wzrost, wiek, płeć</li>
            <li>Kalkulator używa tych danych do obliczenia BMI</li>
            <li>
              Po naciśnięciu przycisku "Oblicz", otrzymasz wartość BMI, jak i
              interpretacje
            </li>
          </ol>
        ) : null}
        {selectedType === "Kalkulator Wagi Idealnej" ? (
          <ol className="list-decimal font-serif textSize p-2 pl-6">
            <li>Wprowadź dane, takie jak wzrost, wiek, płeć</li>
            <li>
              Kalkulator używa tych danych do obliczenia zakresu wag uważanych
              za zdrowe w oparciu o dostępne wzory
            </li>
            <li>
              Po naciśnięciu przycisku "Oblicz", otrzymasz zakres wag, które są
              uważane za zdrowe dla twoich danych wejściowych.
            </li>
            <li>
              Ten zakres może zawierać minimalną i maksymalną wagę, która jest
              uważana za zdrową dla twojego profilu
            </li>
          </ol>
        ) : null}
        {selectedType === "Kalkulator Kalorii" ? (
          <ol className="list-decimal font-serif textSize p-2 pl-6">
            <li>Wprowadź dane, takie jak wzrost, wiek, płeć jak i cel diety</li>
            <li>
              Kalkulator używa tych danych do obliczenia zakresu Cal które
              powinno się spożywać do osiągnięcia zamierzonych rezultatów
            </li>
            <li>
              Po naciśnięciu przycisku "Oblicz", otrzymasz zakres Cal, które są
              uważane za zdrowe dla twoich danych wejściowych jak i adekwatne do
              zamieżonego celu.
            </li>
            <li>
              Ten zakres może zawierać minimalną i maksymalną ilość Cal, która
              jest uważana za zdrową dla twojego profilu
            </li>
          </ol>
        ) : null}
        <h2 className="flex subtitleSize font-serif border-l-2 border-t-2 rounded-l border-accentColor">
          <AnimateLetters
            letterClass="calculator_description-specialFont"
            strArray={jakInterpretowac}
            idx={0}
          ></AnimateLetters>
          {selectedType} ?
        </h2>
        {selectedType === "Kalkulator Bmi" ? (
          <div>
            <p className="font-serif textSize p-2">
              Interpratacje BMI nastempuje na podswaie ponizszego przedziału:
            </p>
            <ol className="list-decimal font-serif textSize p-2 pl-6">
              <li>Niedowaga: BMI poniżej 18,5</li>
              <li>Waga prawidłowa: BMI między 18,5 - 24,9</li>
              <li>Nadwaga: BMI między 25 - 29,9</li>
              <li>Otyłość (klasa I): BMI między 30 - 34,9</li>
              <li>Otyłość (klasa II): BMI między 35 - 39,9</li>
              <li>Otyłość (klasa III): BMI 40 lub więcej</li>
            </ol>
            <p className="font-serif textSize p-2">
              Należy pamiętać, że choć BMI jest użytecznym narzędziem do oceny
              masy ciała na poziomie populacyjnym, to nie uwzględnia on
              czynników takich jak masa mięśniowa, gęstość kości czy rozkład
              masy ciała. Dla bardziej kompleksowej oceny swojego stanu zdrowia
              zawsze warto skonsultować się z lekarzem lub specjalistą ds.
              żywienia.
            </p>
          </div>
        ) : null}
        {selectedType === "Kalkulator Wagi Idealnej" ? (
          <div>
            <p className="font-serif textSize p-1">
              Kalkulator wagi idealnej jest narzędziem służącym do określenia
              przybliżonej wagi, która jest uważana za optymalną lub zdrową dla
              danego człowieka. Jednak warto zaznaczyć, że waga idealna może być
              subiektywna i niekoniecznie odzwierciedlć zdrowie i dobre
              samopoczucie danej osoby. Oto kilka kwestii, które należy wziąć
              pod uwagę przy interpretacji wyników kalkulatora wagi idealnej:
            </p>
            <ol className="list-decimal textSize font-serif p-1 pl-6">
              <li>
                Zdrowie i samopoczucie: Waga nie jest jedynym czynnikiem
                określającym zdrowie i samopoczucie. Inne aspekty, takie jak
                dieta, aktywność fizyczna, poziom tkanki tłuszczowej, stan
                zdrowia ogólnego i genetyka, również odgrywają ważną rolę.
              </li>
              <li>
                Indywidualne czynniki: Wzory na wagę idealna są wzorami ogulnymi
                nie dopasowanymi do indivdualnego człowieka nie powinno sie nimi
                sugerować w przypadkach skrajnego wzrostu , wieku , ilości
                tkanki mięśniowej
              </li>
            </ol>
            <p className="font-serif textSize p-1">
              Kalkulator wagi idealnej może być użytecznym narzędziem
              orientacyjnym, ale nie powinien być jedynym czynnikiem, na którym
              opierasz swoje decyzje dotyczące zdrowego stylu życia. Zawsze
              warto podejść do tego tematu z rozwagą i zkonsultować się z
              profesjonalistami w dziedzinie zdrowia i żywienia.
            </p>
          </div>
        ) : null}
        {selectedType === "Kalkulator Kalorii" ? (
          <div>
            <p className="font-serif textSize p-2">
              Interpretacja wyników kalkulatora kalorii może pomóc w
              zrozumieniu, ile kalorii potrzebujesz w ciągu dnia, aby osiągnąć
              swoje cele związane z dietą, czy to utratą wagi, utrzymaniem masy
              ciała czy zyskaniem masy mięśniowej.
            </p>

            <p className="font-serif textSize p-2">
              Warto pamiętać, że kalkulatory kalorii są narzędziem
              orientacyjnym, a rzeczywiste zapotrzebowanie kaloryczne może się
              różnić w zależności od wielu czynników, takich jak genetyka,
              metabolizm i poziom aktywności. Dlatego ważne jest dostosowanie
              diety do własnych potrzeb i monitorowanie jej wpływu na ciało.
              Warto również skonsultować się z dietetykiem lub specjalistą ds.
              żywienia, aby uzyskać spersonalizowane wskazówki i plan
              żywieniowy.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CalculatorDescription;
