import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { ShieldCheck, CheckCircle, Activity, Stethoscope, Scissors } from 'lucide-react';

export const metadata = {
  title: "Tubal Ligation & Reversal in Keshav Nagar Pune | Dr Poonam's Clinic",
  description: "Permanent family planning (tubectomy) and microsurgical tubal ligation reversal by Dr. Poonam. Reconstruct fallopian tubes to restore fertility. Expert care in Keshav Nagar, Hadapsar, and Magarpatta.",
  alternates: {
    canonical: '/tubal-ligation-reversal-in-keshav-nagar/',
  }
};

export default function TubalLigationPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Tubal Ligation & Reversal' },
  ];

  const comparisonData: [any, any] = [
    {
      title: "Tubal Ligation (Tubectomy)",
      theme: "secondary",
      items: [
        { feature: "Goal", isAvailable: "Permanent sterilization to prevent pregnancy." },
        { feature: "Procedure Time", isAvailable: "Very quick, usually around 20-30 minutes." },
        { feature: "Method", isAvailable: "Tubes are cut, tied, sealed with heat, or clipped." },
        { feature: "Hospital Stay", isAvailable: "Daycare procedure; go home the same day." },
        { feature: "Effectiveness", isAvailable: "Over 99% effective at preventing pregnancy." }
      ]
    },
    {
      title: "Tubal Ligation Reversal",
      theme: "primary",
      items: [
        { feature: "Goal", isAvailable: "Restore natural fertility by reconnecting the tubes." },
        { feature: "Procedure Time", isAvailable: "Complex microsurgery taking 2 to 3 hours." },
        { feature: "Method", isAvailable: "Removing blocked segments and micro-suturing ends." },
        { feature: "Hospital Stay", isAvailable: "Usually requires a 1 to 2 night hospital stay." },
        { feature: "Effectiveness", isAvailable: "Pregnancy success ranges from 40% to 80%." }
      ]
    }
  ];

  const reversalFactors = [
    { title: "Original Ligation Method", description: "Clips or rings damage the least amount of tube, making them easiest to reverse. Electrocautery (burning) is much harder.", icon: <Scissors className="w-5 h-5" /> },
    { title: "Remaining Tube Length", description: "You generally need at least 4 cm of healthy fallopian tube remaining for a successful reconnection.", icon: <Activity className="w-5 h-5" /> },
    { title: "Maternal Age", description: "Age affects egg quality. Women under 35 generally see the highest pregnancy success rates post-reversal.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Partner's Fertility", description: "A semen analysis is required for the male partner before proceeding with reversal to ensure natural conception is possible.", icon: <Stethoscope className="w-5 h-5" /> }
  ];

  const reversalTimeline = [
    {
      title: 'Detailed Fertility Counseling & Tests',
      description: 'We review your original surgery notes. You will undergo an ultrasound and an HSG (dye test) to measure the remaining tube length, and your partner will complete a sperm count test.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Anesthesia & Access',
      description: 'The reversal is performed under general anesthesia. Dr. Poonam makes a small "bikini cut" (mini-laparotomy) just above the pubic hairline to access the pelvic organs.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Microsurgical Re-anastomosis',
      description: 'Using high-powered surgical magnification and incredibly fine sutures (thinner than a human hair), Dr. Poonam carefully removes the scar tissue and perfectly aligns the inner layers of the fallopian tubes.',
      icon: <Scissors className="w-5 h-5" />
    },
    {
      title: 'Patency Check & Closure',
      description: 'Before closing, blue dye is flushed through the newly joined tubes to verify that they are fully open and leak-free. The abdomen is then meticulously sutured.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const recoverySteps = [
    { title: "First 2-3 Days", description: "Hospital monitoring for pain control. You will have a small bandage over the incision and will begin light walking." },
    { title: "Weeks 1-2", description: "Resting at home. Keep the incision clean and dry. Avoid lifting anything heavier than a few kilograms." },
    { title: "Weeks 3-4", description: "Return to normal activities. After your next period, you can safely begin trying to conceive naturally." }
  ];

  const faqs = [
    {
      question: 'What is tubal ligation and is it a permanent form of birth control?',
      answer: 'Tubal ligation (commonly known as female sterilization or tubectomy) is a surgical procedure where the fallopian tubes are blocked, cut, or sealed. This prevents the egg from meeting the sperm, providing highly effective, permanent birth control.'
    },
    {
      question: 'How is a laparoscopic tubal ligation performed?',
      answer: 'Laparoscopic tubal ligation is a quick day-care procedure. Under general anesthesia, a small incision is made near the navel. A laparoscope is inserted, and the fallopian tubes are closed using medical clips, bands, or by cutting and tying them.'
    },
    {
      question: 'What are the success rates of achieving pregnancy after a tubal reversal?',
      answer: 'Pregnancy success rates after tubal reversal (tubal re-anastomosis) range from 40% to 80%. Success depends heavily on the mother\'s age, the remaining length of healthy fallopian tubes, and the sterilization method originally used.'
    },
    {
      question: 'How long does recovery take after a ligation or reversal surgery?',
      answer: 'For laparoscopic ligation, recovery takes 3 to 5 days, and most women return to light work within a week. Reversal surgery is more complex and may require 1 to 2 weeks of recovery time before returning to normal activities.'
    },
    {
      question: 'Is a tubectomy 100% effective in preventing pregnancy?',
      answer: 'Tubal ligation is one of the most effective birth control methods, with an efficacy rate exceeding 99%. However, in extremely rare cases (less than 1 in 200), the fallopian tubes can grow back together or create a new pathway (recanalization), leading to pregnancy.'
    },
    {
      question: 'Can I get pregnant naturally after a tubal ligation reversal, or is IVF required?',
      answer: 'Yes, the main goal of a tubal reversal is to enable you to conceive naturally without requiring IVF. If the reversal surgery is successful and the fallopian tubes are confirmed to be open (patent), you can attempt natural conception during your fertile window.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Tubal Ligation & Reversal" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/tubal-ligation-reversal-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/tubal-ligation.webp" 
                      alt="Laparoscopy Surgery Console Tower displaying Fallopian Tubes diagnostic graphic" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Tubal Ligation & Reversal?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Tubal Ligation (Tubectomy) is a highly reliable, permanent surgical contraception option for women who decide their families are complete. Conversely, Tubal Reversal (microsurgical tubal re-anastomosis) is a delicate reconstructive surgery performed to reconnect blocked fallopian tube segments, helping women restore their natural fertility pathway if they decide they want more children.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we support women through every phase of family planning. Dr. Poonam offers laparoscopic tubal ligation as a quick daycare procedure, and performs highly advanced microsurgical tubal reversals to reconstruct fallopian pathways for couples planning a new pregnancy. If you reside in Hadapsar or Magarpatta and are searching for a sterilization or reversal doctor, our clinic provides secure and personalized care close to home.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Ligation vs. Reversal" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    While ligation is a fast, straightforward procedure to block the tubes, reversal is a highly complex microsurgery designed to meticulously put them back together.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Reversal Factors */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Factors Influencing Reversal Success" 
                    subtitle="Not everyone is a candidate for tubal reversal. Dr. Poonam evaluates several key factors to give you a realistic success probability."
                    cards={reversalFactors} 
                  />
                </div>

                {/* Procedure Steps (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="The Reversal Microsurgery Journey" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    Tubal reversal requires extreme precision. Here is the step-by-step pathway from consultation to waking up in the recovery room.
                  </p>
                  <VerticalTimeline items={reversalTimeline} />
                </div>

                {/* Recovery Process (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="Reversal Surgery Recovery Path" 
                    steps={recoverySteps} 
                  />
                </div>

                {/* Why Choose Us */}
                <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-[45px]">
                  <div className="w-full md:w-2/3 flex flex-col gap-6">
                    <h3 className="text-[26px] font-bold text-white leading-tight">
                      Why Choose Dr. Poonam's Clinic?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Advanced Microsurgery:</strong> Deep surgical precision for joining fallopian tube layers with micro-sutures.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Daycare Ligation Options:</strong> Laparoscopic tubectomy using highly sterile daycare operation units.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Fertility Counseling:</strong> Comprehensive support to evaluate partner fertility and track ovulation before/after reversal.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/3 flex justify-center shrink-0">
                    <div className="bg-white/10 border border-white/15 p-6 rounded-[20px] text-center w-full max-w-[220px]">
                      <div className="text-[44px] font-bold text-white mb-1">5.0</div>
                      <p className="text-[13px] font-bold uppercase tracking-wider text-white/90 mb-1">Google Rating</p>
                      <p className="text-[14px] md:text-[15px] text-white/80">Based on 42 Verified Reviews</p>
                    </div>
                  </div>
                </div>

                {/* FAQs */}
                <div>
                  <AnimatedHeading 
                    text="Frequently Asked Questions" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <Accordion items={faqs} />
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
