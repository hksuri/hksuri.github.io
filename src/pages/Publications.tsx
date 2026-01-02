import { useState, useMemo } from 'react';
import { ExternalLink } from 'lucide-react';
import publicationsData from '../data/publications.json';
import { usePageTitle } from '../hooks/usePageTitle';

export function Publications() {
  usePageTitle('Publications — Huzaifa Suri');
  
  const [selectedYear, setSelectedYear] = useState<string>('all');

  // Get all unique years
  const allYears = useMemo(() => {
    const years = new Set<number>();
    publicationsData.forEach((pub) => years.add(pub.year));
    return Array.from(years).sort((a, b) => b - a);
  }, []);

  // Filter publications
  const filteredPublications = useMemo(() => {
    if (selectedYear === 'all') {
      return publicationsData;
    }
    return publicationsData.filter((pub) => pub.year === parseInt(selectedYear));
  }, [selectedYear]);

  // Sort by date (newest first)
  const sortedPublications = useMemo(() => {
    return [...filteredPublications].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [filteredPublications]);

  const highlightAuthor = (authors: string[]) => {
    return authors.map((author, index) => {
      const isHuzaifa = author === 'Huzaifa Suri';
      return (
        <span key={index}>
          <span 
            className={isHuzaifa ? 'text-foreground' : 'text-muted-foreground'}
            style={isHuzaifa ? { fontWeight: 700 } : undefined}
          >
            {author}
          </span>
          {index < authors.length - 1 && <span className="text-muted-foreground">, </span>}
        </span>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1>Publications</h1>
        <p className="text-muted-foreground">
          Peer-reviewed publications and research contributions in machine learning, healthcare AI,
          and systems.
        </p>
      </div>

      {/* Year Filter */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Filter by year:</span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedYear('all')}
            className={`px-3 py-1 rounded-lg text-sm transition-all duration-200 ${
              selectedYear === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-accent'
            }`}
          >
            All
          </button>
          {allYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year.toString())}
              className={`px-3 py-1 rounded-lg text-sm transition-all duration-200 ${
                selectedYear === year.toString()
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {sortedPublications.map((pub, index) => (
          <article
            key={index}
            className="p-6 border border-border rounded-lg hover:border-muted-foreground transition-all duration-200 bg-card space-y-3"
          >
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2 hover:underline"
            >
              <h3 className="flex-1">{pub.title}</h3>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200 flex-shrink-0 mt-1" />
            </a>
            <p className="text-sm">{highlightAuthor(pub.authors)}</p>
            <p className="text-sm text-muted-foreground">
              {pub.venue} • {pub.year}
            </p>
          </article>
        ))}
      </div>

      {/* No results message */}
      {sortedPublications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No publications found for the selected year.</p>
        </div>
      )}
    </div>
  );
}