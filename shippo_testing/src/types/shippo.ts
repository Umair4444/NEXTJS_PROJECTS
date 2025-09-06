export interface Address {
  name: string;
  street1: string;
  street2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone?: string;
  email?: string;
}

export interface Parcel {
  length: number;
  width: number;
  height: number;
  weight: number;
  distanceUnit?: "in" | "cm";
  massUnit?: "lb" | "kg";
}

export interface ShipmentRequest {
  addressFrom: Address;
  addressTo: Address;
  parcel: Parcel;
  async?: boolean;
}

export interface Rate {
  objectId: string;
  amount: string;
  currency: string;
  provider: string;
  servicelevel: {
    name: string;
    token: string;
  };
  estimatedDays: number;
}

export interface Shipment {
  objectId: string;
  status: string;
  addressFrom: any;
  addressTo: any;
  parcels: any[];
  rates: Rate[];
  trackingNumber?: string;
  trackingUrlProvider?: string;
  labelUrl?: string;
}
