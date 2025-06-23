import Image from "next/image";
import BudgetTracker from "@/app/components/BudgetTracker";

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <BudgetTracker />
    </div>
  );
}
