import { NextRequest, NextResponse } from 'next/server';
import { shippoClient } from '@/lib/shippo';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const trackingNumber = searchParams.get('trackingNumber');
    const carrier = searchParams.get('carrier');

    if (!trackingNumber || !carrier) {
      return NextResponse.json(
        { success: false, error: 'Tracking number and carrier are required' },
        { status: 400 }
      );
    }

    console.log(`Tracking package: ${trackingNumber} with carrier: ${carrier}`);

    // Use the trackingStatus endpoint
    const trackingData = {
      carrier: carrier.toLowerCase(),
      trackingNumber: trackingNumber,
    };

    const track = await shippoClient.trackingStatus.create(trackingData);

    console.log('Tracking result:', track);

    return NextResponse.json({
      success: true,
      tracking: track,
    });
  } catch (error: any) {
    console.error('Error tracking package:', error);
    console.error('Error details:', error.response?.data || error.message);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to track package',
        details: error.response?.data || null
      },
      { status: 500 }
    );
  }
}