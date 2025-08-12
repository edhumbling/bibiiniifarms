'use client';

import { useState } from 'react';
import * as Sentry from '@sentry/nextjs';

export default function SentryTestButton() {
  const [showTest, setShowTest] = useState(false);

  const triggerTestError = () => {
    try {
      // Intentionally trigger an error
      throw new Error('Test error from main page - Sentry integration test');
    } catch (error) {
      Sentry.captureException(error);
      alert('Test error sent to Sentry! Check your dashboard.');
    }
  };

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!showTest ? (
        <button
          onClick={() => setShowTest(true)}
          className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors"
          title="Sentry Test"
        >
          🐛 Test Sentry
        </button>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-900">Sentry Test</h3>
            <button
              onClick={() => setShowTest(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          <button
            onClick={triggerTestError}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-md text-sm"
          >
            Trigger Test Error
          </button>
          <p className="text-xs text-gray-500 mt-2">
            This will send a test error to your Sentry dashboard
          </p>
        </div>
      )}
    </div>
  );
}
