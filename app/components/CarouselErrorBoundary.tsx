"use client";
import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  componentName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class CarouselErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error for debugging
    console.warn(`Carousel error in ${this.props.componentName || 'unknown component'}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden relative flex items-center justify-center">
          <span className="text-gray-600 text-lg font-semibold">
            {this.props.componentName || 'Product Images'}
          </span>
        </div>
      );
    }

    return this.props.children;
  }
}
