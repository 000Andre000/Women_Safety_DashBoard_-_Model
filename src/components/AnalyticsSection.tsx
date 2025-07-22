// import React from 'react';
// import { TrendingUp, TrendingDown, Clock, Users, AlertTriangle } from 'lucide-react';

// const AnalyticsSection = ({ filters, selectedArea }) => {
//   const incidentTypes = [
//     { type: 'Harassment', count: 45, percentage: 35, trend: 'up' },
//     { type: 'Stalking', count: 28, percentage: 22, trend: 'down' },
//     { type: 'Violence', count: 32, percentage: 25, trend: 'up' },
//     { type: 'Other', count: 23, percentage: 18, trend: 'stable' }
//   ];

//   const timeDistribution = [
//     { hour: '6-9 AM', incidents: 15 },
//     { hour: '9-12 PM', incidents: 22 },
//     { hour: '12-3 PM', incidents: 28 },
//     { hour: '3-6 PM', incidents: 35 },
//     { hour: '6-9 PM', incidents: 48 },
//     { hour: '9-12 AM', incidents: 32 },
//     { hour: '12-6 AM', incidents: 18 }
//   ];

//   const weeklyTrend = [
//     { day: 'Mon', incidents: 25 },
//     { day: 'Tue', incidents: 22 },
//     { day: 'Wed', incidents: 28 },
//     { day: 'Thu', incidents: 35 },
//     { day: 'Fri', incidents: 42 },
//     { day: 'Sat', incidents: 38 },
//     { day: 'Sun', incidents: 30 }
//   ];

//   return (
//     <div className="grid grid-cols-2 gap-6 mb-8">
//       {/* Quick Stats */}
//       {/* <div className="bg-white rounded-lg shadow-lg p-6">
//         <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
//         <div className="space-y-3">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Total Calls Today</span>
//             <span className="font-bold text-2xl text-blue-600">127</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Emergency Calls</span>
//             <span className="font-bold text-2xl text-red-600">23</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Avg Response Time</span>
//             <span className="font-bold text-2xl text-green-600">3.2m</span>
//           </div>
//         </div>
//       </div> */}

//       {/* Incident Types */}
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h3 className="text-lg font-semibold mb-4">Incident Types</h3>
//         <div className="space-y-3">
//           {incidentTypes.map((incident, index) => (
//             <div key={index} className="flex items-center justify-between">
//               <div className="flex-1">
//                 <div className="flex justify-between items-center mb-1">
//                   <span className="text-sm font-medium">{incident.type}</span>
//                   <span className="text-sm text-gray-600">{incident.count}</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div 
//                     className="bg-purple-600 h-2 rounded-full transition-all duration-300"
//                     style={{ width: `${incident.percentage}%` }}
//                   ></div>
//                 </div>
//               </div>
//               <div className="ml-3">
//                 {incident.trend === 'up' && <TrendingUp className="h-4 w-4 text-red-500" />}
//                 {incident.trend === 'down' && <TrendingDown className="h-4 w-4 text-green-500" />}
//                 {incident.trend === 'stable' && <div className="w-4 h-4 bg-gray-400 rounded-full"></div>}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Time Distribution */}
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h3 className="text-lg font-semibold mb-4">Hourly Distribution</h3>
//         <div className="space-y-2">
//           {timeDistribution.map((time, index) => (
//             <div key={index} className="flex items-center">
//               <div className="w-16 text-sm text-gray-600">{time.hour}</div>
//               <div className="flex-1 ml-2">
//                 <div className="w-full bg-gray-200 rounded-full h-3">
//                   <div 
//                     className="bg-blue-500 h-3 rounded-full transition-all duration-300"
//                     style={{ width: `${(time.incidents / 50) * 100}%` }}
//                   ></div>
//                 </div>
//               </div>
//               <div className="w-8 text-right text-sm font-medium">{time.incidents}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Weekly Trend */}
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h3 className="text-lg font-semibold mb-4">Weekly Trend</h3>
//         <div className="flex items-end space-x-2 h-32">
//           {weeklyTrend.map((day, index) => (
//             <div key={index} className="flex-1 flex flex-col items-center">
//               <div 
//                 className="w-full bg-purple-600 rounded-t transition-all duration-300 hover:bg-purple-700"
//                 style={{ height: `${(day.incidents / 50) * 100}%` }}
//               ></div>
//               <div className="text-xs text-gray-600 mt-1">{day.day}</div>
//               <div className="text-xs font-medium">{day.incidents}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Resource Recommendations */}
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h3 className="text-lg font-semibold mb-4">Resource Recommendations</h3>
//         <div className="space-y-3">
//           <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
//             <AlertTriangle className="h-5 w-5 text-red-600" />
//             <div>
//               <p className="text-sm font-medium">High-Risk Zone Alert</p>
//               <p className="text-xs text-gray-600">Deploy additional patrol in Market District</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
//             <Clock className="h-5 w-5 text-yellow-600" />
//             <div>
//               <p className="text-sm font-medium">Peak Hours</p>
//               <p className="text-xs text-gray-600">Increase staff during 6-9 PM</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
//             <Users className="h-5 w-5 text-blue-600" />
//             <div>
//               <p className="text-sm font-medium">Community Outreach</p>
//               <p className="text-xs text-gray-600">Organize safety workshop in Industrial Zone</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnalyticsSection;


