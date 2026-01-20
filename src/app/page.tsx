"use client";

import { useState } from 'react';
import { calculatePrice } from './pricing';

export default function Home() {
  const [region, setRegion] = useState('us-east-1');
  const [instanceType, setInstanceType] = useState('t2.micro');
  const [os, setOs] = useState('linux');
  const [hoursPerDay, setHoursPerDay] = useState(24);
  const [price, setPrice] = useState<number | null>(null);

  const handleCalculate = () => {
    const estimatedPrice = calculatePrice(region, instanceType, os, hoursPerDay);
    setPrice(estimatedPrice);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center py-16 px-8 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-8">
          AWS EC2 Price Calculator
        </h1>

        <div className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="region" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Region</label>
            <select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="us-east-1">US East (N. Virginia) us-east-1</option>
              <option value="us-west-2">US West (Oregon) us-west-2</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="instanceType" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Instance Type</label>
            <select
              id="instanceType"
              value={instanceType}
              onChange={(e) => setInstanceType(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="t2.micro">t2.micro</option>
              <option value="t3.large">t3.large</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="os" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Operating System</label>
            <select
              id="os"
              value={os}
              onChange={(e) => setOs(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="linux">Linux</option>
              <option value="windows">Windows</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="hoursPerDay" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Hours per Day</label>
            <input
              type="number"
              id="hoursPerDay"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(parseInt(e.target.value))}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              min="1"
              max="24"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full h-12 px-5 mt-4 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Calculate
          </button>

          {price !== null && (
            <div className="mt-8 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-md text-center">
              <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Estimated Monthly Price:</p>
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${price.toFixed(2)}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
