import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { format, addDays } from 'date-fns';
import { fromZonedTime, format as formatTz } from 'date-fns-tz';
import { DynamicIcon } from './components/DynamicIcon';
import { 
  BOOKING_PAGE_SETTINGS, 
  PRODUCTS, 
  HEADER_NAV,
  ABOUT_SECTION
} from './content';

export default function BookingPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  // Scroll to top on mount and when serviceId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Find initial goal and product based on route param if available
  const initialSetup = useMemo(() => {
    if (!serviceId) {
      return { 
        goalId: 'all-services', 
        productId: 'live-prototyping' 
      };
    }
    
    // Map URL service ID to closest Product and Goal
    if (serviceId === 'live-prototyping') {
      return { goalId: 'build-website', productId: 'live-prototyping' };
    } else if (serviceId === 'custom-workspace') {
      return { goalId: 'automate-tasks', productId: 'custom-workspace' };
    } else if (serviceId === 'app-updates') {
      return { goalId: 'build-website', productId: 'app-updates' };
    } else if (serviceId === 'technical-roadmap') {
      return { goalId: 'talk-app-idea', productId: 'technical-roadmap' };
    } else if (serviceId === 'ai-strategy-workshops') {
      return { goalId: 'automate-tasks', productId: 'ai-workshops' };
    } else if (serviceId === 'managed-hosting') {
      return { goalId: 'build-website', productId: 'managed-hosting' };
    } else if (serviceId === 'speaking') {
      return { goalId: 'speaking-gig', productId: 'speaking' };
    } else if (serviceId === 'custom-integration') {
      return { goalId: 'automate-tasks', productId: 'custom-integration' };
    }
    
    return { goalId: 'all-services', productId: 'other' };
  }, [serviceId]);

  const [selectedGoalId, setSelectedGoalId] = useState<string>(initialSetup.goalId);
  const [selectedProductId, setSelectedProductId] = useState<string>(initialSetup.productId);

  // Sync state whenever route serviceId changes
  useEffect(() => {
    setSelectedGoalId(initialSetup.goalId);
    setSelectedProductId(initialSetup.productId);
  }, [initialSetup]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  // Scheduling type: 'flexible' | 'specific'
  const [schedulingMode, setSchedulingMode] = useState<'flexible' | 'specific'>('flexible');

  // Flexible availability state
  const [selectedWeekdays, setSelectedWeekdays] = useState<string[]>(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
  const [selectedTimeBlocks, setSelectedTimeBlocks] = useState<string[]>(['Evening']);
  const [customAvailabilityNotes, setCustomAvailabilityNotes] = useState<string>('');

  // Specific appointment state (multi-select)
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [selectedTimeISOList, setSelectedTimeISOList] = useState<string[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // When goal changes, set the selected product to the first recommended one for that goal
  const currentGoal = useMemo(() => {
    return BOOKING_PAGE_SETTINGS.goalsList.find(g => g.id === selectedGoalId) || BOOKING_PAGE_SETTINGS.goalsList[0];
  }, [selectedGoalId]);

  const recommendedProducts = useMemo(() => {
    return currentGoal.recommendedProductIds.map(id => PRODUCTS[id]).filter(Boolean);
  }, [currentGoal]);

  // Handle setting initial product on goal switch
  useEffect(() => {
    if (recommendedProducts.length > 0 && !recommendedProducts.some(p => p.id === selectedProductId)) {
      setSelectedProductId(recommendedProducts[0].id);
    }
  }, [selectedGoalId, recommendedProducts, selectedProductId]);

  const selectedProduct = useMemo(() => {
    return PRODUCTS[selectedProductId] || PRODUCTS['other'];
  }, [selectedProductId]);

  const productDuration = useMemo(() => {
    if (!selectedProductId) return 1;
    if (selectedProductId === 'live-prototyping') return 2;
    return 1;
  }, [selectedProductId]);

  const translatedTimeBlocks = useMemo(() => {
    const startHour = BOOKING_PAGE_SETTINGS.workingHoursStart ?? 9;
    const endHour = BOOKING_PAGE_SETTINGS.workingHoursEnd ?? 18;
    const hostTimezone = BOOKING_PAGE_SETTINGS.hostTimezone || 'Europe/Lisbon';

    const BASE_BLOCKS = [
      { name: 'Morning', start: 9, end: 12 },
      { name: 'Afternoon', start: 12, end: 17 },
      { name: 'Evening', start: 17, end: 21 },
      { name: 'Night', start: 21, end: 24 }
    ];

    const blocks: Array<{
      key: string;
      label: string;
      hostText: string;
      clientText: string;
    }> = [];

    const formatHourInLocal = (hour: number) => {
      const baseDateStr = '2026-07-07'; // A Tuesday
      const hostTimeStr = `${baseDateStr}T${hour.toString().padStart(2, '0')}:00:00`;
      const utcDate = fromZonedTime(hostTimeStr, hostTimezone);
      
      const hostDay = 7;
      const localDay = utcDate.getDate();
      
      let suffix = '';
      if (localDay > hostDay) {
        suffix = ' (+1 d)';
      } else if (localDay < hostDay) {
        suffix = ' (-1 d)';
      }
      
      return format(utcDate, 'h:mm a') + suffix;
    };

    const formatHourInHost = (hour: number) => {
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      return `${displayHour}:00 ${ampm}`;
    };

    for (const base of BASE_BLOCKS) {
      // Find overlap with host's working hours
      const overlapStart = Math.max(base.start, startHour);
      const overlapEnd = Math.min(base.end, endHour);

      if (overlapStart < overlapEnd && (overlapEnd - overlapStart) >= productDuration) {
        // There is a valid overlap!
        const localStartStr = formatHourInLocal(overlapStart);
        const localEndStr = formatHourInLocal(overlapEnd);

        const hostStartStr = formatHourInHost(overlapStart);
        const hostEndStr = formatHourInHost(overlapEnd);

        const hostRangeText = `${base.name} (${hostStartStr} – ${hostEndStr})`;
        const clientRangeText = `${base.name} (${localStartStr} – ${localEndStr})`;

        blocks.push({
          key: base.name,
          label: `${base.name} (${localStartStr} – ${localEndStr})`,
          hostText: `${hostRangeText} ${hostTimezone}`,
          clientText: clientRangeText
        });
      }
    }

    return blocks;
  }, [productDuration]);

  const availableSlotsByLocalDay = useMemo(() => {
    const today = new Date();
    const slots: Record<string, Date[]> = {};
    
    // Retrieve Host's working hours, breaks, and timezone settings
    const startHour = BOOKING_PAGE_SETTINGS.workingHoursStart ?? 9;
    const endHour = BOOKING_PAGE_SETTINGS.workingHoursEnd ?? 18;
    const breakHours = BOOKING_PAGE_SETTINGS.breakHours ?? [12, 13];
    const hostTimezone = BOOKING_PAGE_SETTINGS.hostTimezone || 'Europe/Lisbon';
    
    // A slot starting at h is valid if all hours in the range [h, h + duration)
    // are within working hours and are not break hours
    const isValidSlot = (h: number, L: number) => {
      for (let i = 0; i < L; i++) {
        const currentH = h + i;
        if (currentH >= endHour) return false;
        if (breakHours.includes(currentH)) return false;
      }
      return true;
    };

    // Generate active host working hours list dynamically
    const hostHours: number[] = [];
    for (let h = startHour; h < endHour; h++) {
      if (isValidSlot(h, productDuration)) {
        hostHours.push(h);
      }
    }
    
    // Generate host's today date reference in host timezone
    const hostTodayStr = formatTz(today, 'yyyy-MM-dd', { timeZone: hostTimezone });
    const hostToday = new Date(`${hostTodayStr}T12:00:00`);
    
    for (let i = 1; i <= 14; i++) {
      const hostDay = addDays(hostToday, i);
      const dayOfWeek = hostDay.getDay(); // 0 is Sunday, 6 is Saturday
      if (dayOfWeek === 0 || dayOfWeek === 6) continue; // Skip weekends in host's timezone

      const hostDayStr = format(hostDay, 'yyyy-MM-dd');
      
      for (const hour of hostHours) {
        const hostTimeStr = `${hostDayStr}T${hour.toString().padStart(2, '0')}:00:00`;
        const utcDate = fromZonedTime(hostTimeStr, hostTimezone);
        
        const localDayStr = format(utcDate, 'yyyy-MM-dd');
        if (!slots[localDayStr]) {
          slots[localDayStr] = [];
        }
        slots[localDayStr].push(utcDate);
      }
    }

    // Sort slots chronologically for each day
    for (const dStr of Object.keys(slots)) {
      slots[dStr].sort((a, b) => a.getTime() - b.getTime());
    }

    return slots;
  }, [productDuration]);

  const availableDays = useMemo(() => {
    return Object.keys(availableSlotsByLocalDay).sort();
  }, [availableSlotsByLocalDay]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let dateInfo = '';
    let timeInfo = '';

    if (schedulingMode === 'flexible') {
      if (selectedWeekdays.length === 0) {
        alert("Please select at least one preferred day.");
        return;
      }
      if (selectedTimeBlocks.length === 0 && !customAvailabilityNotes.trim()) {
        alert("Please select at least one preferred time block or enter custom notes.");
        return;
      }
      const chosenBlocks = translatedTimeBlocks.filter(b => selectedTimeBlocks.includes(b.key));
      const hostBlocksStr = chosenBlocks.map(b => b.hostText).join('; ');
      const clientBlocksStr = chosenBlocks.map(b => b.clientText).join('; ');

      dateInfo = `Flexible Days: ${selectedWeekdays.join(', ')}`;
      timeInfo = `Host Time: ${hostBlocksStr}\nClient Time: ${clientBlocksStr}${customAvailabilityNotes.trim() ? `\n(Custom Notes: ${customAvailabilityNotes})` : ''}`;
    } else {
      if (selectedDates.length === 0) {
        alert("Please select at least one date.");
        return;
      }
      if (selectedTimeISOList.length === 0) {
        alert("Please select at least one preferred time slot.");
        return;
      }
      
      const hostTimezone = BOOKING_PAGE_SETTINGS.hostTimezone || 'Europe/Lisbon';
      const formattedTimesInHostTz = selectedTimeISOList.map(iso => {
        const start = new Date(iso);
        const end = new Date(start.getTime() + productDuration * 60 * 60 * 1000);
        return `${formatTz(start, "EEE, MMM d 'at' h:mm a", { timeZone: hostTimezone })} – ${formatTz(end, "h:mm a", { timeZone: hostTimezone })}`;
      });

      const formattedTimesInLocalTz = selectedTimeISOList.map(iso => {
        const start = new Date(iso);
        const end = new Date(start.getTime() + productDuration * 60 * 60 * 1000);
        return `${format(start, "EEE, MMM d 'at' h:mm a")} – ${format(end, "h:mm a")}`;
      });

      dateInfo = `Host Time (${hostTimezone}): ${formattedTimesInHostTz.join('; ')}`;
      timeInfo = `Client Local Time: ${formattedTimesInLocalTz.join('; ')}`;
    }

    setIsSubmitting(true);
    try {
      const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      const response = await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          serviceId: `${selectedProduct.title} (${selectedProduct.timeLabel})`,
          description: formData.description,
          date: dateInfo,
          time: `${timeInfo} (${timezoneName})`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setIsModalOpen(false);
      } else {
        alert("Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Compile personalized success message from template
  const successMessage = useMemo(() => {
    const namePart = formData.name.split(' ')[0] || 'friend';
    return BOOKING_PAGE_SETTINGS.successMessageTemplate.replace('{name}', namePart);
  }, [formData.name]);

  // Compile modal subtitle description from template
  const modalSubtitle = useMemo(() => {
    return BOOKING_PAGE_SETTINGS.modalSubtitleTemplate
      .replace('{title}', selectedProduct.title)
      .replace('{price}', selectedProduct.price);
  }, [selectedProduct]);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center p-6 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="max-w-md w-full bg-white rounded-[2rem] p-10 text-center shadow-2xl border border-gray-100"
        >
          <div className="w-20 h-20 bg-brand-secondary text-white rounded-full flex items-center justify-center text-4xl mx-auto shadow-lg mb-6 font-black">
            {BOOKING_PAGE_SETTINGS.successBadge}
          </div>
          <h2 className="text-3xl font-black uppercase text-brand-secondary tracking-tight mb-4">
            {BOOKING_PAGE_SETTINGS.successTitle}
          </h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-8">
            {successMessage}
          </p>
          <Link to={BOOKING_PAGE_SETTINGS.successReturnButtonLink} className="inline-block px-8 py-4 rounded-full bg-brand-dark text-white font-black hover:bg-brand-secondary hover:scale-105 transition-all uppercase tracking-wide shadow-lg">
            {BOOKING_PAGE_SETTINGS.successReturnButtonText}
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark pb-24">
      
      {/* HEADER NAVIGATION BACKLINK */}
      <header className="bg-brand-primary text-white py-6 border-b border-white/10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-brand-secondary text-base font-black transition-transform group-hover:scale-105">
              {HEADER_NAV.logoEmoticon}
            </div>
            <span className="text-white font-black text-lg uppercase tracking-wider drop-shadow-md">
              {HEADER_NAV.logoText}
            </span>
          </Link>
          <Link to="/" className="text-white/80 hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors">
            <DynamicIcon name="ArrowLeft" className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </header>

      {/* CORE BOOKING FORM LAYOUT */}
      <div className="max-w-4xl mx-auto px-6 mt-12 md:mt-16">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-secondary px-3 py-1 bg-brand-secondary/10 rounded-full">
            {BOOKING_PAGE_SETTINGS.badgeText}
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            {BOOKING_PAGE_SETTINGS.titleText}
          </h1>
          <p className="text-gray-600 font-medium max-w-xl mx-auto text-base sm:text-lg">
            {BOOKING_PAGE_SETTINGS.descriptionText}
          </p>
        </div>

        {/* Outer Configurator Box */}
        <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-gray-100 space-y-10">
          
          {/* STEP 1: DROPDOWN SELECTION FOR GOAL */}
          <div className="space-y-4">
            <label htmlFor="goalDropdown" className="block text-sm font-black uppercase tracking-widest text-brand-secondary flex items-center gap-2">
              <DynamicIcon name={BOOKING_PAGE_SETTINGS.step1Icon} className="w-4 h-4 text-brand-secondary" /> {BOOKING_PAGE_SETTINGS.step1Label}
            </label>
            <div className="relative">
              <select
                id="goalDropdown"
                value={selectedGoalId}
                onChange={(e) => setSelectedGoalId(e.target.value)}
                className="w-full text-lg md:text-xl font-bold bg-gray-50 border-2 border-gray-200 hover:border-brand-secondary/40 focus:border-brand-secondary rounded-2xl px-5 py-4 outline-none transition-all appearance-none cursor-pointer text-brand-dark"
              >
                {BOOKING_PAGE_SETTINGS.goalsList.map((g) => (
                  <option key={g.id} value={g.id} className="font-sans text-base">
                    {g.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <DynamicIcon name="ChevronDown" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* STEP 2: RECOMMENDED SOLUTIONS */}
          <div className="space-y-6 pt-4 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <h2 className="text-sm font-black uppercase tracking-widest text-brand-secondary">
                {BOOKING_PAGE_SETTINGS.step2Label}
              </h2>
              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full uppercase">
                {BOOKING_PAGE_SETTINGS.step2BadgeText}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedProducts.map((prod) => {
                const isSelected = selectedProductId === prod.id;
                return (
                  <motion.div
                    key={prod.id}
                    onClick={() => setSelectedProductId(prod.id)}
                    whileHover={{ y: -4 }}
                    className={`cursor-pointer rounded-3xl p-6 border-2 transition-all flex flex-col justify-between h-full relative ${
                      isSelected
                        ? 'border-brand-secondary bg-brand-secondary/5 shadow-md shadow-brand-secondary/5'
                        : 'border-gray-200 hover:border-brand-secondary/40 bg-white'
                    }`}
                  >
                    {/* Tick Check badge for active selection */}
                    {isSelected && (
                      <div className="absolute top-4 right-4 bg-brand-secondary text-white p-1 rounded-full">
                        <DynamicIcon name="Check" className="w-4 h-4 stroke-[3]" />
                      </div>
                    )}

                    <div className="space-y-3 pr-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-dark/5 rounded-lg text-xs font-bold text-gray-700 uppercase tracking-wider">
                        <DynamicIcon name="Clock" className="w-3.5 h-3.5 text-brand-secondary" /> {prod.timeLabel}
                      </div>
                      <h3 className="text-xl font-black uppercase leading-tight text-brand-dark">{prod.title}</h3>
                      <p className="text-gray-600 text-sm font-medium leading-relaxed">{prod.description}</p>
                      {prod.includes && (
                        <div className="mt-3 space-y-1">
                          <span className="text-xs font-bold text-brand-secondary uppercase tracking-wider block">What you get:</span>
                          <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">{prod.includes}</p>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100/80 flex items-baseline justify-between">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Price</span>
                      <span className="text-2xl font-black text-brand-secondary">{prod.price}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* STEP 3: VALUATION & CALL TO WORKSHOP MODAL TRIGGERS */}
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-50 p-6 sm:p-8 rounded-[2rem]">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{BOOKING_PAGE_SETTINGS.step3SelectedLabel}</span>
              <h4 className="text-lg sm:text-xl font-black uppercase text-brand-dark">{selectedProduct.title}</h4>
              <p className="text-sm font-bold text-brand-secondary">
                {BOOKING_PAGE_SETTINGS.step3RateLabel}: {selectedProduct.price} • {selectedProduct.timeLabel}
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
              <div className="text-center md:text-right">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{BOOKING_PAGE_SETTINGS.step3CostLabel}</span>
                <span className="text-3xl font-black text-brand-secondary">{selectedProduct.price}</span>
              </div>
              
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="whitespace-nowrap w-full md:w-auto px-8 py-4 rounded-full bg-brand-secondary text-white font-black text-base hover:bg-brand-dark hover:scale-105 transition-all shadow-xl uppercase tracking-wider text-center"
              >
                {BOOKING_PAGE_SETTINGS.step3ButtonText}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* COMPACT MODAL FOR CONTACT INFO, TIMELINE SCHEDULING PREFERENCE */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop shadow filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-brand-dark/65 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-gray-100 overflow-y-auto max-h-[90vh] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-brand-dark transition-colors"
              >
                <DynamicIcon name={BOOKING_PAGE_SETTINGS.modalCloseIcon} className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary bg-brand-secondary/10 px-2.5 py-1 rounded-full">
                    {BOOKING_PAGE_SETTINGS.modalBadgeText}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-dark mt-2">
                    {BOOKING_PAGE_SETTINGS.modalTitleText}
                  </h2>
                  <p className="text-gray-600 text-sm font-medium mt-1">
                    {modalSubtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid Contact Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                        <DynamicIcon name={BOOKING_PAGE_SETTINGS.fieldIconName} className="w-3.5 h-3.5 text-brand-secondary" /> {BOOKING_PAGE_SETTINGS.fieldLabelName}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-secondary focus:ring-0 outline-none transition-all font-medium text-brand-dark"
                        placeholder={BOOKING_PAGE_SETTINGS.fieldPlaceholderName}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                        <DynamicIcon name={BOOKING_PAGE_SETTINGS.fieldIconEmail} className="w-3.5 h-3.5 text-brand-secondary" /> {BOOKING_PAGE_SETTINGS.fieldLabelEmail}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-secondary focus:ring-0 outline-none transition-all font-medium text-brand-dark"
                        placeholder={BOOKING_PAGE_SETTINGS.fieldPlaceholderEmail}
                      />
                    </div>
                  </div>

                  {/* Dynamic Scheduler Preference Box */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                      <DynamicIcon name={BOOKING_PAGE_SETTINGS.fieldIconSchedulePref} className="w-3.5 h-3.5 text-brand-secondary" /> {BOOKING_PAGE_SETTINGS.fieldLabelSchedulePref}
                    </label>
                    <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-2xl border border-gray-200">
                      <button
                        type="button"
                        onClick={() => setSchedulingMode('flexible')}
                        className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all ${
                          schedulingMode === 'flexible'
                            ? 'bg-brand-secondary text-white shadow-md'
                            : 'text-gray-500 hover:text-brand-dark'
                        }`}
                      >
                        {BOOKING_PAGE_SETTINGS.schedulingModeFlexibleBtn}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSchedulingMode('specific')}
                        className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all ${
                          schedulingMode === 'specific'
                            ? 'bg-brand-secondary text-white shadow-md'
                            : 'text-gray-500 hover:text-brand-dark'
                        }`}
                      >
                        {BOOKING_PAGE_SETTINGS.schedulingModeSpecificBtn}
                      </button>
                    </div>
                  </div>

                  {/* Mode 1: Flexible Weekdays & Blocks Option */}
                  {schedulingMode === 'flexible' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-5 bg-gray-50/50 p-5 rounded-3xl border border-gray-200/60"
                    >
                      {/* Day Selectors */}
                      <div className="space-y-2.5">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                            <DynamicIcon name={BOOKING_PAGE_SETTINGS.flexibleWeekdaysIcon} className="w-3.5 h-3.5 text-brand-secondary" /> {BOOKING_PAGE_SETTINGS.flexibleWeekdaysLabel}
                          </label>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => setSelectedWeekdays(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'])}
                              className="text-[10px] font-bold text-brand-secondary hover:underline uppercase"
                            >
                              {BOOKING_PAGE_SETTINGS.flexibleShortcutMF}
                            </button>
                            <span className="text-gray-300 text-[10px]">•</span>
                            <button
                              type="button"
                              onClick={() => setSelectedWeekdays(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])}
                              className="text-[10px] font-bold text-brand-secondary hover:underline uppercase"
                            >
                              {BOOKING_PAGE_SETTINGS.flexibleShortcutAll}
                            </button>
                            <span className="text-gray-300 text-[10px]">•</span>
                            <button
                              type="button"
                              onClick={() => setSelectedWeekdays([])}
                              className="text-[10px] font-bold text-gray-500 hover:underline uppercase"
                            >
                              {BOOKING_PAGE_SETTINGS.flexibleShortcutClear}
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => {
                            const isSelected = selectedWeekdays.includes(day);
                            const shortLabel = day.substring(0, 3);
                            return (
                              <button
                                key={day}
                                type="button"
                                onClick={() => {
                                  if (isSelected) {
                                    setSelectedWeekdays(selectedWeekdays.filter(d => d !== day));
                                  } else {
                                    setSelectedWeekdays([...selectedWeekdays, day]);
                                  }
                                }}
                                className={`py-2 px-3 sm:px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2 ${
                                  isSelected
                                    ? 'bg-brand-primary text-white border-brand-primary shadow-sm shadow-brand-primary/10'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-primary/40'
                                }`}
                              >
                                {shortLabel}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Time Blocks Selectors */}
                      <div className="space-y-2.5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                            <DynamicIcon name={BOOKING_PAGE_SETTINGS.flexibleTimeBlocksIcon} className="w-3.5 h-3.5 text-brand-secondary" /> {BOOKING_PAGE_SETTINGS.flexibleTimeBlocksLabel}
                          </label>
                          <span className="text-[10px] font-bold text-brand-secondary px-2.5 py-0.5 bg-brand-secondary/10 rounded-md uppercase tracking-wider inline-block w-fit">
                            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {translatedTimeBlocks.map(block => {
                            const isSelected = selectedTimeBlocks.includes(block.key);
                            return (
                              <button
                                key={block.key}
                                type="button"
                                onClick={() => {
                                  if (isSelected) {
                                    setSelectedTimeBlocks(selectedTimeBlocks.filter(b => b !== block.key));
                                  } else {
                                    setSelectedTimeBlocks([...selectedTimeBlocks, block.key]);
                                  }
                                }}
                                className={`py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider text-left transition-all border-2 flex items-center justify-between ${
                                  isSelected
                                    ? 'bg-brand-primary text-white border-brand-primary shadow-sm shadow-brand-primary/10'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-primary/40'
                                }`}
                              >
                                <span>{block.label}</span>
                                {isSelected && <DynamicIcon name="Check" className="w-4 h-4 stroke-[3]" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Scheduling Custom Notes */}
                      <div className="space-y-1.5 pt-1">
                        <label htmlFor="customAvailabilityNotes" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                          {BOOKING_PAGE_SETTINGS.flexibleNotesLabel}
                        </label>
                        <input
                          type="text"
                          id="customAvailabilityNotes"
                          name="customAvailabilityNotes"
                          value={customAvailabilityNotes}
                          onChange={(e) => setCustomAvailabilityNotes(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-brand-secondary focus:ring-0 outline-none transition-all font-medium text-brand-dark text-sm"
                          placeholder={BOOKING_PAGE_SETTINGS.flexibleNotesPlaceholder}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Mode 2: Specific date calendar & times pickers */}
                  {schedulingMode === 'specific' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      {/* Multi Date Carousel Picker */}
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                            <DynamicIcon name={BOOKING_PAGE_SETTINGS.specificDatePickerIcon} className="w-3.5 h-3.5 text-brand-secondary" /> {BOOKING_PAGE_SETTINGS.specificDatePickerLabel}
                          </label>
                          <span className="text-[10px] font-bold text-brand-secondary px-2.5 py-0.5 bg-brand-secondary/10 rounded-md uppercase tracking-wider inline-block w-fit">
                            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                          </span>
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 snap-x">
                          {availableDays.map(dayStr => {
                            const dateObj = new Date(`${dayStr}T12:00:00`);
                            const isSelected = selectedDates.includes(dayStr);
                            return (
                              <button
                                key={dayStr}
                                type="button"
                                onClick={() => {
                                  if (isSelected) {
                                    setSelectedDates(selectedDates.filter(d => d !== dayStr));
                                    const slotsToRemove = availableSlotsByLocalDay[dayStr].map(slotDate => slotDate.toISOString());
                                    setSelectedTimeISOList(selectedTimeISOList.filter(iso => !slotsToRemove.includes(iso)));
                                  } else {
                                    setSelectedDates([...selectedDates, dayStr].sort());
                                  }
                                }}
                                className={`snap-center shrink-0 w-20 h-20 rounded-2xl border-2 flex flex-col items-center justify-center transition-all relative ${
                                  isSelected
                                    ? 'border-brand-primary bg-brand-primary text-white shadow-sm'
                                    : 'border-gray-200 hover:border-brand-primary/40 text-gray-700 bg-white'
                                }`}
                              >
                                {isSelected && (
                                  <div className="absolute top-1 right-1 bg-white text-brand-primary p-0.5 rounded-full">
                                    <DynamicIcon name="Check" className="w-2.5 h-2.5 stroke-[3]" />
                                  </div>
                                )}
                                <span className="text-[10px] font-bold uppercase">{format(dateObj, 'MMM')}</span>
                                <span className="text-xl font-black">{format(dateObj, 'd')}</span>
                                <span className="text-[10px] font-bold uppercase opacity-85">{format(dateObj, 'EEE')}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Active Dates Hours/Times list */}
                      {selectedDates.length > 0 ? (
                        <div className="space-y-4 bg-gray-50/50 p-5 rounded-3xl border border-gray-200/60 max-h-[300px] overflow-y-auto">
                          <div className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                            <DynamicIcon name={BOOKING_PAGE_SETTINGS.specificTimePickerIcon} className="w-3.5 h-3.5 text-brand-secondary" /> {BOOKING_PAGE_SETTINGS.specificTimePickerLabel}
                          </div>
                          <div className="space-y-4">
                            {selectedDates.map(dayStr => {
                              const dateObj = new Date(`${dayStr}T12:00:00`);
                              const slotsForDay = availableSlotsByLocalDay[dayStr] || [];
                              return (
                                <div key={dayStr} className="space-y-1.5 pb-3 border-b border-gray-200/60 last:border-b-0 last:pb-0">
                                  <div className="text-xs font-extrabold text-brand-secondary uppercase tracking-wider">
                                    {format(dateObj, 'EEEE, MMM d')}
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5">
                                    {slotsForDay.map(slotDate => {
                                      const timeISO = slotDate.toISOString();
                                      const isSelected = selectedTimeISOList.includes(timeISO);
                                      const endTime = new Date(slotDate.getTime() + productDuration * 60 * 60 * 1000);
                                      return (
                                        <button
                                          key={timeISO}
                                          type="button"
                                          onClick={() => {
                                            if (isSelected) {
                                              setSelectedTimeISOList(selectedTimeISOList.filter(iso => iso !== timeISO));
                                            } else {
                                              setSelectedTimeISOList([...selectedTimeISOList, timeISO]);
                                            }
                                          }}
                                          className={`py-2 px-3 text-xs rounded-xl border font-bold transition-all text-center ${
                                            isSelected
                                              ? 'border-brand-primary bg-brand-primary text-white shadow-sm'
                                              : 'border-gray-200 hover:border-brand-primary/40 bg-white text-gray-700'
                                          }`}
                                        >
                                          {format(slotDate, 'h:mm a')} – {format(endTime, 'h:mm a')}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-6 px-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-xs text-gray-500 font-bold uppercase tracking-wider">
                          {BOOKING_PAGE_SETTINGS.specificNoDatesMessage}
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Project Description Textarea Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="description" className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                      <DynamicIcon name={BOOKING_PAGE_SETTINGS.fieldIconDescription} className="w-3.5 h-3.5 text-brand-secondary" /> {BOOKING_PAGE_SETTINGS.fieldLabelDescription}
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-secondary focus:ring-0 outline-none transition-all font-medium text-brand-dark resize-none"
                      placeholder={BOOKING_PAGE_SETTINGS.fieldPlaceholderDescription}
                    ></textarea>
                  </div>

                  {/* Form Submission Triggers */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 rounded-full bg-brand-secondary text-white font-black text-lg hover:bg-brand-dark transition-all uppercase tracking-wider shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? BOOKING_PAGE_SETTINGS.submitButtonTextSubmitting : BOOKING_PAGE_SETTINGS.submitButtonTextNormal}
                    </button>
                    <p className="text-center text-[10px] text-gray-400 mt-2 font-semibold uppercase tracking-wider">
                      {BOOKING_PAGE_SETTINGS.submitHelperText}
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
