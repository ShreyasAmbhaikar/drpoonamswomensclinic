import Link from 'next/link';

interface ServiceSidebarProps {
  currentPath?: string;
  hideContact?: boolean;
}

export default function ServiceSidebar({ currentPath, hideContact }: ServiceSidebarProps) {
  const services = [
    { title: 'In Vitro Fertilization', href: '/services/in-vitro-fertilization/' },
    { title: 'Intrauterine Insemination', href: '/services/intrauterine-insemination/' },
    { title: 'Fertility Testing', href: '/services/fertility-testing/' },
    { title: 'Egg & Sperm Freezing', href: '/services/egg-sperm-freezing/' },
    { title: 'Surrogacy Support', href: '/services/surrogacy-support/' },
  ];

  return (
    <div className="flex flex-col gap-[30px] lg:sticky lg:top-[140px] h-fit">
      {/* Service List Widget */}
      <div className="overflow-hidden bg-[#FAF6F3] rounded-[24px] border border-divider/10 shadow-sm">
        {/* Purple Banner Header */}
        <div className="bg-[#5A4A66] px-8 py-5">
          <h3 className="text-[20px] font-bold text-white tracking-wide">
            Discover Our Solutions
          </h3>
        </div>
        
        {/* Body list */}
        <div className="p-8">
          <ul className="flex flex-col">
            {services.map((service, index) => {
              const normalizePath = (p: string) => p.replace(/\/$/, '');
              const isActive = normalizePath(currentPath || '') === normalizePath(service.href);

              return (
                <li key={index} className={`${index < services.length - 1 ? 'border-b border-[#5A4A66]/10' : ''}`}>
                  <Link
                    href={service.href}
                    className={`flex items-center justify-between py-[18px] font-semibold text-[16px] transition-all duration-300 group ${
                      isActive
                        ? 'text-accent'
                        : 'text-text hover:text-accent'
                    }`}
                  >
                    <span>{service.title}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${
                        isActive ? 'text-accent' : 'text-text group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                      }`}
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Contact Widget */}
      {!hideContact && (
        <div className="overflow-hidden bg-[#242736] rounded-[24px] border border-white/5 shadow-sm text-white">
          {/* Purple Banner Header */}
          <div className="bg-[#5A4A66] px-8 py-5 text-center">
            <h3 className="text-[20px] font-bold text-white tracking-wide">
              Curious About IVF? Let's Talk.
            </h3>
          </div>

          {/* Body */}
          <div className="p-8 md:p-10 flex flex-col gap-8">
            
            {/* Call Us */}
            <div className="border-b border-white/10 pb-6">
              <a href="tel:+91254882963" className="flex items-start gap-4 group">
                <div className="w-[44px] h-[44px] rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[17px] font-bold text-white mb-1.5">
                    Call Us:
                  </p>
                  <p className="font-semibold text-[17px] text-white/95 group-hover:text-accent transition-colors duration-300">
                    +91-254-882-963
                  </p>
                </div>
              </a>
            </div>

            {/* Email Us */}
            <div>
              <a href="mailto:info@domainname.com" className="flex items-start gap-4 group">
                <div className="w-[44px] h-[44px] rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[17px] font-bold text-white mb-1.5">
                    E-mail Us:
                  </p>
                  <p className="font-semibold text-[17px] text-white/95 group-hover:text-accent transition-colors duration-300">
                    info@domainname.com
                  </p>
                </div>
              </a>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
