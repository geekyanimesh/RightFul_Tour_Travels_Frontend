// src/components/PayNowButton.tsx
"use client";

import React, { useState } from 'react';

interface PayNowButtonProps {
    packageId: string;
    packageName: string;
    amount: number;
}

export default function PayNowButton({ packageId, packageName, amount }: PayNowButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        setIsLoading(true);

        try {
            const orderRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/razorpay/create-order/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount, packageId })
            });
            const orderData = await orderRes.json();

            if (!orderRes.ok) throw new Error(orderData.error);

            const options = {
                key: orderData.key,
                amount: orderData.amount,
                currency: orderData.currency,
                name: "RIGHTFUL Tour & Travels",
                description: `Payment for ${packageName}`,
                order_id: orderData.order_id,
                handler: async function (response: any) {
                    const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/razorpay/verify/`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                            packageId: packageId
                        })
                    });

                    if (verifyRes.ok) {
                        alert("Payment successful! Your booking is confirmed.");
                    } else {
                        alert("Payment verification failed.");
                    }
                },
                theme: {
                    color: "#f27405"
                }
            };

            const rzp = new (window as any).Razorpay(options);
            rzp.on('payment.failed', function (response: any) {
                alert(`Payment Failed: ${response.error.description}`);
            });
            rzp.open();

        } catch (error) {
            console.error("Payment initiation failed:", error);
            alert("Could not initiate payment. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handlePayment}
            disabled={isLoading}
            className="w-full bg-[#f27405] hover:bg-[#d96604] text-white font-bold py-3 px-4 rounded transition-colors disabled:opacity-50"
        >
            {isLoading ? "Processing..." : `Pay ₹${amount}`}
        </button>
    );
}