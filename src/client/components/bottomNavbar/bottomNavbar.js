import React from 'react';
import Logo from './../../assets/logo.png';
import { FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <div>
            <div className="bg-[#F7941D] py-10">
                <div className="flex flex-col items-center">
                    <div className="h-[0.02rem] w-[80vw] rounded-2xl border-b bg-[#ffffff]">.</div>

                    <div className="flex w-full flex-col justify-between px-5 py-10 text-white md:flex-row md:px-20 lg:flex-row lg:px-28">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center px-10">
                                <img src={Logo} alt="" className="w-20" />
                            </div>
                            <div className="flex flex-row py-10 px-10">
                                <a href="/" target="_blank" rel="noopener noreferrer" className="mr-4">
                                    <FaTwitter size={32} color="white" />
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer" className="mr-4">
                                    <FaLinkedin size={32} color="white" />
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer" className="mr-4">
                                    <FaYoutube size={32} color="white" />
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer" className="mr-4">
                                    <FaInstagram size={32} color="white" />
                                </a>
                            </div>
                            <p>© 2023 STT Cabs. All rights reserved.</p>
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row">
                            <div className="px-10 text-left text-2xl">
                                <p className="py-5 font-bold">Policies</p>
                                <Link to="/terms">
                                    <p className="py-2 text-xl font-light">Terms of Service</p>
                                </Link>
                                <Link to="/privacy">
                                    <p className="py-2 text-xl font-light">Privacy Policy</p>
                                </Link>
                                <Link to="/cookie">
                                    <p className="py-2 text-xl font-light">Cookie Policy</p>
                                </Link>
                            </div>
                            <div className="px-10 text-left text-2xl">
                                <p className="py-5 font-bold">Important Links</p>
                                <Link to="/faqs">
                                    <p className="py-2 text-xl font-light">FAQs</p>
                                </Link>
                                <p className="py-2 text-xl font-light">Media</p>
                                <Link to="/contact-us">
                                    <p className="py-2 text-xl font-light">Contact Us</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomNavbar;