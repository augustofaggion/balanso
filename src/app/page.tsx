import Tracker from "@/app/components/Tracker";
import { Euro } from "lucide-react";

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
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
    </div>
  );
}
