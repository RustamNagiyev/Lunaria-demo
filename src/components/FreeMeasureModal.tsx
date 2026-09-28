import React, { useState } from 'react';

interface FreeMeasureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeMeasureModal: React.FC<FreeMeasureModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setAddress('');
    setNotes('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#201f21] border border-[#4e4639]/60 shadow-2xl p-6 md:p-8 text-[#e5e1e4]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#d1c5b4] hover:text-[#e8c176] transition-colors p-1"
          type="button"
          aria-label="Bağla"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#e8c176]"></span>
              <span className="font-label-caps text-[11px] text-[#e8c176] tracking-[0.25em] uppercase font-semibold">
                Lazer Skan & Ölçü Protokolu
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl md:text-3xl text-[#e5e1e4] mb-2 font-normal">
              Pulsuz ölçü sifariş edin
            </h3>
            <p className="font-body-md text-sm text-[#d1c5b4] mb-6">
              Mühəndisimiz 3D lazer skaneri ilə ünvanınıza yaxınlaşaraq məkanın dəqiq ölçülərini götürsün və ilkin smetanı hazırlasın.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-label-caps text-[10px] text-[#d1c5b4] uppercase tracking-wider mb-1.5 font-medium">
                  Ad və Soyad *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Məs. Fərid Məmmədov"
                  className="w-full bg-[#1b1b1d] border border-[#4e4639]/50 px-3.5 py-2.5 text-sm text-[#e5e1e4] placeholder-[#757067] focus:outline-none focus:border-[#e8c176]"
                />
              </div>

              <div>
                <label className="block font-label-caps text-[10px] text-[#d1c5b4] uppercase tracking-wider mb-1.5 font-medium">
                  Əlaqə Nömrəsi *
                </label>
                <div className="flex bg-[#1b1b1d] border border-[#4e4639]/50">
                  <span className="px-3 py-2.5 text-xs text-[#b6a798] bg-[#2a2a2c] select-none">
                    +994
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="50 530 03 69"
                    className="w-full bg-transparent px-3 py-2.5 text-sm text-[#e5e1e4] placeholder-[#757067] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-caps text-[10px] text-[#d1c5b4] uppercase tracking-wider mb-1.5 font-medium">
                  Məkanın Ünvanı / Kompleksin Adı *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Məs. Port Baku Residence, 14-cü blok"
                  className="w-full bg-[#1b1b1d] border border-[#4e4639]/50 px-3.5 py-2.5 text-sm text-[#e5e1e4] placeholder-[#757067] focus:outline-none focus:border-[#e8c176]"
                />
              </div>

              <div>
                <label className="block font-label-caps text-[10px] text-[#d1c5b4] uppercase tracking-wider mb-1.5 font-medium">
                  Əlavə qeydlər (Sahə, otaq sayı və s.)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Təmir növü və ya xüsusi istəkləriniz..."
                  className="w-full bg-[#1b1b1d] border border-[#4e4639]/50 px-3.5 py-2 text-sm text-[#e5e1e4] placeholder-[#757067] focus:outline-none focus:border-[#e8c176] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#c9a45c] hover:bg-[#e8c176] text-[#523a00] font-label-caps text-xs tracking-[0.2em] uppercase font-bold transition-colors shadow-md"
                >
                  Ölçü üçün göndər
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[#b6a798] pt-2">
                <span>Birbaşa əlaqə:</span>
                <a
                  href="tel:+994505300369"
                  className="text-[#e8c176] hover:underline font-medium"
                >
                  +994 50 530 03 69
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#c9a45c]/20 text-[#e8c176] flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[32px]">check</span>
            </div>
            <h3 className="font-headline-lg text-2xl text-[#e5e1e4] mb-2 font-normal">
              Sifarişiniz qeydə alındı!
            </h3>
            <p className="font-body-md text-sm text-[#d1c5b4] max-w-sm mx-auto mb-6">
              Mühəndisimiz ən qısa zamanda sizinlə əlaqə saxlayaraq (050 530 03 69 nömrəsindən və ya WhatsApp-dan) dəqiq saatı razılaşdıracaqdır.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#c9a45c] text-[#523a00] font-label-caps text-xs tracking-wider uppercase font-bold"
              type="button"
            >
              Bağla
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
