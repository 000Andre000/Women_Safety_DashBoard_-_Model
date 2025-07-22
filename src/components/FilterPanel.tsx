// import React from 'react';
// import { Filter, Calendar, Clock, AlertTriangle } from 'lucide-react';

// const FilterPanel = ({ filters, setFilters }) => {
//   const incidentTypes = [
//     { value: 'all', label: 'All Incidents' },
//     { value: 'harassment', label: 'Harassment' },
//     { value: 'stalking', label: 'Stalking' },
//     { value: 'violence', label: 'Violence' },
//     { value: 'other', label: 'Other' }
//   ];

//   const timeOptions = [
//     { value: 'all', label: 'All Hours' },
//     { value: 'morning', label: 'Morning (6-12)' },
//     { value: 'afternoon', label: 'Afternoon (12-18)' },
//     { value: 'evening', label: 'Evening (18-24)' },
//     { value: 'night', label: 'Night (0-6)' }
//   ];

//   const dateRanges = [
//     { value: 'today', label: 'Today' },
//     { value: 'last7days', label: 'Last 7 Days' },
//     { value: 'last30days', label: 'Last 30 Days' },
//     { value: 'last90days', label: 'Last 90 Days' }
//   ];

//   const severityLevels = [
//     { value: 'all', label: 'All Severities' },
//     { value: 'high', label: 'High' },
//     { value: 'medium', label: 'Medium' },
//     { value: 'low', label: 'Low' }
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
//       <div className="flex items-center mb-4">
//         <Filter className="h-5 w-5 text-gray-600 mr-2" />
//         <h2 className="text-lg font-semibold">Filters</h2>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             <AlertTriangle className="h-4 w-4 inline mr-1" />
//             Incident Type
//           </label>
//           <select 
//             value={filters.incidentType}
//             onChange={(e) => setFilters({...filters, incidentType: e.target.value})}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//           >
//             {incidentTypes.map(type => (
//               <option key={type.value} value={type.value}>{type.label}</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             <Clock className="h-4 w-4 inline mr-1" />
//             Time of Day
//           </label>
//           <select 
//             value={filters.timeOfDay}
//             onChange={(e) => setFilters({...filters, timeOfDay: e.target.value})}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//           >
//             {timeOptions.map(time => (
//               <option key={time.value} value={time.value}>{time.label}</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             <Calendar className="h-4 w-4 inline mr-1" />
//             Date Range
//           </label>
//           <select 
//             value={filters.dateRange}
//             onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//           >
//             {dateRanges.map(range => (
//               <option key={range.value} value={range.value}>{range.label}</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             <AlertTriangle className="h-4 w-4 inline mr-1" />
//             Severity
//           </label>
//           <select 
//             value={filters.severity}
//             onChange={(e) => setFilters({...filters, severity: e.target.value})}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//           >
//             {severityLevels.map(level => (
//               <option key={level.value} value={level.value}>{level.label}</option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterPanel;


import React, { useState } from 'react';
import { Filter, Clock, AlertTriangle, ChevronDown, MapPin } from 'lucide-react';

