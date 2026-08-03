'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PLANS = [
  {
    name: 'Free Starter',
    price: '$0',
    description: 'Perfect for casual writing and testing.',
    features: [
      '10,000 monthly credits',
      'Access to 25+ templates',
      'Standard AI model responsiveness',
      'Community support'
    ],
    cta: 'Current Plan',
    active: true,
    borderClass: 'border-gray-200'
  },
  {
    name: 'Creator Premium',
    price: '$9.99',
    period: '/month',
    description: 'For power creators needing unlimited capability.',
    features: [
      'Unlimited generation credits',
      'Full access to all 45+ premium templates',
      'Advanced originality & plagiarism reports',
      'Priority fast-queue AI generation',
      '24/7 dedicated email support'
    ],
    cta: 'Upgrade Plan',
    active: false,
    borderClass: 'border-teal-500 shadow-md ring-2 ring-teal-500/20'
  }
];

function Billing() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Simple, Transparent Plans
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-500">
          Get access to high-performance AI content generation and boost your productivity today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col justify-between p-6 bg-white border rounded-2xl ${plan.borderClass} transition-all duration-200 hover:shadow-lg`}
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                {plan.active && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                    Active
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm text-gray-500">{plan.description}</p>

              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                {plan.period && <span className="ml-1 text-xl text-gray-500">{plan.period}</span>}
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button
                variant={plan.active ? 'outline' : 'default'}
                className={`w-full py-5 text-sm font-semibold rounded-xl transition-all ${
                  plan.active
                    ? 'border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50'
                    : 'bg-teal-600 text-white hover:bg-teal-500 shadow-sm'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Billing;
