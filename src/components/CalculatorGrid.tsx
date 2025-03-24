
import React from 'react';
import { Link } from 'react-router-dom';

interface CalculatorCard {
  title: string;
  description: string;
  path: string;
  category: string;
}

const calculators: CalculatorCard[] = [
  {
    title: "Basic Calculator",
    description: "Perform basic mathematical operations with ease",
    path: "/basic-calculator",
    category: "Math"
  },
  {
    title: "Scientific Calculator",
    description: "Advanced calculations with trigonometric and logarithmic functions",
    path: "/scientific-calculator",
    category: "Math"
  },
  {
    title: "Number Base Converter",
    description: "Convert between binary, decimal, hexadecimal",
    path: "/number-base-converter",
    category: "Math"
  },
  {
    title: "BMI Calculator",
    description: "Calculate Body Mass Index and health recommendations",
    path: "/bmi-calculator",
    category: "Health"
  }
];

const CalculatorGrid: React.FC = () => {
  // Group calculators by category
  const categories = calculators.reduce((acc, calculator) => {
    if (!acc[calculator.category]) {
      acc[calculator.category] = [];
    }
    acc[calculator.category].push(calculator);
    return acc;
  }, {} as Record<string, CalculatorCard[]>);

  return (
    <div className="calculator-grid">
      <h1 className="text-3xl font-bold mb-6">Toolpidia - Calculator Hub</h1>
      
      {Object.entries(categories).map(([category, categoryCalculators]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category} Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoryCalculators.map((calc) => (
              <Link 
                key={calc.path} 
                to={calc.path}
                className="calculator-card bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-medium mb-2">{calc.title}</h3>
                <p className="text-gray-600 text-sm">{calc.description}</p>
                <span className="inline-block mt-2 text-xs font-semibold bg-gray-100 rounded px-2 py-1">
                  {calc.category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalculatorGrid;
