import React from 'react';
import Tracker from '@/app/components/Tracker';
import { Euro } from 'lucide-react';
import Navbar from '@/app/components/NavbarHome';

const BudgetPage = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
      <Tracker 
      title="Budget"
      icon={<Euro className="w-8 h-8 text-white"/>}
      localStorageKey="budget"  
      currencyCode="EUR"
      currencySymbol="€"
      addLabel="Add"
      removeLabel="Remove"
      resetLabel="Reset Budget"
      />
       <Navbar />
    </div>
  );
};

export default BudgetPage;