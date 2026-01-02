import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { href: 'https://github.com/hksuri', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/huzaifa-khan-suri/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:huzaifasuri@gmail.com', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            <span style={{ fontWeight: 700 }}>Huzaifa Suri</span> © 2026. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
