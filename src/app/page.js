import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu/>
      <section className="text-center my-12">
        <SectionHeaders 
          subHeader={"Our Story"}
          mainHeader={"About Us"}
          // categoryHeader={"Panini"}
        /> 
        <div className="text-secondary-200 text-sm max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>
          <span className="italic text-lg font-semibold">NAMES WORTH KNOWING. FOOD WORTH EATING.</span> <br />
          In order pay tribute to the movies by and about people of the African Diaspora, and Third World Cinema, we have named our sandwiches after some of the most influential people in the history of film. We hope you enjoy our food and the movies that inspired them.
        </p>
        <p>
          We are a family owned and operated business. We are proud to serve our community with the best quality food and service. We are committed to  providing our customers with the best experience possible.  We are proud to serve our community with the best quality food  and service. We are committed to providing our customers with  the best experience possible. <br /> <span className="italic text-2xl font-bold">Sankofa Cafe</span>
        </p>
        
        </div> 
      </section>
      <section className="text-center my-12">
        <SectionHeaders
          subHeader={"Don\t hesitate"}
          mainHeader={"Contact Us"}
        />  
        <div className="mt-6">
          <a className="text-4xl font-semibold underline text-secondary-200" href="tel:+1(202)588-7061">+1 (202) 588-7061</a>
        </div>
      </section>
      
    </>
  );
}
