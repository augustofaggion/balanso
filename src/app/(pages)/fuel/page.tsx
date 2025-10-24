import Navbar from "@/app/components/Navbar";
import Tracker from "@/app/components/Tracker";
import { Fuel } from "lucide-react";

export default function FuelPage() {
    return (
        <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
            <Tracker
                title="Fuel Tracker"
                icon={<Fuel className="w-8 h-8 text-white" />}
                localStorageKey="fuel"
                currencySymbol="€"
                currencyCode="EUR"
                addLabel="Add"
                removeLabel="Remove"
                resetLabel="Reset Fuel"
            />
            <Navbar />
        </div>
    );
}