import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Clock, Users, AlertTriangle, ChevronDown } from 'lucide-react';

const AnalyticsSection = () => {
  const [selectedRegion, setSelectedRegion] = useState('North Mumbai');

  const regions = ['North Mumbai', 'East Mumbai', 'Central Mumbai'];

  const regionData = {
    'North Mumbai': {
      quickStats: {
        totalCalls: 127,
        emergencyCalls: 23,
        avgResponseTime: '3.2m'
      },
      incidentTypes: [
        { type: 'Harassment', count: 45, percentage: 35, trend: 'up' },
        { type: 'Stalking', count: 28, percentage: 22, trend: 'down' },
        { type: 'Violence', count: 32, percentage: 25, trend: 'up' },
        { type: 'Other', count: 23, percentage: 18, trend: 'stable' }
      ],
      timeDistribution: [
        { hour: '6-9 AM', incidents: 15 },
        { hour: '9-12 PM', incidents: 22 },
        { hour: '12-3 PM', incidents: 28 },
        { hour: '3-6 PM', incidents: 35 },
        { hour: '6-9 PM', incidents: 48 },
        { hour: '9-12 AM', incidents: 32 },
        { hour: '12-6 AM', incidents: 18 }
      ],
      weeklyTrend: [
        { day: 'Mon', incidents: 25 },
        { day: 'Tue', incidents: 22 },
        { day: 'Wed', incidents: 28 },
        { day: 'Thu', incidents: 35 },
        { day: 'Fri', incidents: 42 },
        { day: 'Sat', incidents: 38 },
        { day: 'Sun', incidents: 30 }
      ],
      recommendations: [
        { type: 'alert', text: 'High-Risk Zone Alert', desc: 'Deploy additional patrol in Borivali area' },
        { type: 'time', text: 'Peak Hours', desc: 'Increase staff during 6-9 PM' },
        { type: 'community', text: 'Community Outreach', desc: 'Organize safety workshop in Andheri' }
      ]
    },
    'East Mumbai': {
      quickStats: {
        totalCalls: 89,
        emergencyCalls: 18,
        avgResponseTime: '2.8m'
      },
      incidentTypes: [
        { type: 'Harassment', count: 32, percentage: 38, trend: 'down' },
        { type: 'Stalking', count: 18, percentage: 21, trend: 'stable' },
        { type: 'Violence', count: 22, percentage: 26, trend: 'up' },
        { type: 'Other', count: 13, percentage: 15, trend: 'down' }
      ],
      timeDistribution: [
        { hour: '6-9 AM', incidents: 12 },
        { hour: '9-12 PM', incidents: 18 },
        { hour: '12-3 PM', incidents: 22 },
        { hour: '3-6 PM', incidents: 28 },
        { hour: '6-9 PM', incidents: 35 },
        { hour: '9-12 AM', incidents: 25 },
        { hour: '12-6 AM', incidents: 14 }
      ],
      weeklyTrend: [
        { day: 'Mon', incidents: 18 },
        { day: 'Tue', incidents: 16 },
        { day: 'Wed', incidents: 22 },
        { day: 'Thu', incidents: 28 },
        { day: 'Fri', incidents: 32 },
        { day: 'Sat', incidents: 29 },
        { day: 'Sun', incidents: 24 }
      ],
      recommendations: [
        { type: 'alert', text: 'Improvement Noted', desc: 'Harassment cases decreased in Ghatkopar' },
        { type: 'time', text: 'Peak Hours', desc: 'Monitor evening hours in Kurla' },
        { type: 'community', text: 'Community Outreach', desc: 'Expand programs in Vikhroli area' }
      ]
    },
    'Central Mumbai': {
      quickStats: {
        totalCalls: 156,
        emergencyCalls: 31,
        avgResponseTime: '4.1m'
      },
      incidentTypes: [
        { type: 'Harassment', count: 58, percentage: 42, trend: 'up' },
        { type: 'Stalking', count: 35, percentage: 25, trend: 'up' },
        { type: 'Violence', count: 28, percentage: 20, trend: 'stable' },
        { type: 'Other', count: 18, percentage: 13, trend: 'down' }
      ],
      timeDistribution: [
        { hour: '6-9 AM', incidents: 20 },
        { hour: '9-12 PM', incidents: 28 },
        { hour: '12-3 PM', incidents: 35 },
        { hour: '3-6 PM', incidents: 42 },
        { hour: '6-9 PM', incidents: 55 },
        { hour: '9-12 AM', incidents: 38 },
        { hour: '12-6 AM', incidents: 22 }
      ],
      weeklyTrend: [
        { day: 'Mon', incidents: 32 },
        { day: 'Tue', incidents: 28 },
        { day: 'Wed', incidents: 35 },
        { day: 'Thu', incidents: 42 },
        { day: 'Fri', incidents: 48 },
        { day: 'Sat', incidents: 45 },
        { day: 'Sun', incidents: 38 }
      ],
      recommendations: [
        { type: 'alert', text: 'Critical Alert', desc: 'Urgent attention needed in CST area' },
        { type: 'time', text: 'Extended Hours', desc: 'Deploy more resources 6-9 PM' },
        { type: 'community', text: 'Awareness Campaign', desc: 'Launch safety drive in Dadar-Parel' }
      ]
    }
  };

  const currentData = regionData[selectedRegion];

  return (
    <div>
    <div className="grid grid-cols-2 xl:grid-cols-2 gap-6 mb-8">
      {/* Region Selector */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Region Filter</h3>
        <div className="relative">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {regions.map(region => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-3">
        <h3 className="text-lg font-semibold mb-4">Quick Stats - {selectedRegion}</h3>
        <div className="flex justify-between text-gray-700">
          <span>Total Calls</span>
          <span className="text-blue-600 font-bold text-xl">{currentData.quickStats.totalCalls}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Emergency Calls</span>
          <span className="text-red-600 font-bold text-xl">{currentData.quickStats.emergencyCalls}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Avg Response Time</span>
          <span className="text-green-600 font-bold text-xl">{currentData.quickStats.avgResponseTime}</span>
        </div>
      </div>

      {/* Incident Types */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Incident Types</h3>
        <div className="space-y-3">
          {currentData.incidentTypes.map((incident, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                  <span>{incident.type}</span>
                  <span>{incident.count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all"
                    style={{ width: `${incident.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="ml-3">
                {incident.trend === 'up' && <TrendingUp className="h-4 w-4 text-red-500" />}
                {incident.trend === 'down' && <TrendingDown className="h-4 w-4 text-green-500" />}
                {incident.trend === 'stable' && <div className="w-4 h-4 bg-gray-400 rounded-full"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Time Distribution */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Hourly Distribution</h3>
        <div className="space-y-2">
          {currentData.timeDistribution.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="w-20 text-sm text-gray-600">{item.hour}</div>
              <div className="flex-1 mx-2">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: `${(item.incidents / 60) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-8 text-right text-sm font-medium">{item.incidents}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Trend */}
      {/* <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Weekly Trend</h3>
        <div className="flex items-end space-x-2 h-32">
          {currentData.weeklyTrend.map((day, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-purple-600 rounded-t hover:bg-purple-700 transition-all"
                style={{ height: `${(day.incidents / 60) * 100}%` }}
              ></div>
              <div className="text-xs text-gray-600 mt-1">{day.day}</div>
              <div className="text-xs font-medium">{day.incidents}</div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Recommendations */}
      
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Resource Recommendations</h3>
        <div className="space-y-3">
          {currentData.recommendations.map((rec, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg ${
                rec.type === 'alert' ? 'bg-red-50' : rec.type === 'time' ? 'bg-yellow-50' : 'bg-blue-50'
              }`}
            >
              {rec.type === 'alert' && <AlertTriangle className="h-5 w-5 text-red-600" />}
              {rec.type === 'time' && <Clock className="h-5 w-5 text-yellow-600" />}
              {rec.type === 'community' && <Users className="h-5 w-5 text-blue-600" />}
              <div>
                <p className="text-sm font-medium">{rec.text}</p>
                <p className="text-xs text-gray-600">{rec.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
