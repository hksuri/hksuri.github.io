import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import updatesData from '../data/updates.json';
import experienceData from '../data/experience.json';
import educationData from '../data/education.json';
import { usePageTitle } from '../hooks/usePageTitle';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  usePageTitle('Huzaifa Suri — Machine Learning Engineer');
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const formatDateRange = (start: string, end: string | null) => {
    const startDate = formatDate(start);
    const endDate = end ? formatDate(end) : 'Present';
    return `${startDate} - ${endDate}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center">
        <ImageWithFallback
          src="/assets/headshot.jpg"
          alt="Huzaifa Suri"
          className="w-32 h-32 rounded-full object-cover object-center border-2 border-border"
          style={{ marginBottom: '0.75rem' }}
        />
        <div>
          <h1 style={{ fontWeight: 800, fontSize: '1.5rem' }}>Huzaifa Suri</h1>
          <p className="text-muted-foreground text-lg" style={{ marginTop: '0.25rem', marginBottom: '2rem' }}>Machine Learning Engineer</p>
          <p className="text-muted-foreground max-w-2xl">
            I build reliable ML systems end-to-end, from
            research and prototyping to production deployment. I have 3+ years of experience in
            health/med-tech, with broad interests across AI/ML and system design.
          </p>
          <p className="text-muted-foreground max-w-2xl" style={{ marginTop: '1rem' }}>
            I am passionate about the full ML lifecycle, from data to deployment.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: '1rem' }}>
          <Link
            to="/projects"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            View Projects
          </Link>
          <Link
            to="/publications"
            className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            View Publications
          </Link>
          <Link
            to="/resume"
            className="px-6 py-2 border border-border rounded-lg hover:bg-accent transition-colors duration-200"
          >
            Resume
          </Link>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="space-y-6">
        <h2 className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Latest Updates
        </h2>
        <div className="space-y-4">
          {updatesData.slice(0, 3).map((update, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg border border-border hover:border-muted-foreground transition-colors duration-200"
            >
              <span className="text-muted-foreground text-sm whitespace-nowrap">
                {formatDate(update.date)}
              </span>
              <p className="text-sm">{update.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience */}
        <section className="space-y-6">
          <h2 className="flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Experience
          </h2>
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-muted pl-4 space-y-2 hover:border-foreground transition-colors duration-200"
              >
                <h3 className="text-base">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">
                  {exp.company} • {exp.location}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDateRange(exp.startDate, exp.endDate)}
                </p>
                <ul className="space-y-1 text-sm">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Education
          </h2>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="border-l-2 border-muted pl-4 space-y-2 hover:border-foreground transition-colors duration-200"
              >
                <h3 className="text-base">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">
                  {edu.institution} • {edu.location}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDateRange(edu.startDate, edu.endDate)}
                </p>
                {edu.notes && <p className="text-sm">{edu.notes}</p>}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="text-center py-8 border-t border-border">
        <p className="text-muted-foreground text-sm">
          Looking for details?{' '}
          <Link
            to="/projects"
            className="text-foreground hover:underline inline-flex items-center gap-1"
          >
            Projects <ArrowRight className="w-3 h-3" />
          </Link>{' '}
          /{' '}
          <Link
            to="/publications"
            className="text-foreground hover:underline inline-flex items-center gap-1"
          >
            Publications <ArrowRight className="w-3 h-3" />
          </Link>
        </p>
      </section>
    </div>
  );
}