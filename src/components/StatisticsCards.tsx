import React, { useState } from 'react';
import { Phone, AlertTriangle, Shield, Users, TrendingUp, TrendingDown, ChevronDown, MapPin } from 'lucide-react';

const StatisticsCards = ({ filters }) => {
  const [selectedRegion, setSelectedRegion] = useState('North Mumbai');

  const regions = ['North Mumbai', 'East Mumbai', 'Central Mumbai'];

  const regionStats = {
    'North Mumbai': [
      { title: 'Total Calls', value: '127', change: '+12.5%', trend: 'up', icon: Phone, color: 'blue' },
      { title: 'Emergency Calls', value: '23', change: '-8.2%', trend: 'down', icon: AlertTriangle, color: 'red' },
      { title: 'Safe Zones', value: '45', change: '+4.1%', trend: 'up', icon: Shield, color: 'green' },
      { title: 'Active Responders', value: '18', change: '+2.3%', trend: 'up', icon: Users, color: 'purple' },
    ],
    'East Mumbai': [
      { title: 'Total Calls', value: '89', change: '+8.7%', trend: 'up', icon: Phone, color: 'blue' },
      { title: 'Emergency Calls', value: '18', change: '-12.4%', trend: 'down', icon: AlertTriangle, color: 'red' },
      { title: 'Safe Zones', value: '38', change: '+6.2%', trend: 'up', icon: Shield, color: 'green' },
      { title: 'Active Responders', value: '15', change: '+1.8%', trend: 'up', icon: Users, color: 'purple' },
    ],
    'Central Mumbai': [
      { title: 'Total Calls', value: '156', change: '+18.3%', trend: 'up', icon: Phone, color: 'blue' },
      { title: 'Emergency Calls', value: '31', change: '+3.1%', trend: 'up', icon: AlertTriangle, color: 'red' },
      { title: 'Safe Zones', value: '52', change: '+2.8%', trend: 'up', icon: Shield, color: 'green' },
      { title: 'Active Responders', value: '22', change: '+5.4%', trend: 'up', icon: Users, color: 'purple' },
    ],
  };

  const currentStats = regionStats[selectedRegion];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500 text-blue-600',
      red: 'bg-red-500 text-red-600',
      green: 'bg-green-500 text-green-600',
      purple: 'bg-purple-500 text-purple-600',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="mb-8">
      {/* Region Filter */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Statistics Overview</h2>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-600">Region:</span>
            <div className="relative">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-w-[140px]"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentStats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = getColorClasses(stat.color).split(' ');
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${colorClasses[0]} bg-opacity-20`}>
                  <Icon className={`h-6 w-6 ${colorClasses[1]}`} />
                </div>
                <div className="flex items-center space-x-1">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Region Summary */}
      <div className="bg-white rounded-lg shadow-lg p-4 mt-6">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            Showing statistics for{' '}
            <span className="font-semibold text-gray-800">{selectedRegion}</span>
          </span>
          <span>
            Response Time:{' '}
            <span className="font-semibold text-gray-800">
              {selectedRegion === 'North Mumbai'
                ? '3.2m'
                : selectedRegion === 'East Mumbai'
                ? '2.8m'
                : '4.1m'}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCards;
