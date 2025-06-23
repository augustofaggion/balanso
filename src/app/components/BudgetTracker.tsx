"use client";
import { useState, useEffect } from "react";
import { Plus, Minus, RotateCcw, DollarSign } from "lucide-react";
import BudgetButton from "@/app/components/BudgetButton";
import { toast } from "sonner";

const BudgetTracker = () => {
  const [budget, setBudget] = useState(0);
  const [amount, setAmount] = useState(10);

  // Load budget from localStorage on component mount
  useEffect(() => {
    const savedBudget = localStorage.getItem("budget");
    if (savedBudget) {
      setBudget(parseFloat(savedBudget));
    }
  }, []);

  // Save budget to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("budget", budget.toString());
  }, [budget]);

  const addMoney = () => {
    setBudget(prev => prev + amount);
    toast.success(`Added $${amount.toFixed(2)} to your budget!`);
  };

  const subtractMoney = () => {
    if (budget >= amount) {
      setBudget(prev => prev - amount);
      toast.success(`Removed $${amount.toFixed(2)} from your budget!`);
    } else {
      toast.error("Insufficient funds!");
    }
  };

  const resetBudget = () => {
    setBudget(0);
    toast.info("Budget reset to $0");
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Budget Tracker</h1>
          <p className="text-white/70">Manage your money with ease</p>
        </div>

        {/* Budget Display */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20">
          <div className="text-center">
            <p className="text-white/70 text-sm uppercase tracking-wide mb-2">Current Balance</p>
            <div className="text-4xl font-bold text-white mb-4 animate-scale-in">
              {formatCurrency(budget)}
            </div>
            <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
              budget > 0 ? 'bg-green-500/20 text-green-300' : 
              budget < 0 ? 'bg-red-500/20 text-red-300' : 
              'bg-gray-500/20 text-gray-300'
            }`}>
              {budget > 0 ? 'Positive Balance' : budget < 0 ? 'Negative Balance' : 'Zero Balance'}
            </div>
          </div>
        </div>

        {/* Amount Input */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
          <label className="block text-white/70 text-sm font-medium mb-3">
            Amount to Add/Remove
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-8 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <BudgetButton
            onClick={addMoney}
            variant="success"
            icon={<Plus className="w-6 h-6" />}
            label={`Add $${amount.toFixed(2)}`}
          />
          <BudgetButton
            onClick={subtractMoney}
            variant="danger"
            icon={<Minus className="w-6 h-6" />}
            label={`Remove $${amount.toFixed(2)}`}
          />
        </div>

        {/* Reset Button */}
        <BudgetButton
          onClick={resetBudget}
          variant="secondary"
          icon={<RotateCcw className="w-5 h-5" />}
          label="Reset Budget"
          fullWidth
        />

        {/* Footer */}
        <div className="text-center mt-8 text-white/50 text-sm">
          Your budget is automatically saved on this device
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;