import { allCards } from "@/constants";
import { Card } from "@/components";

export default function Home() {
  return (
    <main>
      <div className="padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-2xl font-semibold leading-normal text-neutral-800">
            <span className="font-extralight block">
              Reliable, efficient delivery
            </span>
            Powered by Technology
          </h1>
          <p className="max-w-[55ch] text-[15px] leading-[25px]">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>

        <section>
          <div className="home__cards-wrapper">
            {allCards.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
