import ContactForm from "@/components/Contact-Page/ContactForm";
import ContactDetails from "@/components/Contact-Page/ContactDetails";
import LocationMap from "@/components/Contact-Page/LocationMap";

export default function ContactPage() {
  return (
    <main className="px-2 py-8">
      <div className="flex flex-col gap-8">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Map + Contact Details */}
        <div className="grid gap-6 lg:grid-cols-3  ">
          {/* Map spans full width on small screens, 3 columns on md+ */}
          <div className="md:col-span-3">
            <LocationMap />
          </div>

          {/* Contact Details below map on small screens, side on md+ */}
          <div className="my-auto">
            <ContactDetails />
          </div>
        </div>
      </div>
    </main>
  );
}
