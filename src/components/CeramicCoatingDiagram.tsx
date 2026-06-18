import { useState } from 'react';
import { Droplets, Shield, Sparkles, AlertTriangle, Wind, Bug, Zap } from 'lucide-react';

interface TooltipData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CeramicCoatingDiagram() {
  const [activeView, setActiveView] = useState<'without' | 'with'>('without');
  const [hoveredThreat, setHoveredThreat] = useState<string | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);

  const threats: Record<string, TooltipData> = {
    acidRain: {
      icon: <Droplets className="w-4 h-4" />,
      title: 'Acid Rain & Water Spots',
      description: 'Mineral deposits and acidic compounds etch into the clear coat, leaving permanent stains and marks that dull the finish.'
    },
    birdDroppings: {
      icon: <Bug className="w-4 h-4" />,
      title: 'Bird Droppings',
      description: 'Highly acidic organic matter burns through the clear coat if left untreated, creating permanent paint damage.'
    },
    scratches: {
      icon: <AlertTriangle className="w-4 h-4" />,
      title: 'Scratches',
      description: 'Light abrasions from washing, tree branches, and road debris directly damage the vulnerable clear coat layer.'
    },
    pollution: {
      icon: <Wind className="w-4 h-4" />,
      title: 'Industrial Pollution',
      description: 'Airborne contaminants, road tar, and industrial fallout bond to the paint, causing oxidation and degradation over time.'
    }
  };

  const benefits: Record<string, TooltipData> = {
    waterBeading: {
      icon: <Droplets className="w-4 h-4" />,
      title: 'Water Beading',
      description: 'Hydrophobic coating causes water and contaminants to bead up and roll off, preventing them from bonding to the surface.'
    },
    uvProtection: {
      icon: <Shield className="w-4 h-4" />,
      title: 'UV Protection',
      description: 'Blocks harmful UV rays from degrading the clear coat and paint, preventing oxidation and fading.'
    },
    gloss: {
      icon: <Sparkles className="w-4 h-4" />,
      title: 'Enhanced Gloss',
      description: 'Creates a smooth, reflective surface that enhances depth and shine while keeping the clear coat protected underneath.'
    },
    easyClean: {
      icon: <Zap className="w-4 h-4" />,
      title: 'Easy Cleaning',
      description: 'Contaminants sit on the coating rather than bonding to the clear coat, making washing faster and safer for your paint.'
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 lg:p-8">
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveView('without')}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${
            activeView === 'without'
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Without Ceramic Coating
        </button>
        <button
          onClick={() => setActiveView('with')}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${
            activeView === 'with'
              ? 'bg-green-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          With Ceramic Coating
        </button>
      </div>

      <div className="relative">
        {activeView === 'without' ? (
          <div className="space-y-1">
            <div className="relative bg-gray-100 p-4 rounded-t-lg border-2 border-gray-300">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-sm font-bold text-gray-700">Environmental Threats</h4>
                <div className="flex gap-4">
                  {Object.entries(threats).map(([key, threat]) => (
                    <div
                      key={key}
                      className="relative"
                      onMouseEnter={() => setHoveredThreat(key)}
                      onMouseLeave={() => setHoveredThreat(null)}
                    >
                      <button className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                        {threat.icon}
                      </button>
                      {hoveredThreat === key && (
                        <div className="absolute z-10 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl -left-28 top-12">
                          <div className="font-bold mb-1">{threat.title}</div>
                          <div className="text-gray-300">{threat.description}</div>
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-900"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span>Direct contact with clear coat</span>
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-200 to-blue-300 px-4 py-4 border-x-2 border-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-800">Clear Coat</span>
                <span className="text-xs text-gray-600">Vulnerable to damage</span>
              </div>
            </div>

            <div className="bg-gradient-to-b from-amber-100 to-amber-200 px-4 py-4 border-x-2 border-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-800">Color Base Coat</span>
                <span className="text-xs text-gray-600">Paint layer</span>
              </div>
            </div>

            <div className="bg-gradient-to-b from-red-300 to-red-400 px-4 py-4 border-x-2 border-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-white">Primer Coat</span>
                <span className="text-xs text-red-100">Adhesion layer</span>
              </div>
            </div>

            <div className="bg-gradient-to-b from-gray-400 to-gray-500 px-4 py-4 rounded-b-lg border-2 border-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-white">Body Panel</span>
                <span className="text-xs text-gray-200">Metal substrate</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            <div className="relative bg-gradient-to-b from-amber-300 to-amber-400 px-4 py-6 rounded-t-lg border-2 border-amber-500 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-amber-800" />
                  <span className="text-sm font-bold text-amber-900">Ceramic Coating Layer</span>
                </div>
                <span className="text-xs text-amber-800 font-semibold">9H Hardness Protection</span>
              </div>
              <div className="flex justify-between gap-2">
                {Object.entries(benefits).map(([key, benefit]) => (
                  <div
                    key={key}
                    className="relative flex-1"
                    onMouseEnter={() => setHoveredBenefit(key)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                  >
                    <button className="w-full p-2 rounded-lg bg-white/90 text-green-600 hover:bg-white transition-colors flex flex-col items-center gap-1">
                      {benefit.icon}
                      <span className="text-xs font-medium text-gray-700 hidden sm:block">{benefit.title.split(' ')[0]}</span>
                    </button>
                    {hoveredBenefit === key && (
                      <div className="absolute z-10 w-56 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl left-1/2 -translate-x-1/2 top-full mt-2">
                        <div className="font-bold mb-1">{benefit.title}</div>
                        <div className="text-gray-300">{benefit.description}</div>
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-900"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-200 to-blue-300 px-4 py-4 border-x-2 border-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-800">Clear Coat</span>
                <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Protected
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-b from-amber-100 to-amber-200 px-4 py-4 border-x-2 border-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-800">Color Base Coat</span>
                <span className="text-xs text-gray-600">Paint layer</span>
              </div>
            </div>

            <div className="bg-gradient-to-b from-red-300 to-red-400 px-4 py-4 border-x-2 border-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-white">Primer Coat</span>
                <span className="text-xs text-red-100">Adhesion layer</span>
              </div>
            </div>

            <div className="bg-gradient-to-b from-gray-400 to-gray-500 px-4 py-4 rounded-b-lg border-2 border-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-white">Body Panel</span>
                <span className="text-xs text-gray-200">Metal substrate</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700">
          {activeView === 'without' ? (
            <>
              <strong className="text-red-600">Without protection:</strong> Environmental contaminants directly attack the clear coat, causing permanent etching, staining, and oxidation over time.
            </>
          ) : (
            <>
              <strong className="text-green-600">With ceramic coating:</strong> A sacrificial protective layer shields your clear coat, causing water and contaminants to bead up and slide off instead of bonding to the surface.
            </>
          )}
        </p>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">Hover over icons to learn more about threats and benefits</p>
      </div>
    </div>
  );
}