const FilterPanel = ({ filters, setFilters }) => {
  const [selectedRegion, setSelectedRegion] = useState('North Mumbai');

  const regions = ['North Mumbai', 'East Mumbai', 'Central Mumbai'];

  const regionIncidentData = {
    'North Mumbai': {
      all: [
        { value: 'all', label: 'All Incidents', percentage: 100 },
        { value: 'harassment', label: 'Harassment', percentage: 35 },
        { value: 'stalking', label: 'Stalking', percentage: 22 },
        { value: 'violence', label: 'Violence', percentage: 25 },
        { value: 'other', label: 'Other', percentage: 18 },
      ],
      morning: [
        { value: 'all', label: 'All Incidents', percentage: 100 },
        { value: 'harassment', label: 'Harassment', percentage: 30 },
        { value: 'stalking', label: 'Stalking', percentage: 20 },
        { value: 'violence', label: 'Violence', percentage: 28 },
        { value: 'other', label: 'Other', percentage: 22 },
      ],
      evening: [
        { value: 'all', label: 'All Incidents', percentage: 100 },
        { value: 'harassment', label: 'Harassment', percentage: 40 },
        { value: 'stalking', label: 'Stalking', percentage: 24 },
        { value: 'violence', label: 'Violence', percentage: 20 },
        { value: 'other', label: 'Other', percentage: 16 },
      ],
      night: [
        { value: 'all', label: 'All Incidents', percentage: 100 },
        { value: 'harassment', label: 'Harassment', percentage: 45 },
        { value: 'stalking', label: 'Stalking', percentage: 30 },
        { value: 'violence', label: 'Violence', percentage: 15 },
        { value: 'other', label: 'Other', percentage: 10 },
      ],
    },
    'East Mumbai': {
      all: [
        { value: 'all', label: 'All Incidents', percentage: 100 },
        { value: 'harassment', label: 'Harassment', percentage: 38 },
        { value: 'stalking', label: 'Stalking', percentage: 21 },
        { value: 'violence', label: 'Violence', percentage: 26 },
        { value: 'other', label: 'Other', percentage: 15 },
      ],
      morning: [
        { value: 'all', label: 'All Incidents', percentage: 100 },
        { value: 'harassment', label: 'Harassment', percentage: 32 },
        { value: 'stalking', label: 'Stalking', percentage: 19 },
        { value: 'violence', label: 'Violence', percentage: 28 },
        { value: 'other', label: 'Other', percentage: 21 },
      ],
      evening: [
        { value: 'all', label: 'All Incidents', percentage: 100 },
        { value: 'harassment', label: 'Harassment', percentage: 42 },
        { value: 'stalking', label: 'Stalking', percentage: 25 },
        { value: 'violence', label: 'Violence', percentage: 18 },
        { value: 'other', label: 'Other', percentage: 15 },
      ],
      night: [
        { value: 'all', label: 'All Incidents', percentage: 100 },
        { value: 'harassment', label: 'Harassment', percentage: 50 },
        { value: 'stalking', label: 'Stalking', percentage: 28 },
        { value: 'violence', label: 'Violence', percentage: 12 },
        { value: 'other', label: 'Other', percentage: 10 },
      ],
    },
    'Central Mumbai': {
      all: [
        { value: 'all', label: 'All Incidents', percentage: 100 },
        { value: 'harassment', label: 'Harassment', percentage: 42 },
        { value: 'stalking', label: 'Stalking', percentage: 25 },
        { value: 'violence', label: 'Violence', percentage: 20 },
        { value: 'other', label: 'Other', percentage: 13 },
      ],
      morning: [
        { value: 'all', label: 'All Incidents', percentage: 100 },
        { value: 'harassment', label: 'Harassment', percentage: 37 },
        { value: 'stalking', label: 'Stalking', percentage: 27 },
        { value: 'violence', label: 'Violence', percentage: 22 },
        { value: 'other', label: 'Other', percentage: 14 },
      ],
      evening: [
        { value: 'all', label: 'All Incidents', percentage: 100 },
        { value: 'harassment', label: 'Harassment', percentage: 44 },
        { value: 'stalking', label: 'Stalking', percentage: 26 },
        { value: 'violence', label: 'Violence', percentage: 18 },
        { value: 'other', label: 'Other', percentage: 12 },
      ],
      night: [
        { value: 'all', label: 'All Incidents', percentage: 100 },
        { value: 'harassment', label: 'Harassment', percentage: 48 },
        { value: 'stalking', label: 'Stalking', percentage: 30 },
        { value: 'violence', label: 'Violence', percentage: 14 },
        { value: 'other', label: 'Other', percentage: 8 },
      ],
    },
  };

  const timeOptions = [
    { value: 'all', label: 'All Hours' },
    { value: 'morning', label: 'Morning (6–12)' },
    { value: 'evening', label: 'Evening (18–24)' },
    { value: 'night', label: 'Night (0–6)' },
  ];

  const selectedTime = filters?.timeOfDay || 'all';
  const currentIncidentTypes = regionIncidentData?.[selectedRegion]?.[selectedTime] || [];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 text-gray-600 mr-2" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Region */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="h-4 w-4 inline mr-1" /> Region
          </label>
          <div className="relative">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 appearance-none"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Incident Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <AlertTriangle className="h-4 w-4 inline mr-1" /> Incident Type
          </label>
          <div className="relative">
            <select
              value={filters?.incidentType || 'all'}
              onChange={(e) => setFilters({ ...filters, incidentType: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 appearance-none"
            >
              {currentIncidentTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Time of Day */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="h-4 w-4 inline mr-1" /> Time of Day
          </label>
          <div className="relative">
            <select
              value={selectedTime}
              onChange={(e) => setFilters({ ...filters, timeOfDay: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 appearance-none"
            >
              {timeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Incident Distribution */}
      {currentIncidentTypes.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Incident Distribution - {selectedRegion} ({selectedTime})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {currentIncidentTypes
              .filter((type) => type.value !== 'all')
              .map((type) => (
                <div key={type.value} className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      type.value === 'harassment'
                        ? 'bg-red-500'
                        : type.value === 'stalking'
                        ? 'bg-orange-500'
                        : type.value === 'violence'
                        ? 'bg-purple-500'
                        : 'bg-blue-500'
                    }`}
                  ></div>
                  <span className="text-xs text-gray-600">{type.label}</span>
                  <span className="text-xs font-medium text-gray-800">{type.percentage}%</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;
