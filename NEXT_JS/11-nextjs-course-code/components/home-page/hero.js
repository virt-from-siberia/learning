import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I am Alex</h1>
      <p>I blog about web development</p>
    </section>
  );
}
export default Hero;
