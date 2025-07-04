"use client";
import { useState, useEffect } from "react";
import BudgetButton from "@/app/components/BudgetButton";
import { toast as defaultToast } from "sonner";

interface TrackerProps {
  title: string;
  icon: React.ReactNode;
  localStorageKey: string;
  currencySymbol?: string;
  currencyCode?: string;
  addLabel?: string;
  removeLabel?: string;
  resetLabel?: string;
  description?: string;
  toast?: typeof defaultToast;
}

const Tracker = ({
  title,
  icon,
  localStorageKey,
  currencySymbol = "€",
  currencyCode = "EUR",
  addLabel = "Add",
  removeLabel = "Remove",
  resetLabel = "Reset",
  description = "",
  toast = defaultToast,
}: TrackerProps) => {
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(10);

  useEffect(() => {
    const saved = localStorage.getItem(localStorageKey);
    if (saved) setValue(parseFloat(saved));
  }, [localStorageKey]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, value.toString());
  }, [value, localStorageKey]);

  const add = () => {
    setValue(prev => prev + amount);
    toast.success(`${addLabel} ${formatCurrency(amount)}!`);
  };

  const remove = () => {
    if (value >= amount) {
      setValue(prev => prev - amount);
      toast.success(`${removeLabel} ${formatCurrency(amount)}!`);
    } else {
      toast.error("Insufficient value!");
    }
  };

  const reset = () => {
    setValue(0);
    toast.info(`${resetLabel} to 0`);
  };

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: currencyCode }).format(val);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
            {icon}
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
          <p className="text-white/70">{description}</p>
        </div>
        {/* Value Display */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20">
          <div className="text-center">
            <p className="text-white/70 text-sm uppercase tracking-wide mb-2">Current Value</p>
            <div className="text-4xl font-bold text-white mb-4 animate-scale-in">
              {formatCurrency(value)}
            </div>
            <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
              value > 0 ? 'bg-green-500/20 text-green-300' : 
              value < 0 ? 'bg-red-500/20 text-red-300' : 
              'bg-gray-500/20 text-gray-300'
            }`}>
              {value > 0 ? 'Positive' : value < 0 ? 'Negative' : 'Zero'}
            </div>
          </div>
        </div>
        {/* Amount Input */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
          <label className="block text-white/70 text-sm font-medium mb-3">
            Amount to Add/Remove
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70">{currencySymbol}</span>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(Math.max(0, parseFloat(e.target.value) || 0))}
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
            onClick={add}
            variant="success"
            icon={<span>+</span>}
            label={`${addLabel} ${formatCurrency(amount)}`}
          />
          <BudgetButton
            onClick={remove}
            variant="danger"
            icon={<span>-</span>}
            label={`${removeLabel} ${formatCurrency(amount)}`}
          />
        </div>
        {/* Reset Button */}
        <BudgetButton
          onClick={reset}
          variant="secondary"
          icon={<span>⟳</span>}
          label={resetLabel}
          fullWidth
        />
      </div>
    </div>
  );
};

export default Tracker;