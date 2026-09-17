import { Calendar } from "lucide-react";

const GCAL_BOOKING_URL =
  import.meta.env.VITE_GCAL_BOOKING_URL ||
  "https://calendar.app.google/dWNTEZ4gQJmouodX7";

export default function Book() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Book an Appointment</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Schedule a consultation with our team. Select a time that works best for you.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 shadow-lg overflow-hidden">
            <div className="h-2 bg-accent w-full" />
            <div className="p-6 border-b border-slate-100 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-accent" />
              <h2 className="text-xl font-heading font-bold text-primary">Select Your Appointment</h2>
            </div>
            <div className="px-6 pt-6 pb-2 border-b border-slate-100">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                A 30-minute conversation. No cost, no pitch.
              </h3>
              <ul className="space-y-1.5 text-slate-600 text-sm md:text-base mb-4">
                <li>We'll talk through where your finance and operations functions actually stand today.</li>
                <li>You'll leave with two or three specific things worth fixing, whether or not we work together.</li>
                <li>Serving Houston-area companies.</li>
              </ul>
            </div>
            <div className="w-full" style={{ minHeight: "700px" }}>
              <iframe
                src={GCAL_BOOKING_URL}
                width="100%"
                height="700"
                frameBorder="0"
                className="w-full"
                title="Book an Appointment with Bullseye Strategies"
                data-testid="iframe-google-calendar-booking"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-8 text-center text-slate-500 text-sm">
            <p>Having trouble booking? Call us at <a href="tel:8328687347" className="text-accent hover:underline" data-testid="link-phone">(832) 868-7347</a> or email <a href="mailto:douglas@bullseyestrategies.net" className="text-accent hover:underline" data-testid="link-email-douglas">douglas@bullseyestrategies.net</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
