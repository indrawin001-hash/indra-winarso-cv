import React, { useState } from 'react';
import {
  Layers,
  Database,
  Cpu,
  Factory,
  Laptop,
  ShieldCheck,
  Search,
  Check,
  Sparkles,
  Filter,
} from 'lucide-react';
import { competencyGroups } from '../data/cvData';
import { CompetencyGroup } from '../types';

export const CompetenciesSection: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-700" />;
      case 'Database':
        return <Database className="w-5 h-5 text-blue-700" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-700" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-blue-700" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-blue-700" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-700" />;
      default:
        return <Layers className="w-5 h-5 text-blue-700" />;
    }
  };

  const filteredGroups = competencyGroups.filter((group) => {
    const matchesCategory = selectedGroup === 'all' || group.id === selectedGroup;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesTitle = group.title.toLowerCase().includes(q);
    const matchesSkills = group.skills.some((s) => s.toLowerCase().includes(q));
    return matchesTitle || matchesSkills;
  });

  const allSkillsCount = competencyGroups.reduce((acc, g) => acc + g.skills.length, 0);

  return (
    <section id="competencies" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Technical Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Technical Skills & Core Competencies
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 max-w-2xl">
              20+ years of mastered ERP methodologies, technical transaction tools, and enterprise governance frameworks.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="competency-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill, module, or tool..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 py-6 overflow-x-auto">
          <button
            id="filter-all-competencies"
            onClick={() => setSelectedGroup('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedGroup === 'all'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Competencies ({allSkillsCount})
          </button>
          {competencyGroups.map((group) => (
            <button
              key={group.id}
              id={`filter-group-${group.id}`}
              onClick={() => setSelectedGroup(group.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedGroup === group.id
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{group.title}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedGroup === group.id
                    ? 'bg-blue-800 text-blue-100'
                    : 'bg-slate-200 text-slate-700'
                }`}
              >
                {group.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              id={`competency-card-${group.id}`}
              className="bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 group-hover:bg-blue-100/80 transition-colors">
                      {getIcon(group.iconName)}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
                      {group.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {group.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {group.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, idx) => {
                    const isMatched =
                      searchQuery.trim() &&
                      skill.toLowerCase().includes(searchQuery.toLowerCase());
                    return (
                      <span
                        key={idx}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                          isMatched
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-200'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 shrink-0 ${
                            isMatched ? 'text-white' : 'text-blue-600'
                          }`}
                        />
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Bottom tag note */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified in Production</span>
                <span className="text-blue-600 font-medium">Enterprise Grade</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search returns zero */}
        {filteredGroups.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-600">
              No competencies match "<strong>{searchQuery}</strong>".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGroup('all');
              }}
              className="mt-2 text-xs font-semibold text-blue-700 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
