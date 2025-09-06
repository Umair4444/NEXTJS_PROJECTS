import { NextRequest, NextResponse } from 'next/server';
import { shippoClient } from '@/lib/shippo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { addressFrom, addressTo, parcel } = body;

    // Create shipment with embedded objects (recommended approach)
    const shipmentData = {
      addressFrom: {
        name: addressFrom.name,
        street1: addressFrom.street1,
        street2: addressFrom.street2 || '',
        city: addressFrom.city,
        state: addressFrom.state,
        zip: addressFrom.zip,
        country: addressFrom.country,
        phone: addressFrom.phone || '',
        email: addressFrom.email || '',
      },
      addressTo: {
        name: addressTo.name,
        street1: addressTo.street1,
        street2: addressTo.street2 || '',
        city: addressTo.city,
        state: addressTo.state,
        zip: addressTo.zip,
        country: addressTo.country,
        phone: addressTo.phone || '',
        email: addressTo.email || '',
      },
      parcels: [{
        length: parcel.length.toString(),
        width: parcel.width.toString(),
        height: parcel.height.toString(),
        weight: parcel.weight.toString(),
        distanceUnit: parcel.distanceUnit || 'in',
        massUnit: parcel.massUnit || 'lb',
      }],
      async: false,
    };

    console.log('Creating shipment with data:', JSON.stringify(shipmentData, null, 2));

    const shipment = await shippoClient.shipments.create(shipmentData);

    console.log('Shipment created:', shipment);

    return NextResponse.json({
      success: true,
      shipmentId: shipment.objectId,
      rates: shipment.rates || [],
    });
  } catch (error: any) {
    console.error('Error getting rates:', error);
    console.error('Error details:', error.response?.data || error.message);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to get shipping rates',
        details: error.response?.data || null
      },
      { status: 500 }
    );
  }
}