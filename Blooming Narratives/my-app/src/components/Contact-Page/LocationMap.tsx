"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LocationMap() {
  return (
    <Card className="w-full dark:text-white dark:bg-slate-900 shadow-lg border-2 dark:border-gray-200 border-slate-600">
      <CardHeader>
        <CardTitle>Our Location</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] p-0">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0351595541944!2d-122.41941568468122!3d37.77492977975916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814d5fcd7c6b%3A0x4a4a5a7f22e5f8e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-b-xl border-none w-full h-full"
        ></iframe>
      </CardContent>
    </Card>
  );
}
