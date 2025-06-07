import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactDetails() {
  return (
    <Card className="w-full max-w-md border dark:border-gray-700 border-gray-300 bg-gradient-to-br from-white to-gray-100 dark:from-slate-800 dark:to-slate-900 shadow-md rounded-2xl transition-all duration-300">
      <CardContent className="p-4 sm:p-6 space-y-6">
        {/* Phone */}
        <div className="flex items-start sm:items-center gap-4">
          <Phone className="text-blue-600 min-w-[24px]" />
          <div className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200">
            +1 (555) 123-4567
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start sm:items-center gap-4">
          <Mail className="text-green-600 min-w-[24px]" />
          <div className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200">
            contact@blogsite.com
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start sm:items-center gap-4">
          <MapPin className="text-red-600 min-w-[24px]" />
          <div className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200">
            San Francisco, CA
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
