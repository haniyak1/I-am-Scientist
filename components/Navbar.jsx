import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 px-4 py-3 flex justify-between items-center">
    
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>

      <ul className="flex space-x-6 text-white text-base md:text-lg">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contest">Online Contest</Link></li>
        <li><Link href="/outline">Online Outline</Link></li>
        <li><Link href="/papers">Past Papers</Link></li>
        <li><Link href="/forms">Forms</Link></li>
        <li><Link href="/results">Results</Link></li>
      </ul>

  
      <button
        className="bg-[#C407B9] hover:bg-[#A3069D] px-6 py-3 rounded text-white font-bold text-base md:text-lg"
      >
        Enroll
      </button>
    </nav>
  );
};

export default Navbar;
