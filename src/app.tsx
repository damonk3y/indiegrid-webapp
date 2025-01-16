import { joinWaitlist } from "./api/waitlist";
import { Toast } from "./components/toast";
import { useState } from "react";

const Hero = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success"
  });

  return (
    <section aria-label="Hero" className="hero min-h-[80vh] bg-gradient-to-br from-primary/10 via-base-300 to-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-1 absolute top-0 left-0 w-full h-full bg-[linear-gradient(transparent_1px,_transparent_1px),_linear-gradient(to_right,_transparent_1px,_transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"></div>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <div className="badge badge-warning gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          Under Development
        </div>
      </div>
      <div className="hero-content text-center relative z-10">
        <div className="max-w-lg space-y-4 px-4">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent !leading-[42px] lg:!leading-[82px]">theindiegrid</h1>
          <h2 className="text-lg md:text-xl leading-relaxed text-base-content/80">Professional cloud infrastructure for indie hackers, at community prices</h2>
          <div className="flex flex-col gap-4 pt-4">
            <input 
              type="email"
              id="email-input"
              placeholder="Enter your email"
              className="input input-bordered w-full focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-center"
              onChange={(e) => {
                const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
                setButtonDisabled(!isValid);
              }}
            />
            <button 
              id="waitlist-btn"
              className="btn btn-primary w-full md:w-auto btn-lg shadow-[0_0_15px_rgba(var(--p),0.3)] hover:shadow-[0_0_25px_rgba(var(--p),0.4)] transition-all duration-300 hover:-translate-y-1 disabled:opacity-80 disabled:shadow-none disabled:hover:shadow-none"
              aria-label="Join Waitlist"
              disabled={buttonDisabled}
              onClick={async () => {
                const emailInput = document.querySelector('#email-input') as HTMLInputElement;
                if (emailInput?.value) {
                  try {
                    await joinWaitlist(emailInput.value);
                    setToast({
                      show: true,
                      type: "success",
                      message: "Successfully joined waitlist!"
                    });
                  } catch (error) {
                    setToast({
                      show: true,
                      type: "error", 
                      message: "Error joining waitlist. Please try again."
                    });
                  }
                } else {
                  setToast({
                    show: true,
                    type: "error", 
                    message: "You must provide an email address"
                  });
                }
              }}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
      {toast.show && (
        <Toast type={toast.type} position="end" vertical="bottom">
          {toast.message}
        </Toast>
      )}
    </section>
  )
}

const MissionAndVision = () => {
  return (
    <section aria-label="Mission and Vision" className="container mx-auto py-12 md:py-24 px-4 md:px-8 space-y-12 md:space-y-20">
      <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Our Mission</h2>
        <p className="text-xl md:text-2xl text-base-content/70 leading-relaxed">
          Democratizing cloud infrastructure through an affordable, community-driven platform that helps indie hackers build and scale projects without breaking the bank.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-16">
        <article className="card bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <div className="card-body p-6 md:p-10">
            <h3 className="card-title text-2xl md:text-3xl text-secondary mb-4 md:mb-6">Our Vision</h3>
            <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
              Creating a future where indie hackers access enterprise-grade infrastructure with seamless deployment experiences, through a collaborative ecosystem that reduces costs while maintaining high reliability and performance.
            </p>
          </div>
        </article>

        <article className="card bg-gradient-to-br from-secondary/5 to-accent/5 backdrop-blur-sm border border-secondary/20 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300">
          <div className="card-body p-6 md:p-10">
            <h3 className="card-title text-2xl md:text-3xl text-accent mb-4 md:mb-6">Current Focus</h3>
            <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
              Building a platform that efficiently shares resources across the community, providing top-tier cloud services at a fraction of the cost. Focus on building great products instead of managing infrastructure.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

const CloudServices = () => {
  return (
    <section aria-label="Cloud Services" className="container mx-auto py-12 md:py-24 px-4 md:px-8">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-20 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Post MVP Services</h2>
      <div className="grid gap-8 md:grid-cols-2 md:gap-16">
        <article className="card bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm shadow-[0_4px_20px_rgba(var(--p),0.1)] hover:shadow-[0_4px_25px_rgba(var(--p),0.2)] transition-all duration-300 hover:-translate-y-1 border border-primary/20">
          <div className="card-body p-6 md:p-10">
            <h3 className="card-title text-2xl md:text-3xl text-primary mb-4 md:mb-6">Secure Remote Databases</h3>
            <p className="text-base md:text-lg text-base-content/70 leading-relaxed">Fully managed and secured remote databases built with a security-first mindset while ensuring high performance for production workloads.</p>
          </div>
        </article>
        <article className="card bg-gradient-to-br from-secondary/5 to-transparent backdrop-blur-sm shadow-[0_4px_20px_rgba(var(--s),0.1)] hover:shadow-[0_4px_25px_rgba(var(--s),0.2)] transition-all duration-300 hover:-translate-y-1 border border-secondary/20">
          <div className="card-body p-6 md:p-10">
            <h3 className="card-title text-2xl md:text-3xl text-secondary mb-4 md:mb-6">Shared File Storage</h3>
            <p className="text-base md:text-lg text-base-content/70 leading-relaxed">Secure and reliable file storage solution with automated backups and easy integration. Perfect for storing user uploads, static assets, and application data.</p>
          </div>
        </article>
        <article className="card bg-gradient-to-br from-accent/5 to-transparent backdrop-blur-sm shadow-[0_4px_20px_rgba(var(--a),0.1)] hover:shadow-[0_4px_25px_rgba(var(--a),0.2)] transition-all duration-300 hover:-translate-y-1 border border-accent/20">
          <div className="card-body p-6 md:p-10">
            <h3 className="card-title text-2xl md:text-3xl text-accent mb-4 md:mb-6">Shared Computing</h3>
            <p className="text-base md:text-lg text-base-content/70 leading-relaxed">A secure containerized platform for application deployment. Benefit from shared computing resources while maintaining isolation and security for workloads.</p>
          </div>
        </article>
        <article className="card bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm shadow-[0_4px_20px_rgba(var(--p),0.1)] hover:shadow-[0_4px_25px_rgba(var(--p),0.2)] transition-all duration-300 hover:-translate-y-1 border border-primary/20">
          <div className="card-body p-6 md:p-10">
            <h3 className="card-title text-2xl md:text-3xl text-primary mb-4 md:mb-6">Smooth Deployments</h3>
            <p className="text-base md:text-lg text-base-content/70 leading-relaxed">Hassle-free deployments through streamlined tools and workflows. Deploy applications with confidence using an intuitive deployment pipeline.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

const Community = () => {
  return (
    <section aria-label="Community Updates" className="bg-gradient-to-br from-primary/10 via-base-300 to-secondary/10 py-12 md:py-24 px-4 md:px-8 mt-8 md:mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Get Regular Updates</h2>
        <p className="text-lg md:text-xl mb-8 md:mb-12 text-base-content/70">Follow on X (Twitter) to stay updated on the progress of theindiegrid</p>
        <div className="flex justify-center">
          <a href="https://x.com/damonk3y_" target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full md:w-auto btn-lg shadow-[0_0_15px_rgba(var(--s),0.3)] hover:shadow-[0_0_25px_rgba(var(--s),0.4)] transition-all duration-300 hover:-translate-y-1" aria-label="Follow us on X (Twitter)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-base-100">
      <Hero />
      <MissionAndVision />
      <CloudServices />
      <Community />
    </main>
  )
}