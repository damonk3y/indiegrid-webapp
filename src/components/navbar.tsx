import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-lg border-b border-base-content/10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                        theindiegrid
                    </Link>
                    <button 
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
                        </svg>
                    </button>

                    {/* Desktop menu */}
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <Link to="/" className="text-base-content/70 hover:text-primary transition-colors duration-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="text-base-content/70 hover:text-primary transition-colors duration-200">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <div className="badge badge-warning gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Under Development
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col gap-4 py-4">
                        <li>
                            <Link 
                                to="/" 
                                className="block text-base-content/70 hover:text-primary transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/blog" 
                                className="block text-base-content/70 hover:text-primary transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="flex justify-center py-4">
                            <div className="badge badge-warning gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Under Development
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}