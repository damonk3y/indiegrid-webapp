import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section aria-label="Blog Articles" className="py-8 px-4 sm:py-12 md:py-24 sm:px-6 md:px-8">
      <div className="container mx-auto text-center max-w-4xl space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent leading-tight sm:!leading-[80px]">Blog</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-base-content/70 leading-relaxed">
          Latest updates and articles from theindiegrid
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8">
        <Link to="/articles/kvm">
            <article className="card bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border border-primary/20 max-w-2xl mx-auto">
            <div className="card-body p-4 sm:p-6 md:p-10">
                <h2 className="card-title text-xl sm:text-2xl text-primary mb-3 sm:mb-4">Building a Virtual Lab with KVM: Converting Old Hardware into a VM Host</h2>
                <p className="text-sm sm:text-base text-base-content/70 mb-4 sm:mb-6">Learn how to repurpose your old hardware into a powerful virtualization server using KVM...</p>
                <div className="card-actions justify-end">
                <a href="#" className="btn btn-primary btn-outline btn-sm sm:btn-md">Read More</a>
                </div>
            </div>
            </article>
        </Link>
      </div>
    </section>
  )
}