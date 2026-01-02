import { Download, FileText } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

export function Resume() {
  usePageTitle('Resume — Huzaifa Suri');
  
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <h1>Resume</h1>
          <p className="text-sm text-muted-foreground">Last updated: January 2026</p>
        </div>
        <a
          href="/assets/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity duration-200"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="border border-border rounded-lg overflow-hidden bg-card">
        <object
          data="/assets/resume.pdf"
          type="application/pdf"
          className="w-full h-[800px]"
          aria-label="Resume PDF"
        >
          <div className="flex flex-col items-center justify-center h-[800px] space-y-4 p-8 text-center">
            <FileText className="w-16 h-16 text-muted-foreground" />
            <p className="text-muted-foreground">
              Your browser doesn't support embedded PDFs.
            </p>
            <a
              href="/assets/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}