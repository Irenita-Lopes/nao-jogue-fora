import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 mt-20 py-6 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20">

                <h4 className="font-bold text-lg text-gray-700">
                    Desenvolvido por Irenita Lopes 
                </h4>

                <div className="flex gap-6 text-2xl text-gray-600">
                    <a
                        href="https://www.linkedin.com/in/irenita-ferreira-lopes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Irenita-Lopes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
}
