import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm animate-pulse flex flex-col md:flex-row min-h-[220px]">
      {/* Left Thumbnail Skeleton */}
      <div className="w-full md:w-2/5 min-h-[200px] md:min-h-full bg-gray-200"></div>

      {/* Right Content Skeleton */}
      <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex gap-2 mb-3">
            <div className="h-5 bg-gray-200 rounded-full w-24"></div>
            <div className="h-5 bg-gray-200 rounded-full w-32"></div>
          </div>
          <div className="h-7 bg-gray-200 rounded-lg w-3/4 mb-3"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex gap-2">
            <div className="h-6 bg-gray-200 rounded-md w-16"></div>
            <div className="h-6 bg-gray-200 rounded-md w-16"></div>
          </div>
          <div className="h-8 bg-gray-200 rounded-full w-24"></div>
        </div>
      </div>
    </div>
  );
}
