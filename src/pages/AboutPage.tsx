
import PageHero from '@/components/PageHero';
import aboutImg from '../assets/hero-bcg.jpeg';
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <div className="grid gap-8 md:grid-cols-2 place-items-center px-4 mt-20">
        <img src={aboutImg} alt="nice desk" className="rounded-lg h-80 object-cover w-full" />
        <article className="max-w-prose">
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4">our story</h2>
            <div className="w-16 h-1 bg-gray-300 mb-4"></div>
          </div>
          <p className="text-base leading-relaxed text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste. 
          </p>
        </article>
      </div>
    </main>
  );
};

export default AboutPage;
