
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="mb-6">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        <span>Back to Home</span>
      </Link>
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;
