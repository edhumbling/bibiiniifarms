npm run build'use client';

import { useState } from 'react';
import * as Sentry from '@sentry/nextjs';

export default function SentryExamplePage() {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const triggerUndefinedFunction = () => {
    try {
      // @ts-ignore - Intentionally calling undefined function
      myUndefinedFunction();
    } catch (error) {
      setErrorMessage('Undefined function error triggered!');
      Sentry.captureException(error);
    }
  };

  const triggerManualError = () => {
    try {
      throw new Error('This is a test error from Sentry Example Page');
    } catch (error) {
      setErrorMessage('Manual error triggered!');
      Sentry.captureException(error);
    }
  };

  const triggerPerformanceIssue = () => {
    // Simulate a performance issue by sending a custom event
    Sentry.captureMessage('Performance test completed', 'info');
    setErrorMessage('Performance test completed! Check Sentry for the event.');
  };

  const sendTestMessage = () => {
    Sentry.captureMessage('This is a test message from Sentry Example Page', 'info');
    setErrorMessage('Test message sent to Sentry!');
  };

  const triggerAsyncError = async () => {
    try {
      // Simulate an async error
      await new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Async error from Sentry Example Page'));
        }, 100);
      });
    } catch (error) {
      setErrorMessage('Async error triggered!');
      Sentry.captureException(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Sentry Test Page
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={triggerUndefinedFunction}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Trigger Undefined Function Error
          </button>

          <button
            onClick={triggerManualError}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Trigger Manual Error
          </button>

          <button
            onClick={triggerAsyncError}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Trigger Async Error
          </button>

          <button
            onClick={triggerPerformanceIssue}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Trigger Performance Transaction
          </button>

          <button
            onClick={sendTestMessage}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Send Test Message
          </button>
        </div>

        {errorMessage && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-blue-800">{errorMessage}</p>
            <p className="text-blue-600 text-sm mt-2">
              Check your Sentry dashboard to see the captured events!
            </p>
          </div>
        )}

        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="font-medium text-gray-900 mb-2">Instructions:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Click any button to trigger different types of errors</li>
            <li>• Check your Sentry dashboard for captured events</li>
            <li>• Look for errors, messages, and performance data</li>
            <li>• Verify that source maps are working correctly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
