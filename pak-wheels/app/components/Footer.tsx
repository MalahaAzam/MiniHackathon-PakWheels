import Link from "next/link";

const Footer = () => {
    return (
        <footer className= " bg-black text-white font-serif text-center top-1000px relative">
            <p>Sample website, Made with ♥ by 
                <Link className="underline" href =" https://www.linkedin.com/in/malaha-azam-"> Malaha Azam </Link>
            <br/>
            © 1996-2024, Pak Wheels or its affiliates </p>
        </footer>
    );
};

export default Footer;