import { NextRequest, NextResponse } from 'next/server';
import { shippoClient } from '@/lib/shippo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { rateId } = body;

    if (!rateId) {
      return NextResponse.json(
        { success: false, error: 'Rate ID is required' },
        { status: 400 }
      );
    }

    console.log('Creating transaction for rate:', rateId);

    // Create transaction (purchase shipping label)
    const transactionData = {
      rate: rateId,
      labelFileType: 'PDF' as const,
      async: false,
    };

    const transaction = await shippoClient.transactions.create(transactionData);

    console.log('Transaction created:', transaction);

    return NextResponse.json({
      success: true,
      transaction: {
        objectId: transaction.objectId,
        status: transaction.status,
        trackingNumber: transaction.trackingNumber,
        trackingUrlProvider: transaction.trackingUrlProvider,
        labelUrl: transaction.labelUrl,
        rate: transaction.rate,
      },
    });
  } catch (error: any) {
    console.error('Error creating shipment:', error);
    console.error('Error details:', error.response?.data || error.message);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to create shipment',
        details: error.response?.data || null
      },
      { status: 500 }
    );
  }
}